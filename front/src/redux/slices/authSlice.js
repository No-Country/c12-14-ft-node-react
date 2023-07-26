import { createSlice } from '@reduxjs/toolkit'
import { userCheck } from '@/libs/userCheck'

const initialState = {
  user: await userCheck(),
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
