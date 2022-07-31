import React, { ReactElement } from 'react'
import { Col } from 'antd'
import styled from 'styled-components'
import moment from 'moment'
import NearEvent from './NearEvent/NearEvent'
import EventsRow from './EventsRow/EventsRow'
import { SectionTitle } from '../common'
import { useAppSelector, useDependant } from '../../hooks'
import { getEventsURL } from '../../api/getApiServices'
import Skeleton from '../Skeleton'

interface IEvent {
  course: boolean,
  id: string,
  title: string,
  description: string,
  imageURL: string,
  start_time: string,
}

function Events(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId)

  const { data: events, isLoading, isError } = useDependant(getEventsURL(ongId), ['events'], ongId)
  const onlyEvents = events?.filter((event: IEvent) => !event.course)
  // Get the nearest event
  const nearestEvent = onlyEvents?.sort((a: IEvent, b: IEvent) => {
    const aDate = moment(a.start_time)
    const bDate = moment(b.start_time)
    return aDate.diff(bDate)
  })[0]

  // remove the nearest event from events
  const otherEvents = onlyEvents?.filter((event: IEvent) => event.id !== nearestEvent?.id)
  return (
    <>
      <SectionTitle>Events
      </SectionTitle>
      <EventsSection id="events">
        {isLoading && <Skeleton width={72} height={42} number={1} />}
        {!isLoading && <NearEvent {...nearestEvent} /> }
        <EventsCol md={12} sm={24}>
          {otherEvents?.map((event: IEvent) => <EventsRow key={event.id} {...event} />)}
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
