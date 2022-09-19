import { yupResolver } from '@hookform/resolvers/yup'
import { type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getBuyCourseUrl } from '../../api/getApiServices'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { buyCourseTicketSchema } from '../../validation/schemas'
import {
  Button, Input, Label
} from '../common'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'
import PrivacyPolicy from '../common/PrivacyPolicy'

interface Props {
  courseId: string;
}

type TBuyCourseFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms: boolean;
};

export default function BuyCourseForm({ courseId }: Props): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId)

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<TBuyCourseFormSubmit>({ resolver: yupResolver(buyCourseTicketSchema), })
  const {
    submit, ...states
  } = useFormSubmit<TBuyCourseFormSubmit>({ url: getBuyCourseUrl(courseId), isPayment: true, redirectPath: 'courses' })
  const { t } = useTranslation()
  const onSubmit = (data: TBuyCourseFormSubmit) => {
    const formData = { ...data, course_id: courseId, ong_id: ongId }

    submit(formData)
  }

  return (
    <>
      <HandleResponse
        {...states}
        successMsg={t('success.paypal_navigate')}
        errorMsg={t('fail.error')}
        successId={`${courseId}_success`}
        errorId={`${courseId}_error`}
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label size={2}>{t('personal_information')}</Label>
        <Input placeholder="Name" {...register('firstName')} />
        {errors.firstName?.message && <ErrorMsg msg={t('errors.firstname')} align="flex-start" /> }

        <Input placeholder="Surname" {...register('lastName')} />
        {errors.lastName?.message && <ErrorMsg msg={t('errors.lastname')} align="flex-start" /> }

        <Input type="email" placeholder="Email" {...register('user_email')} />
        {errors.user_email?.message && <ErrorMsg msg={t('errors.email')} align="flex-start" />}

        <Input placeholder="Phone" {...register('mobilePhone')} />
        {errors.mobilePhone?.message && <ErrorMsg msg={t('errors.phone')} align="flex-start" />}

        <Label style={{ alignSelf: 'flex-start' }}>
          <Input w="25px" mt={1.8} type="checkbox" {...register('terms')} />
          <PrivacyPolicy />
        </Label>
        {errors.terms?.message && <ErrorMsg msg={t('errors.privacypolicy')} align="flex-start" />}

        <Button mt={3} px={3}>{t('pay')}</Button>
      </Form>
    </>
  )
}

const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem 5.4rem;
  text-align: center;

`
