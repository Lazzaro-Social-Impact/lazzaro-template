import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button, Center, Input, TextArea
} from '../common'
import { ErrorInput } from '../common/ErrorInput'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { getSendContactEventUrl } from '../../api/postApiServices'
import HandleResponse from '../common/HandleResponse'
import { contactEventSchema } from '../../validation/schemas'

interface IProps {
  id: string
}

type TContactEventForm = {
  name: string
  email: string
  text: string
}
export function ContactEventForm({ id }: IProps): ReactElement {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<TContactEventForm>({ resolver: yupResolver(contactEventSchema), })

  const { submit, ...states } = useFormSubmit<TContactEventForm>(getSendContactEventUrl(ongId, id))

  return (
    <ContactForm onSubmit={handleSubmit(submit)}>
      <HandleResponse
        {...states}
        successMsg="Message sent successfully"
        errorMsg="Error sending message"
        successId={`contact-event-form-${id}`}
        errorId={`contact-event-form-${id}`}
      />
      <Input
        placeholder="Name"
        {...register('name')}
      />
      <ErrorInput msg={errors?.name?.message} />
      <Input
        mt={0}
        placeholder="Email"
        {...register('email')}
      />
      <ErrorInput msg={errors?.email?.message} />
      <TextArea
        placeholder="Message"
        rows={4}
        {...register('text')}
      />
      <ErrorInput msg={errors?.text?.message} />

      <Center>
        <Button px={2.4} type="submit">Send</Button>
      </Center>
    </ContactForm>
  )
}

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
`
