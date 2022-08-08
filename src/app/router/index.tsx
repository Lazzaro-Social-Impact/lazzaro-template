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
  FinalizeDonationPage,
  FinalizeProjectDonationPage,
  FinalizeEventPaymentPage,
  FinalizeCoursePaymentPage,
  FinalizeProductPaymentPage
} from '../../views'

const BASE_PATH = ':firstName/:lastName/:home_address/:user_email'

export default function AllRoute() {
  const {
    causes, events, market, courses, volunteers, partners, donations,
  } = useAppSelector(({ ong }) => ong.ongConfig?.features) || {}

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />

        {events && (
          <Route path="/events">
            <Route path=":id" element={<SingleEvent />} />
            <Route
              path={`buy-done/${BASE_PATH}/:amount/:tickets/:event_id/:nif`}
              element={<FinalizeEventPaymentPage />}
            />
          </Route>
        )}

        {courses && (
          <Route path="/courses">
            <Route path=":id" element={<SingleEvent />} />
            <Route
              path={`buy-done/${BASE_PATH}/:amount/:ong_id/:course_id/:nif`}
              element={<FinalizeCoursePaymentPage />}
            />
          </Route>
        )}

        {causes && (
          <Route path="/causes">
            <Route path=":id" element={<ProjectDetails />} />
            <Route
              path={`donation-done/${BASE_PATH}/:certificate/:text/:anonymous/:amount/:project_id/:nif`}
              element={<FinalizeProjectDonationPage />}
            />
          </Route>
        )}

        {partners && (
          <Route path="/partners">
            <Route index element={<BecomeMemberForm />} />
            <Route
              path={`donation-done/${BASE_PATH}/:certificate/:amount/:ong_id/:nif`}
              element={<FinalizeProductPaymentPage />}
            />
          </Route>
        )}

        {market && (
        <>
          <Route path="/shop">
            <Route index element={<Shop />} />
            <Route
              path={`buy-done/${BASE_PATH}/:amount/:productAmount/:product_id/:cp/:city/:country/:address/:nif`}
              element={<FinalizeProductPaymentPage />}
            />
          </Route>
          <Route path="/products/:id" element={<SingleProduct />} />
        </>
        )}

        {volunteers && <Route path="/volunteers" element={<BecomeVolunteerForm />} />}

        {donations && (
          <Route path="/donate">
            <Route index element={<Donate />} />
            <Route
              path={`donation-done/${BASE_PATH}/:certificate/:text/:anonymous/:amount/:nif`}
              element={<FinalizeDonationPage />}
            />
          </Route>
        )}

        <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
        <Route path="/contact" element={<ContactusForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}
