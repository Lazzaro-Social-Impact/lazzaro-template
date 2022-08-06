import { useParams } from 'react-router-dom'
import { getFinalizeCoursePaymentUrl } from '../../api/postApiServices'
import FinalizePayment from '../../components/FinalizePaymentResult'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = Omit<TFinalizePaymentParams, 'anonymous' | 'amount' | 'certificate'> & {
  course_id: string;
  home_address: string;
  mobilePhone: string;
};

function FinalizeProjectDonation() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const url = getFinalizeCoursePaymentUrl(ongId)

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    nif = '',
    home_address = '',
    text = '',
    course_id = '',
    mobilePhone = '',
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>()

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    course_id,
    nif,
    home_address,
    text,
    ong_id: ongId,
    mobilePhone
  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="#courses"
    />
  )
}

export default FinalizeProjectDonation
