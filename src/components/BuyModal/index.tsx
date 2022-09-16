import { Modal as AntdModal } from 'antd'
import { type ReactElement, useState } from 'react'
import styled from 'styled-components'
import { Button } from '../common'

interface IProps {
  children: ReactElement | ReactElement[];
  title?: string;
  width?: string;
  btnText?: string;
}

function Modal(props:IProps) {
  const {
    children, title, width, btnText
  } = props

  const [visible, setVisible] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleCancel = () => {
    setVisible(false)
  }

  return (
    <>
      <Button px={1} py={1.1} onClick={showModal}>{btnText}</Button>

      <CustomModal
        visible={visible}
        title={title}
        footer={null}
        width={width}
        onCancel={handleCancel}
      >
        {children}
      </CustomModal>
    </>
  )
}

const CustomModal = styled(AntdModal)`
@media screen and (max-width: 768px) {
  width: 80% !important;
}
`
Modal.defaultProps = {
  width: '50%',
  title: '',
  btnText: 'Buy'
}

export default Modal
