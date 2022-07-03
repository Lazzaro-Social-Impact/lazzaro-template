import React, { ReactElement } from 'react'
import styled from 'styled-components'

interface ImpactPartProps {
    num: number
    text: string
}

export default function ImpactPart({ num, text }: ImpactPartProps): ReactElement {
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
font-size:4.8rem;
color: #fff;
line-height: 0; 

@media screen and (max-width: 571px) {
  font-size: 3.2rem;
}
`

const ImpactText = styled.p`
    line-height: 0; 
    font-weight: 400;
    font-size: 2rem;
    color: #fff;
    font-weight: 100;

    @media screen and (max-width: 571px) {
  font-size: 1.2rem;
}
`
