import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { getAddVolunteerUrl } from '../../api/postApiServices'
import { Footer, Navbar } from '../../components'
import {
  Button, Flex, SectionTitle
} from '../../components/common'
import { CustomInput, CustomInputDiv } from '../../components/common/CustomInput'
import { ErrorInput } from '../../components/common/ErrorInput'
import HandleResponse from '../../components/common/HandleResponse'
import { useAppSelector, usePostData } from '../../hooks'
import { volunteerSchema } from '../../validation/schemas'

type volunteerSubmitForm = {
  firstName: string
  lastName: string
  user_email: string
  home_address: string
}

function BecomeVolunteerForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<volunteerSubmitForm>({
    resolver: yupResolver(volunteerSchema)
  })
  const ongId = useAppSelector((state) => state.ong.ongId)
  const {
    isLoading, isError, isSuccess, mutateAsync
  } = usePostData(getAddVolunteerUrl())
  const onSubmit = async (data: any) => {
    const formData = {
      ...data,
      ong_id: ongId
    }
    await mutateAsync(formData)
  }
  return (
    <>
      <Navbar />
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <HandleResponse
          isLoading={isLoading}
          isError={isError}
          isSuccess={isSuccess}
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

        <Flex>
          <Button px="2.8rem" type="submit">Send</Button>
        </Flex>
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
