import { useParams } from 'react-router-dom'
import { getFinalizeProductPaymentUrl } from '../../api/postApiServices'
import FinalizePayment from '../../components/FinalizePaymentResult'
import { useAppSelector, useFinalizePayment } from '../../hooks'
import { TFinalizePaymentParams } from '../../types/types'

type TParams = Omit<TFinalizePaymentParams, 'anonymous' | 'certificate' | 'text'> & {
  product_id: string;
  mobilePhone: string;
  productAmount:number;
  cp:number;
  city:string;
  country:string;
  address:string;
};

function FinalizeProductPayment() {
  const ongId = useAppSelector(({ ong }) => ong.ongId) || ''
  const url = getFinalizeProductPaymentUrl()

  const {
    firstName = '',
    lastName = '',
    user_email = '',
    nif = '',
    home_address = '',
    product_id = '',
    mobilePhone = '',
    amount = '0',
    productAmount = '0',
    cp = '0',
    city = '',
    country = '',
    address = '',
  } = useParams<Record<keyof Omit<TParams, 'ong_id'>, string>>()

  const params: TParams = {
    firstName,
    lastName,
    user_email,
    product_id,
    nif,
    home_address,
    ong_id: ongId,
    mobilePhone,
    address,
    city,
    amount: +amount,
    country,
    cp: +cp,
    productAmount: +productAmount,
  }

  const { isLoading, isError, transactionId } = useFinalizePayment<TParams>({ params, url })

  return (
    <FinalizePayment
      transactionId={transactionId}
      isLoading={isLoading}
      isError={isError}
      redirectPath="shop"
      sectionId={product_id}
    />
  )
}

export default FinalizeProductPayment
