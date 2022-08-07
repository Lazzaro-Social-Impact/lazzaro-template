import { useParams } from 'react-router-dom'
import { getFinalizeBecomeAPartnerUrl } from '../../api/postApiServices'
import FinalizePayment from '../../components/FinalizePaymentResult'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = Omit<TFinalizePaymentParams, 'anonymous'> & {
  comunications: boolean;
};

function FinalizeSubscriptionDonation() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const url = getFinalizeBecomeAPartnerUrl()

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
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>()

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

  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="partners"
      sectionId={ongId}
    />
  )
}

export default FinalizeSubscriptionDonation
