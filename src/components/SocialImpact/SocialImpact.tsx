import React, { ReactElement } from 'react'
import { useTheme } from 'styled-components'
import ImpactPart from './ImpactPart/ImpactPart'
import { Flex, SectionTitle } from '../common'
import { useAppSelector } from '../../hooks'

export default function SocialImpact(): ReactElement {
  const { primary } = useTheme()
  const impact = useAppSelector((state) => state.ong.ongConfig?.impactData)
  return (

    <Flex id="impact" direction="column" bgColor={primary} gap={2.5} px={5}>
      <SectionTitle color="white" fontSize={2.8} marginTop={3}>Social Impact </SectionTitle>

      <Flex wrap="nowrap" mt={1.2} mb={4}>
        {impact?.map((section) => (<ImpactPart {...section} key={section.id} />))}
      </Flex>
    </Flex>
  )
}
