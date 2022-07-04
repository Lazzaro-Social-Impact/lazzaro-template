import React, { ReactElement, } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'

export default function SubscribeDivider(): ReactElement {
  const globalColor = useTheme()

  return (
    <SubscribeSection>
      <SectionTitle>Colaboremos juntos para conseguirlo</SectionTitle>
      <SubscribeButton style={{ backgroundColor: globalColor }}>Inscríbete</SubscribeButton>
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
    width: 30%;
    margin-bottom: 0;
    line-height: 1.4;
`

const SubscribeButton = styled.button`
    font-size: 1.2rem;
    padding: 0.8rem 2.8rem;
    border-radius: 35px;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: #5CB790;
    }
`
