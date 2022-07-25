import { Input } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

export function BuyEventform(): ReactElement {
  return (
    <>
      <FormTitle>
        Personal Details
      </FormTitle>
      <FormRow>
        <Input
          placeholder="First Name"
          size="large"
          style={{ width: '50%' }}
        />
        <Input
          placeholder="SurName"
          size="large"
          style={{ width: '50%' }}
        />
      </FormRow>
      <FormRow>
        <Input
          placeholder="Email"
          size="large"
          style={{ width: '50%' }}
        />
        <Input
          placeholder="Phone"
          size="large"
          style={{ width: '50%' }}
        />
      </FormRow>

      <CheckBoxInput
        type="checkbox"
        defaultChecked
      />
      <span>
        I accept the <a href="#">privacy terms</a>
      </span>
      <br />
      <Center>
        <PayButton>
          Pay
        </PayButton>
      </Center>
    </>
  )
}

const FormTitle = styled.h2`
color: green;
font-weight: bold;
`

const FormRow = styled.div`
display: flex;
gap: 0.8rem;
margin-top: 1.2rem;
`

const CheckBoxInput = styled(Input)`
     margin: 40px 0;
      display: inline;
      width: 30px;
`

const PayButton = styled.button`
    background-color: green;
    cursor: pointer;
    padding: 0.6rem 2.4rem;
    color: white;
    border: none;
    border-radius: 20px;
`
const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
