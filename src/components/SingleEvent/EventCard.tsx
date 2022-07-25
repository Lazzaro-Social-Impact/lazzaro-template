import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import { Button } from '../common'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { BuyEventform } from '../Forms/BuyEventform'

export function EventCard(): ReactElement {
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
      <EventCardTitle>
        Deluling is the world best
      </EventCardTitle>
      <EventDate>
        <ClockCircleFilled /> 8th August 2020 - 8:00pm
      </EventDate>
      <EventLocation>
        <HeatMapOutlined />
        Online
      </EventLocation>
      <EventTickets>
        Tickets available: <span>15</span>
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
    font-size: 1.8rem;
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
