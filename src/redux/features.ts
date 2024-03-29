import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import {
  IAppState, IEvent, IProject
} from '../types/interfaces'

const initialState: IAppState = {
  ongConfig: {},
  ongId: '',
  premiumProject: {},
  premiumEvent: {},
}

export const ongConfigSlice: Slice<IAppState> = createSlice({
  name: 'ongConfig',
  initialState,
  reducers: {
    setOngConfig: (state: IAppState, action: PayloadAction<TOngConfig>) => {
      state.ongConfig = action.payload
    },
    setOngId: (state: IAppState, action: PayloadAction<string>) => {
      state.ongId = action.payload
    },
    setPremiumProject: (state: IAppState, action: PayloadAction<IProject>) => {
      state.premiumProject = action.payload
    },
    setPremiumEvent: (state: IAppState, action: PayloadAction<IEvent>) => {
      state.premiumEvent = action.payload
    }
  },
})

export const {
  setOngConfig, setOngId, setPremiumProject, setPremiumEvent
} = ongConfigSlice.actions
export default ongConfigSlice.reducer
