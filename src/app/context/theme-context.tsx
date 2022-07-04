import React, {
  createContext, ReactNode, useContext, useEffect, useState
} from 'react'

const ThemeContext = createContext('')

type IChildren = { children: ReactNode | ReactNode[] };

export default function ThemeProvider({ children }: IChildren) {
  const [theme, setTheme] = useState('')

  const themeColor = '#5cb780'

  useEffect(() => {
    setTheme(themeColor)
  }, [])

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
