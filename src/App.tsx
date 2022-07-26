import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { Aboutus, Landing, ProjectDetails } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import { SingleEvent } from './views/SingleEvent/SingleEvent'
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions'
import { SingleProduct } from './views/SingleProduct/SingleProduct'
import { BecomeMemberForm } from './components/Forms/BecomeMemberForm'

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/partners" element={<BecomeMemberForm />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
