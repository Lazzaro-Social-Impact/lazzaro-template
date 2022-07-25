import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Aboutus, Landing } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import { SingleEvent } from './views/SingleEvent/SingleEvent'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events/:id" element={<SingleEvent />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
