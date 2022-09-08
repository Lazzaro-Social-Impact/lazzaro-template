import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()
  const {
    handleSubmit, register, formState: { errors }
  } = useForm<TVolunteerSubmitForm>({ resolver: yupResolver(volunteerSchema) })

  const {
    submit, ...states
  } = useFormSubmit<TVolunteerSubmitForm>({ url: getAddVolunteerUrl(), isPayment: false })

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
          successMsg={t('success.message')}
          errorMsg={t('fail.message')}
          successId="volunteer-form-success"
          errorId="volunteer-form-error"
        />
        <SectionTitle textAlign="center" fontSize={2.4}>
          {t('want_volunteer')}
        </SectionTitle>
        <Flex wrap="nowrap" justify="space-around" gap={2}>
          <CustomInputDiv>
            <CustomInput placeholder={t('placeholders.firstname')} {...register('firstName')} />
            {errors.firstName?.message && <ErrorInput msg={t('errors.firstname')} />}
          </CustomInputDiv>
          <CustomInputDiv>
            <CustomInput placeholder={t('placeholders.lastname')} {...register('lastName')} />
            {errors.lastName?.message && <ErrorInput msg={t('errors.lastname')} />}
          </CustomInputDiv>
        </Flex>

        <CustomInput placeholder={t('placeholders.email')} {...register('user_email')} />
        {errors.user_email?.message && <ErrorInput msg={t('errors.email')} />}
        <CustomInput placeholder={t('placeholders.address')} {...register('home_address')} />
        {errors.home_address?.message && <ErrorInput msg={t('errors.address')} />}

        <Center>
          <Button px="2.8rem" type="submit">{t('send')}</Button>
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
