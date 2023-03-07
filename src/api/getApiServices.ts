import BASE_URL from './baseUrl';

export const getProjectsURL = (ongId: string) => `${BASE_URL}/api/public/projects/ong/${ongId}`;
export const getProjectDetailsURL = (id: string) => `${BASE_URL}/api/public/projects/${id}`;
export const getProjectImagesURL = (projectId: string) => `${BASE_URL}/api/public/project/${projectId}/images`;
export const getProjectLatestDonationsURL = (causeId: string) => `${BASE_URL}/api/public/comments/${causeId}`;
export const getEventsURL = (ongId: string) => `${BASE_URL}/api/public/events/ong/${ongId}`;
export const getCauseDetailsURL = (id: string) => `${BASE_URL}/api/public/projects/${id}`;
export const getCauseImagesURL = (id: string) => `${BASE_URL}/api/public/project/${id}/images`;
export const getCauseDonationsHistoryUrl = (causeId: string) => `${BASE_URL}/api/public/comments/${causeId}`;
export const getOngConfig = (id: string) => `${BASE_URL}/api/public/ongs/${id}/all-platform-config`;
export const getOngByUrl = (url: string) => `${BASE_URL}/api/public/ongs/${url}/id`;
export const getEventURL = (eventId: string | undefined) => `${BASE_URL}/api/public/events/${eventId}`;
export const getCoursesImages = (id: string) => `${BASE_URL}/api/public/events/${id}/images`;
export const getProductsURL = (id: string) => `${BASE_URL}/api/public/products/ong/${id}`;
export const getProductDetails = (id: string) => `${BASE_URL}/api/public/products/${id}`;
export const getProductImages = (id: string) => `${BASE_URL}/api/public/product/${id}/images`;
export const getEventImages = (id: string) => `${BASE_URL}/api/public/events/${id}/images`;
export const getTransparencyURL = (ongId: string) => `${BASE_URL}/api/public/ongs/${ongId}/transparency`;
export const getCoursesURL = (ongId: string) => `${BASE_URL}/api/public/courses/ong/${ongId}`;
export const getBuyCourseUrl = (courseId: string | undefined) => `${BASE_URL}/api/public/buycourse/${courseId}/start`;
export const getOngLogos = (ongId: string) => `${BASE_URL}/api/public/ongs/${ongId}/logos`;
export const getDonationOptions = (ongId: string) => `${BASE_URL}/api/public/ongs/${ongId}/donations-options`;
export const getNFTUrl = (ongId: string) => `${BASE_URL}/api/public/nfts/${ongId}`;
