import type { TRoutes } from '../../types/types'
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
  FinalizeProductPaymentPage,
  FinalizeSubscriptionDonationPage,
  BecomeMemberForm,
  ContactusForm,
  StripeContainer,
  SuccessfulStripePayment
} from '../../views'

const COMMON_PATH = ':firstName/:lastName/:home_address/:user_email'

type TParameters = {
  features: TFeatures,
  isStripe: boolean,
}

const getRoutes = ({ features, isStripe }:TParameters): TRoutes => {
  const {
    causes, courses, events, partners, donations, volunteers, market
  } = features

  return [
    {
      path: '/',
      render: true,
      Element: Landing,
    },
    {
      path: '/about',
      render: true,
      Element: Aboutus,
    },

    {
      path: '/events/:id',
      render: events,
      Element: SingleEvent,
    },
    {
      path: `/events/buy-done/${COMMON_PATH}/:amount/:tickets/:event_id/:nif`,
      render: events,
      Element: FinalizeEventPaymentPage,
    },
    {
      path: '/courses/:id',
      render: courses,
      Element: SingleEvent,
    },
    {
      path: `/courses/buy-done/${COMMON_PATH}/:amount/:ong_id/:course_id/:nif`,
      render: courses,
      Element: FinalizeCoursePaymentPage,
    },
    {
      path: '/causes/:id',
      render: causes,
      Element: ProjectDetails,
    },
    {
      path: `/causes/donation-done/${COMMON_PATH}/:certificate/:text/:anonymous/:amount/:project_id/:nif`,
      render: causes,
      Element: FinalizeProjectDonationPage,
    },
    {
      path: '/partners',
      render: partners,
      Element: BecomeMemberForm,
    },
    {
      path: `/partners/donation-done/${COMMON_PATH}/:certificate/:amount/:ong_id/:nif`,
      render: partners,
      Element: FinalizeSubscriptionDonationPage,
    },
    {
      path: '/shop',
      render: market,
      Element: Shop,
    },
    {
      path: `/shop/buy-done/${COMMON_PATH}/:amount/:productAmount/:product_id/:cp/:city/:country/:address/:nif`,
      render: market,
      Element: FinalizeProductPaymentPage,
    },
    {
      path: '/products/:id',
      render: market,
      Element: SingleProduct,
    },
    {
      path: '/donate',
      render: donations,
      Element: Donate,
    },
    {
      path: `/donate/donation-done/${COMMON_PATH}/:certificate/:text/:anonymous/:amount/:nif`,
      render: donations,
      Element: FinalizeDonationPage,
    },
    {
      path: '/volunteers',
      render: volunteers,
      Element: BecomeVolunteerForm,
    },
    {
      path: '/contact',
      render: true,
      Element: ContactusForm,
    },
    {
      path: '/terms_and_conditions',
      render: true,
      Element: TermsAndConditions,
    },
    {
      path: '/checkout/:secret',
      render: isStripe,
      Element: StripeContainer,
    },
    {
      path: '/payment-success',
      render: isStripe,
      Element: SuccessfulStripePayment,
    },
    {
      path: '/*',
      render: true,
      Element: ErrorPage,
    },
  ]
}

export default getRoutes
