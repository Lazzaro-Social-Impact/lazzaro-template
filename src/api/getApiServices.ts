export const getProjectsURL = (ongId: string): string => `/api/private/projects/ong/${ongId}`
export const getProjectDetailsURL = (id: string) => `/api/private/projects/${id}`
export const getProjectImagesURL = (projectId: string) => `/api/private/projectimages/${projectId}`
export const getProjectLatestDonationsURL = (causeId: string) => `/api/private/comments/${causeId}`
export const getEventsURL = (ongId: string): string => `/api/private/events/ong/${ongId}`
export const getCauseDetailsURL = (id: string): string => `/api/private/projects/${id}`
export const getCauseImagesURL = (id: string): string => `/api/private/projectimages/${id}`
export const getCauseDonationsHistoryUrl = (causeId: string)
: string => `/api/private/comments/${causeId}`
export const getOngConfig = (id: string): string => `/api/private/ongs/${id}/all-platform-config`
export const getOngByUrl = (url: string): string => `/api/private/ongs/${url}/id`
export const getEvent = (id: string | undefined): string => `/api/private/events/${id}`
export const getCoursesImages = (id: string): string => `/api/private/eventimages/${id}`
export const getProductsURL = (id: string): string => `/api/private/products/ong/${id}`
export const getProductDetails = (id: string): string => `/api/private/products/${id}`
export const getProductImages = (id: string): string => `/api/private/productImages/${id}`
export const getEventImages = (id: string | undefined): string => `/api/private/eventimages/${id}`
export const getTransparencyURL = (ongId: string)
: string => `/api/private/ongs/${ongId}/transparency`
