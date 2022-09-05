import { Radio } from 'antd'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import moment from 'moment'
import { useTranslation } from 'react-i18next'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {
  Button, Center, Input
} from '../common'
import HandleResponse from '../common/HandleResponse'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { getBecomePartnerUrl } from '../../api/postApiServices'
import { ErrorInput } from '../common/ErrorInput'
import { CustomDatePicker, CustomInputDiv } from '../common/CustomInput'
import { memberSchema } from '../../validation/schemas'
import PrivacyPolicy from '../common/PrivacyPolicy'

type TMemberSubmitForm = {
  firstName: string;
  lastName: string;
  user_email: string;
  home_address: string;
  birthDate: string;
  nif: number;
  terms: boolean;
  membership: boolean;
  phone: string;
};

export default function BecomeMemberForm(): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const {
    register, handleSubmit, formState: { errors }, control,
  } = useForm<TMemberSubmitForm>({ resolver: yupResolver(memberSchema) })
  const {
    submit, isError, isLoading, isSuccess
  } = useFormSubmit<TMemberSubmitForm>(getBecomePartnerUrl())
  const { t } = useTranslation()
  const onSubmit = (data: TMemberSubmitForm) => {
    const formData = {
      ...data,
      birthDate: moment(data.birthDate).format('YYYY-MM-DD'),
      amount: 1,
      ong_id: ongId,
    }
    submit(formData)
  }
  return (
    <>
      <Navbar />
      <Container>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <HandleResponse
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            successMsg={t('success.paypal_navigate')}
            errorMsg={t('fail.message')}
            successId="success-become-member"
            errorId="error-become-member"
          />
          <FormTitle>{t('membership.title')}</FormTitle>
          <FormSubtitle>
            {t('membership.subtitle')}
          </FormSubtitle>
          <FormRow>

            <CustomInputDiv>
              <Input placeholder={t('placeholders.firstname')} {...register('firstName')} />
              <ErrorInput msg={errors.firstName?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.lastname')} {...register('lastName')} />
              <ErrorInput msg={errors.lastName?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input type="number" placeholder={t('placeholders.ID')} {...register('nif')} />
              <ErrorInput msg={errors.nif?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.phone')} {...register('phone')} />
              <ErrorInput msg={errors.phone?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.email')} {...register('user_email')} />
              <ErrorInput msg={errors.user_email?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Controller
                control={control}
                name="birthDate"
                render={({ field }: any) => (
                  <CustomDatePicker
                    name="birthDate"
                    placeholderText={t('placeholders.dob')}
                    selected={field.value}
                    onChange={(date: Date) => field.onChange(date)}
                    dateFormat="dd/MM/yyyy"
                    autoComplete="off"
                    dropdownMode="select"
                    showYearDropdown
                    showMonthDropdown
                  />
                )}
              />
              <ErrorInput msg={errors.birthDate?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <Input
            placeholder={t('placeholders.address')}
            {...register('home_address')}
          />
          <ErrorInput msg={errors.home_address?.message} mt={0.4} />

          <PrivacyPolicy /> <br />
          <Radio.Group {...register('terms')}>
            <CustomRadio style={{ marginTop: '1.2rem' }} value>
              {t('I accept')}
            </CustomRadio>
            <CustomRadio value={false}>
              {t('membership.dont_accept_membership')}
            </CustomRadio>
          </Radio.Group>
          <ErrorInput msg={errors.terms?.message} mt={0.4} />

          <RadioQuestion>
            {t('membership.question')}
          </RadioQuestion>
          <Radio.Group {...register('membership')}>
            <CustomRadio value>{t('yes')}</CustomRadio>
            <CustomRadio value={false}>{t('no')}</CustomRadio>
          </Radio.Group>
          <ErrorInput msg={errors.membership?.message} mt={0.4} />

          <Center>
            <Button type="submit">{t('send')}</Button>
          </Center>
        </Form>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.2rem;
  gap: 2.4rem;
`

const Form = styled.form`
  padding-inline: 5.2rem;
  margin-block: 3.4rem;
`

const FormTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
`

const FormSubtitle = styled.p`
  color: #8c8c8c;
  letter-spacing: 1.2px;
  margin: 2.8rem 0;
`

const FormRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 0.8rem;
`

const RadioQuestion = styled.p`
  color: #8c8c8c;
  letter-spacing: 1.2px;
  margin-top: 1.8rem;
  margin-bottom: 0;
  font-size: 1rem;
`

const CustomRadio = styled(Radio)`
  display: block;
  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: ${({ theme }) => theme.primary};
  }
  .ant-radio-inner::after {
    background-color: ${({ theme }) => theme.primary} !important;
  }
`
