/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import 'antd/dist/antd.min.css'
import { useDispatch } from 'react-redux'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import useDependant from './hooks/useDependant'
import { setOngConfig, setOngId } from './features'
import AllRoute from './app/router'

const staticUrl = 'prehello.web.lazzaro.io'

function App() {
  const dispatch = useDispatch()

  const { data: config, isLoading: isLoadingPage } = useDependant(getOngByUrl(staticUrl),
    ['ongConfigUrl'], staticUrl)
  const ongId: string = config?.ong_id

  const { data: ongData, isLoading } = useDependant(getOngConfig(ongId), ['ongConfig'], ongId)

  useEffect(() => {
    dispatch(setOngId(ongId))

    dispatch(setOngConfig(ongData))

    return (() => {
      dispatch(setOngId(null))

      dispatch(setOngConfig(null))
    })
  }, [dispatch, ongId, ongData])

  return (
    <ThemeProvider>
      {isLoading || isLoadingPage ? (
        <h1>Loading...</h1>
      ) : (
        <AllRoute />
      )}
    </ThemeProvider>
  )
}

export default App
