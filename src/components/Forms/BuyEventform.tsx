import { Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Button } from '../common'

interface Props {
    modal?: boolean;
}

export function BuyEventform({ modal }: Props): ReactElement<Props> {
  return (
    <BuyFrom modal={modal}>
      <FormTitle modal={modal}>
        Personal Details
      </FormTitle>
      <FormRow modal={modal}>
        <Input
          placeholder="First Name"
          size="large"
          style={{ width: `${modal ? '100%' : '50%'}` }}
        />
        <Input
          placeholder="SurName"
          size="large"
          style={{ width: `${modal ? '100%' : '50%'}` }}

        />
      </FormRow>
      <FormRow modal={modal}>
        <Input
          placeholder="Email"
          size="large"
          style={{ width: `${modal ? '100%' : '50%'}` }}

        />
        <Input
          placeholder="Phone"
          size="large"
          style={{ width: `${modal ? '100%' : '50%'}` }}

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
        <Button py="0.8rem" px="2.8rem">
          Pay
        </Button>
      </Center>
    </BuyFrom>
  )
}
const BuyFrom = styled(Form)`
    width: ${({ modal }: Props) => (modal ? '60%' : '100%')};
    margin: auto;
`
const FormTitle = styled.h2<Props>`
color: green;
font-weight: bold;
margin-top: ${({ modal }) => (modal ? '2.4rem' : 0)};
`

const FormRow = styled.div<Props>`
display: flex;
flex-direction: ${({ modal }) => (modal ? 'column' : 'row')};
gap: 0.8rem;
margin-top: 1.2rem;
`

const CheckBoxInput = styled(Input)`
     margin: 40px 0;
      display: inline;
      width: 30px;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

BuyEventform.defaultProps = {
  modal: false,
}
