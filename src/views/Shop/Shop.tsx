import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Footer, Navbar } from '../../components'
import {
  Flex, Image, SectionTitle, Text
} from '../../components/common'
import { BookmarkIcon } from '../../components/Icons'

function Shop() {
  const color = useTheme()
  const navigate = useNavigate()
  const images = new Array(10).fill(1)

  const navigateTo = (path: `/products/${string}`) => () => navigate(path)

  return (
    <>
      <Navbar />
      <ImageContainer height="80vh">
        <Image src="https://via.placeholder.com/817x420" alt="" />
      </ImageContainer>

      <SectionTitle textAlign="center" color={color}>
        Shop
      </SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      <Grid>
        {images.map(() => (
          <ImageContainer onClick={navigateTo('/products/id')}>
            <Image src="https://via.placeholder.com/230/230" alt="" />
            <Flex wrap="nowrap">
              <Text weight="bold" color="#777777">
                Shop 001
              </Text>
              <Text color="#777777" textAlign="end">
                3,00$
              </Text>
            </Flex>
            <BookmarkIcon color={color} top={0} position="absolute" right={0} />
          </ImageContainer>
        ))}
      </Grid>

      <Footer />
    </>
  )
}

const ImageContainer = styled.div<{ height?: THeight }>`
  width: 100%;
  position: relative;
  height: ${({ height }) => height && height};
  cursor: pointer;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 8rem;
  margin-block:1.5rem;
  margin-inline:5rem;
  `

export default Shop
