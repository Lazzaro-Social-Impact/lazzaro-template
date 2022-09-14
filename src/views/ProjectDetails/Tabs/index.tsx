import { Tabs as AntdTabs } from 'antd'
import { useTranslation } from 'react-i18next'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateForm } from '../../../components'
import { CustomTabPane } from '../../../components/common/CustomInput'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { DonateSubmitForm } from '../../../types/interfaces'
import Description from './Description'
import LatestDonations from './LatestDonations'

const { TabPane } = AntdTabs
interface IProps {
  projectDetails: {
    id: string,
    description: string,
  };
}

function Tabs({ projectDetails }: IProps) {
  const { id = '', description = '' } = projectDetails
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const {
    submit, ...states
  } = useFormSubmit<DonateSubmitForm>({ url: getStartProjectDonationUrl(ongId), isPayment: true, })
  const { t } = useTranslation()
  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }
    submit(donationInfo)
  }
  return (
    <AntdTabs defaultActiveKey="1">
      <TabPane tab={t('details')} key="1">
        <Description description={description} />
      </TabPane>

      <CustomTabPane tab={t('Donate')} key="2">
        <DonateForm modal submitHandler={handleSubmit} projectId={id} states={states} />
      </CustomTabPane>

      <TabPane tab={t('case_single.historical')} key="3">
        <LatestDonations title={t('case_single.historical')} projectId={id} />
      </TabPane>
    </AntdTabs>
  )
}

export default Tabs
