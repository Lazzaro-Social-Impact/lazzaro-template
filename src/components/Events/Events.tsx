/* eslint-disable max-len */
import React, { ReactElement, useLayoutEffect } from 'react'
import {
  Card, Col, Row, Typography
} from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Paragraph, Title, Text } = Typography

function Events(): ReactElement {
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
      objectFit: 'cover'
    }

    Object.assign(img.style, imgStyle)

    return () => {
      img?.remove()
    }
  }, [])
  return (
    <EventsSection>
      <SectionTitle>Events</SectionTitle>
      <Row style={{ margin: '4.2rem 0', justifyContent: 'space-between' }}>
        <Col md={12} sm={24}>
          <CustomCard
            hoverable
            style={{ maxWidth: 630, marginInline: 'auto', padding: '24px' }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />}
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

        <EventsCol md={12} sm={24}>
          {[1, 2, 3].map((key) => (
            <EventsRow gutter={16} key={key}>
              <Col md={2} sm={24}>
                <CalendarOutlined style={{ fontSize: '4.5em', color: '#A9E3CB' }} />
                <Date>18</Date>
              </Col>

              <Col md={12} sm={24}>
                <Title style={{ fontSize: '1.3em' }}>Deluling is the world best</Title>
                <Paragraph>
                  Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.
                </Paragraph>
              </Col>
            </EventsRow>
          ))}
        </EventsCol>
      </Row>
    </EventsSection>
  )
}

const EventsSection = styled.section`
padding: 0 4.1rem;
`
const SectionTitle = styled(Title)`
  margin-top: 0;
  margin-bottom: 2.4rem;
  font-size: 1.8rem;
  `
const Date = styled(Text)`
  font-size: 1.3em;
  font-weight: bold;
  position: absolute;
  top: 23%;
  left: 57%;

  @media (max-width: 575px) {
    left: 35%;
    top: 40%;
  }
`

const EventsRow = styled(Row)`
  gap: 1.5rem;
  @media (max-width: 575px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`

const EventsCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: flex-end;
`

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

export default Events
