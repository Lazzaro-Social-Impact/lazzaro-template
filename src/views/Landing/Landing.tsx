import React, { ReactElement } from 'react'
import {
  Hero, Events, AboutUs, LogosCarousel,
  PremiumEvent, Projects, SocialImpact, SubscribeDivider, Volunteers
} from '../../components'

export default function Landing(): ReactElement {
  return (
    <>
      <Hero />
      <AboutUs />
      <LogosCarousel />
      <Projects />
      <PremiumEvent />
      <SocialImpact />
      <Events />
      <SubscribeDivider />
      <Volunteers />
    </>
  )
}
