import { ReactElement } from 'react'
import styled from 'styled-components'
import {
  FacebookFilled, LinkedinFilled, TwitterCircleFilled, WhatsAppOutlined
} from '@ant-design/icons'
import Modal from '../BuyModal'

interface IShareProps {
    section: string;
    sectionId: string;
}
export function ShareModal({ section, sectionId }: IShareProps): ReactElement<IShareProps> {
  const url = `${window.location.origin}/${section}/${sectionId}`
  const navigateTo = (path:string) => () => window.open(path, '_blank')
  return (
    <>
      <Modal btnText="Share" width="35%" title={`Share this ${section.slice(0, -1)}`}>
        <Icons>
          <FacebookFilled
            onClick={navigateTo(`https://www.facebook.com/sharer/sharer.php?u=${url}`)}
          />
          <TwitterCircleFilled
            onClick={navigateTo(`https://twitter.com/intent/tweet?text=${url}`)}
          />
          <LinkedinFilled
            onClick={navigateTo(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`)}
          />
          <WhatsAppOutlined onClick={navigateTo(`whatsapp://send?text=${url}`)} />
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
