import { useParams, useSearchParams } from 'react-router-dom'
import { getFinalizeEventPaymentUrl } from '../../api/postApiServices'
import FinalizePayment from '../../components/FinalizePaymentResult'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = Omit<TFinalizePaymentParams, 'anonymous' | 'amount' | 'certificate'> & {
  event_id: string;
  mobilePhone: string;
  terms_and_conditions: boolean;
  image_rights: boolean;
  newsletter: boolean;
  tickets: { id: string; amount: number }[];
};

function FinalizeEventPayment() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const token = useSearchParams()[0].get('token') || ''
  const url = getFinalizeEventPaymentUrl(ongId, token)

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    nif = '',
    home_address = '',
    text = '',
    event_id = '',
    mobilePhone = '',
    terms_and_conditions = '',
    image_rights = '',
    newsletter = '',
    tickets = "[{ id: '', amount: 0 }]",
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>()

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    event_id,
    nif,
    home_address,
    text,
    ong_id: ongId,
    mobilePhone,
    terms_and_conditions: terms_and_conditions === 'true',
    image_rights: image_rights === 'true',
    newsletter: newsletter === 'true',
    tickets: JSON.parse(tickets),
  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="#events"
      sectionId={event_id}
    />
  )
}

export default FinalizeEventPayment
