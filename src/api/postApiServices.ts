export const getStartDonationUrl = (ongId: string)
: string => `/api/private/ong/${ongId}/start-donation`
export const getFinaliceDonationUrl = (ongId: string)
: string => `/api/private/donations/ong/${ongId}/donations`
export const getAddVolunteerUrl = (): string => '/api/private/volunteers'
export const getStartProjectDonationUrl = (ongId: string)
 : string => `/api/private/ong/${ongId}/start-donation-cause`
export const getStartCoursePaymentUrl = (courseId: string)
: string => `/api/private/buycourse/${courseId}/start`
export const getSendContactUrl = (): string => '/api/private/mail/contact'
export const getSendContactEventUrl = (ongId: string, eventId: string)
: string => `/api/private/ongs/${ongId}/events/${eventId}/contact`
export const getBuyEventTicketUrl = (eventId: string)
: string => `/api/private/buyticket/${eventId}/start`
export const getStartProductPaymentUrl = () : string => '/api/private/orders/start'
export const getBecomePartnerUrl = (): string => '/api/private/subscriptions/start'
