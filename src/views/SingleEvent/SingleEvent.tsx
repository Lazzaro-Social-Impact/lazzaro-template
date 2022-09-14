import { useEffect, type ReactElement } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getEventURL } from '../../api/getApiServices'
import { Footer, Navbar } from '../../components'
import { EventCard } from '../../components/SingleEvent/EventCard'
import { SingleEventDetails } from '../../components/SingleEvent/SingleEventDetails'
import Skeleton from '../../components/Skeleton'
import { useDependant } from '../../hooks'
import { IEvent } from '../../types/interfaces'

function SingleEvent(): ReactElement {
  const { pathname } = useLocation()
  const isEvent = pathname.startsWith('/events')
  const isCourse = pathname.startsWith('/courses')
  const { id } = useParams() as { id: string }
  const { data: event, isLoading } = useDependant<IEvent>(getEventURL(id), [`event-details-${id}`], id) || {}

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <SingleEventDetails event={event} id={id} isLoadingEvent={isLoading} isEvent={isEvent} />
        <OtherEvents>
          {isLoading && <Skeleton number={1} height={22} width={26} />}

          {isEvent
            && event?.course === false && <EventCard {...event} key={event?.id} isEvent={isEvent} />}

          {isCourse
            && event?.course && <EventCard {...event} key={event?.id} isEvent={isEvent} />}
        </OtherEvents>
      </Container>
      <Footer />
    </>
  )
}

export default SingleEvent

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 4.2rem;
  gap: 2.4rem;
  margin-top: 3.2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const OtherEvents = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`
