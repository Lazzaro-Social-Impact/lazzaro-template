import { Radio } from 'antd'
import React, { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import { Button } from '../common'
import HandleResponse from '../common/HandleResponse'
import { useAppSelector, usePostData } from '../../hooks'
import { getBecomePartnerUrl } from '../../api/postApiServices'

type memberSubmitForm = {
  firstName: string
  lastName: string
  user_email: string
  home_address: string
  birthDate: Date
  nif: number
  terms: boolean
  membership: boolean
  phone: string
}
const memberSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  user_email: yup.string().required('Email is required'),
  home_address: yup.string().required('Address is required'),
  birthDate: yup.date().required('Birth of Date is required'),
  nif: yup.number().required('ID is required').typeError('ID must be a number'),
  terms: yup.boolean().typeError('You must accept the terms and conditions'),
  membership: yup.boolean().typeError('You must accept the membership'),
  phone: yup.string().required('Phone is required')
}).required()

export function BecomeMemberForm(): ReactElement {
  const {
    register, handleSubmit, formState: { errors }, control
  } = useForm<memberSubmitForm>({
    resolver: yupResolver(memberSchema),
  })
  const {
    isLoading, isSuccess, isError, mutateAsync
  } = usePostData(getBecomePartnerUrl())
  const ongId = useAppSelector((state) => state.ong.ongId)
  const { primary, secondary } = useTheme() as {primary: string, secondary: string}
  const onSubmit = async (data: memberSubmitForm) => {
    const formData = {
      ...data,
      birthDate: data.birthDate.toISOString().split('T')[0],
      amount: 1, // TODO: Ask Ivan about this
      ong_id: ongId
    }
    const { data: { data: payPalLink } } = await mutateAsync(formData)

    window.open(payPalLink, '_blank')
  }
  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <img
            src="https://via.placeholder.com/1254x290"
            alt=""
          />
        </ImageContainer>
        <form
          style={{ padding: '0 10.2rem' }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <HandleResponse
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            successMsg="Please navigate to PayPal to complete the payment"
            errorMsg="Something went wrong, please try again later"
            successId="success-become-member"
            errorId="error-become-member"
          />
          <FormTitle>
            Membership registration
          </FormTitle>
          <FormSubtitle>
            We are delighted to have you as a member, but in order to complete your
            membership, we need some information from you.
          </FormSubtitle>
          <FormRow>
            <CustomInputDiv>
              <CustomInput
                placeholder="Name"
                style={{ width: '100%' }}
                {...register('firstName')}
              />
              <p>
                {errors.firstName?.message}
              </p>
            </CustomInputDiv>
            <CustomInputDiv>

              <CustomInput
                placeholder="Surname"
                style={{ width: '100%' }}
                {...register('lastName')}
              />
              <p>
                {errors.lastName?.message}
              </p>
            </CustomInputDiv>

          </FormRow>
          <FormRow>
            <CustomInputDiv>

              <CustomInput
                placeholder="DNI/NIF/Passport"
                style={{ width: '100%' }}
                {...register('nif')}
              />
              <p>

                {errors.nif?.message}
              </p>
            </CustomInputDiv>
            <CustomInputDiv>

              <CustomInput
                placeholder="Phone"
                style={{ width: '100%' }}
                {...register('phone')}
              />
              <p>

                {errors.phone?.message}
              </p>
            </CustomInputDiv>
          </FormRow>
          <FormRow>
            <CustomInputDiv>

              <CustomInput
                placeholder="Email"
                style={{ width: '100%' }}
                {...register('user_email')}
              />
              <p>

                {errors.user_email?.message}
              </p>

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
              <p>

                {errors.birthDate?.message}
              </p>
            </CustomInputDiv>

          </FormRow>
          <CustomInput
            placeholder="Address (street, city and postal code)"
            style={{ width: '100%', marginTop: '1.2rem' }}
            {...register('home_address')}
          />
          <p>
            {errors.home_address?.message}
          </p>

          <RadioQuestion>
            I have read and accepted the NGOs privacy policy.
          </RadioQuestion>
          <CustomRadioGroup
            {...register('terms')}
          >

            <CustomRadio
              style={{ marginTop: '1.2rem' }}
              value
            >
              I accept
            </CustomRadio>
            <CustomRadio
              value={false}
            >
              I dont accept (in this case, we will not be able to process your membership)
            </CustomRadio>
          </CustomRadioGroup>
          <p>
            {errors.terms?.message}
          </p>

          <RadioQuestion>
            Would you like us to process your registration as a member of the NGO?
          </RadioQuestion>
          <CustomRadioGroup
            {...register('membership')}
          >
            <CustomRadio
              value
            >
              Yes
            </CustomRadio>
            <CustomRadio
              value={false}
            >
              No
            </CustomRadio>
          </CustomRadioGroup>
          <p>

            {errors.membership?.message}
          </p>

          <Center>
            <Button
              type="submit"
              py={0.8}
              px={2.4}
              bgColor={primary}
              hoverBgColor={secondary}
            >
              Submit
            </Button>
          </Center>
        </form>
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
padding: 0 8.8rem;
gap: 2.4rem;
`

const ImageContainer = styled.div`
width: 1254px;
height: 240px;
img {
    width: 100%;
    height: 100%;
}
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

const Center = styled.div`
display: flex;
justify-content: center;
`

const RadioQuestion = styled.p`
color: #8c8c8c;
letter-spacing: 1.2px;
margin-top: 1.8rem;
font-size: 1rem;
`
const CustomInput = styled.input`
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    align-self: flex-start;
    box-shadow: ${({ theme }) => theme.primary};
    box-sizing: border-box !important;
    font-family: inherit;
    overflow: visible;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 9.5px 11px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    -webkit-appearance: none;
    touch-action: manipulation;
    text-overflow: ellipsis;
    width: 100%;

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
    }

    & + p {
  color: red;
  margin-bottom: 0;
  margin-top: 0.4rem ;
    }
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

const CustomInputDiv = styled.div`
display: flex;
flex-direction: column;
gap: 0;
width: 100%;

`
const CustomRadioGroup = styled(Radio.Group)`
 & + p {
  color: red;
  margin-top: 0.4rem ;

 }
`

const CustomDatePicker = styled(DatePicker)`
 -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    align-self: flex-start;
    box-shadow: ${({ theme }) => theme.primary};
    box-sizing: border-box !important;
    font-family: inherit;
    overflow: visible;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 9.5px 11px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    -webkit-appearance: none;
    touch-action: manipulation;
    text-overflow: ellipsis;
    width: 100%;

    &:focus {
        outline: none;
        box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
    }

    & + p {
  color: red;
  margin-bottom: 0;
  margin-top: 0.4rem ;
    }
`
