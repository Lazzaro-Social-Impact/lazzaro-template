import { useMemo, type ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import chunk from 'lodash/chunk'
import { Box, Carousel, Image } from '../common'
import { useAppSelector, useDependant } from '../../hooks'
import { getOngLogos } from '../../api/getApiServices'
import Skeleton from '../Skeleton'
import { ErrorInput } from '../common/ErrorInput'

interface ILogo {
  id: string
  logo:string;
}

interface IProps {
  order: number
}

export default function LogosCarousel({ order }: IProps): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const {
    data: logos = [], isLoading, isError,
  } = useDependant<ILogo[]>(getOngLogos(ongId), ['logos'], ongId)

  const { primary } = useTheme()

  const memoizedLogos = useMemo(
    () => [
      ...chunk(logos, 4).map((fourLogos, i) => (
        <ImageContainer key={i && `logo-${i}`}>
          {fourLogos.map(({ id, logo }) => (
            <Box key={id}>
              <Image src={logo} alt="logo" height="4rem" key={logo} />
            </Box>
          ))}
        </ImageContainer>
      )),
    ],
    [logos]
  )
  return (
    <Box style={{ order, marginTop: order === 4 ? '4.2rem' : 'initial' }}>
      {isError && <ErrorInput msg="something went wrong" />}
      {isLoading && <Skeleton number={1} height={8} width={100} mt={0} px={0} />}
      <Carousel height="9.375rem" dots={false} bgColor={primary} mt={4.2}>
        {memoizedLogos}
      </Carousel>
    </Box>
  )
}

const ImageContainer = styled.div`
  display: flex !important;
  justify-content: space-around;
  height: 9.375rem !important;
  padding: 0 3.8rem;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    justify-content: space-around;
    gap:0;
  }
`
