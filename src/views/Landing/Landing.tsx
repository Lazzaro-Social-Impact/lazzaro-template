/* eslint-disable no-constant-condition */
import { useEffect, type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
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
import Divider from '../../components/Divider/Divider'
import { useAppSelector } from '../../hooks'

export default function Landing(): ReactElement {
  const { hash } = useLocation()
  const {
    causes, events, partners, volunteers, courses, impact, logos
  } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [hash])

  const zones = [causes, events, courses].filter(Boolean).length

  const logosSectionOrderNoZones = [logos, partners, impact].filter((item) => item).length >= 2 ? 3 : 0

  // courses,events,causes
  const logosSectionOrderWithZones = [causes, events, courses].filter((item) => item).length === 1 ? 4 : 0
  const socialImpactOrderWithZones = [causes, events, courses].filter((item) => item).length === 1 ? -1 : 0
  const seperatorVisibility = [logos, impact, partners].every((item) => item === false) ? 'none' : 'block'
  return (
    <>
      <Navbar transparent position="fixed" />
      <Hero />
      <AboutUs />
      <LandingColumn>
        {zones === 1 && logos && !impact === false && <Divider />}
        {logos && zones ? <LogosCarousel order={logosSectionOrderWithZones} />
          : !zones && logos ? <LogosCarousel order={logosSectionOrderNoZones} />
            : (
              <Divider
                display={seperatorVisibility}
                order={logosSectionOrderWithZones}
              />
            )}
        {causes && <Projects />}
        {/* {events && <PremiumEvent />} */}
        {impact ? <SocialImpact order={socialImpactOrderWithZones} />
          : !zones && impact ? <SocialImpact order={0} /> : (
            <Divider
              display={seperatorVisibility}
              order={socialImpactOrderWithZones}
            />
          )}
        {events && <Events />}
        {partners ? <SubscribeDivider />
          : !zones && partners ? <SubscribeDivider /> : (
            <Divider
              display={seperatorVisibility}
            />
          )}
        {courses && <Courses />}
      </LandingColumn>
      {volunteers && <Volunteers />}
      <Footer />
    </>
  )
}

const LandingColumn = styled.div`
display: flex;
flex-direction: column;
`
