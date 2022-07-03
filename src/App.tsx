import React from 'react'
import { Footer, Navbar } from './components'

import 'antd/dist/antd.min.css'
import { Landing } from './views'
import './App.css'
import { ThemeContext } from './app/context/theme-context'

const globalColor = '#5cb780'
function App() {
  return (
    <ThemeContext.Provider value={globalColor}>
      <Navbar />
      <Landing />
      <Footer />
    </ThemeContext.Provider>
  )
}

export default App
