import { MailFilled, MailOutlined, PhoneFilled } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { getSendContactUrl } from '../../api/postApiServices'
import {
  useAppSelector, useGeocoding, useFormSubmit
} from '../../hooks'
import { contactSchema } from '../../validation/schemas'
import {
  Button, Center, Flex, Input, Label, TextArea
} from '../common'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'
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
  const { phone, email = '', address = '' } = useAppSelector((state) => state.ong.ongConfig?.contact) || {}

  const {
    register, handleSubmit, formState: { errors }
  } = useForm<ContactSubmitForm>({ resolver: yupResolver(contactSchema), })

  const { submit, ...states } = useFormSubmit<ContactSubmitForm & { ongEmail:string }>(getSendContactUrl())

  const onSubmit = (data: ContactSubmitForm) => {
    submit({ ...data, ongEmail: email })
  }

  const { lat, lng } = useGeocoding(address)

  return (
    <>
      <Navbar />
      {address && <Map lat={lat} lng={lng} height={28} />}
      <Container>

        <ContactusFormBox onSubmit={handleSubmit(onSubmit)}>
          <HandleResponse
            {...states}
            successMsg="Your message has been sent successfully"
            errorMsg="Something went wrong, please try again"
            successId="contact-success"
            errorId="contact-error"
          />
          <FormTitle>Contact us</FormTitle>
          <FormRow>
            <Flex>
              <Input placeholder="Name" {...register('name')} />
              <ErrorInput msg={errors.name?.message} />
            </Flex>

            <Flex>
              <Input placeholder="Surname" {...register('lastName')} />
              <ErrorInput msg={errors.lastName?.message} />
            </Flex>
          </FormRow>
          <Input placeholder="Email" {...register('email')} />
          <ErrorInput msg={errors.email?.message} />
          <Input placeholder="Subject" {...register('subject')} />
          <ErrorInput msg={errors.subject?.message} />
          <TextArea placeholder="Message" rows={4} {...register('message')} />
          <ErrorInput msg={errors.message?.message} />
          <Label>
            <Input
              w="15px"
              mr={0.625}
              type="checkbox"
              {...register('terms')}
            />
            <span>I agree to the privacy policy</span>
            <ErrorInput msg={errors.terms?.message} />
          </Label>

          <Center>
            <Button type="submit">Send Message</Button>
          </Center>
        </ContactusFormBox>

        <ContactDetailsBox>
          <BoxTitle>Contact info</BoxTitle>
          <InfoBox>
            <MailOutlined />
            <InfoText>
              <TextTitle>Our office</TextTitle>
              <TextHolder>{address}</TextHolder>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <PhoneFilled />
            <InfoText>
              <TextTitle>Get in touch</TextTitle>
              <TextHolder>{phone}</TextHolder>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <MailFilled />
            <InfoText>
              <TextTitle>Write to us</TextTitle>
              <TextHolder>{email}</TextHolder>
            </InfoText>
          </InfoBox>
        </ContactDetailsBox>
      </Container>

      <Footer />
    </>
  )
}

const Container = styled.div`
display: flex;
justify-content: center;
margin: 0 9.4rem;
margin-top: -12.4rem;
z-index: 1;
`

const ContactusFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 4.8rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`

const FormTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
  color:  ${({ theme }) => theme.primary};
`
const FormRow = styled.div`
display: flex;
gap: 1.2rem;
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

const InfoBox = styled.div`
  display: flex;
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
