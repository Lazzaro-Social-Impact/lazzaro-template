import React from 'react'
import './App.css'
import { Footer, Navbar } from './components'

import 'antd/dist/antd.min.css'
import { Landing } from './views'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer />
    </div>
  )
}

export default App
