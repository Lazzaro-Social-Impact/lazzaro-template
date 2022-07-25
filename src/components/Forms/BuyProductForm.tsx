import { Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Button } from '../common'

interface Props {
    modal?: boolean
}
export function BuyProductForm({ modal }: Props): ReactElement<Props> {
  return (
    <Form layout="vertical">
      {modal && (
        <ProductName>Product 001</ProductName>
      )}
      <InputTitle>Your Shopping</InputTitle>
      <Input
        placeholder="Enter the quantity of products"
        type="number"
        min="1"
        style={{ width: '100%' }}
        size="large"
      />
      <InputTitle>Personal Details</InputTitle>
      <InputRow>
        <Input
          placeholder="Name"
          style={{ width: '50%' }}
          size="large"

        />
        <Input
          placeholder="Surname"
          style={{ width: '50%' }}
          size="large"

        />
      </InputRow>
      <InputRow>
        <Input
          placeholder="Email"
          style={{ width: '50%' }}
          size="large"

        />
        <Input
          placeholder="Phone"
          style={{ width: '50%' }}
          size="large"

        />
      </InputRow>
      <InputTitle>Delivery Details</InputTitle>
      <InputRow>

        <Input
          placeholder="Address"
          style={{ width: '50%' }}
          size="large"

        />
        <Input
          placeholder="DNI"
          style={{ width: '50%' }}
          size="large"

        />
      </InputRow>
      <InputRow>
        <Input
          placeholder="Date of Birth"
          style={{ width: '50%' }}
          size="large"

        />
        <Input
          placeholder="Postal Code"
          style={{ width: '50%' }}
          size="large"

        />
      </InputRow>
      <InputRow>
        <Input
          placeholder="City"
          style={{ width: '50%' }}
          size="large"

        />
        <Input
          placeholder="Country"
          style={{ width: '50%' }}
          size="large"

        />
      </InputRow>
      <Input.TextArea
        placeholder="Additional message"
        style={{ width: '100%', marginTop: '1.2rem' }}
        size="large"
        rows={4}
      />

      <label
        style={{ marginTop: '1.2rem' }}
        htmlFor={modal ? 'terms-modal' : 'terms'}
      >
        <Input
          type="checkbox"
          style={{ width: '20px', marginTop: '1.8rem' }}
          id={modal ? 'terms-modal' : 'terms'}
        />
        I accept the privacy policy
      </label>
      <br />
      <Center>
        <Button
          py="0.8rem"
          px="2.4rem"
          bgColor="green"
        >
          Pay
        </Button>
      </Center>

    </Form>
  )
}

const ProductName = styled.h1`
    font-size: 2.2rem;
    font-weight: bold;
    color: green;
    text-align: center;
`
const InputTitle = styled.h3`
    color: green;
    font-weight: 600;
    margin-top: 1.2rem;
    font-size: 1.1rem;
`

const InputRow = styled.div`
    display: flex;
    gap: 1.2rem;
    margin-top: 0.8rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.4rem;
`

BuyProductForm.defaultProps = {
  modal: false,
}
