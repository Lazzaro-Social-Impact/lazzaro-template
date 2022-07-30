import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import * as yup from 'yup'
import { getEventURL } from '../../api/getApiServices'
import { getBuyEventTicketUrl } from '../../api/postApiServices'
import { useAppSelector, useDependant, usePostData } from '../../hooks'
import { Button } from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'

interface Props {
    modal?: boolean;
    eventId?: string;
}
interface ITicket {
    amount: number;
    id: string;
}

type buyTicketFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms_and_conditions: boolean;
  tickets: ITicket[];
}
const buyTicketSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  user_email: yup.string().required('Email is required'),
  mobilePhone: yup.string().required('Mobile phone is required'),
  terms_and_conditions: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
  tickets: yup.array().of(yup.object({
    amount: yup.number().required('Amount is required'),
    id: yup.string().required('Ticket id is required'),
  })).required('Tickets are required'),

})

export function BuyEventform({ modal, eventId }: Props): ReactElement<Props> {
  const { primary, secondary } = useTheme() as { [key: string]: string }
  const currency = useAppSelector((state) => state.ong.ongConfig?.platformConfig?.currency_symbol)
  const ongId = useAppSelector(({ ong }) => ong.ongId)
  const { id } = useParams()
  const dependEventId = eventId || id
  const { data: eventDetails } = useDependant(
    getEventURL(dependEventId), [`event_ticket${dependEventId}`], dependEventId
  )
  const EventTickets = eventDetails?.EventTickets
  const price = eventDetails?.price
  const { register, handleSubmit, formState: { errors } } = useForm<buyTicketFormSubmit>({
    resolver: yupResolver(buyTicketSchema),
  })

  const {
    mutateAsync, isLoading, isError, isSuccess,
  } = usePostData(getBuyEventTicketUrl(dependEventId))

  const onSubmit = async (data: buyTicketFormSubmit) => {
    const formData = {
      ...data,
      event_id: dependEventId,
      ong_id: ongId,
    }
    const { data: { data: payPayLink } } = await mutateAsync(formData)
    window.open(payPayLink, '_blank')
  }
  return (
    <BuyFrom modal={modal} onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        successMsg="Please navigate to the payment page to complete your purchase"
        errorMsg="Something went wrong, please try again later"
        successId={`${dependEventId}_success`}
        errorId={`${dependEventId}_error`}
      />
      {EventTickets && (
      <div>
        <FormTitle modal={modal}>
          Number of entries {price}
        </FormTitle>
        <p>
          Only one ticket per person. You
          can buy more tickets by repeating the purchase process.
        </p>

        <CustomLabel key={EventTickets[0].id}>
          {EventTickets[0].type}
          {' '}

          (
          {EventTickets[0].price}
          {currency}
          )
        </CustomLabel>
        <CustomInput
          type="hidden"
          {...register('tickets.0.id')}
          value={EventTickets[0].id}
        />
        <CustomInput
          type="number"
          placeholder="Please enter the number of tickets"
          {...register('tickets.0.amount')}
        />

        <CustomLabel key={EventTickets[1].id}>
          {EventTickets[1].type}
          {' '}
          (
          {EventTickets[1].price}
          {currency}
          )
        </CustomLabel>
        <CustomInput
          type="hidden"
          {...register('tickets.1.id')}
          value={EventTickets[1].id}
        />
        <CustomInput
          type="number"
          placeholder="Please enter the number of tickets"
          {...register('tickets.1.amount')}
        />

      </div>
      )}
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
margin-top: 3.2rem;
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

const CustomLabel = styled.label`
font-size: 1.1rem;
font-weight: 700;
`
BuyEventform.defaultProps = {
  modal: false,
  eventId: '',
}
