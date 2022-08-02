import { MutableRefObject, ReactElement, useRef } from 'react'
import { Col } from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import NearEvent from './NearEvent/NearEvent'
import EventsRow from './EventsRow/EventsRow'
import { SectionTitle } from '../common'
import { useAppSelector, useDependant, useObserver } from '../../hooks'
import { getEventsURL } from '../../api/getApiServices'
import Skeleton from '../Skeleton'
import { IEvents } from '../../types/interfaces'

function Events(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId)
  const sectionRef = useRef() as MutableRefObject<HTMLDivElement>
  const isSectionVisible = useObserver(sectionRef)

  const {
    data: events, isLoading, isError,
  } = useDependant<IEvents[]>(getEventsURL(ongId), ['events'], isSectionVisible && ongId)
  const onlyEvents = events?.filter((event) => !event.course)
  // Get the nearest event
  const nearestEvent = onlyEvents?.sort((a, b) => {
    const aDate = moment(a.start_time)
    const bDate = moment(b.start_time)
    return aDate.diff(bDate)
  })[0]

  // remove the nearest event from events
  const otherEvents = onlyEvents?.filter((event) => event.id !== nearestEvent?.id)
  return (
    <>
      <SectionTitle>Events</SectionTitle>
      <EventsSection id="events" ref={sectionRef}>
        {isLoading && <Skeleton width={72} height={42} number={1} />}
        {!isLoading && <NearEvent {...nearestEvent} />}
        <EventsCol md={12} sm={24}>
          {otherEvents?.map((event) => <EventsRow key={event.id} {...event} />)}
          {isLoading && <Skeleton width={42} height={12} number={3} />}

          {isError && <h1>Error</h1>}
        </EventsCol>
      </EventsSection>
    </>
  )
}

const EventsSection = styled.section`
  padding: 0 4.1rem;
  gap: 4rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-top: 2.4rem;
  padding-bottom: 5.8rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

const EventsCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
  max-width: 100% !important;
  overflow-y: auto;
  height: 800px;

  @media screen and (max-width: 576px) {
    height: 250px;
  }
`

export default Events
