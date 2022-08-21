import { Suspense, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import LoadingIndex from '../../components/LoadingIndex/LoadingIndex'
import { useAppSelector } from '../../hooks'

import getRoutes from './routes'

export default function AllRoute() {
  const { features } = useAppSelector(({ ong }) => ong.ongConfig) || {}

  const ROUTES = useMemo(() => getRoutes(features), [])

  const MEMOIZED_ROUTES = useMemo(() => ROUTES.map(
    ({ path, render, Element }) => render && <Route key={path} path={path} element={<Element />} />
  ), [])

  return (
    <Suspense fallback={<LoadingIndex />}>
      <Routes>
        {MEMOIZED_ROUTES}
      </Routes>
    </Suspense>
  )
}
