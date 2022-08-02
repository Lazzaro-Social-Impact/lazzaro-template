export const getProjectsURL = (ongId: string) => `/api/private/projects/ong/${ongId}`
export const getProjectDetailsURL = (id: string) => `/api/private/projects/${id}`
export const getProjectImagesURL = (projectId: string) => `/api/private/projectimages/${projectId}`
export const getProjectLatestDonationsURL = (causeId: string) => `/api/private/comments/${causeId}`
export const getEventsURL = (ongId: string) => `/api/private/events/ong/${ongId}`
export const getCauseDetailsURL = (id: string) => `/api/private/projects/${id}`
export const getCauseImagesURL = (id: string) => `/api/private/projectimages/${id}`
export const getCauseDonationsHistoryUrl = (causeId: string) => `/api/private/comments/${causeId}`
export const getOngConfig = (id: string) => `/api/private/ongs/${id}/all-platform-config`
export const getOngByUrl = (url: string) => `/api/private/ongs/${url}/id`
export const getEventURL = (eventId: string) => `/api/private/events/${eventId}`
export const getCoursesImages = (id: string) => `/api/private/eventimages/${id}`
export const getProductsURL = (id: string) => `/api/private/products/ong/${id}`
export const getProductDetails = (id: string) => `/api/private/products/${id}`
export const getProductImages = (id: string) => `/api/private/productImages/${id}`
export const getEventImages = (id: string) => `/api/private/eventimages/${id}`
export const getTransparencyURL = (ongId: string) => `/api/private/ongs/${ongId}/transparency`
export const getCoursesURL = (ongId:string) => `/api/private/courses/ong/${ongId}`
