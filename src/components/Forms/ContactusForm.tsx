import { MailFilled, MailOutlined, PhoneFilled } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import * as yup from 'yup'
import { getSendContactUrl } from '../../api/postApiServices'
import { useAppSelector, usePostData } from '../../hooks'
import { Button, Flex } from '../common'
import { CustomInput, CustomInputDiv, CustomTextArea } from '../common/CustomInput'
import { ErrorInput } from '../common/ErrorInput'
import HandleResponse from '../common/HandleResponse'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

type ContactSubmitForm = {
  name: string
  lastName: string
  email: string
  subject: string
  message: string
  terms: boolean
}
const contactSchema = yup.object({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Invalid email'),
  subject: yup.string().required('Subject is required'),
  message: yup.string().required('Message is required'),
  terms: yup.boolean().oneOf([true], 'You must accept the terms and conditions')
})

export function ContactusForm(): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactSubmitForm>({
    resolver: yupResolver(contactSchema),
  })
  const phone = useAppSelector((state) => state.ong?.ongConfig?.contact.phone)
  const email = useAppSelector((state) => state.ong?.ongConfig?.contact.email)
  const address = useAppSelector((state) => state.ong?.ongConfig?.contact.address)

  const {
    isLoading, isSuccess, isError, mutateAsync
  } = usePostData(getSendContactUrl())
  const onSubmit = async (data: any) => {
    await mutateAsync({
      ...data,
      ongEmail: email,
    })
  }
  return (
    <>
      <Navbar />
      {/* Google map frame  */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151
          .89841008982!2d-122.4207305!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1
          024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f65e9b%3A0x24a8c2b1f872403a!2s
          ${address}!5e0!3m2!1sen!2sin!4v1574670105811!5m2!1sen!2sin`}
        width="100%"
        height="447px"
        frameBorder="0"
        style={{ position: 'absolute', top: '-50px', zIndex: '1' }}
        allowFullScreen
        title="google-map"
      />
      <Container>

        <ContactusFormBox onSubmit={handleSubmit(onSubmit)}>
          <HandleResponse
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            successMsg="Your message has been sent successfully"
            errorMsg="Something went wrong, please try again"
            successId="contact-success"
            errorId="contact-error"
          />
          <FormTitle>Contact us</FormTitle>
          <FormRow>
            <CustomInputDiv>

              <CustomInput
                placeholder="Name"
                {...register('name')}
              />
              <ErrorInput msg={errors.name?.message} />
            </CustomInputDiv>
            <CustomInputDiv>

              <CustomInput
                placeholder="Surname"
                {...register('lastName')}
              />
              <ErrorInput msg={errors.lastName?.message} />
            </CustomInputDiv>
          </FormRow>
          <CustomInput
            placeholder="Email"
            {...register('email')}
          />
          <ErrorInput msg={errors.email?.message} />
          <CustomInput
            placeholder="Subject"
            {...register('subject')}
          />
          <ErrorInput msg={errors.subject?.message} />
          <CustomTextArea
            placeholder="Message"
            style={{ width: '100%' }}
            rows={4}
            {...register('message')}
          />
          <ErrorInput msg={errors.message?.message} />
          <label>
            <input
              type="checkbox"
              style={{ width: '15px', marginRight: '10px' }}
              {...register('terms')}
            />
            <span>I agree to the privacy policy</span>
            <ErrorInput msg={errors.terms?.message} />
          </label>

          <Flex>
            <Button type="submit">Send Message</Button>
          </Flex>
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
margin-top: 20.4rem;
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
