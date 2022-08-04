import React, { ReactElement, useState } from 'react'
import { Modal } from 'antd'
import styled, { useTheme } from 'styled-components'
import {
  FacebookFilled, LinkedinFilled, TwitterCircleFilled, WhatsAppOutlined
} from '@ant-design/icons'
import { Button } from '../common'

interface IShareProps {
    section: string;
    sectionId: string;
}
export function ShareModal({ section, sectionId }: IShareProps): ReactElement<IShareProps> {
  const [visible, setVisible] = useState(false)
  const { primary, secondary } = useTheme()
  const url = `${window.location.origin}/${section}/${sectionId}`
  return (
    <>
      <Button
        px="2.2rem"
        py="0.8rem"
        hoverBgColor={primary}
        bgColor={secondary}
        onClick={() => setVisible(true)}
      >
        Share
      </Button>

      <Modal
        title={`Share this ${section.slice(0, -1)}`}
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        <Icons>
          <FacebookFilled onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)} />
          <TwitterCircleFilled onClick={() => window.open(`https://twitter.com/intent/tweet?text=${url}`)} />
          <LinkedinFilled onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)} />
          <WhatsAppOutlined onClick={() => window.open(`whatsapp://send?text=${url}`)} />
        </Icons>
      </Modal>
    </>
  )
}

const Icons = styled.div`
display: flex;
justify-content: space-around;
gap: 1.2rem;
margin-top: 1.2rem;
padding-bottom: 3.2rem;
svg {
    font-size: 5.2rem;
    fill: ${({ theme }) => theme.primary};
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    &:hover {
        fill: ${({ theme }) => theme.secondary};
        transform: translateY(-0.2rem);
    }
}
`
