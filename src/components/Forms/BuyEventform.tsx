import { yupResolver } from '@hookform/resolvers/yup'
import { type ReactElement, useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getEventURL } from '../../api/getApiServices'
import { getBuyEventTicketUrl } from '../../api/postApiServices'
import { useAppSelector, useDependant, useFormSubmit } from '../../hooks'
import useSuccessPaymentNotification from '../../hooks/useSuccessPaymentNotification'
import { IEventDetails, ITicket } from '../../types/interfaces'
import { TModal } from '../../types/types'
import { buyTicketSchema } from '../../validation/schemas'
import { Box, Button, Center } from '../common'
import { CustomInput, CustomInputDiv } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'
import PrivacyPolicy from '../common/PrivacyPolicy'

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
  nif: number;
  image_rights: boolean;
  newsletter: boolean;
};

export function BuyEventform({ modal, eventId }: Props): ReactElement {
  const {
    currency, ongId = ''
  } = useAppSelector(({ ong }) => ({ currency: ong.ongConfig?.platformConfig.currency_symbol, ongId: ong.ongId, }))
  const { t } = useTranslation()
  const {
    data: eventDetails
  } = useDependant<IEventDetails>(getEventURL(eventId), [`event_ticket${eventId}`], eventId)
  const { EventTickets = [], price } = eventDetails || {}

  const {
    register, handleSubmit, formState: { errors },
  } = useForm<TBuyTicketFormSubmit>({ resolver: yupResolver(buyTicketSchema) })

  const { submit, ...states } = useFormSubmit<TBuyTicketFormSubmit>({
    url: getBuyEventTicketUrl(eventId), isPayment: true, redirectPath: 'events'
  })

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
      <Box mt={1} key={ticket.id}>
        <CustomLabel>
          {ticket.type} ({ticket.price}
          {currency})
        </CustomLabel>
        <br />
        <CustomInput type="hidden" {...register(`tickets.${i}.id`)} value={ticket.id} />
        <TicketInput
          type="number"
          max="1"
          placeholder={t('placeholders.ticket')}
          {...register(`tickets.${i}.amount`)}
        />
      </Box>
    )),
    [EventTickets, register, currency]
  )
  return (
    <BuyFrom modal={modal} onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        {...states}
        successMsg={useSuccessPaymentNotification()}
        errorMsg={t('fail.error')}
        successId={`${eventId}_success`}
        errorId={`${eventId}_error`}
      />
      {!!EventTickets.length && (
        <div>
          <FormTitle>
            {t('event_single.num_of_entries')} {price}
          </FormTitle>
          <p>{t('event_single.ticket_person')}</p>

          {ticketsInputs}
        </div>
      )}

      <FormTitle>{t('personal_information')}</FormTitle>
      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput placeholder={t('placeholders.firstname')} {...register('firstName')} />
          {errors.firstName?.message && <ErrorInput msg={t('errors.firstname')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <CustomInput placeholder={t('placeholders.lastname')} {...register('lastName')} />
          {errors.lastName?.message && <ErrorInput msg={t('errors.lastname')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow modal={modal}>
        <CustomInputDiv>
          <CustomInput placeholder={t('placeholders.email')} {...register('user_email')} />
          {errors.user_email?.message && <ErrorInput msg={t('errors.email')} />}
        </CustomInputDiv>

        <CustomInputDiv>
          <CustomInput placeholder={t('placeholders.phone')} {...register('mobilePhone')} />
          {errors.mobilePhone?.message && <ErrorInput msg={t('errors.phone')} />}
        </CustomInputDiv>
      </FormRow>

      <FormRow width="50%">
        <CustomInputDiv pr="0.4rem">
          <CustomInput placeholder={t('placeholders.ID')} {...register('nif')} />
          {errors.nif?.message && <ErrorInput msg={t('errors.ID')} />}
        </CustomInputDiv>
      </FormRow>

      <CheckBoxInput type="checkbox" {...register('terms_and_conditions')} />
      <PrivacyPolicy />
      {errors.terms_and_conditions?.message && <ErrorInput msg={t('errors.privacypolicy')} />}

      <br />

      <CheckBoxInput type="checkbox" {...register('image_rights')} />
      <span style={{ fontSize: '1rem' }}>{t('event_single.image_rights')}</span>
      {errors.image_rights?.message && <ErrorInput msg={t('errors.image_rights')} />}

      <br />
      <CheckBoxInput type="checkbox" {...register('newsletter')} />
      <span style={{ fontSize: '1rem' }}>{t('event_single.newsletter')}</span>
      {errors.newsletter?.message && <ErrorInput msg={t('errors.newsletter')} />}

      <Center>
        <Button mt="1.8rem" px="2.8rem">
          {t('pay')} {currency}
        </Button>
      </Center>
    </BuyFrom>
  )
}
const BuyFrom = styled.form<{ modal: TModal }>`
  width: ${({ modal }) => (modal ? '60%' : '100%')};
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100% !important;
  }
`
const FormTitle = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  margin-top: 3.2rem;
  font-size: 1.8rem;
`

const FormRow = styled.div<{ modal?: TModal; width?: TWidth }>`
  display: flex;
  flex-direction: ${({ modal }) => (modal ? 'column' : 'row')};
  gap: 0.8rem;
  margin-top: 1.2rem;
  width: ${({ width }) => width || '100%'};
`

const CheckBoxInput = styled.input`
  margin-top: 1.8rem;
  width: 30px;
`

const CustomLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 700;
`

const TicketInput = styled.input`
  width: 100%;
  height: 3.2rem;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 0.4rem;
  padding: 0.8rem;
  color: ${({ theme }) => theme.primary};
  margin-top: 0.8rem;
  &:focus {
    outline: none;
  }
`
BuyEventform.defaultProps = {
  modal: false,
}
