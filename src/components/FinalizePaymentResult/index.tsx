import { type FC } from 'react'
import { Result } from 'antd'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TransactionId from './TransactionId'

interface IProps {
  transactionId: string;
  redirectPath: '#events' | '#courses' | '#causes' | 'shop' | 'donate' | 'subscriptions';
  isLoading: boolean;
  isError: boolean;
}

const FinalizePaymentResult: FC<IProps> = ({ isError, isLoading, ...restProps }) => (
  <>
    <Navbar />
    <Result
      status={isLoading ? 'info' : isError ? 'error' : 'success'}
      title={isLoading ? 'loading...' : isError ? 'Something went wrong!' : '"Purchase made successfully!"'}
      extra={<TransactionId {...restProps} />}
    />
    <Footer />
  </>
)

export default FinalizePaymentResult
