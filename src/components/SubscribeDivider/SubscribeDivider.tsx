import React, { ReactElement } from 'react'
import styled from 'styled-components'

export default function SubscribeDivider(): ReactElement {
  return (
    <SubscribeSection>
      <SectionTitle>Colaboremos juntos para conseguirlo</SectionTitle>
      <SubscribeButton>Inscríbete</SubscribeButton>
    </SubscribeSection>
  )
}

const SubscribeSection = styled.section`
    background-color: #000;
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
    background-color: #5CB780;
`
