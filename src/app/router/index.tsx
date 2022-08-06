import { Routes, Route } from 'react-router-dom'
import { BecomeMemberForm } from '../../components/Forms/BecomeMemberForm'
import { ContactusForm } from '../../components/Forms/ContactusForm'
import { useAppSelector } from '../../hooks'
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
} from '../../views'

export default function AllRoute() {
  const {
    causes, events, market, courses, volunteers, partners, donations,
  } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        {events && <Route path="/events/:id" element={<SingleEvent />} />}
        {courses && <Route path="/courses/:id" element={<SingleEvent />} />}
        {causes && <Route path="/projects/:id" element={<ProjectDetails />} />}
        {market && <Route path="/products/:id" element={<SingleProduct />} />}
        {market && <Route path="/shop" element={<Shop />} />}
        {partners && <Route path="/partners" element={<BecomeMemberForm />} />}
        {volunteers && <Route path="/volunteers" element={<BecomeVolunteerForm />} />}
        {donations && <Route path="/donate" element={<Donate />} />}

        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactusForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
