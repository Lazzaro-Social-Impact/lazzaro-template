import type { ReactElement, SyntheticEvent } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BookmarkIcon } from '../Icons'
import { Flex, Text } from '../common'
import { useAppSelector } from '../../hooks'
import { IProductCard } from '../../types/interfaces'
import { LazyImageComponent } from '../common/LazyImage'

export function ProductCard({
  id, title, price, default_img: img, discount,
}: IProductCard): ReactElement {
  const currency = useAppSelector((state) => state.ong?.ongConfig?.platformConfig?.currency_symbol)
  const navigate = useNavigate()
  const navigateTo = (path: `/products/${string}`) => () => navigate(path)

  const handleBrokenImage = (e:SyntheticEvent<HTMLImageElement>) => {
    const fallBackImage = 'https://i.pinimg.com/originals/9b/96/92/9b9692c9f0db9f6276e6bd29a98c25e0.png';
    (e.target as HTMLImageElement).src = fallBackImage
  }

  return (
    <SingleProductCard onClick={navigateTo(`/products/${id}`)}>
      <ProductImage>
        <LazyImageComponent
          height="230px"
          width="100%"
          src={img}
          alt={title}
          effect="blur"
          onError={handleBrokenImage}
          placeholderSrc={img}
        />

      </ProductImage>
      <Flex wrap="nowrap" py={0.4} px={0.8} align="flex-start">
        <P textAlign="left" flex={1}>
          {title}
        </P>
        <P textAlign="end">
          {price.toFixed(2)} {currency}
        </P>
      </Flex>
      {!!discount && <BookmarkIcon position="absolute" top={0} right={0} text={`-${discount}`} />}
    </SingleProductCard>
  )
}

const ProductImage = styled.div`
  width: 100%;
  height: 230px;
`
const SingleProductCard = styled.div`
  width: 300px;
  height: 340px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`

const P = styled(Text)`
  font-weight: bold;
  color: #777777;
`
