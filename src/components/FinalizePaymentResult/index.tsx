import { type FC } from 'react'
import { Result } from 'antd'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TransactionId from './TransactionId'

interface IProps {
  transactionId: string;
  redirectPath: '/' | '#events' | '#courses' | '#causes' | 'store' | 'donate' | 'subscriptions';
  isLoading: boolean;
  isError: boolean;
}

const FinalizePaymentResult: FC<IProps> = (props) => (
  <>
    <Navbar />
    <Result
      status="success"
      title="Purchase made successfully!"
      extra={<TransactionId {...props} />}
    />
    <Footer />
  </>
)

export default FinalizePaymentResult
