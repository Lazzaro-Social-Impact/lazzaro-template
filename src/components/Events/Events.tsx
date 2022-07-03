/* eslint-disable max-len */
import React, { ReactElement } from 'react'
import {
  Col, Typography
} from 'antd'
import styled from 'styled-components'
import NearEvent from './NearEvent/NearEvent'
import EventsRow from './EventsRow/EventsRow'

const { Title } = Typography

function Events(): ReactElement {
  return (
    <>
      <SectionTitle>Events</SectionTitle>
      <EventsSection>
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
const EventsCol = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  align-items: center;
  max-width: 100% !important;

`

const EventsSection = styled.section`
  padding: 0 4.1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 4.2rem;
  gap: 1.2rem;
  padding-bottom: 5.8rem;
  @media (max-width: 768px) {
    flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  }
`
const SectionTitle = styled(Title)`
  margin-bottom: 2.4rem;
  padding:0 4.1rem;
  margin-top: 4.2rem;
  font-weight: bold !important;
  font-size: 3.8rem !important;

`

export default Events
