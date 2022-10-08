import { ReactElement } from 'react'
import styled from 'styled-components'
import HTMLReactParser from 'html-react-parser'
import { useTranslation } from 'react-i18next'
import capitalize from 'lodash/capitalize'
import { SectionTitle } from '../common'
import {
  IEvent, IImage
} from '../../types/interfaces'
import { useDependant } from '../../hooks'
import { CalendarIcon } from '../Icons'
import BuyModal from '../BuyModal'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import { getEventImages } from '../../api/getApiServices'
import { BuyEventform } from '../Forms/BuyEventform'
import useResize from '../../hooks/useResize'

interface IProps {
  event: IEvent | Record<string, never> | undefined
}

export default function PremiumEvent({ event }: IProps): ReactElement {
  const {
    title, description = '', imageURL, id, course, stock, start_time
  } = event || {}
  const {
    data: images = [], isLoading
  } = useDependant<IImage[]>(getEventImages(id), [`event_images_form_${id}`], id)

  const month = new Date(start_time).toLocaleString('default', { month: 'short' }).toUpperCase()
  const day = new Date(start_time).getDate()
  const Form = course ? (<BuyEventform disabled={!stock} modal courseId={id} />) : (
    <BuyEventform
      disabled={!stock}
      modal
      eventId={id}
    />
  )
  const { t } = useTranslation()

  const calendarSize = useResize({ objectToResizeInitialWidth: 180, mediumSize: 150, smallSize: 120 })

  return (
    <PremiumEventSection image={imageURL}>
      <EventDetails>
        <PremiumHeader>
          <EventImage src="./assets/img/crown.png" alt="highlighted-event" />
          {course ? <p>{capitalize(t('course'))}</p> : <p>{capitalize(t('event'))}</p>}
        </PremiumHeader>
        <SectionTitle color="white" fontSize={2.8} padding={0} marginTop={0.8} marginBottom={0}>
          {title}
        </SectionTitle>
        <EventDescription>
          {HTMLReactParser(description?.slice(0, 120))}
        </EventDescription>
      </EventDetails>
      <CalendarDiv>
        <CalendarIcon
          date={day}
          color="white"
          size={calendarSize}
          dateBottom={2.4}
          dateColor="white"
          dateSize={34.2}
          lineHeight={1}
          month={month}
        />
        <BuyModal
          title={`${t('Buy')} ${course ? t('course') : t('ticket')}`}
          btnText={course ? t('premiumSection.attend') : t('premiumSection.buy_tickets')}
        >
          <EventCarousel imgs={images} isLoading={isLoading} />
          {Form}
        </BuyModal>
      </CalendarDiv>
    </PremiumEventSection>
  )
}

const PremiumEventSection = styled.section<{image: string}>`
  display: flex;
  justify-content: space-between;
  padding: 4rem 4.1rem;
  padding-right: 9.2rem;
  gap: 4rem;
  position: relative;
  align-items: flex-start;
  margin-bottom: 6.2rem;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
   url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  button {
    padding: 1.1rem 2rem;
    font-size: 1.4rem;
  }
  @media (max-width: 590px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-inline: 0;


    & > :first-child {
      text-align: center;

      img {
        align-self: center;
      }
    }

    & > :last-child {
      text-align: center;
      padding: 0;
    }
  }
`

const PremiumHeader = styled.div`
display: flex;
align-items: flex-start;
gap: 1.4rem;
p {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.2;
  color: white;
}
`
const EventImage = styled.img`
  width: 45px;
`

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  height: 100%;
`

const EventDescription = styled.p`
  color: #fff;
  line-height: 1.8;
  font-size: 1.375rem;
  font-weight: 200;
  margin-top: 1.4rem;
  padding-right: 4rem;

  @media (max-width: 768px) {
    padding-inline: 4.1rem;
  }

`

const CalendarDiv = styled.div`
display: flex;
flex-direction: column;
gap: 5.2rem;
justify-content: center;
align-items: center;
margin-bottom: 0 !important;
`
