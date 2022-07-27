import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { getEventsURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import { EventCard } from '../../components/SingleEvent/EventCard'
import { SingleEventDetails } from '../../components/SingleEvent/SingleEventDetails'
import { useAppSelector, useDependant } from '../../hooks'

interface IEvent {
  id: string
  title: string
  start_time: string;
  end_time: string;
  EventTickets:[];
  course:boolean;
}

export function SingleEvent(): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    data: events
  } = useDependant(getEventsURL(ongId), ['events'], ongId)

  return (
    <>
      <Navbar />
      <Container>
        <SingleEventDetails />
        <OtherEvents>
          {events?.map((event :IEvent) => (
            event.course && <EventCard {...event} key={events.id} />
          ))}
        </OtherEvents>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10.2rem;
    gap: 1.8rem;
    margin-top: 3.2rem;
`

const OtherEvents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  height: 50rem;
  gap:2rem;
`
