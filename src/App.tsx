import React from 'react'
import PremiumEvent from './components/PremiumEvent/PremiumEvent'
import './App.css'
import { Hero, Footer } from './components'
import AboutUs from './components/Aboutus/Aboutus'
import Projects from './components/Projects/Projects'
import SocialImpact from './components/SocialImpact/SocialImpact'

import LogosCarousel from './components/LogosCarousel/LogosCarousel'
import 'antd/dist/antd.min.css'
import SubscribeDivider from './components/SubscribeDivider/SubscribeDivider'

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <LogosCarousel />
      <Projects />
      <SocialImpact />
      <PremiumEvent />
      <SubscribeDivider />
      <Footer />
    </div>
  )
}

export default App
