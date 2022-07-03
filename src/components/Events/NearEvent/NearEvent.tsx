/* eslint-disable max-len */
import React, { ReactElement, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Card, Col, Row
} from 'antd'

export default function NearEvent(): ReactElement {
  const { Meta } = Card
  useLayoutEffect(() => {
    const cardCover = document.querySelector('.ant-card')
    const img = cardCover?.appendChild(document.createElement('img')) as HTMLImageElement
    img?.setAttribute('src', './assets/img/premium.png')

    const imgStyle = {
      position: 'absolute',
      top: '0',
      right: '75px',
      width: '50px',
      height: '20px !important',
      zIndex: '1',
      objectFit: 'cover',
    }

    Object.assign(img.style, imgStyle)

    return () => {
      img?.remove()
    }
  }, [])
  return (
    <CustomRow style={{ justifyContent: 'space-between', width: '100%' }}>
      <Col md={12} sm={24}>
        <CustomCard
          hoverable
          style={{ maxWidth: 630, marginInline: 'auto', padding: '24px' }}
          cover={(
            <img
              alt="example"
              src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
                )}
        >
          <Meta
            title="Deluling is the world best"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          />

          <div style={{ marginTop: '1rem', textAlign: 'right' }}>
            <Link to="/" style={{ borderBottom: '1px solid black', color: 'black' }}>
              Read More
            </Link>
          </div>
        </CustomCard>
      </Col>

    </CustomRow>
  )
}

const CustomCard = styled(Card)`
  .ant-card-cover {
    height: 250px;
    width: 100%;
    overflow: hidden;
    position: relative;
    img:first-child {
      width: 100% !important;
      max-width: 100% !important;
    }
  }

  .ant-card-body {
    padding: 0 !important;
    margin-top: 1.8rem;
    .ant-card-meta .ant-card-meta-detail .ant-card-meta-title {
      font-size: 1.4rem !important;
      font-weight: bold !important;
    }
  }
`

const CustomRow = styled(Row)`
width: 100% !important;
.ant-col {
    max-width: 100% !important;
    flex: 1;
}
`
