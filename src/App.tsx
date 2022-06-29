import React from 'react'
import './App.css'
// import { Aboutus } from './components/AboutUs/Aboutus'
import 'antd/dist/antd.min.css'
import { SubscribeDivider } from './components/SubscribeDivider/SubscribeDivider'

function App() {
  return (
    <div className="App">
      <h1>Lazzaro</h1>
      {/* <Aboutus /> */}
      <SubscribeDivider />
    </div>
  )
}

export default App
