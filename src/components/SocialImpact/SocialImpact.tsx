import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import ImpactPart from './ImpactPart/ImpactPart'

const { Title } = Typography
interface INumber {
  key: string
  num: number
  text: string
}
const numbers: INumber[] = [
  {
    key: '1',
    num: 265,
    text: 'Volunteers'
  },
  {
    key: '2',
    num: 120,
    text: 'Candidates'
  },
  {
    key: '3',
    num: 1252,
    text: 'Accounts raised'
  },
  {
    key: '4',
    num: 5015,
    text: 'People supported'
  },
]
export default function SocialImpact(): ReactElement {
  return (

    <SocialImpactSection>
      <SectionTitle level={1}>Social Impact </SectionTitle>
      <ImpactNumbers>
        {numbers.map((number: INumber) => (
          <ImpactPart {...number} />
        ))}
      </ImpactNumbers>
    </SocialImpactSection>
  )
}

const SocialImpactSection = styled.section`
width: 100%;
height: 100%;
background-color: #5CB780;
display: flex;
flex-direction: column;
align-items: center;
gap: 4.2rem;
`

const SectionTitle = styled(Title)`
color: #fff !important;
margin-top: 3.8rem;
font-size: 3.25rem !important;
`

const ImpactNumbers = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 0 10.2rem;
padding-bottom: 4.2rem;
margin-top: 1.2rem;
`
