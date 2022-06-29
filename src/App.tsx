import React from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Projects from './components/Projects/Projects'
import SocialImpact from './components/SocialImpact/SocialImpact'

import LogosCarousel from './components/LogosCarousel/LogosCarousel'
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <h1>Lazzaro</h1>
      <AboutUs />
      <LogosCarousel />
      <Projects />
      <SocialImpact />
    </div>
  )
}

export default App
