import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoadingIndex } from '../../components'
import { useAppSelector } from '../../hooks'

import getRoutes from './routes'

export default function AllRoute() {
  const { features } = useAppSelector(({ ong }) => ong.ongConfig) || {}

  const ROUTES = getRoutes(features)

  return (
    <Suspense fallback={<LoadingIndex />}>
      <Routes>
        {ROUTES.map(
          ({ path, render, Element }) => render && <Route key={path} path={path} element={<Element />} />
        )}
      </Routes>
    </Suspense>
  )
}
