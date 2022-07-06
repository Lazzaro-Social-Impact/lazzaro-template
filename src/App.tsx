import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Aboutus, Landing } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
