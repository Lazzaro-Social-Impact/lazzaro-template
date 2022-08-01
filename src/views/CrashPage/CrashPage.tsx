import { Result } from 'antd'
import React, { ReactElement } from 'react'

export function CrashPage(): ReactElement {
  return (
    <Result
      status="500"
      title="500"
      subTitle="We apologize for the inconvenience. Please try again later."
      style={{ marginBlock: '3.8rem' }}
    />

  )
}
