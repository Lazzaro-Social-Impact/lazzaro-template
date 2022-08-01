import { Result } from 'antd'
import React, { ReactElement } from 'react'
import { Footer, Navbar } from '../../components'
import { Button, Center } from '../../components/common'

export function ErrorPage(): ReactElement {
  return (
    <>
      <Navbar />
      <div
        style={{ marginBlock: '3.8rem' }}
      >
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
        />
        <Center>
          <Button
            px="2.8rem"
            py="1.2rem"
          >Back Home
          </Button>
        </Center>
      </div>
      <Footer />
    </>

  )
}
