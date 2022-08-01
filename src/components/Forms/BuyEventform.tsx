import { yupResolver } from '@hookform/resolvers/yup'
import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { getEventURL } from '../../api/getApiServices'
import { getBuyEventTicketUrl } from '../../api/postApiServices'
import { useAppSelector, useDependant, usePostData } from '../../hooks'
import { Button, Center } from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'

type TModal = boolean | undefined
interface Props {
  modal?: TModal;
  eventId: string;
}

interface ITicket {
    amount: number;
    id: string;
    price: number;
    type: string;
}
interface IEventDetails {
  EventTickets: ITicket[];
  price: number;
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

export function BuyEventform({ modal, eventId }: Props): ReactElement {
  const currency = useAppSelector((state) => state.ong.ongConfig?.platformConfig?.currency_symbol)
  const ongId = useAppSelector(({ ong }) => ong.ongId)
  const {
    data: eventDetails
  } = useDependant<IEventDetails>(getEventURL(eventId), [`event_ticket${eventId}`], eventId)
  const { EventTickets, price } = eventDetails
  const { register, handleSubmit, formState: { errors } } = useForm<buyTicketFormSubmit>({
    resolver: yupResolver(buyTicketSchema),
  })

  const {
    mutateAsync, isLoading, isError, isSuccess
  } = usePostData<{ data: string }, buyTicketFormSubmit>(getBuyEventTicketUrl(eventId))

  const onSubmit = async (data: buyTicketFormSubmit) => {
    const formData = {
      ...data,
      event_id: eventId,
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
        successId={`${eventId}_success`}
        errorId={`${eventId}_error`}
      />
      {EventTickets && (
      <div>
        <FormTitle>
          Number of entries {price}
        </FormTitle>
        <p>
          Only one ticket per person. You
          can buy more tickets by repeating the purchase process.
        </p>

        {EventTickets.map((ticket, i: number) => (
          <>
            <CustomLabel key={ticket.id}>
              {ticket.type}
              {' '}

              (
              {ticket.price}
              {currency}
              )
            </CustomLabel>
            <CustomInput
              type="hidden"
              {...register(`tickets.${i}.id`)}
              value={ticket.id}
            />
            <CustomInput
              type="number"
              placeholder="Please enter the number of tickets"
              {...register(`tickets.${i}.amount`)}
            />
          </>
        ))}
      </div>
      )}
      <FormTitle>
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
        <Button px="2.8rem">Pay</Button>
      </Center>
    </BuyFrom>
  )
}
const BuyFrom = styled.form<{modal:TModal}>`
    width: ${({ modal }) => (modal ? '60%' : '100%')};
    margin: auto;
`
const FormTitle = styled.h2`
color: ${({ theme }) => theme.primary};
font-weight: bold;
margin-top: 3.2rem;
`

const FormRow = styled.div<{modal:TModal}>`
display: flex;
flex-direction: ${({ modal }) => (modal ? 'column' : 'row')};
gap: 0.8rem;
margin-top: 1.2rem;

`

const CheckBoxInput = styled.input`
     margin-top: 2.4rem;
      width: 30px;
`

const CustomLabel = styled.label`
font-size: 1.1rem;
font-weight: 700;
`
BuyEventform.defaultProps = {
  modal: false,
}
