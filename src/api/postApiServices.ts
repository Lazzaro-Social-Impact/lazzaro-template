import BASE_URL from './baseUrl';

export const getStartDonationUrl = (ongId: string) => `${BASE_URL}/api/public/ongs/${ongId}/start-donation`;
export const getFinalizeDonationUrl = (ongId: string, token: string) =>
  `${BASE_URL}/api/public/ongs/${ongId}/donations?token=${token}`;
export const getAddVolunteerUrl = () => `${BASE_URL}/api/public/volunteers`;
export const getStartProjectDonationUrl = (ongId: string) =>
  `${BASE_URL}/api/public/ongs/${ongId}/start-donation-cause`;
export const getFinalizeProjectDonationUrl = (ongId: string, token: string) =>
  `${BASE_URL}/api/public/ongs/${ongId}/finalice-donation-cause?token=${token}`;
export const getStartCoursePaymentUrl = (courseId: string) => `${BASE_URL}/api/public/buycourse/${courseId}/start`;
export const getFinalizeCoursePaymentUrl = (courseId: string, token: string) =>
  `${BASE_URL}/api/public/buycourse/${courseId}/finalice?token=${token}`;
export const getSendContactUrl = () => `${BASE_URL}/api/public/mail/contact`;
export const getSendContactEventUrl = (ongId: string, eventId: string) =>
  `${BASE_URL}/api/public/ongs/${ongId}/events/${eventId}/contact`;
export const getBuyEventTicketUrl = (eventId: string) => `${BASE_URL}/api/public/buyticket/${eventId}/start`;
export const getFinalizeEventPaymentUrl = (eventId: string, token: string) =>
  `${BASE_URL}/api/public/buyticket/${eventId}/finalice?token=${token}`;
export const getStartProductPaymentUrl = () => `${BASE_URL}/api/public/orders/start`;
export const getFinalizeProductPaymentUrl = (token: string) => `${BASE_URL}/api/public/orders/finalice?token=${token}`;
export const getBecomePartnerUrl = () => `${BASE_URL}/api/public/subscriptions/start`;
export const getFinalizeBecomeAPartnerUrl = (token: string) =>
  `${BASE_URL}/api/public/subscriptions/finalice?token=${token}`;
