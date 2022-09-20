const COMMON_PATH = ':firstName/:lastName/:home_address/:user_email'

const finalizePaymentRoutes = {
  causes: `/causes/donation-done/${COMMON_PATH}/:certificate/:text/:anonymous/:amount/:project_id/:nif`,
  courses: `/courses/buy-done/${COMMON_PATH}/:amount/:ong_id/:course_id/:nif`,
  events: `/events/buy-done/${COMMON_PATH}/:amount/:tickets/:event_id/:nif`,
  partners: `/partners/donation-done/${COMMON_PATH}/:certificate/:amount/:ong_id/:nif`,
  shop: `/shop/buy-done/${COMMON_PATH}/:amount/:productAmount/:product_id/:cp/:city/:country/:address/:nif`,
  donate: `/donate/donation-done/${COMMON_PATH}/:certificate/:text/:anonymous/:amount/:nif`,
} as const

export default finalizePaymentRoutes
