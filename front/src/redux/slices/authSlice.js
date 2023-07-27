import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { userCheck } from '@/libs/userCheck'

export const fetchUser = createAsyncThunk('auth/fetchUser', userCheck)

const initialState = {
  user: null,
}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
