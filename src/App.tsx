import React from 'react'
import { Footer, Navbar } from './components'

import 'antd/dist/antd.min.css'
import { Landing } from './views'
import './App.css'

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
