import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { store } from './redux/store'
import App from './App'
import './index.css'
import ReactQueryProvider from './queryclient'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactQueryProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </ReactQueryProvider>
    </Provider>
  </BrowserRouter>
)
