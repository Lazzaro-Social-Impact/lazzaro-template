import { useTranslation } from 'react-i18next';
import useAppSelector from './useAppSelector';

function useSuccessPaymentNotification() {
  const paymentMethod = useAppSelector(({ ong }) => ong.ongConfig?.platformConfig.payment_method) || 'stripe';
  const { t } = useTranslation();

  const successMessages = {
    stripe: t('success.stripe_navigate'),
    mollie: t('success.mollie_navigate'),
    paypal: t('success.paypal_navigate'),
  };

  const successNotification = successMessages[paymentMethod];

  return successNotification;
}

export default useSuccessPaymentNotification;
