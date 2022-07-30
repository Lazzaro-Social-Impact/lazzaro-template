import { Modal, Progress } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import { getStartProjectDonationUrl } from '../../../api/postApiServices'
import { useTheme } from '../../../app/context/theme-context'
import { DonateForm } from '../../../components'
import { Button, Card, Text } from '../../../components/common'
import { useAppSelector, usePostData } from '../../../hooks'

interface IProps {
  project: {
    id: string;
    title: string;
    donated: number;
    amount: number;
  }
}

  interface DonateSubmitForm {
    firstName: string;
    lastName: string;
    user_email: string;
    home_address: string;
    birthDate: Date;
    nif: number;
    amount: number;
    anonymous: boolean;
    message?: string;
    certificate: boolean;
    terms: boolean;
  }

export function ProjectCard({ project } : IProps) {
  const {
    id, title, donated, amount
  } = project
  const ongId = useAppSelector((state) => state.ong.ongId)

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

  const {
    mutateAsync, ...states
  } = usePostData<DonateSubmitForm>(getStartProjectDonationUrl(ongId))

  const handleSubmit = async (values: DonateSubmitForm) => {
    const donationInfo = { ...values, project_id: id, ong_id: ongId }

    await mutateAsync(donationInfo)
  }

  const donationProgress = (donated / amount) * 100
  return (
    <Card mode="column" p={3} maxWidth="400px" smMode="column" m="1rem" width="100%">
      <h1>{title}</h1>
      <ProgressBar>
        <Progress percent={44} strokeColor={color} />
        <ProgressPercents percent={44} color={color}>
          %{donationProgress}
        </ProgressPercents>
      </ProgressBar>
      <Text weight="bold">
        Goal <br />${amount}
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
        <DonateForm submitHandler={handleSubmit} projectId={id} states={states} />
      </Modal>
    </Card>
  )
}

const Flex = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

const ProgressBar = styled.div`
  position: relative;
`

const ProgressPercents = styled.span<{ percent: number }>`
  position: absolute;
  top: -60%;
  left: ${({ percent }) => `${percent}%`};
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: ${({ theme }) => theme.primary};
  padding: 0.1rem 1rem;
`
