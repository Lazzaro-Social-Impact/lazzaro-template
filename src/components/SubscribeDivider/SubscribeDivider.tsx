import React, { ReactElement, } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { Button } from '../common'

export default function SubscribeDivider(): ReactElement {
  const { primary } = useTheme()
  const navigate = useNavigate()
  return (
    <SubscribeSection>
      <SectionTitle>Lets collaborate together </SectionTitle>
      <Button
        onClick={() => navigate('/partners')}
        fontSize={1.2}
        py={0.8}
        px={2.8}
        bgColor={primary}
      >Join us
      </Button>
    </SubscribeSection>
  )
}

const SubscribeSection = styled.section`
    background-color: ${({ theme }) => theme.secondary};
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2.4rem 0;
`
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
