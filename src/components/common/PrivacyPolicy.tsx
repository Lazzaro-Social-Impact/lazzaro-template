import React, { ReactElement } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { CSSProperties } from 'styled-components'
import Link from './Link'

interface IProps {
  style?: CSSProperties
}
const PrivacyPolicy = ({ style }: IProps): ReactElement => {
  const { t } = useTranslation()
  return (
    <CustomSpan style={style}>{t('accept_to')} {' '}
      <Link
        style={{ textDecoration: 'underline', fontSize: '1rem' }}
        to="/terms_and_conditions"
      >
        {t('privacy policy')}
      </Link>
    </CustomSpan>
  )
}

PrivacyPolicy.defaultProps = {
  style: {},
}

const CustomSpan = styled.span`
font-size: 1rem;
`
export default PrivacyPolicy
