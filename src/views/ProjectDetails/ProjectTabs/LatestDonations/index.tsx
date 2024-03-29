import { useMemo } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { getProjectLatestDonationsURL } from '../../../../api/getApiServices'
import { Text } from '../../../../components/common'
import { useDependant } from '../../../../hooks'
import { type IDonation } from '../../../../types/interfaces'
import Skeleton from '../../../../components/Skeleton'
import DonationCard from './DonationCard'

interface IProps {
  title: 'Latest Donations' | 'Historical' | string;
  projectId: string;
}

function LatestDonations({ title, projectId }: IProps) {
  const { t } = useTranslation()
  const {
    data: donations, isLoading
  } = useDependant<IDonation[]>(getProjectLatestDonationsURL(projectId), [`donations${projectId}`], projectId)

  const memoizedDonations = useMemo(
    () => donations?.map((donation) => (
      <DonationCard donation={donation} />
    )),
    [donations]
  )

  const noDonations = !donations?.length

  return (
    <Container>
      <Text weight="bold" fontSize={2} textAlign="left">
        {title || 'Latest Donations'}
      </Text>

      {noDonations && !isLoading && (
        <Text textAlign="center" fontSize={1.5}>
          {t('project_details.noDonations')}
        </Text>
      )}

      {isLoading && <Skeleton width={32} height={11} number={3} px={3} />}

      {memoizedDonations}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
  height: 50rem;
  padding: 2.5rem;
`

export default LatestDonations
