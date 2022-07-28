import { Tabs as AntdTabs } from 'antd'
import { Form as DonateForm } from '../../../components'
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

  const handleSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <AntdTabs defaultActiveKey="1">
      <TabPane tab="Details" key="1">
        <Description description={description} />
      </TabPane>

      <TabPane tab="Donate" key="2">
        <DonateForm submitHandler={handleSubmit} projectId={id} />
      </TabPane>

      <TabPane tab="Historical" key="3">
        <LatestDonations title="Historical" projectId={id} />
      </TabPane>
    </AntdTabs>
  )
}

export default Tabs
