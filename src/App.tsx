import {
  Dispatch, useEffect, useLayoutEffect
} from 'react'

import 'antd/dist/antd.min.css'
import { useDispatch } from 'react-redux'
import './App.css'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { Action } from '@reduxjs/toolkit'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import useDependant from './hooks/useDependant'
import { setOngConfig, setOngId } from './features'
import AllRoute from './app/router'
import { LoadingIndex } from './components/LoadingIndex/LoadingIndex'
import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'

const staticUrl = 'prehello.web.lazzaro.io'

function App() {
  const dispatch: Dispatch<Action> = useDispatch()

  const {
    data: config, isLoading: isLoadingPage
  } = useDependant(getOngByUrl(staticUrl), ['ongConfigUrl'], staticUrl)
  const ongId: string = config?.ong_id

  const { data: ongData, isLoading } = useDependant(getOngConfig(ongId), ['ongConfig'], ongId)

  const {
    primary_color_hex: primaryColor, secondary_color_hex: secondaryColor
  } = ongData?.brand || {}

  const theme = {
    primary: primaryColor,
    secondary: secondaryColor,
  }

  useEffect(() => {
    dispatch(setOngId(ongId))

    dispatch(setOngConfig(ongData))

    return () => {
      dispatch(setOngId(null))

      dispatch(setOngConfig(null))
    }
  }, [dispatch, ongId, ongData])

  useLayoutEffect(() => {
    const favIcon : any = document.getElementById('favicon')
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
