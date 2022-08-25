import { MenuOutlined } from '@ant-design/icons'
import { Drawer, Grid, Menu } from 'antd'
import {
  type FC, useCallback, useMemo, useReducer
} from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { useAppSelector } from '../../hooks'
import { Box, Image, Link } from '../common'
import navbarFeatures from './navbarFeatures'
import navbarReducer, { initialState } from './navbarReducer'

const { useBreakpoint } = Grid

const NavbarLinks: FC = () => {
  const [{ isDrawerVisible, langLinkText }, dispatch] = useReducer(navbarReducer, initialState)
  const { t } = useTranslation()
  const { md } = useBreakpoint()
  const { logo, features = {} as TFeatures } = useAppSelector(({ ong }) => ({
    logo: ong.ongConfig?.brand.logo,
    features: ong.ongConfig?.features,
  }))

  const handleChangeLanguage = (): void => {
    const chosenLanguage = langLinkText === 'es' ? 'en' : 'es'

    localStorage.setItem('lang', chosenLanguage)
    dispatch({ type: 'SET_LINK_LANG_TEXT', payload: chosenLanguage })
    i18next.changeLanguage(chosenLanguage)
  }

  const handleDrawerVisibility = useCallback(() => {
    dispatch({ type: 'SET_DRAWER_VISIBILITY', payload: !isDrawerVisible })
  }, [isDrawerVisible])

  const featuresArray = useMemo(
    () => Object.keys(features)
      .filter(
        (feature) => navbarFeatures[feature as keyof typeof navbarFeatures]
            && features[feature as keyof TFeatures]
      )
      .sort(),
    [features]
  ) as [keyof typeof navbarFeatures]

  const languageToggleLink = useMemo(
    () => (
      <LanguageToggle onClick={handleChangeLanguage}>
        {langLinkText === 'en' ? 'English' : 'Español'}
      </LanguageToggle>
    ),
    [langLinkText, handleChangeLanguage, langLinkText]
  )

  const NAVBAR_LINKS: JSX.Element[] = useMemo(
    () => featuresArray.map((feature) => (
      <li key={feature}>
        <Link to={`${navbarFeatures[feature].link}`}>{t(navbarFeatures[feature].text)}</Link>
      </li>
    )),
    [featuresArray, t]
  )
  const DRAWER_LINKS: { key: typeof featuresArray[number] | 'lang-toggle'; label: JSX.Element }[] = useMemo(
    () => [
      ...featuresArray.map((feature) => ({
        key: feature,
        label: (
          <li key={feature}>
            <Link to={`${navbarFeatures[feature].link}`}>{t(navbarFeatures[feature].text)}</Link>
          </li>
        ),
      })),
      { key: 'lang-toggle', label: languageToggleLink },
    ],
    [featuresArray, i18next.language]
  )

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
          <li key="about-us">
            <a href="/#about">{t('About us')}</a>
          </li>
          {NAVBAR_LINKS}
          <li key="contact">
            <Link to="/contact">{t('Contact')}</Link>
          </li>

          {languageToggleLink}
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
  cursor: pointer;
  color: #ddd;

  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    color:black;
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
