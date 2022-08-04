import { useEffect, useLayoutEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import { useDependant, useAppDispatch } from './hooks'
import { setOngConfig, setOngId } from './redux/features'
import AllRoute from './app/router'
import { LoadingIndex } from './components/LoadingIndex/LoadingIndex'
import { CrashPage } from './views'

import './App.css'
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-loading-skeleton/dist/skeleton.css'

const staticUrl = 'prehello.web.lazzaro.io'

function App() {
  const dispatch = useAppDispatch()

  const {
    data: config, isLoading: isLoadingPage, isError
  } = useDependant<TPlatformConfig>(getOngByUrl(staticUrl), ['ongConfigUrl'], staticUrl)

  const ongId = config?.ong_id

  const {
    data: ongData, isLoading,
    isError: isErrorPage
  } = useDependant<IOngConfig>(getOngConfig(ongId), ['ongConfig'], ongId)

  const primary = ongData?.brand.primary_color_hex
  const secondary = ongData?.brand.secondary_color_hex

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
