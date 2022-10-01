import { useEffect, useLayoutEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import { useDependant, useAppDispatch } from './hooks'
import { setOngConfig, setOngId } from './redux/features'
import AllRoute from './app/router'
import { LoadingIndex } from './components'
import { CrashPage } from './views'
import './App.css'
import 'antd/dist/antd.min.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-loading-skeleton/dist/skeleton.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import 'react-lazy-load-image-component/src/effects/black-and-white.css'
import './i18n/config'

// ? // testing purposes
// const features = {
//   causes: true,
//   events: true,
//   partners: true,
//   volunteers: true,
//   courses: true,
//   impact: true,
//   logos: true,
//   donations: true,
//   market: true,
// }

const { MODE: mode } = import.meta.env

const ongUrl = mode === 'development'
  ? 'prehelloo.web.lazzaro.io'
  : mode === 'pre'
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

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'es')
    }
    return () => {
      localStorage.removeItem('lang')
    }
  }, [])

  useEffect(() => {
    dispatch(setOngId(ongId))

    // ?  if (ongData) ongData.features = features
    dispatch(setOngConfig(ongData))

    return () => {
      dispatch(setOngId(null))
      dispatch(setOngConfig(null))
    }
  }, [ongData, ongId])

  useLayoutEffect(() => {
    const favIcon = document.getElementById('favicon') as HTMLLinkElement
    favIcon.href = ongData?.brand.logo || ''
    document.title = ongData?.brand.name || 'Loading...'

    return () => {
      favIcon.href = ''
      document.title = ''
    }
  }, [ongData])

  if (isError || isErrorPage || config === null) return <CrashPage />

  if (isLoading || isLoadingPage) {
    return (
      <ThemeProvider theme={theme}>
        <LoadingIndex />
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <AllRoute />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
