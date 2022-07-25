import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Aboutus, Landing } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions'
import { SingleProduct } from './views/SingleProduct/SingleProduct'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
