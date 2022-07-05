/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import { Col } from 'antd'
import styled from 'styled-components'
import NearEvent from './NearEvent/NearEvent'
import EventsRow from './EventsRow/EventsRow'
import SectionTitle from '../common/SectionTitle'

function Events(): ReactElement {
  return (
    <>
      <SectionTitle>Events
      </SectionTitle>
      <EventsSection id="events">
        <NearEvent />
        <EventsCol md={12} sm={24}>
          {[1, 2, 3].map((key) => (
            <EventsRow key={key} />
          ))}
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
  align-items: stretch;
  margin-top: 4.2rem;
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
  gap: 3.2rem;
  align-items: center;
  justify-content: space-around;
  max-width: 100% !important;
`
export default Events
