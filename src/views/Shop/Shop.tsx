import { useMemo } from 'react'
import { getProductsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import {
  Flex, SectionTitle, Text
} from '../../components/common'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppSelector, useDependant } from '../../hooks'
import Skeleton from '../../components/Skeleton'
import { TProducts } from '../../types/types'

function Shop() {
  const ongId = useAppSelector((state) => state.ong?.ongId) || ''
  const {
    data: products, isLoading
  } = useDependant<TProducts>(getProductsURL(ongId), ['products'], ongId)

  const memoizedProducts = useMemo(
    () => products?.map((product) => <ProductCard key={product.id} {...product} />),
    [products]
  )
  return (
    <>
      <Navbar />

      <SectionTitle textAlign="center">Shop</SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      <Flex gap={3} px={9} py={4}>
        {isLoading && <Skeleton width={14} height={15} number={8} />}

        {memoizedProducts}
      </Flex>

      <Footer />
    </>
  )
}

export default Shop
