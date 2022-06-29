import React, { useState } from 'react'
import { Drawer, Grid, Menu } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.min.css'
import { MenuOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

const items = [
  { label: <NavLink to="/">Nosotros</NavLink>, key: 'item-1' },
  { label: <NavLink to="/">Poyectos</NavLink>, key: 'item-2' },
  { label: <NavLink to="/">Eventos</NavLink>, key: 'item-3' },
  { label: <NavLink to="/">Cursos</NavLink>, key: 'item-4' },
  { label: <NavLink to="/">Contacto</NavLink>, key: 'item-5' },
  { label: <NavLink to="/">Tienda</NavLink>, key: 'item-6' },
  { label: <NavLink to="/">Donar</NavLink>, key: 'item-7' },
  { label: <NavLink to="/">Hacerme socio</NavLink>, key: 'item-8' },
]

function Navbar() {
  const [navBarBackground, setNavBarBackground] = useState<'none' | 'black'>('none')

  window.addEventListener('scroll', () => {
    const { offsetHeight: screenHeight, scrollTop: currentHeight } = document.documentElement
    const navbarHeight = 65

    if (currentHeight > screenHeight - navbarHeight) setNavBarBackground('black')
    else setNavBarBackground('none')
  })

  const [visible, setVisible] = useState(false)

  const { useBreakpoint } = Grid
  const { md } = useBreakpoint()

  return (
    <NavBar style={{ background: navBarBackground }}>
      <div className="logo">
        <Link to="/">
          <Circle />
          Give
        </Link>
      </div>

      {!md && <MenuOutlined onClick={() => setVisible(true)} style={{ color: 'white' }} />}

      {md && <Links items={items} mode="horizontal" />}

      <Drawer placement="right" closable onClose={() => setVisible(false)} visible={visible}>
        <Links items={items} mode="inline" />
      </Drawer>
    </NavBar>
  )
}

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 6.4rem;
  border-bottom: 1px solid #ccc;
  align-items: center;
  position: fixed;
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

  @media (max-width: 576px) {
    a {
      color: black !important;
    }
  }
`

const Link = styled(NavLink)`
  font-size: 30px;
  color: white;
  letter-spacing: 3px;
  position: relative;
`
export default Navbar
