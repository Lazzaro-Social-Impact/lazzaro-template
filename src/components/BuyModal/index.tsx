import { Modal as AntdModal } from 'antd'
import { type ReactElement, useState } from 'react'
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
      <Button px="2.8rem" onClick={showModal}>{btnText}</Button>

      <AntdModal
        visible={visible}
        title={title}
        footer={null}
        width={width}
        onCancel={handleCancel}
      >
        {children}
      </AntdModal>
    </>
  )
}

Modal.defaultProps = {
  width: '50%',
  title: '',
  btnText: 'Buy'
}

export default Modal
