import { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CustomInput, CustomTextArea } from '../common/CustomInput'
import { Button, Center } from '../common'
import { ErrorInput } from '../common/ErrorInput'
import { useAppSelector, usePostData } from '../../hooks'
import { getSendContactEventUrl } from '../../api/postApiServices'
import HandleResponse from '../common/HandleResponse'

const contactEventSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().required('Email is required'),
  text: yup.string().required('Message is required'),
}).required()
interface IProps {
  id: string
}

type contactEventForm = {
  name: string
  email: string
  text: string
}
export function ContactEventForm({ id }: IProps): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<contactEventForm>({
    resolver: yupResolver(contactEventSchema),
  })
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const {
    isLoading, isError, isSuccess, mutateAsync
  } = usePostData(getSendContactEventUrl(ongId, id))

  const onSubmit = async (data: any) => {
    await mutateAsync(data)
  }

  return (
    <ContactForm onSubmit={handleSubmit(onSubmit)}>
      <HandleResponse
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        successMsg="Message sent successfully"
        errorMsg="Error sending message"
        successId={`contact-event-form-${id}`}
        errorId={`contact-event-form-${id}`}
      />
      <CustomInput
        placeholder="Name"
        {...register('name')}
      />
      <ErrorInput msg={errors?.name?.message} />
      <CustomInput
        placeholder="Email"
        {...register('email')}
      />
      <ErrorInput msg={errors?.email?.message} />
      <CustomTextArea
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
    gap: 1.2rem;
    text-align: left;
`
