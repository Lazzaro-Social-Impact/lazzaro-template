import React, { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import { Col, Row } from 'antd'
import moment from 'moment'
import HtmlParser from 'react-html-parser'
import { useNavigate } from 'react-router-dom'
import { CalendarIcon } from '../../Icons'

interface IEvent {
  id: string,
  title: string,
  description: string,
  start_time: string,
}

export default function EventsRow({
  id, title, description, start_time: startTime
}
  : IEvent): ReactElement {
  const { primary } = useTheme() as {primary: string}
  const day = moment(startTime).format('DD')
  const navigate = useNavigate()
  return (
    <Event gutter={16} onClick={() => navigate(`/events/${id}`)}>
      <Col md={2} sm={24}>
        <CalendarIcon size="4.5em" date={day} color={primary} />
      </Col>

      <Col md={12} sm={24}>
        <Title>{title}</Title>
        <Paragraph>
          {HtmlParser(description.slice(0, 120))}
        </Paragraph>

      </Col>
    </Event>
  )
}

const Event = styled(Row)`
  gap: 1.5rem;
  justify-content: center;
  max-width: 100% !important;
  padding: 0.8rem 2.4rem;
  transition: all 0.2s ease-in-out;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 25px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
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
  font-size: 1.1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    & {
      font-size: 1.2rem;
    }
  }
`
