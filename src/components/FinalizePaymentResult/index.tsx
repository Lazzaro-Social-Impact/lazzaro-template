import { type FC } from 'react'
import { Result } from 'antd'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import TransactionResult from './TransactionResult'

interface IProps {
  transactionId: string;
  redirectPath: '#events' | '#courses' | '#causes' | 'shop' | 'donate' | 'partners';
  isLoading: boolean;
  isError: boolean;
  sectionId: string;
}

const FinalizePaymentResult: FC<IProps> = ({ isError, isLoading, ...restProps }) => (
  <>
    <Navbar />
    <Result
      status={isLoading ? 'info' : isError ? 'error' : 'success'}
      title={isLoading ? 'loading...' : isError ? 'Something went wrong!' : '"Purchase made successfully!"'}
      extra={<TransactionResult isError={isError} {...restProps} />}
    />
    <Footer />
  </>
)

export default FinalizePaymentResult
