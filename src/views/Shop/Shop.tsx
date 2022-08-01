import styled from 'styled-components'
import { getProductsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import {
  Flex, Image, SectionTitle, Text
} from '../../components/common'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppSelector, useDependant } from '../../hooks'
import Skeleton from '../../components/Skeleton'

  interface IProduct {
    id: string;
    title: string;
    price: number;
    default_img: string;
    discount: number;
  }

function Shop() {
  const ongId = useAppSelector((state) => state.ong?.ongId)
  const { data: products, isLoading } = useDependant(getProductsURL(ongId), ['products'], ongId)

  return (
    <>
      <Navbar />
      <ImageContainer>
        <Image src="https://via.placeholder.com/817x420" alt="" />
      </ImageContainer>

      <SectionTitle textAlign="center">Shop</SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      <Flex gap={3} px={9} py={4}>
        {isLoading && <Skeleton width={14} height={15} number={8} />}

        {products?.map((product: IProduct) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Flex>

      <Footer />
    </>
  )
}

const ImageContainer = styled.div`
  position: relative;
  height: 26.5rem;
  cursor: pointer;
`

export default Shop
