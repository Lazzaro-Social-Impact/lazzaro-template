import { Radio } from 'antd'
import type { ReactElement } from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import {
  Button, Center, Input
} from '../common'
import HandleResponse from '../common/HandleResponse'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { getBecomePartnerUrl } from '../../api/postApiServices'
import { ErrorInput } from '../common/ErrorInput'
import { CustomInputDiv } from '../common/CustomInput'
import { memberSchema } from '../../validation/schemas'

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
            successMsg="Please navigate to PayPal to complete the payment"
            errorMsg="Something went wrong, please try again later"
            successId="success-become-member"
            errorId="error-become-member"
          />
          <FormTitle>Membership registration</FormTitle>
          <FormSubtitle>
            We are delighted to have you as a member, but in order to complete your membership, we
            need some information from you.
          </FormSubtitle>
          <FormRow>

            <CustomInputDiv>
              <Input placeholder="Name" {...register('firstName')} />
              <ErrorInput msg={errors.firstName?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder="Surname" {...register('lastName')} />
              <ErrorInput msg={errors.lastName?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input type="number" placeholder="DNI/NIF/Passport" {...register('nif')} />
              <ErrorInput msg={errors.nif?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Input placeholder="Phone" {...register('phone')} />
              <ErrorInput msg={errors.phone?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder="Email" {...register('user_email')} />
              <ErrorInput msg={errors.user_email?.message} mt={0.4} />
            </CustomInputDiv>
            <CustomInputDiv>
              <Controller
                control={control}
                name="birthDate"
                render={({ field }: any) => (
                  <CustomDatePicker
                    name="birthDate"
                    placeholderText="Birth of Date"
                    selected={field.value}
                    onChange={(date: Date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    autoComplete="off"
                  />
                )}
              />
              <ErrorInput msg={errors.birthDate?.message} mt={0.4} />
            </CustomInputDiv>
          </FormRow>
          <Input
            placeholder="Address (street, city and postal code)"
            {...register('home_address')}
          />
          <ErrorInput msg={errors.home_address?.message} mt={0.4} />

          <RadioQuestion>I have read and accepted the NGOs privacy policy.</RadioQuestion>
          <Radio.Group {...register('terms')}>
            <CustomRadio style={{ marginTop: '1.2rem' }} value>
              I accept
            </CustomRadio>
            <CustomRadio value={false}>
              I dont accept (in this case, we will not be able to process your membership)
            </CustomRadio>
          </Radio.Group>
          <ErrorInput msg={errors.terms?.message} mt={0.4} />

          <RadioQuestion>
            Would you like us to process your registration as a member of the NGO?
          </RadioQuestion>
          <Radio.Group {...register('membership')}>
            <CustomRadio value>Yes</CustomRadio>
            <CustomRadio value={false}>No</CustomRadio>
          </Radio.Group>
          <ErrorInput msg={errors.membership?.message} mt={0.4} />

          <Center>
            <Button type="submit">Submit</Button>
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

const CustomDatePicker = styled(DatePicker)`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-self: flex-start;
  box-shadow: ${({ theme }) => theme.primary};
  box-sizing: border-box !important;
  font-family: inherit;
  overflow: visible;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  min-width: 0;
  padding: 9.5px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  -webkit-appearance: none;
  touch-action: manipulation;
  text-overflow: ellipsis;
  width: 100%;
  margin-top: 1rem;
  padding: 0.7rem;

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
  }
`
