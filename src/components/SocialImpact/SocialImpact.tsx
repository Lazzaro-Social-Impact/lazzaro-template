import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import ImpactPart from './ImpactPart/ImpactPart'
import { Flex, SectionTitle } from '../common'

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
  const { primary } = useTheme()
  return (

    <Flex id="impact" direction="column" bgColor={primary} gap={2.5} px={5}>
      <SectionTitle color="white" fontSize={2.8} marginTop={3}>Social Impact </SectionTitle>

      <Flex wrap="nowrap" mt={1.2} mb={4}>
        {numbers.map((number: INumber) => (<ImpactPart {...number} />))}
      </Flex>
    </Flex>
  )
}
