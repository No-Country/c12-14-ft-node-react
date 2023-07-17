import { configureStore } from '@reduxjs/toolkit'
import loginWithReducer from './slices/loginWithSlice'
import authReducer from './slices/authSlice'

// login with google
const store = configureStore({
  reducer: {
    loginWith: loginWithReducer,
    auth: authReducer,
  },
})

export default store
