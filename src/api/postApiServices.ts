/* eslint-disable max-len */
export const getStartDonationUrl = (ongId: string) => `/api/private/ong/${ongId}/start-donation`
export const getFinalizeDonationUrl = (ongId: string) => `/api/private/ong/${ongId}/donations`
export const getAddVolunteerUrl = () => '/api/private/volunteers'
export const getStartProjectDonationUrl = (ongId: string) => `/api/private/ong/${ongId}/start-donation-cause`
export const getFinalizeProjectDonationUrl = (ongId: string, token:string) => `/api/private/ong/${ongId}/finalice-donation-cause?token=${token}`
export const getStartCoursePaymentUrl = (courseId: string) => `/api/private/buycourse/${courseId}/start`
export const getFinalizeCoursePaymentUrl = (courseId: string) => `/api/private/buycourse/${courseId}/finalice`
export const getSendContactUrl = () => '/api/private/mail/contact'
export const getSendContactEventUrl = (ongId: string, eventId: string) => `/api/private/ongs/${ongId}/events/${eventId}/contact`
export const getBuyEventTicketUrl = (eventId: string) => `/api/private/buyticket/${eventId}/start`
export const getFinalizeEventPaymentUrl = (eventId: string, token:string) => `/api/private/buyticket/${eventId}/finalice?token=${token}`
export const getStartProductPaymentUrl = () => '/api/private/orders/start'
export const getFinalizeProductPaymentUrl = () => '/api/private/orders/finalice'
export const getBecomePartnerUrl = () => '/api/private/subscriptions/start'
export const getFinalizeBecomeAPartnerUrl = () => '/api/private/subscriptions/finalice'
