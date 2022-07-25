import { Modal, Progress } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { useTheme } from '../../../app/context/theme-context'
import { Form } from '../../../components'
import { Button, Card, Text } from '../../../components/common'

export function ProjectCard() {
  const color = useTheme()

  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <Card mode="column" p={3} maxWidth="400px" smMode="column">
      <h1>Help the Children in need</h1>
      <ProgressBar>
        <Progress percent={44} strokeColor={color} />
        <ProgressPercents percent={44} color={color}>
          44%
        </ProgressPercents>
      </ProgressBar>
      <Text weight="bold">
        Goal <br />
        $1.000
      </Text>
      <Flex>
        <Button px={1.8} py={0.8} bgColor="#F1F1F1" color="#777777">
          Share
        </Button>
        <Button px={1.8} py={0.8} bgColor={color} onClick={showModal}>
          Donate
        </Button>
      </Flex>

      <Modal
        title="Donate"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width="50%"
      >
        <Form submitHandler={console.log} />
      </Modal>
    </Card>
  )
}

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

const ProgressBar = styled.div<{ strokeColor?: TColor }>`
  position: relative;
`

const ProgressPercents = styled.span<{ color: TColor; percent: number }>`
  position: absolute;
  top: -60%;
  left: ${({ percent }) => `${percent}%`};
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: ${({ color }) => color};
  padding: 0.1rem 1rem;
`
