import { type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button, Flex, Text } from '../common'

interface IProps {
  transactionId: string;
  redirectPath: '/' | '#events' | '#courses' | '#causes' | 'store' | 'donate' | 'subscriptions';
  isLoading: boolean;
  isError: boolean;
}

const TransactionId:FC<IProps> = (props) => {
  const {
    transactionId, redirectPath, isError, isLoading
  } = props

  const navigate = useNavigate()
  const navigateTo = (path: string) => () => navigate(path)
  const { secondary, primary } = useTheme()

  return (
    <Flex mt={1} direction="column" gap={3} textAlign="left">
      <Flex width="50vw" border="0.5px solid #777777" p={2}>
        <Text lineHeight={1} textAlign="left" fontSize={1.1} weight="bold" color={secondary}>
          Blockchain transaction:
        </Text>

        <Text weight="bold" fontSize={1} color={primary} textAlign="left">
          {isLoading ? 'loading...' : transactionId}
          {isError && 'something went wrong'}
        </Text>
      </Flex>

      <Button onClick={navigateTo(`/#${redirectPath}`)}>Return</Button>
    </Flex>
  )
}

export default TransactionId