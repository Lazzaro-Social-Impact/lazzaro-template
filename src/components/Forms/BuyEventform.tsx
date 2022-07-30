import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'
import * as yup from 'yup'
import { Button } from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'

interface Props {
    modal?: boolean;
}

type buyTicketFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms_and_conditions: boolean;
}
const buyTicketSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  user_email: yup.string().required('Email is required'),
  mobilePhone: yup.string().required('Mobile phone is required'),
  terms_and_conditions: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
})

export function BuyEventform({ modal }: Props): ReactElement<Props> {
  const { primary, secondary } = useTheme() as { [key: string]: string }
  const { register, handleSubmit, formState: { errors } } = useForm<buyTicketFormSubmit>({
    resolver: yupResolver(buyTicketSchema),
  })

  const onSubmit = (data: buyTicketFormSubmit) => {
    console.log(data)
  }
  return (
    <BuyFrom modal={modal} onSubmit={handleSubmit(onSubmit)}>
      <FormTitle modal={modal}>
        Personal Details
      </FormTitle>
      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput
            placeholder="First Name"
            {...register('firstName')}
          />
          <ErrorInput msg={errors.firstName?.message} />
        </CustomInputDiv>
        <CustomInputDiv>
          <CustomInput
            placeholder="SurName"
            {...register('lastName')}
          />
          <ErrorInput msg={errors.lastName?.message} />
        </CustomInputDiv>
      </FormRow>
      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput
            placeholder="Email"
            {...register('user_email')}
          />
          <ErrorInput msg={errors.user_email?.message} />
        </CustomInputDiv>
        <CustomInputDiv>
          <CustomInput
            placeholder="Phone"
            {...register('mobilePhone')}
          />
          <ErrorInput msg={errors.mobilePhone?.message} />
        </CustomInputDiv>
      </FormRow>

      <CheckBoxInput
        type="checkbox"
        {...register('terms_and_conditions')}
      />
      <span>
        I accept the <a href="#">privacy terms</a>
      </span>
      <ErrorInput msg={errors.terms_and_conditions?.message} />
      <Center>
        <Button
          py="0.8rem"
          px="2.8rem"
          bgColor={primary}
          hoverBgColor={secondary}
        >
          Pay
        </Button>
      </Center>
    </BuyFrom>
  )
}
const BuyFrom = styled.form`
    width: ${({ modal }: Props) => (modal ? '60%' : '100%')};
    margin: auto;
`
const FormTitle = styled.h2<Props>`
color: ${({ theme }) => theme.primary};
font-weight: bold;
margin-top: ${({ modal }) => (modal ? '2.4rem' : 0)};
`

const FormRow = styled.div<Props>`
display: flex;
flex-direction: ${({ modal }) => (modal ? 'column' : 'row')};
gap: 0.8rem;
margin-top: 1.2rem;
`

const CheckBoxInput = styled.input`
     margin-top: 2.4rem;
      display: inline;
      width: 30px;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

BuyEventform.defaultProps = {
  modal: false,
}
