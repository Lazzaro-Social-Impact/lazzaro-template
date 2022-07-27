import { Form, Input, Radio } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Button } from '../common'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export function BecomeMemberForm(): ReactElement {
  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <img
            src="https://via.placeholder.com/1254x290"
            alt=""
          />
        </ImageContainer>
        <Form layout="vertical" style={{ padding: '0 10.2rem' }}>
          <FormTitle>
            Membership registration
          </FormTitle>
          <FormSubtitle>
            We are delighted to have you as a member, but in order to complete your
            membership, we need some information from you.
          </FormSubtitle>
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
          <FormRow>
            <Input
              placeholder="DNI/NIF/Passport"
              size="large"
              style={{ width: '100%' }}
            />
            <Input
              placeholder="Phone"
              size="large"
              style={{ width: '100%' }}
            />
          </FormRow>
          <FormRow>
            <Input
              placeholder="Email"
              size="large"
              style={{ width: '100%' }}
            />
            <Input
              placeholder="Date of birth"
              size="large"
              style={{ width: '100%' }}
            />
          </FormRow>
          <Input
            placeholder="Address (street, city and postal code)"
            size="large"
            style={{ width: '100%', marginTop: '1.2rem' }}
          />
          <RadioQuestion>
            I have read and accepted the NGOs privacy policy.
          </RadioQuestion>
          <CustomRadio
            style={{ marginTop: '1.2rem' }}
            name="privacy"
          >
            I accept
          </CustomRadio>
          <CustomRadio
            name="privacy"
          >
            I dont accept (in this case, we will not be able to process your membership)
          </CustomRadio>
          <RadioQuestion>
            Would you like us to process your registration as a member of the NGO?
          </RadioQuestion>
          <CustomRadio
            name="member"
          >
            Yes
          </CustomRadio>
          <CustomRadio
            name="member"
          >
            No
          </CustomRadio>
          <Center>
            <Button
              px="2.4rem"
              py="0.8rem"
              bgColor="green"
            >
              Submit
            </Button>
          </Center>
        </Form>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4.2rem;
padding: 0 8.8rem;
gap: 2.4rem;
`

const ImageContainer = styled.div`
width: 1254px;
height: 240px;
img {
    width: 100%;
    height: 100%;
}
`

const FormTitle = styled.h1`
    font-size: 2.4rem;
    color: green;
    font-weight: bold;
`

const FormSubtitle = styled.p`
color: #8c8c8c;
letter-spacing: 1.2px;
margin: 2.8rem 0;
`

const FormRow = styled.div`
display: flex;
gap: 1.2rem;
margin-top: 0.8rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
`

const RadioQuestion = styled.p`
color: #8c8c8c;
letter-spacing: 1.2px;
margin-top: 1.8rem;
`

const CustomRadio = styled(Radio)`
display: block;
  span {
    font-weight: 600;
    font-size: 0.9rem;
  }
  .ant-radio-checked .ant-radio-inner {
    border-color: green;
  }
  .ant-radio-inner::after {
    background-color: green !important;
  }
`
