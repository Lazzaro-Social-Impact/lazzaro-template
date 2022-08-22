import { useParams, useSearchParams } from 'react-router-dom'
import { getFinalizeProjectDonationUrl } from '../../api/postApiServices'
import { FinalizePaymentResult } from '../../components'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = TFinalizePaymentParams & {
  project_id: string;
};

function FinalizeProjectDonation() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const token = useSearchParams()[0].get('token') || ''
  const url = getFinalizeProjectDonationUrl(ongId, token)

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    amount = '0',
    nif = '',
    home_address = '',
    certificate = '',
    anonymous = '',
    text = '',
    project_id = '',
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>()

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    amount: +amount,
    project_id,
    anonymous: anonymous === 'true',
    certificate: certificate === 'true',
    nif,
    home_address,
    text,
    ong_id: ongId,
  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePaymentResult
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="#causes"
      sectionId={project_id}
    />
  )
}

export default FinalizeProjectDonation
