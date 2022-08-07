import { useParams } from 'react-router-dom'
import { getFinalizeDonationUrl } from '../../api/postApiServices'
import FinalizePayment from '../../components/FinalizePaymentResult'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = Omit<TFinalizePaymentParams, 'home_address'>

function FinalizeDonation() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const url = getFinalizeDonationUrl(ongId)

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    amount = '0',
    nif = '',
    certificate = '',
    anonymous = '',
    text = '',
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>() || {}

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    amount: +amount,
    anonymous: anonymous === 'true',
    certificate: certificate === 'true',
    nif,
    text,
    ong_id: ongId,
  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="donate"
      sectionId={ongId}
    />
  )
}

export default FinalizeDonation
