import type { TRoutes } from '../../types/types';
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
} from '../../views';
import finalizePaymentRoutes from './finalizePaymentRoutes';

type TParameters = {
  features: TFeatures;
  isStripe: boolean;
};

const getRoutes = ({ features, isStripe }: TParameters): TRoutes => {
  const { causes, courses, events, partners, donations, volunteers, market } = features;

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
      path: finalizePaymentRoutes.events,
      render: events,
      Element: FinalizeEventPaymentPage,
    },
    {
      path: '/courses/:id',
      render: courses,
      Element: SingleEvent,
    },
    {
      path: finalizePaymentRoutes.courses,
      render: courses,
      Element: FinalizeCoursePaymentPage,
    },
    {
      path: '/causes/:id',
      render: causes,
      Element: ProjectDetails,
    },
    {
      path: finalizePaymentRoutes.causes,
      render: causes,
      Element: FinalizeProjectDonationPage,
    },
    {
      path: '/partners',
      render: partners,
      Element: BecomeMemberForm,
    },
    {
      path: finalizePaymentRoutes.partners,
      render: partners,
      Element: FinalizeSubscriptionDonationPage,
    },
    {
      path: '/shop',
      render: market,
      Element: Shop,
    },
    {
      path: finalizePaymentRoutes.shop,
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
      path: finalizePaymentRoutes.donate,
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
      path: '/*',
      render: true,
      Element: ErrorPage,
    },
  ];
};

export default getRoutes;
