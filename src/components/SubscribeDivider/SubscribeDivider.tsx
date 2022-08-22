import { ReactElement, } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { Button, Flex } from '../common'

export default function SubscribeDivider(): ReactElement {
  const { primary, secondary } = useTheme()
  const navigate = useNavigate()

  const navigateTo = (path:'/partners') => () => navigate(path)

  return (
    <Flex direction="column" bgColor={secondary} py={2.4} gap={1.2} mt={4}>
      <SectionTitle>Lets collaborate together </SectionTitle>
      <Button onClick={navigateTo('/partners')} fontSize={1.2} hoverBgColor={primary}>
        Join us
      </Button>
    </Flex>
  )
}

const SectionTitle = styled.h1`
    font-size: 2.2rem;
    color: #fff;
    width: 25%;
    margin-bottom: 0;
    line-height: 1.4;

    @media screen and (max-width: 768px) {
      width: 50%;
    }
`
