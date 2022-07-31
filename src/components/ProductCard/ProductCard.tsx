import { ReactElement } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { BookmarkIcon } from '../Icons'
import { Flex, Image, Text } from '../common'
import { useAppSelector } from '../../hooks'

interface IProduct {
    id: string,
    title: string,
    price: number,
    default_img: string,
    discount: number,
  }
export function ProductCard({
  id, title, price, default_img: img, discount
}: IProduct): ReactElement {
  const currency = useAppSelector((state) => state.ong?.ongConfig?.platformConfig?.currency_symbol)
  const navigate = useNavigate()
  const navigateTo = (path: `/products/${string}`) => () => navigate(path)
  return (
    <SingleProductCard onClick={navigateTo(`/products/${id}`)} key={id}>
      <ProductImage>
        <Image src={img} alt={title} />
      </ProductImage>
      <Flex wrap="nowrap" py={0.4} px={0.8}>
        <Text weight="bold" color="#777777">
          {title}
        </Text>
        <Text color="#777777" textAlign="end">
          {price.toFixed(2)} {currency}
        </Text>
      </Flex>
      {!!discount && <BookmarkIcon position="absolute" top={0} right={0} text={`${discount}%`} />}
    </SingleProductCard>
  )
}

const ProductImage = styled.div`
  width: 230px;
  height: 230px;
`

const SingleProductCard = styled.div`
  width: 230px;
  height: 340px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover{ 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
`
