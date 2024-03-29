import { useEffect, useMemo, type ReactElement } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import NearEvent from './NearEvent/NearEvent'
import OtherEvent from './OtherEvents'
import { Flex, SectionTitle } from '../common'
import { useAppDispatch, useAppSelector, useDependant } from '../../hooks'
import { getEventsURL } from '../../api/getApiServices'
import Skeleton from '../Skeleton'
import { IEvent } from '../../types/interfaces'
import { setPremiumEvent } from '../../redux/features'

function Events(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const { t } = useTranslation()
  const {
    data: events = [], isLoading, isError,
  } = useDependant<IEvent[]>(getEventsURL(ongId), ['events'], ongId)
  const dispatch = useAppDispatch()
  const premiumEvent = events.find(({ isPremium }) => isPremium)

  useEffect(() => {
    dispatch(setPremiumEvent(premiumEvent))
  }, [premiumEvent])

  // Get the nearest event
  const nearestEvent = useMemo(
    () => events?.sort((a, b): number => {
      if (a.course || b.course) return 0

      const aDate = moment(a.start_time)
      const bDate = moment(b.start_time)
      return aDate.diff(bDate)
    })[0],
    [events]
  )

  const memoizedEvents = useMemo(
    () => events?.map(
      (event) => event.id !== nearestEvent.id && !event.course && <OtherEvent key={event.id} {...event} />
    ),
    [events]
  )

  return (
    <>
      <SectionTitle marginBottom={0} fontSize={2.4}>{t('Events')}</SectionTitle>
      <EventsSection id="events">
        {isLoading && <Skeleton width={40} height={42} number={1} />}
        {!isLoading && <NearEvent {...nearestEvent} />}

        <OtherEvents gap={1}>
          {isLoading && <Skeleton width={25} height={12} number={3} />}

          {memoizedEvents}

          {isError && <h1>Error</h1>}
        </OtherEvents>
      </EventsSection>
    </>
  )
}

const EventsSection = styled(Flex)`
  padding-inline: 4.1rem;
  gap: 4rem;
  margin-top: 1.8rem;
  align-items: flex-start;
  justify-content: flex-end;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const OtherEvents = styled(Flex)`
  overflow-y: auto;
  height: 33rem;
  align-items: flex-start;
  flex: 0.5;
  @media screen and (max-width: 576px) {
    height: 250px;
  }
`

export default Events
