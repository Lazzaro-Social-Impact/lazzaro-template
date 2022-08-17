import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Grid, Menu } from 'antd'
import {
  type FC, useCallback, useRef, useState
} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useAppSelector } from '../../hooks'
import { properCase } from '../../utils'
import {
  Box, Image, Link
} from '../common'

const { useBreakpoint } = Grid

const NavbarLinks:FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false)
  const language = useRef<'en' | 'es'>('en')
  const logo = useAppSelector((state) => state.ong.ongConfig?.brand.logo)
  const { features } = useAppSelector((state) => state.ong.ongConfig) || {}
  const { t } = useTranslation()
  const { md } = useBreakpoint()

  const includedFeatures = ['causes', 'courses', 'events', 'partners', 'donations', 'market']
  const featuresArray = Object.keys(features)
    .filter((feature) => includedFeatures.includes(feature) && features[feature as keyof TFeatures])
    .sort()

  const exceptFeatures = {
    partners: (
      <li key="partners">
        <Link to="/partners">{t('Become a member')}</Link>
      </li>
    ),
    donations: (
      <li key="donate">
        <Link to="/donate">{t('Donate')}</Link>
      </li>
    ),

    market: (
      <li key="market">
        <Link to="/shop">{t('Market')}</Link>
      </li>
    ),
  }
  const NAVBAR_LINKS = featuresArray.map(
    (feature) => exceptFeatures[feature as keyof typeof exceptFeatures] || (
    <li key={feature}>
      <FeatureLink href={`/#${feature}`}>
        {t(properCase(feature))}
      </FeatureLink>
    </li>
    )
  )

  const handleChangeLanguage = () => {
    language.current = language.current === 'en' ? 'es' : 'en'
    i18next.changeLanguage(language.current === 'en' ? 'es' : 'en')
  }

  const handleDrawerVisibility = useCallback(() => {
    setIsDrawerVisible(!isDrawerVisible)
  }, [isDrawerVisible])

  const DRAWER_LINKS = featuresArray.map((feature) => ({
    key: feature,
    label: (
      <li key={feature}>
        <a href={`/#${feature}`}>{properCase(feature)}</a>
      </li>
    ),
  }))

  return (
    <>
      <Box p={0.5}>
        <Link to="/">
          <ImageContainer>
            <Image src={logo} alt="logo" />
          </ImageContainer>
        </Link>
      </Box>
      {!md && <MenuOutlined onClick={handleDrawerVisibility} style={{ color: 'white' }} />}
      {md && (
        <Links>
          {NAVBAR_LINKS}
          <li key="contact">
            <Link to="/contact">{t('Contact')}</Link>
          </li>
          <LanguageToggle onClick={handleChangeLanguage}>
            {language.current === 'es' ? 'English' : 'Español'}
          </LanguageToggle>
        </Links>
      )}
      <Drawer
        width={200}
        placement="right"
        onClose={handleDrawerVisibility}
        visible={isDrawerVisible}
      >
        <MenuLinks items={DRAWER_LINKS} mode="inline" />
      </Drawer>
    </>
  )
}
export default NavbarLinks

const LanguageToggle = styled.li`
color: white;
cursor: pointer;
color: #ddd;

font-weight: bold;
transition: all 0.2s ease-in-out;
&:hover {
  color: ${({ theme }) => theme.primary};
  text-decoration: underline;
  
}
`

const FeatureLink = styled.a`
transition: all 0.2s ease-in-out;
&:hover {
  text-decoration: underline;
}
`
const ImageContainer = styled.div`
  max-width: 180px;

  img {
    max-width: 12.25rem;
    max-height: 4.25rem;
    width: 10rem;
  }
`

const Links = styled.ul`
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    font-size: 1rem;
    list-style-type: none;
    margin-bottom: 0;
    align-items: center;

    li a {
      color: #ddd;
      text-decoration: none;
      font-weight: bold;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
`

const MenuLinks = styled(Menu)`
  flex: 1;
  justify-content: flex-end;
  border-bottom: none;
  background: none;

  a {
    color: white !important;
  }

  @media (max-width: 767px) {
    a {
      color: black !important;
    }
  }
`
