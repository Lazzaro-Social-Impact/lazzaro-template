import { Result } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer, Navbar } from '../../components'
import { Button } from '../../components/common'

const PaymentSuccess: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <Result
        status="success"
        title="Payment successful"
        subTitle="Thank you for your donation."
        extra={[
          <Button key="console" onClick={() => navigate('/')}>
            Go to home
          </Button>,
        ]}
        style={{
          marginTop: '7.8rem'
        }}
      />
      <Footer />
    </>
  )
}

export default PaymentSuccess
