import styled, { useTheme } from 'styled-components'
import { getProductsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import {
  Image, SectionTitle, Text
} from '../../components/common'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppSelector, useDependant } from '../../hooks'

function Shop() {
  const ongId = useAppSelector((state) => state.ong?.ongId)
  const { data: products, isLoading } = useDependant(getProductsURL(ongId), ['products'], ongId)
  interface IProduct {
    id: string,
    title: string,
    price: number,
    default_img: string,
    discount: number,
  }
  return (
    <>
      <Navbar />
      <ImageContainer height="420px">
        <Image src="https://via.placeholder.com/817x420" alt="" />
      </ImageContainer>

      <SectionTitle textAlign="center">Shop</SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      <Grid>
        {isLoading && <h1>Loading...</h1>}
        {products?.map((product: IProduct) => (
          <ProductCard key={product.id} {...product} />
        ))}

      </Grid>

      <Footer />
    </>
  )
}

const ImageContainer = styled.div<{ height?: THeight}>`
  position: relative;
  height: ${({ height }) => height && height};
  cursor: pointer;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-gap: 8rem 0;
  justify-content: center;
  width: 70%;
  padding-bottom: 4.2rem;
  margin: auto;
  `

export default Shop
