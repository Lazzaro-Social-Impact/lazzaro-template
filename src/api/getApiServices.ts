export const getEventsURL = (ongId: string) => `/api/private/events/ong/${ongId}`
export const getCauseDetailsURL = (id: string): string => `/api/private/projects/${id}`
export const getCauseImagesURL = (id: string): string => `/api/private/projectimages/${id}`
export const getCauseDonationsHistoryUrl = (causeId: string)
: string => `/api/private/comments/${causeId}`
export const getCausesURL = (ongId: string): string => `/api/private/projects/ong/${ongId}`
export const getOngConfig = (id: string): string => `/api/private/ongs/${id}/all-platform-config`
export const getOngByUrl = (url: string): string => `/api/private/ongs/${url}/id`
export const getEvent = (id: string): string => `/api/private/events/${id}`
export const getCoursesImages = (id: string): string => `/api/private/eventimages/${id}`
export const getProductsURL = (id: string): string => `/api/private/products/ong/${id}`
export const getProductDetails = (id: string): string => `/api/private/products/${id}`
export const getProductImages = (id: string): string => `/api/private/productImages/${id}`
export const getEventImages = (id: string): string => `/api/private/eventimages/${id}`
export const getTransparencyURL = (ongId: string)
: string => `/api/private/ongs/${ongId}/transparency`
export const getCoursesURL = (ongId:string) => `/api/private/courses/ong/${ongId}`
