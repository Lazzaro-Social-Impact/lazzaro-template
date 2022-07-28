import { Form, Input } from 'antd'
import React, { ReactElement } from 'react'
import styled, { useTheme } from 'styled-components'
import { Button } from '../common'

export function ContactEventForm(): ReactElement {
  const { primary, secondary } = useTheme() as { [key: string]: string }

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
      <Button
        px="2.4rem"
        py="0.8rem"
        type="submit"
        bgColor={primary}
        hoverBgColor={secondary}
      >Send
      </Button>
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
