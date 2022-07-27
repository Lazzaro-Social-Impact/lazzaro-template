import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import moment from 'moment'
import { Button } from '../common'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { BuyEventform } from '../Forms/BuyEventform'

interface IProps {
  title: string
  start_time: string;
  EventTickets:[]
}

export function EventCard(props: IProps): ReactElement {
  const { title, start_time, EventTickets: tickets } = props
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <EventCardDiv>
      <EventCardTitle>{title.slice(0, 19)}</EventCardTitle>
      <EventDate>
        <ClockCircleFilled /> {moment(start_time).format('MMM Do YYYY, h:mm a')}
      </EventDate>
      <EventLocation>
        <HeatMapOutlined />
        Online
      </EventLocation>
      <EventTickets>
        Tickets available: <span>{tickets.length}</span>
      </EventTickets>
      <EventCardButtons>
        <Button px="2.2rem" py="0.8rem" color="#aaa">
          Share
        </Button>
        <Button px="2.2rem" py="0.8rem" onClick={showModal} bgColor="green">
          Buy
        </Button>
        <Modal
          title="Buy Tickets"
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          footer={null}
          width="50%"
        >
          <EventCarousel />
          <BuyEventform modal />
        </Modal>
      </EventCardButtons>
    </EventCardDiv>
  )
}

const EventCardDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2.4rem 1.8rem;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 420px;
`

const EventCardTitle = styled.h3`
    color: green;
    font-size: 1.7rem;
    font-weight: 600;
    width: 90%;
    
`

const EventLocation = styled.p`
    color: #8c8c8c;
    span {
        margin-right: 0.4rem;
    }
`

const EventDate = styled.p`
    color: #8c8c8c;
    `

const EventTickets = styled.p`
    color: #8c8c8c;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0;
    `

const EventCardButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2.8rem;
`
