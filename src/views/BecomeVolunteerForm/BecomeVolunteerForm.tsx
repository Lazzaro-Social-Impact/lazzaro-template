import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { getAddVolunteerUrl } from '../../api/postApiServices'
import { Footer, Navbar } from '../../components'
import {
  Button, Center, Flex, SectionTitle
} from '../../components/common'
import { CustomInput, CustomInputDiv } from '../../components/common/CustomInput'
import { ErrorInput } from '../../components/common/ErrorInput'
import HandleResponse from '../../components/common/HandleResponse'
import { useAppSelector, useFormSubmit } from '../../hooks'
import { volunteerSchema } from '../../validation/schemas'

type TVolunteerSubmitForm = {
  firstName: string
  lastName: string
  user_email: string
  home_address: string
}

function BecomeVolunteerForm() {
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const {
    handleSubmit, register, formState: { errors }
  } = useForm<TVolunteerSubmitForm>({ resolver: yupResolver(volunteerSchema) })

  const { submit, ...states } = useFormSubmit<TVolunteerSubmitForm>(getAddVolunteerUrl())

  const onSubmit = (data: TVolunteerSubmitForm) => {
    const formData = { ...data, ong_id: ongId }
    submit(formData)
  }
  return (
    <>
      <Navbar />
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <HandleResponse
          {...states}
          successMsg="Your request has been sent successfully"
          errorMsg="Something went wrong, please try again"
          successId="volunteer-form-success"
          errorId="volunteer-form-error"
        />
        <SectionTitle textAlign="center" fontSize={2.4}>
          I want to volunteer
        </SectionTitle>
        <Flex wrap="nowrap" justify="space-around" gap={2}>
          <CustomInputDiv>
            <CustomInput placeholder="First Name" {...register('firstName')} />
            <ErrorInput msg={errors.firstName?.message} />
          </CustomInputDiv>
          <CustomInputDiv>
            <CustomInput placeholder="Surname" {...register('lastName')} />
            <ErrorInput msg={errors.lastName?.message} />
          </CustomInputDiv>
        </Flex>

        <CustomInput placeholder="Email" {...register('user_email')} />
        <ErrorInput msg={errors.user_email?.message} />
        <CustomInput placeholder="Address" {...register('home_address')} />
        <ErrorInput msg={errors.home_address?.message} />

        <Center>
          <Button px="2.8rem" type="submit">Send</Button>
        </Center>
      </CustomForm>
      <Footer />
    </>
  )
}

const CustomForm = styled.form`
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.8rem;
  max-width: 900px;
  margin: 0 auto;
`

export default BecomeVolunteerForm
