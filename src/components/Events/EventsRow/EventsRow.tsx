import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Col, Typography, Row } from 'antd'
import CalenderIcon from '../../CalenderIcon/CalenderIcon'

const { Title, Paragraph } = Typography

export default function EventsRow(): ReactElement {
  return (
    <Event gutter={16}>
      <Col md={2} sm={24}>
        <CalenderIcon size="4.5em" date={18} color="#A9E3CB" />
      </Col>

      <Col md={12} sm={24}>
        <Title style={{ fontSize: '1.3em' }}>Deluling is the world best</Title>
        <Paragraph>
          Lorem Ipsum is s galley of type and scrambled i printing and typing i and
          industry.
        </Paragraph>
      </Col>
    </Event>
  )
}

const Event = styled(Row)`
  gap: 1.5rem;

  flex: 1 !important;
  max-width: 100% !important;

  @media (max-width: 575px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`
