import { Result } from 'antd'
import { useEffect, type ReactElement } from 'react'

export default function CrashPage(): ReactElement {
  useEffect(() => {
    document.title = 'Error'
  }, [])
  return (
    <Result
      status="500"
      title="500"
      subTitle="We apologize for the inconvenience. Please try again later."
      style={{ marginBlock: '3.8rem' }}
    />

  )
}
