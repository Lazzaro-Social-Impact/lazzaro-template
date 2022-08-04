import { MutableRefObject, ReactElement, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { chunk } from 'lodash'
import { Box, Carousel, Image } from '../common'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { getOngLogos } from '../../api/getApiServices'
import Skeleton from '../Skeleton'
import { ErrorInput } from '../common/ErrorInput'

interface ILogo {
  id: string
  logo:string;
}

export default function LogosCarousel(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId)
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)
  const {
    data: logos = [], isLoading, isError,
  } = useDependant<ILogo[]>(getOngLogos(ongId), ['logos'], isSectionVisible && ongId)

  const { primary } = useTheme()
  return (
    <Box ref={sectionRef}>
      {isError && <ErrorInput msg="something went wrong" />}
      {isLoading && <Skeleton number={1} height={8} width={100} mt={0} px={0} />}
      <Carousel dots={false} bgColor={primary} mt={4.2}>
        {[
          ...chunk(logos, 4).map((fourLogos, i) => (
            <ImageContainer key={fourLogos[i]?.id}>
              {fourLogos.map(({ id, logo }) => (
                <Box>
                  <Image key={id} src={logo} alt="logo" maxHeight="8rem" />
                </Box>
              ))}
            </ImageContainer>
          )),
        ]}
      </Carousel>
    </Box>
  )
}

const ImageContainer = styled.div`
  display: flex !important;
  justify-content: center;
  gap:20rem;
  height: 150px !important;
  padding: 0 3.8rem;
  align-items: center;
  align-content: center;

  @media (max-width: 768px) {
    justify-content: space-around;
    gap:0;
  }
`
