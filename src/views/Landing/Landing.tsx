import { ReactElement } from 'react'
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

export default function Landing(): ReactElement {
  return (
    <>
      <Navbar transparent position="fixed" />
      <Hero />
      <AboutUs />
      <LogosCarousel />
      <Projects />
      <PremiumEvent />
      <SocialImpact />
      <Events />
      <SubscribeDivider />
      <Courses />
      <Volunteers />
      <Footer />
    </>
  )
}
