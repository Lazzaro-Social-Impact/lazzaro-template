import React from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import LogosCarousel from './components/LogosCarousel/LogosCarousel'
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
      <h1>Lazzaro</h1>
      <AboutUs />
      <LogosCarousel />
    </div>
  )
}

export default App
