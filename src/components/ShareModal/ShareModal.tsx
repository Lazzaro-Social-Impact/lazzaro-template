import { type ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import Modal from '../BuyModal'
import Share from './Share'

interface IShareProps {
    section: string;
    sectionId: string;
}
export function ShareModal(props: IShareProps): ReactElement {
  const { section } = props
  const { t } = useTranslation()
  return (
    <>
      <Modal
        btnText={t('share')}
        width="35%"
        title={`${t('share-modal.share-this')} ${t(section.slice(0, -1) as any)}`}
      >
        <Share {...props} />
      </Modal>
    </>
  )
}
