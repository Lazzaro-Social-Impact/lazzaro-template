import BASE_URL from './baseUrl'

export const getStartDonationUrl = (ongId: string) => `${BASE_URL}/api/private/ong/${ongId}/start-donation`
export const getFinalizeDonationUrl = (ongId: string) => `${BASE_URL}/api/private/ong/${ongId}/donations`
export const getAddVolunteerUrl = () => `${BASE_URL}/api/private/volunteers`
export const getStartProjectDonationUrl = (ongId: string) => `${BASE_URL}/api/private/ong/${ongId}/start-donation-cause`
export const getFinalizeProjectDonationUrl = (ongId: string,
  token:string) => `${BASE_URL}/api/private/ong/${ongId}/finalice-donation-cause?token=${token}`
export const getStartCoursePaymentUrl = (courseId: string) => `${BASE_URL}/api/private/buycourse/${courseId}/start`
export const getFinalizeCoursePaymentUrl = (courseId:
    string) => `${BASE_URL}/api/private/buycourse/${courseId}/finalice`
export const getSendContactUrl = () => `${BASE_URL}/api/private/mail/contact`
export const getSendContactEventUrl = (ongId: string,
  eventId: string) => `${BASE_URL}/api/private/ongs/${ongId}/events/${eventId}/contact`
export const getBuyEventTicketUrl = (eventId: string) => `${BASE_URL}/api/private/buyticket/${eventId}/start`
export const getFinalizeEventPaymentUrl = (eventId: string,
  token:string) => `${BASE_URL}/api/private/buyticket/${eventId}/finalice?token=${token}`
export const getStartProductPaymentUrl = () => `${BASE_URL}/api/private/orders/start`
export const getFinalizeProductPaymentUrl = () => `${BASE_URL}/api/private/orders/finalice`
export const getBecomePartnerUrl = () => `${BASE_URL}/api/private/subscriptions/start`
export const getFinalizeBecomeAPartnerUrl = () => `${BASE_URL}/api/private/subscriptions/finalice`
