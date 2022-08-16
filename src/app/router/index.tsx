import { Routes, Route } from 'react-router-dom'
import { useAppSelector } from '../../hooks'

import getRoutes from './routes'

export default function AllRoute() {
  const { features } = useAppSelector(({ ong }) => ong.ongConfig) || {}

  const ROUTES = getRoutes(features)

  return (
    <>
      <Routes>
        {ROUTES.map(
          ({ path, render, Element }) => render && <Route key={path} path={path} element={<Element />} />
        )}
      </Routes>
    </>
  )
}
