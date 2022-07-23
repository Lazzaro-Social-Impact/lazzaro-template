import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import { CalendarIcon } from '../../Icons'
import { useTheme } from '../../../app/context/theme-context'

export default function EventsRow(): ReactElement {
  const globalColor = useTheme()

  return (
    <Event gutter={16}>
      <Col md={2} sm={24}>
        <CalendarIcon size="4.5em" date={18} color={globalColor} />
      </Col>

      <Col md={12} sm={24}>
        <Title>Deluling is the world best</Title>
        <Paragraph>
          Lorem Ipsum is s galley of type and scrambled i printing and typing i and industry.
        </Paragraph>
      </Col>
    </Event>
  )
}

const Event = styled(Row)`
  gap: 1.5rem;
  justify-content: center;
  flex: 1 !important;
  max-width: 100% !important;

  @media (max-width: 575px) {
    display: flex;
    justify-content: center;
    text-align: center;
  }
`
const Title = styled.h2`
  font-size: 1.6em;
  font-weight: bold;

  @media (max-width: 769px) {
    & {
      font-size: 1.8rem;
    }
  }
`

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    & {
      font-size: 1.2rem;
    }
  }
`
