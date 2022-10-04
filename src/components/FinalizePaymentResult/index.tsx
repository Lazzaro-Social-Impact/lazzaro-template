import { type FC } from 'react';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import TransactionResult from './TransactionResult';
import type { TSectionName } from '../../app/router/finalizePaymentRoutes';

interface IProps {
  transactionId: string;
  sectionName: TSectionName;
  isLoading: boolean;
  isError: boolean;
  sectionId: string;
}

const FinalizePaymentResult: FC<IProps> = ({ isError, isLoading, ...restProps }) => {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Result
        style={{ flex: 1 }}
        status={isLoading ? 'info' : isError ? 'error' : 'success'}
        title={isLoading ? t('finalize.loading') : isError ? t('fail.donate') : t('finalize.success')}
        extra={<TransactionResult isError={isError} {...restProps} />}
      />
      <Footer />
    </>
  );
};

export default FinalizePaymentResult;
