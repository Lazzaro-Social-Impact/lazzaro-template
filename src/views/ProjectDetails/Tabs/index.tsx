import { Tabs as AntdTabs } from 'antd'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { Form as DonateForm } from '../../../components'
import { useAppSelector, usePostData } from '../../../hooks'
import Description from './Description'
import LatestDonations from './HistoricalDonations'

const { TabPane } = AntdTabs
interface IProps {
  projectDetails: {
    id: string;
    description: string
  }
}

function Tabs({ projectDetails } : IProps) {
  const { id, description } = projectDetails || {}
  const ongId = useAppSelector((state) => state.ong.ongId)
  const { mutateAsync, ...states } = usePostData(getStartProjectDonationUrl(ongId))

  const handleSubmit = async (values: any) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }

    await mutateAsync(donationInfo)
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

export default Tabs
