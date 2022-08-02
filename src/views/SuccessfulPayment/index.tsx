/* eslint-disable max-len */
import { Result } from 'antd'
import { useEffect, type FC } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {
  getFinalizeProjectDonationUrl,
  getFinalizeEventPaymentUrl,
  getFinalizeCoursePaymentUrl,
  getFinalizeProductPaymentUrl,
  getFinalizeDonationUrl,
  getFinalizeBecomeAPartnerUrl
} from '../../api/postApiServices'
import { Footer, Navbar } from '../../components'
import { useAppSelector, usePostData } from '../../hooks'
import BlockchainTransaction from './BlockchainTransaction'

interface TUserInfo {
  feature: string;
  firstName: string;
  lastName: string;
  user_email: string;
  home_address: string;
  certificate:string;
  text: string;
  anonymous: string;
  amount: string;
  nif: string;
  ong_id: string;
  project_id?: string;
  course_id?: string;
  product_id?: string;
  event_id?: string;
}

const SuccessfulPayment: FC = () => {
  const ong_id = useAppSelector(({ ong }) => ong.ongId)
  const token = useSearchParams()[0].get('token') || ''

  const {
    feature,
    firstName,
    lastName,
    user_email,
    home_address,
    certificate,
    text,
    anonymous,
    nif,
    amount,
    id,
    newsletter,
    mobilePhone,
    productAmount,
    cp,
    city,
    country,
    address
  } = useParams() as Record<string, string>

  const url = feature === 'causes' ? getFinalizeProjectDonationUrl(ong_id, token)
    : feature === 'events' ? getFinalizeEventPaymentUrl(id, token)
      : feature === 'courses' ? getFinalizeCoursePaymentUrl(id)
        : feature === 'store' ? getFinalizeProductPaymentUrl()
          : feature === 'donate' ? getFinalizeDonationUrl(ong_id)
            : feature === 'subscriptions' ? getFinalizeBecomeAPartnerUrl()
              : ''

  const { mutateAsync, data } = usePostData<{data:string}, TUserInfo>(url)

  const getTransactionId = async () => {
    await mutateAsync({
      feature,
      firstName,
      lastName,
      user_email,
      home_address,
      certificate,
      text,
      anonymous,
      nif,
      amount,
      ong_id,
      ...(feature === 'causes' && { project_id: id }),
      ...(feature === 'events' && { event_id: id, newsletter, mobilePhone }),
      ...(feature === 'courses' && { course_id: id, mobilePhone }),
      ...(feature === 'store' && {
        product_id: id, mobilePhone, productAmount, cp, city, country, address
      }),
    })
  }

  useEffect(() => {
    getTransactionId()
  }, [])

  return (
    <>
      <Navbar />
      <Result
        status="success"
        title="Purchase made successfully!"
        extra={(
          <BlockchainTransaction
            transactionId={data?.data.data || ''}
            redirectPath={feature as '/' | 'events' | 'courses' | 'causes' | 'store' | 'donate' | 'subscriptions'}
          />
)}
      />
      <Footer />
    </>
  )
}

export default SuccessfulPayment
