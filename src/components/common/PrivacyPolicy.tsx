import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import Link from './Link'

const PrivacyPolicy = (): ReactElement => {
  const { t } = useTranslation()
  return (
    <span>{t('accept_to')} {' '}
      <Link
        style={{ textDecoration: 'underline' }}
        to="/terms_and_conditions"
      >
        {t('privacy policy')}
      </Link>
    </span>
  )
}

export default PrivacyPolicy
