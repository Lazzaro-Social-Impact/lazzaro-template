import { yupResolver } from '@hookform/resolvers/yup'
import { type ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled, { useTheme } from 'styled-components'
import { getBuyCourseUrl } from '../../api/getApiServices'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { buyCourseTicketSchema } from '../../validation/schemas'
import {
  Button, Input, Label, Link
} from '../common'
import { ErrorInput as ErrorMsg } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'

interface Props {
  courseId: string;
}

type TBuyCourseFormSubmit = {
  firstName: string;
  lastName: string;
  user_email: string;
  mobilePhone: string;
  terms: boolean;
};

export default function BuyCourseForm({ courseId }: Props): ReactElement {
  const ongId = useAppSelector(({ ong }) => ong.ongId)
  const { secondary } = useTheme()

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<TBuyCourseFormSubmit>({ resolver: yupResolver(buyCourseTicketSchema), })
  const { submit, ...states } = useFormSubmit<TBuyCourseFormSubmit>(getBuyCourseUrl(courseId))

  const onSubmit = (data: TBuyCourseFormSubmit) => {
    const formData = { ...data, course_id: courseId, ong_id: ongId }

    submit(formData)
  }

  return (
    <>
      <HandleResponse
        {...states}
        successMsg="Please navigate to the payment page to complete your purchase"
        errorMsg="Something went wrong, please try again later"
        successId={`${courseId}_success`}
        errorId={`${courseId}_error`}
      />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label size={2}>Personal details</Label>
        <Input placeholder="Name" {...register('firstName')} />
        <ErrorMsg msg={errors.firstName?.message} align="flex-start" />

        <Input placeholder="Surname" {...register('lastName')} />
        <ErrorMsg msg={errors.lastName?.message} align="flex-start" />

        <Input type="email" placeholder="Email" {...register('user_email')} />
        <ErrorMsg msg={errors.user_email?.message} align="flex-start" />

        <Input placeholder="Phone" {...register('mobilePhone')} />
        <ErrorMsg msg={errors.mobilePhone?.message} align="flex-start" />

        <Label>
          <Input w="25px" mt={1.8} type="checkbox" {...register('terms')} />I accept the{' '}
          <Link color={secondary} to="terms_and_conditions">
            privacy policy
          </Link>
        </Label>
        <ErrorMsg msg={errors.terms?.message} align="flex-start" />

        <Button mt={3} px={3}>Pay</Button>
      </Form>
    </>
  )
}

const Form = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem 6rem;
`
