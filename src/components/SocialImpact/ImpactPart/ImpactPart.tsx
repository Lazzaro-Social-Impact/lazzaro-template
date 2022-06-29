import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface ImpactPartProps {
    num: number
    text: string
}

export function ImpactPart({ num, text }: ImpactPartProps): ReactElement {
  return (
    <ImpactDiv>
      <ImpactCount>{num}</ImpactCount>
      <ImpactText>{text}</ImpactText>
    </ImpactDiv>
  )
}

const ImpactDiv = styled.div`
display: flex;
flex-direction: column;
text-align: center;
`

const ImpactCount = styled.p`
font-weight: bolder;
font-size: 5.25rem;
color: #fff;
line-height: 0; 
`

const ImpactText = styled.p`
    line-height: 0; 
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
`
