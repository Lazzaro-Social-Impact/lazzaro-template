import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import ReactQueryProvider from '../queryclient'
import { store } from '../redux/store'

type TChildern = {
    children: ReactNode
}
const Providers = ({ children }: TChildern) => (
  <BrowserRouter>
    <Provider store={store}>
      <ReactQueryProvider>
        {children}
        <ReactQueryDevtools />
      </ReactQueryProvider>
    </Provider>
  </BrowserRouter>
)

export default Providers
