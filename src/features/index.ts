/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface IAppState {
    ongConfig: object,
    ongId: string | null,
}

const initialState: IAppState = {
  ongConfig: {},
  ongId: null,
}

export const ongConfigSlice: Slice = createSlice({
  name: 'ongConfig',
  initialState,
  reducers: {
    setOngConfig: (state: any, action: PayloadAction) => {
      state.ongConfig = action.payload
    },
    setOngId: (state: any, action: PayloadAction) => {
      state.ongId = action.payload
    },
  },
})

export const { setOngConfig, setOngId } = ongConfigSlice.actions
export default ongConfigSlice.reducer
