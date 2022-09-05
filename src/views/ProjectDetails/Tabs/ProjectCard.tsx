import { Progress } from 'antd'
import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { BuyModal, DonateForm } from '../../../components'
import {
  Card, Flex, Text
} from '../../../components/common'
import { ShareModal } from '../../../components/ShareModal/ShareModal'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { DonateSubmitForm } from '../../../types/interfaces'

interface IProps {
  project: {
    id: string;
    title: string;
    donated: number;
    amount: number;
  };
}

export function ProjectCard({ project }: IProps) {
  const {
    id, title = '', donated = 0, amount = 0
  } = project
  const ongId = useAppSelector((state) => state.ong.ongId) || ''

  const {
    submit, ...states
  } = useFormSubmit<DonateSubmitForm>({ url: getStartProjectDonationUrl(ongId), isPayment: true, })
  const { t } = useTranslation()
  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }

    submit(donationInfo)
  }

  const { primary } = useTheme()

  const donationProgress = +((donated / amount) * 100).toFixed()
  const donateBtnText = donationProgress >= 100 ? t('Full') : t('Donate')

  return (
    <ProductCard>
      <Title title={title}>{title?.slice(0, 15)}</Title>
      <ProgressBar>
        <Progress percent={donationProgress} strokeColor={primary} />
        <ProgressPercents percent={donationProgress}>
          %{donationProgress}
        </ProgressPercents>
      </ProgressBar>
      <Text weight="bold" textAlign="center">
        {t('case_single.goal')} <br />${amount}
      </Text>
      <Flex gap={1}>
        <ShareModal section="causes" sectionId={id} />
        <BuyModal btnText={donateBtnText}>
          <DonateForm submitHandler={handleSubmit} projectId={id} states={states} />
        </BuyModal>
      </Flex>
    </ProductCard>
  )
}

const ProductCard = styled(Card)`
  max-width: 400px;
  margin: 1rem;
  flex-direction: column;
  padding: 2.5rem;
`

const ProgressBar = styled.div`
  position: relative;
  margin-top: 1.5rem;
`

const ProgressPercents = styled.span<{ percent: number }>`
  position: absolute;
  top: -60%;
  left: ${({ percent }) => `${percent}%`};
  transform: translate(-50%, -50%);
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  background: ${({ theme }) => theme.primary};
  padding: 0.1rem 0.6rem;
`

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
