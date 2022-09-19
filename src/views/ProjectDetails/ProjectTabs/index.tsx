import { useTranslation } from 'react-i18next'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateForm } from '../../../components'
import { Tabs } from '../../../components/common'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { DonateSubmitForm } from '../../../types/interfaces'
import Description from './Description'
import LatestDonations from './LatestDonations'

interface IProps {
  projectDetails: {
    id: string;
    description: string;
  };
}

function ProjectTabs({ projectDetails }: IProps) {
  const { id = '', description = '' } = projectDetails
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const { submit, ...states } = useFormSubmit<DonateSubmitForm>({
    url: getStartProjectDonationUrl(ongId), isPayment: true, redirectPath: 'donate'
  })
  const { t } = useTranslation()
  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }
    submit(donationInfo)
  }
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab={t('details')} key="1">
        <Description description={description} />
      </Tabs.TabPane>

      <Tabs.TabPane tab={t('Donate')} key="2">
        <DonateForm modal submitHandler={handleSubmit} projectId={id} states={states} />
      </Tabs.TabPane>

      <Tabs.TabPane tab={t('case_single.historical')} key="3">
        <LatestDonations title={t('case_single.historical')} projectId={id} />
      </Tabs.TabPane>
    </Tabs>
  )
}

export default ProjectTabs
