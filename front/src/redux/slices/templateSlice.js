import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

const templateSlice = createSlice({
  name: 'templateSlice',
  initialState,
  reducers: {
    addTemplate: (state, action) => {
      state.push(action.payload)
    },
  },
})

export const { addTemplate } = templateSlice.actions
export default templateSlice.reducer
