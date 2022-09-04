import { yupResolver } from '@hookform/resolvers/yup'
import { ReactElement, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { getEventURL } from '../../api/getApiServices'
import { getBuyEventTicketUrl } from '../../api/postApiServices'
import {
  useAppSelector, useDependant, useFormSubmit
} from '../../hooks'
import { IEventDetails, ITicket } from '../../types/interfaces'
import { TModal } from '../../types/types'
import { buyTicketSchema } from '../../validation/schemas'
import { Button, Center } from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'

interface Props {
  modal?: TModal;
  eventId: string;
}

type TBuyTicketFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms_and_conditions: boolean;
  tickets: ITicket[];
};

export function BuyEventform({ modal, eventId }: Props): ReactElement {
  const {
    currency, ongId = ''
  } = useAppSelector(({ ong }) => ({ currency: ong.ongConfig?.platformConfig.currency_symbol, ongId: ong.ongId, }))

  const {
    data: eventDetails
  } = useDependant<IEventDetails>(getEventURL(eventId), [`event_ticket${eventId}`], eventId)
  const { EventTickets = [], price } = eventDetails || {}

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<TBuyTicketFormSubmit>({ resolver: yupResolver(buyTicketSchema), })

  const { submit, ...states } = useFormSubmit<TBuyTicketFormSubmit>(getBuyEventTicketUrl(eventId))

  const onSubmit = (data: TBuyTicketFormSubmit) => {
    const formData = {
      ...data,
      event_id: eventId,
      ong_id: ongId,
    }

    submit(formData)
  }

  const ticketsInputs: JSX.Element[] = useMemo(
    () => EventTickets.map((ticket, i: number) => (
      <>
        <CustomLabel key={ticket.id}>
          {ticket.type} ({ticket.price}
          {currency})
        </CustomLabel>
        <CustomInput type="hidden" {...register(`tickets.${i}.id`)} value={ticket.id} />
        <CustomInput
          type="number"
          placeholder="Please enter the number of tickets"
          {...register(`tickets.${i}.amount`)}
        />
      </>
    )),
    [EventTickets, register, currency]
  )
  return (
    <BuyFrom modal={modal} onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        {...states}
        successMsg="Please navigate to the payment page to complete your purchase"
        errorMsg="Something went wrong, please try again later"
        successId={`${eventId}_success`}
        errorId={`${eventId}_error`}
      />
      {EventTickets && (
        <div>
          <FormTitle>Number of entries {price}</FormTitle>
          <p>
            Only one ticket per person. You can buy more tickets by repeating the purchase process.
          </p>

          {ticketsInputs}
        </div>
      )}

      <FormTitle>Personal Details</FormTitle>
      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput placeholder="First Name" {...register('firstName')} />
          <ErrorInput msg={errors.firstName?.message} />
        </CustomInputDiv>

        <CustomInputDiv>
          <CustomInput placeholder="SurName" {...register('lastName')} />
          <ErrorInput msg={errors.lastName?.message} />
        </CustomInputDiv>
      </FormRow>

      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput placeholder="Email" {...register('user_email')} />
          <ErrorInput msg={errors.user_email?.message} />
        </CustomInputDiv>

        <CustomInputDiv>
          <CustomInput placeholder="Phone" {...register('mobilePhone')} />
          <ErrorInput msg={errors.mobilePhone?.message} />
        </CustomInputDiv>
      </FormRow>

      <CheckBoxInput type="checkbox" {...register('terms_and_conditions')} />

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
const BuyFrom = styled.form<{ modal: TModal }>`
  width: ${({ modal }) => (modal ? '60%' : '100%')};
  margin: auto;
`
const FormTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  margin-top: 3.2rem;
`

const FormRow = styled.div<{ modal: TModal }>`
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
