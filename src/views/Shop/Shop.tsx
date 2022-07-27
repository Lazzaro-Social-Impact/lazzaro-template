import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getProductsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import {
  Flex, Image, SectionTitle, Text
} from '../../components/common'
import { BookmarkIcon } from '../../components/Icons'
import { useAppSelector, useDependant } from '../../hooks'

function Shop() {
  const navigate = useNavigate()
  const ongId = useAppSelector((state) => state.ong?.ongId)
  const currency = useAppSelector((state) => state.ong?.ongConfig?.platformConfig?.currency_symbol)
  const { data: products, isLoading } = useDependant(getProductsURL(ongId), ['products'], ongId)
  const navigateTo = (path: `/products/${string}`) => () => navigate(path)
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

      <SectionTitle textAlign="center">
        Shop
      </SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      <Grid>
        {isLoading && <h1>Loading...</h1>}
        {products?.map(({
          id, title, price, default_img: img, discount
        }: IProduct) => (
          <ProductCard onClick={navigateTo(`/products/${id}`)} key={id}>
            <ProductImage>
              <Image src={img} alt={title} />
            </ProductImage>
            <Flex wrap="nowrap" style={{ padding: '0.4rem 0.8rem' }}>
              <Text weight="bold" color="#777777">
                {title}
              </Text>
              <Text color="#777777" textAlign="end">
                {price.toFixed(2)} {currency}
              </Text>
            </Flex>
            {!!discount && (
            <BookmarkIcon
              color="green"
              top={0}
              position="absolute"
              right={0}
            />
            )}
          </ProductCard>
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
const ProductImage = styled.div`
  width: 230px;
  height: 230px;
`
const ProductCard = styled.div`
  width: 230px;
  height: 340px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{ 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
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
