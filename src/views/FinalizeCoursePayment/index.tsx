import { useParams, useSearchParams } from 'react-router-dom';
import { getFinalizeCoursePaymentUrl } from '../../api/postApiServices';
import FinalizePayment from '../../components/FinalizePaymentResult';
import { useAppSelector, useFinalizePayment } from '../../hooks';
import { TFinalizePaymentParams } from '../../types/types';

type TParams = Omit<TFinalizePaymentParams, 'anonymous' | 'certificate'> & {
  course_id: string;
  mobilePhone: string;
  tickets: { id: string; amount: number }[];
};

function FinalizeCoursePayment() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || '';
  const token = useSearchParams()[0].get('token') || '';

  const url = getFinalizeCoursePaymentUrl(ongId, token);

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    nif = '',
    home_address = '',
    text = '',
    course_id = '',
    mobilePhone = '',
    amount = 0,
    tickets = "[{ id: '', amount: 0 }]",
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>();

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    course_id,
    nif,
    home_address,
    text,
    ong_id: ongId,
    mobilePhone,
    amount: +amount,
    tickets: JSON.parse(tickets),
  };

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url });

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      sectionName='courses'
      sectionId={course_id}
    />
  );
}

export default FinalizeCoursePayment;
