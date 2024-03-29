/* eslint-disable max-len */
import { lazy } from 'react';

export const Landing = lazy(() => import('./Landing/Landing' /* webpackChunkName: "Landing" */));
export const Aboutus = lazy(() => import('./Aboutus/Aboutus' /* webpackChunkName: "Aboutus_page" */));
export const ProjectDetails = lazy(() => import('./ProjectDetails' /* webpackChunkName: "ProjectDetails" */));
export const Donate = lazy(() => import('./Donate/Donate' /* webpackChunkName: "Donate" */));
export const Shop = lazy(() => import('./Shop/Shop' /* webpackChunkName: "Shop" */));
export const BecomeVolunteerForm = lazy(
  () => import('./BecomeVolunteerForm/BecomeVolunteerForm' /* webpackChunkName: "BecomeVolunteerForm" */),
);
export const DonateForm = lazy(() => import('../components/Forms/DonateForm' /* webpackChunkName: "DonateForm" */));
export const ContactusForm = lazy(
  () => import('../components/Forms/ContactusForm' /* webpackChunkName: "Contactus" */),
);
export const SingleEvent = lazy(() => import('./SingleEvent/SingleEvent' /* webpackChunkName: "SingleEvent" */));
export const SingleProduct = lazy(
  () => import('./SingleProduct/SingleProduct' /* webpackChunkName: "SingleProduct" */),
);
export const TermsAndConditions = lazy(
  () => import('./TermsAndConditions/TermsAndConditions' /* webpackChunkName: "TermsAndConditions" */),
);
export const ErrorPage = lazy(() => import('./ErrorPage/ErrorPage' /* webpackChunkName: "ErrorPage" */));
export const FinalizeDonationPage = lazy(() => import('./FinalizeDonation' /* webpackChunkName: "FinalizeDonation" */));
export const FinalizeProjectDonationPage = lazy(
  () => import('./FinalizeProjectDonation' /* webpackChunkName: "FinalizeProjectDonation" */),
);
export const FinalizeCoursePaymentPage = lazy(
  () => import('./FinalizeCoursePayment' /* webpackChunkName: "FinalizeCoursePayment" */),
);
export const FinalizeEventPaymentPage = lazy(
  () => import('./FinalizeEventPayment' /* webpackChunkName: "FinalizeEventPayment" */),
);
export const FinalizeProductPaymentPage = lazy(
  () => import('./FinalizeProductPayment' /* webpackChunkName: "FinalizeProductPayment" */),
);
export const FinalizeSubscriptionDonationPage = lazy(
  () => import('./FinalizeSubscriptionDonation' /* webpackChunkName: "FinalizeSubscriptionDonation" */),
);
export const BecomeMemberForm = lazy(
  () => import('../components/Forms/BecomeMemberForm' /* webpackChunkName: "BecomeMemberForm" */),
);
export const StripeContainer = lazy(
  () => import('../components/StripeContainer' /* webpackChunkName: "StripeContainer" */),
);
export { default as CrashPage } from './CrashPage/CrashPage';
