import { type ReactElement } from 'react'
import {
  Hero,
  Events,
  AboutUs,
  LogosCarousel,
  PremiumEvent,
  Projects,
  SocialImpact,
  SubscribeDivider,
  Volunteers,
  Courses,
  Navbar,
  Footer,
} from '../../components'
import { useAppSelector } from '../../hooks'

export default function Landing(): ReactElement {
  const {
    causes, events, partners, volunteers, courses
  } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  return (
    <>
      <Navbar transparent position="fixed" />
      <Hero />
      <AboutUs />
      <LogosCarousel />
      {causes && <Projects />}
      {events && <PremiumEvent />}
      <SocialImpact />
      {events && <Events />}
      {partners && <SubscribeDivider />}
      {courses && <Courses />}
      {volunteers && <Volunteers />}
      <Footer />
    </>
  )
}
