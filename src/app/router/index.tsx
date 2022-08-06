/* eslint-disable max-len */
import { Routes, Route } from 'react-router-dom'
import { BecomeMemberForm } from '../../components/Forms/BecomeMemberForm'
import { ContactusForm } from '../../components/Forms/ContactusForm'
import {
  Aboutus,
  BecomeVolunteerForm,
  Landing,
  ProjectDetails,
  Shop,
  Donate,
  SingleEvent,
  SingleProduct,
  TermsAndConditions,
  ErrorPage,
  FinalizeDonationPage,
  FinalizeProjectDonationPage,
} from '../../views'

const BASE_PATH = ':firstName/:lastName/:home_address/:user_email/:certificate'

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/courses">
          <Route path=":id" element={<SingleEvent />} />
          <Route path="" element={<SingleEvent />} />
        </Route>
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/causes">
          <Route path=":id" element={<ProjectDetails />} />
          <Route path={`donation-done/${BASE_PATH}/:text/:anonymous/:amount/:project_id/:nif`} element={<FinalizeProjectDonationPage />} />
        </Route>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/partners" element={<BecomeMemberForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/volunteers" element={<BecomeVolunteerForm />} />
        <Route path="/donate">
          <Route index element={<Donate />} />
          <Route path={`donation-done/${BASE_PATH}/:text/:anonymous/:amount/:nif`} element={<FinalizeDonationPage />} />
        </Route>
        <Route path="/contact" element={<ContactusForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
