import React, { ReactElement, } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Button } from '../common'

export default function SubscribeDivider(): ReactElement {
  const globalColor = useTheme()

  return (
    <SubscribeSection>
      <SectionTitle>Lets collaborate together </SectionTitle>
      <Button fontSize={1.2} py={0.8} px={2.8} bgColor={globalColor}>Sign up</Button>
    </SubscribeSection>
  )
}

const SubscribeSection = styled.section`
    background-color: #424242;
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
