import React, { ReactElement, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import moment from 'moment'
import { Button } from '../common'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { BuyEventform } from '../Forms/BuyEventform'
import { useDependant } from '../../hooks'
import { getEventImages } from '../../api/getApiServices'

export function EventCard({
  id, title, start_time, end_time, location, stock
}: any): ReactElement {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const startDate = moment(start_time).format('Do MMMM YYYY')
  const endDate = moment(end_time).format('Do MMMM YYYY')
  const { data: images, isLoading } = useDependant(
    getEventImages(id), [`event_images_form_${id}`], id
  )
  const { primary, secondary } = useTheme() as { [key: string]: string }

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
      <EventCardTitle title={title}>
        {title}
      </EventCardTitle>
      <EventDate>
        <ClockCircleFilled /> {startDate} - {endDate}
      </EventDate>
      <EventLocation>
        <HeatMapOutlined />
        {location}
      </EventLocation>
      <EventTickets>
        Tickets available: <span>{stock}</span>
      </EventTickets>
      <EventCardButtons>
        <Button px="2.2rem" py="0.8rem" color="#aaa">
          Share
        </Button>
        <Button
          px="2.2rem"
          py="0.8rem"
          onClick={showModal}
          bgColor={primary}
          hoverBgColor={secondary}
        >
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
          <EventCarousel imgs={images} isLoading={isLoading} />
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
    height: 470px;
    width: 525px;
`

const EventCardTitle = styled.h3`
    color: ${({ theme }) => theme.primary};
    font-size: 1.8rem;
    font-weight: 600;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
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
