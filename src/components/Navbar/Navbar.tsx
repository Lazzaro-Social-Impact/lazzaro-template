/* eslint-disable max-len */
import {
  useState, useLayoutEffect, ReactElement, Key
} from 'react'
import {
  Drawer, Grid, Dropdown, Menu, Space
} from 'antd'
import styled, { useTheme } from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'
import { Link, NavLink } from 'react-router-dom'
import i18n from 'i18next'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../hooks'
import { Button } from '../common'
import '../../i18n/config'

interface IProps {
  transparent?: boolean;
  position?: TPosition;
}

function Navbar({ transparent, position }: IProps): ReactElement {
  const logo = useAppSelector((state) => state.ong.ongConfig?.brand.logo)
  const features = useAppSelector((state) => state.ong.ongConfig?.features) || {} as TFeatures
  const [language, setLanguage] = useState(i18n.language)
  const { t } = useTranslation()

  const featuresArray = Object.keys(features).filter((key) => features[key as keyof TFeatures] === true)

  const fiveElementsArray = featuresArray?.slice(0, 5)

  const capitlaize = (str: string | TemplateStringsArray) => {
    const words = (str as string).split(' ')
    const newWords = words
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    return newWords
  }

  const filteredArray = featuresArray
    ?.filter((f: string, i: number) => i > 4)
    .map((f: string) => ({
      key: f,
      label: (
        <li key={f}>
          <a href={`/#${f}`}>{capitlaize(f)}</a>
        </li>
      ),
    }))

  const filteredDropDown = <Menu items={filteredArray} />
  const changeNavbarLinks = (feature: string | TemplateStringsArray) => {
    switch (feature) {
      case 'donations':
        return (
          <li key="donate">
            <NavLink to="/donate">{t('Donate')}</NavLink>
          </li>
        )

      case 'market':
        return (
          <li key="shop">
            <NavLink to="/shop">Shop</NavLink>
          </li>
        )
      case 'partners':
        return (
          <li key="partners">
            <NavLink to="/partners">Partners</NavLink>
          </li>
        )
      default:
        return (
          <li key={feature as Key}>
            <a href={`/#${feature}`}>{capitlaize(feature)}</a>
          </li>
        )
    }
  }
  const { secondary } = useTheme()
  const [navBarBackground, setNavBarBackground] = useState<TBgColor>('none')
  useLayoutEffect(() => {
    setNavBarBackground(transparent ? 'none' : secondary)
    if (!transparent) return

    window.addEventListener('scroll', () => {
      const { offsetHeight: screenHeight, scrollTop: currentHeight } = document.documentElement
      const navbarHeight = 200

      if (currentHeight > screenHeight - navbarHeight) setNavBarBackground(secondary)
      else setNavBarBackground('none')
    })

    return () => window.removeEventListener('scroll', () => {
      setNavBarBackground('none')
    })
  }, [])

  const [visible, setVisible] = useState(false)

  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  const drawerArray = featuresArray.map((feature) => ({
    key: feature,
    label: (
      <li key={feature}>
        <a href={`/#${feature}`}>{capitlaize(feature)}</a>
      </li>
    ),
  }))

  return (
    <NavBar position={position} bgColor={navBarBackground}>
      <div style={{ padding: '0.5rem' }}>
        <NavLink to="/">
          <ImageContainer>
            <img src={logo} alt="logo" />
          </ImageContainer>
        </NavLink>
      </div>

      {!md && <MenuOutlined onClick={() => setVisible(true)} style={{ color: 'white' }} />}

      {md && (
        <CustomNav>
          <ul>
            <li key="about-us">
              <a href="/#about">About Us</a>
            </li>
            {featuresArray?.length === 5 ? (
              featuresArray?.map((feature: string) => changeNavbarLinks(feature))
            ) : (
              <>
                {fiveElementsArray?.map((feature: string) => changeNavbarLinks(feature))}

                <CustomDropDown arrow overlay={filteredDropDown}>
                  <Space>
                    <a href="#">More</a>
                  </Space>
                </CustomDropDown>
              </>
            )}
            <li key="contact-us">
              <Link to="/contact">{t('Contact')}</Link>
            </li>
            <li key="translation">
              <Button
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en')
                  i18n.changeLanguage(language === 'en' ? 'es' : 'en')
                }}
                color="primary"
              >
                {
                        language === 'es' ? 'English' : 'Español'
                      }
              </Button>
            </li>
          </ul>
        </CustomNav>
      )}

      <Drawer width={200} placement="right" onClose={() => setVisible(false)} visible={visible}>
        <Links items={drawerArray} mode="inline" />
      </Drawer>
    </NavBar>
  )
}

const NavBar = styled.nav<{ position: TPosition; bgColor: TBgColor }>`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 4.1rem;
  border-bottom: 1px solid #ccc;
  position: ${({ position }) => position};
  align-items: center;
  width: 100%;
  border-bottom: none;
  z-index: 99;
  transition: all 0.4s ease;
  background-color: ${({ bgColor }) => bgColor};
`

const ImageContainer = styled.div`
  max-width: 180px;

  img {
    max-width: 180px;
    max-height: 70px;
    width: 50px;
  }
`

const CustomNav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 1.8rem;
    font-size: 1rem;
    list-style-type: none;
    margin-bottom: 0;
    li a {
      color: #ddd;
      text-decoration: none;
      font-weight: bold;
      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }
  }
`

const CustomDropDown = styled(Dropdown)`
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`
const Links = styled(Menu)`
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

Navbar.defaultProps = {
  transparent: false,
  position: 'static',
}
export default Navbar
