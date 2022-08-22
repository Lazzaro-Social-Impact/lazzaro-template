import {
  useState, useLayoutEffect, type ReactElement, memo
} from 'react'
import styled, { useTheme } from 'styled-components'
import '../../i18n/config'
import NavbarLinks from './NavbarLinks'

interface IProps {
  transparent?: boolean;
  position?: TPosition;
}

// TODO: refactor
function Navbar({ transparent, position }: IProps): ReactElement {
  const [navBarBackground, setNavBarBackground] = useState<TBgColor>('none')
  const { secondary } = useTheme()

  useLayoutEffect(() => {
    setNavBarBackground(transparent ? 'none' : secondary)
    if (!transparent) return

    window.addEventListener('scroll', () => {
      const { offsetHeight: screenHeight, scrollTop: currentHeight } = document.documentElement
      const NAVBAR_HEIGHT = 400
      const totalScreenHeight = screenHeight - NAVBAR_HEIGHT

      if (currentHeight > totalScreenHeight) setNavBarBackground(secondary)
      else if (currentHeight < totalScreenHeight) setNavBarBackground('none')
    })

    return () => window.removeEventListener('scroll', () => {
      setNavBarBackground('none')
    })
  }, [])

  return (
    <NavBar position={position} bgColor={navBarBackground}>
      <NavbarLinks />
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

Navbar.defaultProps = {
  transparent: false,
  position: 'static',
}
export default memo(Navbar)
