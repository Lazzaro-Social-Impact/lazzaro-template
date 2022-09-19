import { useTranslation } from 'react-i18next'
import useAppSelector from './useAppSelector'

function useSuccessPaymentNotification() {
  const paymentMethod = useAppSelector(({ ong }) => ong.ongConfig?.platformConfig.payment_method)
  const { t } = useTranslation()
  const successNotification = paymentMethod === 'stripe' ? t('success.stripe_navigate') : t('success.paypal_navigate')

  return successNotification
}

export default useSuccessPaymentNotification
