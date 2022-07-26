import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import {
  Aboutus, Landing, ProjectDetails, Shop, Donate, BecomeVolunteerForm
} from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import { SingleEvent } from './views/SingleEvent/SingleEvent'
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions'
import { SingleProduct } from './views/SingleProduct/SingleProduct'
import { ContactusForm } from './components/Forms/ContactusForm
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
        <Route path="/contact" element={<ContactusForm />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/partners" element={<BecomeMemberForm />} />
        <Route path="/volunteer" element={<BecomeVolunteerForm />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
