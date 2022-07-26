/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import 'antd/dist/antd.min.css'
import { useDispatch } from 'react-redux'
import { Aboutus, Landing, ProjectDetails } from './views'
import './App.css'
import ThemeProvider from './app/context/theme-context'
import { SingleEvent } from './views/SingleEvent/SingleEvent'
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions'
import { SingleProduct } from './views/SingleProduct/SingleProduct'
import { getOngByUrl, getOngConfig } from './api/getApiServices'
import useDependant from './hooks/useDependant'
import { setOngConfig, setOngId } from './features'

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
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/events/:id" element={<SingleEvent />} />
          <Route path="/terms_and_conditions" element={<TermsAndConditions />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      )}
    </ThemeProvider>
  )
}

export default App
