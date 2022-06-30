/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import {
  Card, Col, Row, Typography
} from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const { Paragraph, Title, Text } = Typography

function Events(): ReactElement {
  const { Meta } = Card
  return (
    <Row style={{ margin: '5rem', justifyContent: 'center' }}>
      <Col md={12} sm={24}>
        <Card
          hoverable
          style={{ maxWidth: 400, marginInline: 'auto' }}
          cover={<img alt="example" src="https://www.westreadingborough.com/sites/g/files/vyhlif5201/f/styles/news_image/public/pages/special_events_1.jpg?itok=99Rh5N0T" />}
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
        </Card>
      </Col>

      <EventsCol md={12} sm={24}>
        {[1, 2, 3].map((key) => (
          <EventsRow gutter={16} key={key}>
            <Col md={2} sm={24}>
              <CalendarOutlined style={{ fontSize: '4.5em', color: '#A9E3CB' }} />
              <Date>18</Date>
            </Col>

            <Col md={10} sm={24}>
              <Title style={{ fontSize: '1.3em' }}>Deluling is the world best</Title>
              <Paragraph>
                Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.
              </Paragraph>
            </Col>
          </EventsRow>
        ))}
      </EventsCol>
    </Row>
  )
}

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

export default Events
