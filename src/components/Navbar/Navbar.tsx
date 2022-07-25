import React, { useState, useLayoutEffect, ReactElement } from 'react'
import { Drawer, Grid, Menu } from 'antd'
import styled from 'styled-components'
import { MenuOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

type TTransparent = boolean | undefined
interface IProps {
  transparent?: TTransparent
  position?: TPosition
}

const items = [
  { label: <a href="/#about">About us</a>, key: 'item-1' },
  { label: <a href="/#projects">Projects</a>, key: 'item-2' },
  { label: <a href="/#events">Events</a>, key: 'item-3' },
  { label: <a href="/#courses">Courses</a>, key: 'item-4' },
  { label: <NavLink to="/contact">Contact</NavLink>, key: 'item-5' },
  { label: <NavLink to="/shop">Shop</NavLink>, key: 'item-6' },
  { label: <NavLink to="/donate">Donate</NavLink>, key: 'item-7' },
  { label: <NavLink to="/join">Become a member</NavLink>, key: 'item-8' },
]

function Navbar({ transparent, position }: IProps): ReactElement {
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
          <Circle />
          Give
        </Link>
      </div>

      {!md && <MenuOutlined onClick={() => setVisible(true)} style={{ color: 'white' }} />}

      {md && <Links items={items} mode="horizontal" />}

      <Drawer width={200} placement="right" onClose={() => setVisible(false)} visible={visible}>
        <Links items={items} mode="inline" />
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

const Circle = styled.span`
  position: absolute;
  z-index: -1;
  width: 2em;
  background-color: #5cb780;
  border-radius: 50%;
  height: 2em;
  left: -30%;
  top: -30%;
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
