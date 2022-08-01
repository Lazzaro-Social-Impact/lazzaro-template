import { Tabs, Breadcrumb } from 'antd'
import { ReactElement } from 'react'
import HtmlParser from 'react-html-parser'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProductDetails, getProductImages } from '../../api/getApiServices'
import { Footer, Navbar, BuyModal } from '../../components'
import {
  Button, Card, Center, Flex
} from '../../components/common'
import { BuyProductForm } from '../../components/Forms/BuyProductForm'
import { ContactEventForm } from '../../components/Forms/ContactEventForm'
import { useDependant } from '../../hooks'

interface IProduct {
  title: string;
  id: string;
  amount: number;
  price: number;
  description: string;
}

type TImages = {
  img_url: string;
  id: string;
}[];

function SingleProduct(): ReactElement {
  const id = useParams().id as string
  const {
    data: product
  } = useDependant<IProduct>(getProductDetails(id), [`products${id}`], id)

  const { data: images } = useDependant<TImages>(getProductImages(id), [`images${id}`], id)

  const {
    title, price, description, amount
  } = product
  return (
    <>
      <Navbar />
      <Center mt={4.2}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Shop</Breadcrumb.Item>
          <Breadcrumb.Item>{product?.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Center>
      <Container>
        <Flex gap={2.4}>
          {images?.map((image) => (
            <ImageContainer key={image.id}>
              <img src={image.img_url} alt="" />
            </ImageContainer>
          ))}
        </Flex>
        <ProductSidebar>
          <Card mode="column" smMode="column" maxWidth="400px" py={2.4} px={1.8}>
            <ProductName>{product?.title}</ProductName>
            <ProductsAvailable>Stock: {amount}</ProductsAvailable>
            <Flex justify="space-around" mt={1}>
              <Button px="2.8rem" py="0.8rem" color="#777777" bgColor="F#1F1F1">
                Share
              </Button>
              <BuyModal btnText="Buy">
                <BuyProductForm modal id={id} price={price} title={title} />
              </BuyModal>
            </Flex>
          </Card>

          <CustomTabs>
            <Tabs.TabPane tab="Details" key="1">
              <ProductDetails>{HtmlParser(description)}</ProductDetails>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Buy" key="2">
              <BuyProductForm id={id} price={price} title={title} />
            </Tabs.TabPane>

            <Tabs.TabPane tab="Contact" key="3">
              <ContactEventForm id={id} />
            </Tabs.TabPane>
          </CustomTabs>
        </ProductSidebar>
      </Container>
      <Footer />
    </>
  )
}

export default SingleProduct

const Container = styled.div`
  margin-top: 3.2rem;
  padding: 1.2rem 8.8rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.2rem 1.2rem;
    gap: 2.4rem;
  }
`

const ImageContainer = styled.div`
  width: 100%;
  max-height: 590px;
  img {
    width: 100%;
    height: 100%;
  }
`

const ProductSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  width: 100%;
`

const ProductName = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: green;
  margin-bottom: 0.2rem;
`

const ProductsAvailable = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
`

const ProductDetails = styled.p`
  letter-spacing: 1.2px;
  line-height: 1.8;
  font-size: 0.9rem;
`

const CustomTabs = styled(Tabs)`
  max-width: 425px;
  .ant-tabs-nav-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  .ant-tabs-tab-btn {
    font-size: 1.1rem;
    font-weight: bold;
  }
`
