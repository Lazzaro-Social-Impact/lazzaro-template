import React, { ReactElement, useContext } from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'
import ImpactPart from './ImpactPart/ImpactPart'
import { ThemeContext } from '../../app/context/theme-context'

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
  const globalColor = useContext(ThemeContext)

  return (

    <SocialImpactSection style={{ backgroundColor: globalColor }}>
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
display: flex;
flex-direction: column;
align-items: center;
gap: 4.2rem;
padding: 0 8.2rem;
`

const SectionTitle = styled(Title)`
color: #fff !important;
margin-top: 3.8rem;
font-size: 2.8rem !important;
`

const ImpactNumbers = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding-bottom: 4.2rem;
margin-top: 1.2rem;
`
