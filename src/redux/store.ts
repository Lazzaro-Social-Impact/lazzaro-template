import { configureStore } from '@reduxjs/toolkit'
import ongConfigReducer from './features'

export const store = configureStore({
  reducer: {
    ong: ongConfigReducer
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
