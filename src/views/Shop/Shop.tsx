import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
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
  const { t } = useTranslation()
  const memoizedProducts = useMemo(
    () => products?.map((product) => <ProductCard key={product.id} {...product} />),
    [products]
  )

  return (
    <>
      <Navbar />

      <SectionTitle textAlign="center">{t('Store')}</SectionTitle>
      <Text fontSize={1.5} textAlign="center">
        lorem ipusm its simply an text with placeholder ant
      </Text>

      {isLoading && <Skeleton width={19} height={15} number={4} justify="space-around" px={3} />}
      <Flex justify="center" align="center" width="100%">
        <CustomFlex textAlign="left" gap={3} px="6.2" justify="flex-start" my={4}>
          {memoizedProducts}
        </CustomFlex>
      </Flex>

      <Footer />
    </>
  )
}

export default Shop

const CustomFlex = styled(Flex)`
@media screen and (max-width: 1091.5px) {
  justify-content: center !important;
}
`
