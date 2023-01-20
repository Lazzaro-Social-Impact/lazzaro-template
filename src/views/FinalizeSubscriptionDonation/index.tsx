import { Params, useParams, useSearchParams } from 'react-router-dom';
import { getFinalizeBecomeAPartnerUrl } from '../../api/postApiServices';
import { useAppSelector, useFinalizePayment } from '../../hooks';
import FinalizePayment from '../../components/FinalizePaymentResult';
import { TFinalizePaymentParams } from '../../types/types';

type TParams = Omit<TFinalizePaymentParams, 'anonymous'> & {
  comunications: boolean;
  subscriptionType: '1 month' | '12 months';
  stripe_plan_id: string;
};

function FinalizeSubscriptionDonation() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || '';
  const token = useSearchParams()[0].get('token') || '';
  const url = getFinalizeBecomeAPartnerUrl(token);

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    nif = '',
    home_address = '',
    text = '',
    comunications,
    certificate,
    amount = '0',
    subscriptionType = '',
    stripe_plan_id = '',
  } = useParams<Params<keyof Omit<TParams, 'ong_id'>>>();

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    nif,
    home_address,
    text,
    ong_id: ongId,
    comunications: comunications === 'true',
    certificate: certificate === 'true',
    amount: +amount,
    subscriptionType: subscriptionType as any,
    stripe_plan_id,
  };

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url });

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      sectionName='partners'
      sectionId={ongId}
    />
  );
}

export default FinalizeSubscriptionDonation;
