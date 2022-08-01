import { useEffect, useLayoutEffect } from 'react'

import 'antd/dist/antd.min.css'
import './App.css'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import { useDependant, useAppDispatch } from './hooks'
import { setOngConfig, setOngId } from './features'
import AllRoute from './app/router'
import { LoadingIndex } from './components/LoadingIndex/LoadingIndex'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { CrashPage } from './views'

const staticUrl = 'prehello.web.lazzaro.io'

function App() {
  const dispatch = useAppDispatch()

  const {
    data: config, isLoading: isLoadingPage, isError
  } = useDependant(getOngByUrl(staticUrl), ['ongConfigUrl'], staticUrl)

  const ongId: string = config?.ong_id

  const {
    data: ongData, isLoading,
    isError: isErrorPage
  } = useDependant(getOngConfig(ongId), ['ongConfig'], ongId)

  const primary: string = ongData?.brand.primary_color_hex
  const secondary: string = ongData?.brand.secondary_color_hex

  const theme: DefaultTheme = { primary, secondary }

  useEffect(() => {
    dispatch(setOngId(ongId))

    dispatch(setOngConfig(ongData))

    return () => {
      dispatch(setOngId(null))

      dispatch(setOngConfig(null))
    }
  }, [dispatch, ongId, ongData])

  useLayoutEffect(() => {
    const favIcon = document.getElementById('favicon') as HTMLLinkElement
    favIcon.href = ongData?.brand?.favicon
    document.title = ongData?.brand?.name || 'Home Page'

    return () => {
      favIcon.href = ''
      document.title = ''
    }
  }, [ongData])

  return (
    <ThemeProvider theme={theme}>
      {isLoading || isLoadingPage ? (
        <LoadingIndex />
      )
        : isError || isErrorPage ? (
          <CrashPage />
        ) : (
          <>
            <AllRoute />
            <ToastContainer />
          </>
        )}
    </ThemeProvider>
  )
}

export default App
