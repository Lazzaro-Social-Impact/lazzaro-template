import { useEffect, type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import {
  Hero,
  Events,
  AboutUs,
  LogosCarousel,
  // PremiumEvent,
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
  const { hash } = useLocation()
  const {
    causes, events, partners, volunteers, courses
  } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [hash])

  return (
    <>
      <Navbar transparent position="fixed" />
      <Hero />
      <AboutUs />
      <LogosCarousel />
      {causes && <Projects />}
      {/* {events && <PremiumEvent />} */}
      <SocialImpact />
      {events && <Events />}
      {partners && <SubscribeDivider />}
      {courses && <Courses />}
      {volunteers && <Volunteers />}
      <Footer />
    </>
  )
}
