import React, { useState, useLayoutEffect, ReactElement } from 'react'
import {
  Drawer, Grid
} from 'antd'
import styled from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

type TTransparent = boolean | undefined
interface IProps {
  transparent?: TTransparent
  position?: TPosition
}

function Navbar({ transparent, position }: IProps): ReactElement {
  const logo = useAppSelector((state) => state.ong?.ongConfig?.brand?.logo)
  const features = useAppSelector((state) => state.ong?.ongConfig?.features)
  let featuresArray: any = []
  if (features) {
    featuresArray = Object.keys(features).filter((key) => features[key] === true)
  }
  const fiveElementsArray = featuresArray?.slice(0, 5)

  const capitlaize = (str: string) => {
    const words = str.split(' ')
    const newWords = words.map((word: string) => word
      .charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return newWords
  }

  const changeNavbarLinks = (feature: string) => {
    switch (feature) {
      case 'donations':
        return (
          <li key="donate">
            <NavLink to="/donate">Donate</NavLink>
          </li>
        )

      case 'market':
        return (
          <li key="store">
            <NavLink to="/store">Store</NavLink>
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
          <li key={feature}>
            <a href={`/#${feature}`}>{capitlaize(feature)}</a>
          </li>
        )
    }
  }
  const [navBarBackground, setNavBarBackground] = useState<TTransparent>(transparent)

  useLayoutEffect(() => {
    window.addEventListener('scroll', () => {
      const { offsetHeight: screenHeight, scrollTop: currentHeight } = document.documentElement
      const navbarHeight = 65
      if (transparent) {
        if (currentHeight > screenHeight - navbarHeight) setNavBarBackground(false)
        else setNavBarBackground(true)
      }
    })

    return () => window.removeEventListener('scroll', () => {
      setNavBarBackground(true)
    })
  }, [])

  const [visible, setVisible] = useState(false)

  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  return (
    <NavBar style={{ background: navBarBackground ? 'none' : '#424242' }} position={position}>
      <div style={{ padding: '0.5rem' }}>
        <Link href="#hero">
          <ImageContainer>
            <img src={logo} alt="logo" />
          </ImageContainer>
        </Link>
      </div>

      {!md && <MenuOutlined onClick={() => setVisible(true)} style={{ color: 'white' }} />}

      {md && (
      <CustomNav>
        <ul>
          <li key="about-us">
            <a href="/#about">About Us</a>
          </li>
          {featuresArray?.length === 5 ? featuresArray?.map((feature: string) => (
            changeNavbarLinks(feature)
          ))
            : [fiveElementsArray?.map((feature: string) => (
              changeNavbarLinks(feature)
            )),
              <li key="more">
                <NavLink to="/" title="">More</NavLink>
                <ul>
                  {featuresArray?.filter((f: string, i: number) => i > 4).map((f: string) => (
                    <li key={f}>
                      <a href={`/#${f}`}>{capitlaize(f)}</a>
                    </li>
                  ))}
                  <li key="contact"><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </li>]}
        </ul>
      </CustomNav>
      )}

      <Drawer width={200} placement="right" onClose={() => setVisible(false)} visible={visible}>
        {/* <Links items={items} mode="inline" /> */}
      </Drawer>
    </NavBar>
  )
}

const NavBar = styled.nav<{ position: TPosition }>`
  display: flex;
  justify-content: space-between;
  padding: 1rem 4.1rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
  position: ${({ position }) => position};
  width: 100%;
  border-bottom: none;
  z-index: 99;
  transition: all 0.4s ease;
`

const ImageContainer = styled.div`
  max-width: 180px;

  img {
    max-width: 180px;
  max-height: 80px;
  width: 70px;
  }
`

const CustomNav = styled.nav`
ul {
  display: flex;
  gap: 1.6rem;
  font-size: 1.1rem;
  list-style-type: none;
  
}

ul li a{
  color: #bbb;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
}


`
// const Links = styled(Menu)`
//   flex: 1;
//   justify-content: flex-end;
//   border-bottom: none;
//   background: none;

//   a {
//     color: white !important;
//   }

//   @media (max-width: 767px) {
//     a {
//       color: black !important;
//     }
//   }
// `

const Link = styled.a`
  font-size: 30px;
  color: white;
  letter-spacing: 3px;
  position: relative;

`

Navbar.defaultProps = {
  transparent: false,
  position: 'static'
}
export default Navbar
