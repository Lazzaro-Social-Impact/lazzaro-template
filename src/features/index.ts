/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface IAppState {
    ongConfig: object | void,
    ongId: string | null | void,
}

const initialState: IAppState = {
  ongConfig: {},
  ongId: null,
}

export const ongConfigSlice: Slice = createSlice({
  name: 'ongConfig',
  initialState,
  reducers: {
    setOngConfig: (state:IAppState, action: PayloadAction) => {
      state.ongConfig = action.payload
    },
    setOngId: (state:IAppState, action: PayloadAction) => {
      state.ongId = action.payload
    },
  },
})

export const { setOngConfig, setOngId } = ongConfigSlice.actions
export default ongConfigSlice.reducer
