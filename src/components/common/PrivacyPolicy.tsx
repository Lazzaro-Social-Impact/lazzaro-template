import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import { CSSProperties } from 'styled-components'
import Link from './Link'

interface IProps {
  style?: CSSProperties
}
const PrivacyPolicy = ({ style }: IProps): ReactElement => {
  const { t } = useTranslation()
  return (
    <span style={style}>{t('accept_to')} {' '}
      <Link
        style={{ textDecoration: 'underline' }}
        to="/terms_and_conditions"
      >
        {t('privacy policy')}
      </Link>
    </span>
  )
}

PrivacyPolicy.defaultProps = {
  style: {},
}

export default PrivacyPolicy
