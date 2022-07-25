import { Tabs as AntdTabs } from 'antd'
import { Form as DonateForm } from '../../../components'
import Description from './Description'
import LatestDonations from './HistoricalDonations'

function Tabs() {
  const { TabPane } = AntdTabs

  const handleSubmit = (values: any) => {
    console.log(values)
  }
  return (
    <AntdTabs defaultActiveKey="1">
      <TabPane tab="Details" key="1">
        <Description />
      </TabPane>

      <TabPane tab="Donate" key="2">
        <DonateForm submitHandler={handleSubmit} />
      </TabPane>

      <TabPane tab="Historical" key="3">
        <LatestDonations title="Historical" />
      </TabPane>
    </AntdTabs>
  )
}

export default Tabs
