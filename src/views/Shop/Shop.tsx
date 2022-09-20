import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getProductsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import {
  Flex, SectionTitle
} from '../../components/common'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import { useAppSelector, useDependant } from '../../hooks'
import Skeleton from '../../components/Skeleton'
import { TProducts } from '../../types/types'

function Shop() {
  const ongId = useAppSelector((state) => state.ong?.ongId) || ''
  const { data: products, isLoading } = useDependant<TProducts>(getProductsURL(ongId), ['products'], ongId)
  const { t } = useTranslation()

  const memoizedProducts = useMemo(
    () => products?.map((product) => <ProductCard key={product.id} {...product} />),
    [products]
  )

  return (
    <>
      <Navbar />

      <SectionTitle textAlign="center">{t('Store')}</SectionTitle>
      {isLoading && <Skeleton width={19} height={15} number={4} justify="space-around" px={3} />}
      <Flex justify="center" align="center" width="100%">
        <Grid>
          {memoizedProducts}
        </Grid>
      </Flex>

      <Footer />
    </>
  )
}

export default Shop

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  width: 100%;
  padding-inline: 3rem;
  margin-block:4rem;
`
