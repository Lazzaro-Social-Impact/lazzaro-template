import React from 'react'
import { Footer, Navbar } from './components'

import 'antd/dist/antd.min.css'
import { Landing } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Landing />
      <Footer />
    </ThemeProvider>
  )
}

export default App
