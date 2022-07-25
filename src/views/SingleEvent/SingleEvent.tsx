import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Footer, Navbar } from '../../components'
import { EventCard } from '../../components/SingleEvent/EventCard'
import { SingleEventDetails } from '../../components/SingleEvent/SingleEventDetails'

export function SingleEvent(): ReactElement {
  return (
    <>
      <Navbar />
      <Container>
        <SingleEventDetails />
        <OtherEvents>
          <EventCard />
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
`
