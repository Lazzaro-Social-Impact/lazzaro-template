import { Breadcrumb } from 'antd'
import { useMemo, type ReactElement } from 'react'
import HtmlParser from 'html-react-parser'
import { type Params, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { getProductDetails, getProductImages } from '../../api/getApiServices'
import { Footer, Navbar, BuyModal } from '../../components'
import {
  Card, Center, Flex, Tabs, Carousel
} from '../../components/common'
import { BuyProductForm } from '../../components/Forms/BuyProductForm'
import { ContactEventForm } from '../../components/Forms/ContactEventForm'
import { useDependant } from '../../hooks'
import { IProduct } from '../../types/interfaces'
import { TImages } from '../../types/types'
import { ShareModal } from '../../components/ShareModal/ShareModal'
import { LazyImageComponent } from '../../components/common/LazyImage'

function SingleProduct(): ReactElement {
  const { id = '' } = useParams<Params<'id'>>()
  const {
    data: product
  } = useDependant<IProduct>(getProductDetails(id), [`products${id}`], id)
  const { t } = useTranslation()
  const { data: images } = useDependant<TImages>(getProductImages(id), [`images${id}`], id)
  const navigate = useNavigate()
  const {
    title = '', price = 0, description = '', amount
  } = product || {}

  const memoizedImages = useMemo(
    () => images?.map((image) => (
      <LazyImageComponent
        key={image.id}
        src={image.img_url}
        alt="product"
        width="100%"
        height="40rem"
        placeholderSrc={image.img_url}
      />
    )),
    [images]
  )
  return (
    <>
      <Navbar />
      <Center mt={4.2}>
        <Breadcrumb separator=">">
          <Breadcrumb.Item className="pointer" onClick={() => navigate('/shop')}>{t('Store')}</Breadcrumb.Item>
          <Breadcrumb.Item>{product?.title}</Breadcrumb.Item>
        </Breadcrumb>
      </Center>

      <Container>

        <Carousel width="55vw" smWidth="77.8vw" height="40rem" arrows>
          {memoizedImages}
        </Carousel>

        <ProductSidebar>
          <CustomCard mode="column" smMode="column" maxWidth="100%" py={2.4} px={1.8}>
            <ProductName>{product?.title}</ProductName>
            <ProductsAvailable>{t('Products_single.stock')}: {amount}</ProductsAvailable>
            <Flex justify="space-around" mt={1}>
              <ShareModal section="products" sectionId={id} />
              <BuyModal disabled={!amount} btnText={t('Buy')}>
                <BuyProductForm modal id={id} price={price} title={title} disabled={!amount} />
              </BuyModal>
            </Flex>
          </CustomCard>

          <CustomTabs>
            <Tabs.TabPane tab={t('details')} key="1">
              <ProductDetails>{HtmlParser(description)}</ProductDetails>
            </Tabs.TabPane>

            <Tabs.TabPane tab={t('Buy')} key="2">
              <BuyProductForm disabled={!amount} id={id} price={price} title={title} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={t('Contact')} key="3">
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
  padding: 1.2rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4.2rem;
  flex:1;

  @media (max-width: 1200px) {
    flex-direction: column;
    padding: 1.2rem 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
  }
`

const ProductSidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.2rem;
  width: 80%;
`

const ProductName = styled.h1`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.2rem;
`

const ProductsAvailable = styled.p`
  color: #8c8c8c;
  font-size: 1rem;
`

const ProductDetails = styled.div`
  letter-spacing: 1.2px;
  line-height: 1.8;
  font-size: 0.9rem;
`

const CustomTabs = styled(Tabs)`
  width: 100%;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 80%
    
  }
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

const CustomCard = styled(Card)`
@media screen and (max-width: 768px) {
  order: 1;
}
`
