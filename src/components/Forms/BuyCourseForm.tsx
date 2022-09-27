import { yupResolver } from '@hookform/resolvers/yup'
import { Radio } from 'antd'
import { type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getBuyCourseUrl } from '../../api/getApiServices'
import { useAppSelector, useFormSubmit } from '../../hooks'
import useSuccessPaymentNotification from '../../hooks/useSuccessPaymentNotification'
import { buyCourseTicketSchema } from '../../validation/schemas'
import {
  Button, Input, Label
} from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import { FormRow } from '../common/FormRow'
import HandleResponse from '../common/HandleResponse'
import PrivacyPolicy from '../common/PrivacyPolicy'
import { CustomRadio } from './BecomeMemberForm'
import { FormControl } from './DonateForm'

interface Props {
  courseId: string;
  modal?: boolean;
  disabled?: boolean;
}

type TBuyCourseFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms: boolean;
  certificate: boolean;
};

export default function BuyCourseForm({ courseId, modal, disabled }: Props): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId)
  const { t } = useTranslation()

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<TBuyCourseFormSubmit>({ resolver: yupResolver(buyCourseTicketSchema), })
  const {
    submit, ...states
  } = useFormSubmit<TBuyCourseFormSubmit>({ url: getBuyCourseUrl(courseId), isPayment: true, redirectPath: 'courses' })
  const onSubmit = (data: TBuyCourseFormSubmit) => {
    const formData = {
      ...data,
      course_id: courseId,
      ong_id: ongId,
      amount: 1,
      certificate: data.certificate || false
    }

    submit(formData)
  }

  return (
    <>
      <HandleResponse
        {...states}
        successMsg={useSuccessPaymentNotification()}
        errorMsg={t('fail.error')}
        successId={`${courseId}_success`}
        errorId={`${courseId}_error`}
      />

      <Form courseId={courseId} modal={modal} onSubmit={handleSubmit(onSubmit)}>
        <Label size={1.8}>{t('personal_information')}</Label>
        <FormRow>
          <CustomInputDiv>
            <CustomInput placeholder="Name" {...register('firstName')} />
            {errors.firstName?.message && <ErrorMsg msg={t('errors.firstname')} align="flex-start" /> }
          </CustomInputDiv>

          <CustomInputDiv>
            <CustomInput placeholder="Surname" {...register('lastName')} />
            {errors.lastName?.message && <ErrorMsg msg={t('errors.lastname')} align="flex-start" /> }
          </CustomInputDiv>
        </FormRow>

        <FormRow>
          <CustomInputDiv>
            <CustomInput type="email" placeholder="Email" {...register('user_email')} />
            {errors.user_email?.message && <ErrorMsg msg={t('errors.email')} align="flex-start" />}
          </CustomInputDiv>
          <CustomInputDiv>
            <CustomInput placeholder="Phone" {...register('mobilePhone')} />
            {errors.mobilePhone?.message && <ErrorMsg msg={t('errors.phone')} align="flex-start" />}
          </CustomInputDiv>
        </FormRow>

        <FormControl mt={1.5}>
          <Label style={{ maxWidth: '100%' }}>{t('Certificate question')}</Label>
        </FormControl>
        <Radio.Group {...register('certificate')}>
          <CustomRadio value>
            {t('yes')}
          </CustomRadio>
          <CustomRadio value={false}>
            {t('no')}
          </CustomRadio>
        </Radio.Group>

        <Label style={{ alignSelf: 'flex-start' }}>
          <Input w="25px" mt={1.8} type="checkbox" {...register('terms')} />
          <PrivacyPolicy />
        </Label>
        {errors.terms?.message && <ErrorMsg msg={t('errors.privacypolicy')} align="flex-start" />}

        <Button disabled={disabled} type="submit" mt={3} px={3}>{t('pay')}</Button>
      </Form>
    </>
  )
}

const Form = styled.form<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-top: 1.8rem;
  div {
    flex-direction: ${({ modal }) => (modal ? 'column' : 'row')};
  }
  button {
    align-self: center;
  }
`

BuyCourseForm.defaultProps = {
  modal: false,
  disabled: false
}
