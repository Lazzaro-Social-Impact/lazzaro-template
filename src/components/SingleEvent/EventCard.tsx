import { ReactElement } from 'react'
import styled from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import {
  Card, Flex, Text
} from '../common'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { BuyEventform } from '../Forms/BuyEventform'
import { useDependant } from '../../hooks'
import { getEventImages } from '../../api/getApiServices'
import { IImages } from '../../types/interfaces'
import BuyModal from '../BuyModal'
import { ShareModal } from '../ShareModal/ShareModal'

interface IProps {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  location: string;
  stock: number;
}

export function EventCard(props: IProps): ReactElement {
  const {
    id, title, start_time, end_time, location, stock
  } = props

  const { pathname } = useLocation()
  const startDate = moment(start_time).format('Do MMM YYYY')
  const endDate = moment(end_time).format('Do MMM YYYY')
  const {
    data: images = [], isLoading
  } = useDependant<IImages[]>(getEventImages(id), [`event_images_form_${id}`], id)

  return (
    <Card mode="column" px={1.8} py={2.4} smMode="column" my={2}>
      <EventCardTitle title={title}>{title}</EventCardTitle>

      <Text color="#8c8c8c">
        <ClockCircleFilled /> {startDate} - {endDate}
      </Text>

      <Text lineHeight={1.7}>
        <HeatMapOutlined />
        {location}
      </Text>

      <Text weight="bold" color="#8c8c8c" fontSize={1.1}>
        Tickets available: <span>{stock}</span>
      </Text>

      <Flex gap={2} mt={1}>
        <ShareModal section={pathname.includes('events') ? 'events' : 'courses'} sectionId={id} />

        <BuyModal title="Buy Tickets" btnText="Buy">
          <EventCarousel imgs={images} isLoading={isLoading} />
          <BuyEventform modal eventId={id} />
        </BuyModal>

      </Flex>
    </Card>
  )
}

const EventCardTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.8rem;
  font-weight: 600;
  width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0rem;
`
