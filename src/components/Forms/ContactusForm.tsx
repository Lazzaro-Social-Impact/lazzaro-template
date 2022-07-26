import { MailFilled, MailOutlined, PhoneFilled } from '@ant-design/icons'
import { Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Button } from '../common'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export function ContactusForm(): ReactElement {
  return (
    <>
      <Navbar />
      {/* Google map frame  */}
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151
          .89841008982!2d-122.4207305!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1
          024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f65e9b%3A0x24a8c2b1f872403a!2s
          San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1574670105811!5m2!1sen!2sin`}
        width="100%"
        height="447px"
        frameBorder="0"
        style={{ position: 'absolute', top: '-50px', zIndex: '-10' }}
        allowFullScreen
        title="google-map"
      />
      <Container>

        <ContactusFormBox layout="vertical">
          <FormTitle>Contact us</FormTitle>
          <FormRow>
            <Input
              placeholder="Name"
              size="large"
              style={{ width: '100%' }}
            />
            <Input
              placeholder="Surname"
              size="large"
              style={{ width: '100%' }}
            />
          </FormRow>
          <Input
            placeholder="Email"
            size="large"
            style={{ width: '100%' }}
          />
          <Input
            placeholder="Subject"
            size="large"
            style={{ width: '100%' }}
          />
          <Input.TextArea
            placeholder="Message"
            size="large"
            style={{ width: '100%' }}
            rows={4}
          />
          <label>
            <Input
              type="checkbox"
              style={{ width: '15px', marginRight: '10px' }}
            />
            <span>I agree to the privacy policy</span>
          </label>
          <Button
            px="3.2rem"
            py="0.8rem"
            bgColor="green"
            style={{ alignSelf: 'center' }}
          >
            Send Message
          </Button>
        </ContactusFormBox>
        <ContactDetailsBox>
          <BoxTitle>Contact info</BoxTitle>
          <InfoBox>
            <MailOutlined
              width="50px"
            />
            <InfoText>
              <TextTitle>Our office</TextTitle>
              <TextHolder>Street, City</TextHolder>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <PhoneFilled />
            <InfoText>
              <TextTitle>Get in touch</TextTitle>
              <TextHolder>Street, City</TextHolder>
            </InfoText>
          </InfoBox>
          <InfoBox>
            <MailFilled />
            <InfoText>
              <TextTitle>Write to us</TextTitle>
              <TextHolder>Street, City</TextHolder>
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
margin-top: 12.8rem;
padding: 0 9.2rem;
`

const ContactusFormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 3.2rem;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
`

const FormTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: bold;
`
const FormRow = styled.div`
display: flex;
gap: 1.2rem;
`
const ContactDetailsBox = styled.div`
display: flex;
flex-direction: column;
padding: 3.2rem 1.8rem;
background-color: green;
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
