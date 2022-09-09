import { type MutableRefObject, type ReactElement, useRef } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { BookmarkIcon } from '../Icons'
import { Flex, Text } from '../common'
import { useAppSelector } from '../../hooks'
import { IProductCard } from '../../types/interfaces'

export function ProductCard({
  id, title, price, default_img: img, discount,
}: IProductCard): ReactElement {
  const imageRef = useRef(null) as MutableRefObject<HTMLImageElement | null>
  const currency = useAppSelector((state) => state.ong?.ongConfig?.platformConfig?.currency_symbol)
  const navigate = useNavigate()
  const navigateTo = (path: `/products/${string}`) => () => navigate(path)

  const handleBrokenImage = () => {
    if (imageRef.current) {
      imageRef.current.src = 'https://via.placeholder.com/150'
    }
  }

  return (
    <SingleProductCard onClick={navigateTo(`/products/${id}`)}>
      <ProductImage>
        <LazyLoadImage
          height="230px"
          width="100%"
          src={img}
          alt={title}
          effect="blur"
          onError={handleBrokenImage}
          loading="lazy"
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
