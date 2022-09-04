import { type ReactElement, useMemo } from 'react'
import styled, { useTheme } from 'styled-components'
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

      <ImpactContainer>
        {memoizedImpactData}
      </ImpactContainer>
    </Flex>
  )
}

const ImpactContainer = styled(Flex)`
  flex-wrap: nowrap;
  margin-top: 1.2rem;
  margin-bottom: 4rem;

  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 3rem;
  }
`
