import { Tabs as AntdTabs } from 'antd'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { DonateForm } from '../../../components'
import { useAppSelector, useFormSubmit } from '../../../hooks'
import { DonateSubmitForm } from '../../../types/interfaces'
import Description from './Description'
import LatestDonations from './LatestDonations'

const { TabPane } = AntdTabs
interface IProps {
  projectDetails?: {
    id: string,
    description: string,
  };
}

function Tabs({ projectDetails }: IProps) {
  const { id = '', description = '' } = projectDetails || {}
  const ongId = useAppSelector((state) => state.ong.ongId) || ''
  const { submit, ...states } = useFormSubmit<DonateSubmitForm>(getStartProjectDonationUrl(ongId))

  const handleSubmit = (values: DonateSubmitForm) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }
    submit(donationInfo)
  }
  return (
    <AntdTabs defaultActiveKey="1">
      <TabPane tab="Details" key="1">
        <Description description={description} />
      </TabPane>

      <TabPane tab="Donate" key="2">
        <DonateForm submitHandler={handleSubmit} projectId={id} states={states} />
      </TabPane>

      <TabPane tab="Historical" key="3">
        <LatestDonations title="Historical" projectId={id} />
      </TabPane>
    </AntdTabs>
  )
}

Tabs.defaultProps = {
  projectDetails: {
    id: '',
    description: '',
  }
}
export default Tabs
