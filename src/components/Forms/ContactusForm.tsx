import { MailFilled, MailOutlined, PhoneFilled } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { getSendContactUrl } from '../../api/postApiServices'
import {
  useAppSelector, useGeocoding, useFormSubmit
} from '../../hooks'
import { contactSchema } from '../../validation/schemas'
import {
  Button, Center, Input, Label
} from '../common'
import { CustomInputDiv, CustomTextArea } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import { FormRow } from '../common/FormRow'
import HandleResponse from '../common/HandleResponse'
import PrivacyPolicy from '../common/PrivacyPolicy'
import Footer from '../Footer/Footer'
import Map from '../Map'
import Navbar from '../Navbar/Navbar'

type ContactSubmitForm = {
  name: string
  lastName: string
  email: string
  subject: string
  message: string
  terms: boolean
}

export default function ContactusForm(): ReactElement {
  const { phone = '', email = '', address = '' } = useAppSelector((state) => state.ong.ongConfig?.contact) || {}

  const { t } = useTranslation()
  const {
    register, handleSubmit, formState: { errors }, reset
  } = useForm<ContactSubmitForm>({ resolver: yupResolver(contactSchema), })

  const { submit, ...states } = useFormSubmit<ContactSubmitForm & { ongEmail: string }>({
    url: getSendContactUrl(),
    isPayment: false,
  })

  const onSubmit = (data: ContactSubmitForm) => {
    submit({ ...data, ongEmail: email })
    reset()
  }

  const { lat, lng, isLoading: isMapLoading } = useGeocoding(address)

  return (
    <>
      <Navbar />
      {address && (
      <Map lat={lat} lng={lng} height={28} isLoading={isMapLoading} />
      )}

      <Container address={address}>

        <ContactusFormBox onSubmit={handleSubmit(onSubmit)}>
          <HandleResponse
            {...states}
            successMsg={t('success.message')}
            errorMsg={t('fail.message')}
            successId="contact-success"
            errorId="contact-error"
          />
          <FormTitle>{t('contact_us')}</FormTitle>
          <FormRow>
            <CustomInputDiv>
              <Input placeholder={t('placeholders.firstname')} {...register('name')} />
              {errors.name?.message && <ErrorInput msg={t('errors.firstname')} />}
            </CustomInputDiv>

            <CustomInputDiv>
              <Input placeholder={t('placeholders.lastname')} {...register('lastName')} />
              {errors.lastName?.message && <ErrorInput msg={t('errors.lastname')} /> }
            </CustomInputDiv>
          </FormRow>
          <Input placeholder={t('placeholders.email')} {...register('email')} />
          {errors.email?.message && <ErrorInput msg={t('errors.email')} />}
          <Input placeholder={t('placeholders.subject')} {...register('subject')} />
          {errors.subject?.message && <ErrorInput msg={t('errors.subject')} />}
          <CustomTextArea placeholder={t('placeholders.message')} rows={4} {...register('message')} />
          {errors.message?.message && <ErrorInput msg={t('errors.message')} />}
          <Label>
            <Input
              w="15px"
              mr={0.625}
              type="checkbox"
              {...register('terms')}
            />
            <PrivacyPolicy />
          </Label>
          {errors.terms?.message && <ErrorInput msg={t('errors.privacypolicy')} />}

          <Center>
            <Button type="submit">{t('send_message')}</Button>
          </Center>
        </ContactusFormBox>

        <ContactDetailsBox>
          <BoxTitle>{t('contact_info')}</BoxTitle>
          <GridContact>

            <MailOutlined />
            <InfoText>
              <TextTitle>{t('contact_page.official_mail')}</TextTitle>
              <TextHolder>{address}</TextHolder>
            </InfoText>

            <PhoneFilled />
            <InfoText>
              <TextTitle>{t('contact_page.get_in_touch')}</TextTitle>
              <TextHolder>{phone}</TextHolder>
            </InfoText>

            <MailFilled />
            <InfoText>
              <TextTitle>{t('contact_page.write')}</TextTitle>
              <TextHolder>{email}</TextHolder>
            </InfoText>
          </GridContact>

        </ContactDetailsBox>
      </Container>

      <Footer />
    </>
  )
}

const Container = styled.div<{ address: string }>`
display: flex;
justify-content: center;
margin: 0 9.4rem;
margin-top: ${({ address }) => (address ? '-14.4rem' : '6.125rem')};
z-index: 1;


@media screen and (max-width: 768px) {
  margin-inline: 2.4rem;
}
`

const ContactusFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 4.8rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;

  @media screen and (max-width: 768px) {
    padding: 1.4rem;
  }
`

const FormTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color:  ${({ theme }) => theme.primary};
`

const ContactDetailsBox = styled.div`
display: flex;
flex-direction: column;
padding: 3.2rem 1.8rem;
background-color: ${({ theme }) => theme.primary};

align-items: center;
width: 370px;
gap: 1.2rem;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const BoxTitle = styled.h1`
align-self: flex-start;
font-size: 1.4rem;
color: white;
margin-bottom: 2.4rem;
`

const GridContact = styled.div`
  display: grid;
  grid-template-columns: 2.4rem 1fr;
  gap: 2.2rem;
  span {
    font-size: 2.8rem;
  }

`

const InfoText = styled.p`
display: flex;
flex-direction: column;
gap: 0.4rem;
`

const TextHolder = styled.p`
  font-size: 0.8rem;
`
const TextTitle = styled.p`
 color: white;
 margin-bottom: 0;
 `
