import React, { ReactElement, useMemo } from 'react'
import { useTheme } from 'styled-components'
import ImpactPart from './ImpactPart/ImpactPart'
import { Flex, SectionTitle } from '../common'
import { useAppSelector } from '../../hooks'

export default function SocialImpact(): ReactElement {
  const { primary } = useTheme()
  const impact = useAppSelector((state) => state.ong.ongConfig?.impactData)

  const memoizedImpactData = useMemo(
    () => impact?.map((section) => <ImpactPart {...section} key={section.id} />),
    [impact]
  )

  return (
    <Flex id="impact" mt={2.4} direction="column" bgColor={primary} gap={1.2} px={5}>
      <SectionTitle color="white" fontSize={2.8} marginTop={3}>
        Social Impact{' '}
      </SectionTitle>

      <Flex wrap="nowrap" mt={1.2} mb={4}>
        {memoizedImpactData}
      </Flex>
    </Flex>
  )
}
