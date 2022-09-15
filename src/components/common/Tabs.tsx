import styled from 'styled-components'
import { Tabs as AntdTabs } from 'antd'

const Tabs = styled(AntdTabs)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.primary};
  }

  .ant-tabs-ink-bar {
    background-color: ${({ theme }) => theme.secondary};
  }

  .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.primary};
  }

  .ant-tabs-tab-btn {
    color: ${({ theme }) => theme.secondary};
  }
`

export default Tabs
