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
  align-items: flex-end;
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
  margin-top: 0;
  margin-bottom: 2.4rem;
  font-size: 1.8rem;
  padding-left:2rem
`

export default Events
