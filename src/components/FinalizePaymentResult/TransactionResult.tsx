import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import type { TSectionName } from '../../app/router/finalizePaymentRoutes';
import { Button, Flex, Text } from '../common';
import Share from '../ShareModal/Share';

interface IProps {
  transactionId: string;
  sectionName: TSectionName;
  sectionId: string;
  isError: boolean;
}

const TransactionId: FC<IProps> = ({ transactionId, sectionName, sectionId, isError }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const navigateTo = (path: string) => () => navigate(path);
  const { secondary } = useTheme();

  return (
    <Flex mt={1} direction='column' gap={3} textAlign='left'>
      <Flex width='fit-content' p={3} border='0.5px' radius='5' direction='column'>
        <Text lineHeight={1} textAlign='left' fontSize={1.1} weight='bold' color={secondary}>
          {t('finalize.id')}:
        </Text>

        <TransactionLink href={`https://polygonscan.com/tx/${transactionId}`} target='_blank'>
          {transactionId}
        </TransactionLink>

        {isError && (
          <Text textAlign='left' color='red'>
            {t('fail.error')}
          </Text>
        )}
      </Flex>

      <Flex width='fit-content' py={1.5} px={3} justify='center' border='0.5px' radius='5' direction='column'>
        <Text weight='bold' fontSize={1.1} color={secondary} textAlign='left'>
          {t('finalize.share')}
        </Text>
        <Share section={sectionName} sectionId={sectionId} />
      </Flex>

      <Button onClick={navigateTo('/')}>{t('finalize.return')}</Button>
    </Flex>
  );
};

export default TransactionId;

const TransactionLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.primary};
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.secondary};
  }
`;
