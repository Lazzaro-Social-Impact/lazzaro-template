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
  SuccessfulPayment,
} from '../../views'

export default function AllRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/courses/:id" element={<SingleEvent />} />
        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/partners" element={<BecomeMemberForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/volunteers" element={<BecomeVolunteerForm />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<ContactusForm />} />
        <Route
          // eslint-disable-next-line max-len
          path="/:feature/donation-done/:firstName/:lastName/:home_address/:user_email/:certificate/:text/:anonymous/:amount/:tickets/:id/:nif"
          element={<SuccessfulPayment />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
