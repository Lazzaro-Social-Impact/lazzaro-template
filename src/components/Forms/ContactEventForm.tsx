import { Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

export function ContactEventForm(): ReactElement {
  return (
    <ContactForm layout="vertical">
      <Input
        placeholder="Name"
        size="large"
      />
      <Input
        placeholder="Email"
        size="large"
      />
      <Input.TextArea
        placeholder="Message"
        size="large"
        rows={4}
      />
      <SendButton type="submit">Send</SendButton>
    </ContactForm>
  )
}

const ContactForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
`

const SendButton = styled.button`
    background-color: green;
    cursor: pointer;
    padding: 0.6rem 2.4rem;
    color: white;
    border: none;
    border-radius: 20px;
`
