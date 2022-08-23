import {
  useEffect, useLayoutEffect, useCallback
} from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import { useDependant, useAppDispatch } from './hooks'
import { setOngConfig, setOngId } from './redux/features'
import AllRoute from './app/router'
import { CrashPage } from './views'
import { LoadingIndex } from './components'
import './App.css'
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-loading-skeleton/dist/skeleton.css'
import './i18n/config'

const ongUrl = ['development', 'staging'].includes(import.meta.env.VITE_ENV)
  ? 'prehelloo.web.lazzaro.io'
  : window.location.hostname

function App() {
  const dispatch = useAppDispatch()

  const {
    data: config,
    isLoading: isLoadingPage,
    isError,
  } = useDependant<TPlatformConfig>(getOngByUrl(ongUrl), ['ongConfigUrl'], ongUrl)

  const ongId = config?.ong_id || ''

  const {
    data: ongData,
    isLoading,
    isError: isErrorPage,
  } = useDependant<TOngConfig>(getOngConfig(ongId), ['ongConfig'], ongId)

  const primary = ongData?.brand.primary_color_hex || ''
  const secondary = ongData?.brand.secondary_color_hex || ''

  const theme: DefaultTheme = { primary, secondary }

  const setOngIdDispatch = useCallback(() => {
    dispatch(setOngId(ongId))
  }, [dispatch, ongId])
  const setOngConfigDispatch = useCallback(() => {
    dispatch(setOngConfig(ongData))
  }, [dispatch, ongData])

  useEffect(() => {
    setOngIdDispatch()

    setOngConfigDispatch()

    return () => {
      dispatch(setOngId(null))

      dispatch(setOngConfig(null))
    }
  }, [dispatch, setOngIdDispatch, setOngConfigDispatch])

  useLayoutEffect(() => {
    const favIcon = document.getElementById('favicon') as HTMLLinkElement
    favIcon.href = ongData?.brand.logo || ''
    document.title = ongData?.brand.name || 'Loading...'

    return () => {
      favIcon.href = ''
      document.title = ''
    }
  }, [ongData])

  return (
    <ThemeProvider theme={theme}>
      {isError || isErrorPage || config === null ? (
        <CrashPage />
      ) : isLoading || isLoadingPage ? (
        <LoadingIndex />
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
