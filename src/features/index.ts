import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'

interface IAppState {
  ongConfig: IOngConfig | Record<string, never>;
  ongId: string;
}

const initialState: IAppState = {
  ongConfig: {},
  ongId: '',
}

export const ongConfigSlice: Slice<IAppState> = createSlice({
  name: 'ongConfig',
  initialState,
  reducers: {
    setOngConfig: (state: IAppState, action: PayloadAction<IOngConfig>) => {
      state.ongConfig = action.payload
    },
    setOngId: (state: IAppState, action: PayloadAction<string>) => {
      state.ongId = action.payload
    },
  },
})

export const { setOngConfig, setOngId } = ongConfigSlice.actions
export default ongConfigSlice.reducer
