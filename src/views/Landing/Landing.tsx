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
// import { useAppSelector } from '../../hooks'
import ReorderComponent from '../../components/ReorderComponent/ReorderComponent'

export default function Landing(): ReactElement {
  const { hash } = useLocation()
  // const {
  //   causes, events, partners, volunteers, courses, impact, logos, donations
  // } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  // For Test purposes
  const {
    causes, events, partners, volunteers, courses, impact, logos, donations
  } = {
    causes: true,
    events: true,
    partners: true,
    volunteers: true,
    courses: true,
    impact: true,
    logos: true,
    donations: true,
  }
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1))
      if (element) {
        element.scrollIntoView()
      }
    }
  }, [hash])

  const zones = [causes, events, courses].filter(Boolean).length
  const donationBtn = donations === true
  const membershipBtn = partners === true
  const logosSectionOrderNoZones = [logos, partners, impact].filter((item) => item).length >= 2 ? 3 : 0

  // courses,events,causes
  const logosSectionOrderWithZones = zones === 1 ? 4 : 0
  const socialImpactOrderWithZones = zones === 1 ? -1 : 0
  const seperatorVisibility = [logos, impact, partners].every((item) => item === false)
  && zones === 0 ? 'none' : 'block'
  return (
    <>
      <Navbar transparent position="fixed" />
      <Hero donationBtn={donationBtn} membershipBtn={membershipBtn} />
      <AboutUs />
      <LandingColumn>
        {zones === 1 && logos === false && impact === false && <Divider display="block" />}
        <ReorderComponent
          feature={logos}
          zones={zones}
          Component={LogosCarousel}
          orderWithZones={logosSectionOrderWithZones}
          orderWithoutZones={logosSectionOrderNoZones}
          display={seperatorVisibility}
        />
        {causes && <Projects />}
        {events && !causes && <Events />}
        {/* {events && <PremiumEvent />} */}
        <ReorderComponent
          feature={impact}
          zones={zones}
          Component={SocialImpact}
          orderWithZones={socialImpactOrderWithZones}
          orderWithoutZones={0}
          display={seperatorVisibility}
        />
        {courses && events && !causes && <Courses />}
        {events && causes && <Events />}
        {courses && !events && <Courses />}

        <ReorderComponent
          feature={partners}
          zones={zones}
          Component={SubscribeDivider}
          orderWithZones={0}
          orderWithoutZones={0}
          display={seperatorVisibility}
        />
        {courses && events && causes && <Courses />}
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
