import { Tabs } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../../components'
import { Button } from '../../components/common'

export function SingleProduct(): ReactElement {
  return (
    <>
      <Navbar />
      <Container>
        <ProductImages>
          <ImageContainer>
            <img src="https://via.placeholder.com/627x590" alt="" />
          </ImageContainer>
          <ImageContainer>
            <img src="https://via.placeholder.com/627x590" alt="" />
          </ImageContainer>
        </ProductImages>
        <ProductSidebar>
          <ProductCard>
            <ProductName>Product 001</ProductName>
            <ProductsAvailable>Stock: 58</ProductsAvailable>
            <ProductButtons>
              <Button
                px="2.8rem"
                py="0.8rem"
                color="#aaa"
              >Share
              </Button>
              <Button
                px="2.8rem"
                py="0.8rem"
                bgColor="green"
              >Buy
              </Button>
            </ProductButtons>
          </ProductCard>
          <CustomTabs>
            <Tabs.TabPane tab="Details" key="1">
              <ProductDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec eget ex euismod, consectetur nisi eu, consectetur
                nisi eu, consectetur nisi eu, consectetur nisi eu,
                consectetur nisi eu, consectetur nisi eu, consectetur
                nisi eu, consectetur nisi eu, consectetur nisi eu,
                consectetur nisi eu, consectetur nisi eu, consectetur
                nisi eu, consectetur nisi eu, consectetur nisi eu,
              </ProductDetails>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Buy" key="2">
              <p>
                Buy
              </p>
            </Tabs.TabPane>

            <Tabs.TabPane tab="Contact" key="3">
              <p>
                Contact
              </p>
            </Tabs.TabPane>
          </CustomTabs>
        </ProductSidebar>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
    margin-top: 3.2rem;
    padding: 1.2rem 8.8rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 4.2rem;
`

const ProductImages = styled.div`
display: flex;
flex-direction: column;
gap: 2.4rem;
width: 100%;
`

const ImageContainer = styled.div`
width: 100%;
height: 590px;
    img {
        width: 100%;
        height: 100%;
    }
`

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 315px;
    border: 2px solid #F1F1F1;
    width: 425px;
    padding: 2.4rem 1.8rem;
`

const ProductSidebar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4.2rem;
    width: 100%;
`

const ProductName = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    color: green;
    margin-bottom: 0.2rem;
`

const ProductsAvailable = styled.p`
    color: #8c8c8c;
    font-size: 1rem;
`

const ProductButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3.8rem;
`

const ProductDetails = styled.p`
letter-spacing: 1.2px;
line-height: 1.8;
font-size: 0.9rem;
`

const CustomTabs = styled(Tabs)`
 width: 425px;
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
