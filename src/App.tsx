import React from 'react'
import './App.css'
import { Aboutus } from './components/AboutUs/Aboutus'
import 'antd/dist/antd.min.css'
import { SocialImpact } from './components/SocialImpact/SocialImpact'

function App() {
  return (
    <div className="App">
      <h1>Lazzaro</h1>
      <Aboutus />
      <SocialImpact />
    </div>
  )
}

export default App
