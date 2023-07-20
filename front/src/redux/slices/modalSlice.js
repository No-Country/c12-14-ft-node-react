import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  photo: false,
  profile: false,
  info: false,
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload] = true
    },
    closeModal: (state, action) => {
      state[action.payload] = false
    },
  },
})

export const { openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer
