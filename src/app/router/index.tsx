import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Aboutus, Landing, ProjectDetails } from '../../views'
import { SingleEvent } from '../../views/SingleEvent/SingleEvent'
import { SingleProduct } from '../../views/SingleProduct/SingleProduct'
import TermsAndConditions from '../../views/TermsAndConditions/TermsAndConditions'

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  )
}
