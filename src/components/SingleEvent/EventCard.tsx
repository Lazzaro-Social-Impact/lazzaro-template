import { type ReactElement } from 'react'
import styled from 'styled-components'
import { Clock } from 'react-bootstrap-icons'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Card, Flex, Text } from '../common'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { BuyEventform } from '../Forms/BuyEventform'
import { useDependant } from '../../hooks'
import { getEventImages } from '../../api/getApiServices'
import { IImage } from '../../types/interfaces'
import BuyModal from '../BuyModal'
import { ShareModal } from '../ShareModal/ShareModal'

interface IProps {
  id: string;
  title: string;
  start_time: string;
  end_time: string;
  location: string;
  stock: number;
  course:boolean;
}

export function EventCard(props: IProps): ReactElement {
  const {
    id, title, start_time, end_time, location, stock, course
  } = props

  const { pathname } = useLocation()
  const startDate = moment(start_time).format('YYYY/MM/DD')
  const endDate = moment(end_time).format('YYYY/MM/DD')
  const {
    data: images = [], isLoading
  } = useDependant<IImage[]>(getEventImages(id), [`event_images_form_${id}`], id)
  const { t } = useTranslation()
  const Form = course ? (<BuyEventform disabled={!stock} modal courseId={id} />) : (
    <BuyEventform
      disabled={!stock}
      modal
      eventId={id}
    />
  )

  return (
    <Card mode="column" px={1.8} py={2.4} smMode="column">
      <EventCardTitle title={title}>{title}</EventCardTitle>

      <Text fontSize={1} color="#8c8c8c">
        <Clock /> {startDate} - {endDate}
      </Text>

      <Text fontSize={1} lineHeight={1.7}>
        {location}
      </Text>

      <Text weight="bold" color="#8c8c8c" fontSize={1}>
        {t('Tickets available')}: <span>{stock}</span>
      </Text>

      <Flex gap={2} mt={1}>
        <ShareModal section={pathname.includes('events') ? 'events' : 'courses'} sectionId={id} />

        <BuyModal disabled={!stock} title={`${t('Buy')} ${course ? t('course') : t('ticket')}`} btnText={t('Buy')}>
          <EventCarousel imgs={images} isLoading={isLoading} />
          {Form}
        </BuyModal>
      </Flex>
    </Card>
  )
}

const EventCardTitle = styled.h3`
  color: ${({ theme }) => theme.primary};
  font-size: 1.4rem;
  font-weight: 600;
  width: 100%;
  margin-bottom: 0rem;
`
