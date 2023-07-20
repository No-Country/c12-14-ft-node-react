import { configureStore } from '@reduxjs/toolkit'
import loginWithReducer from './slices/loginWithSlice'
import authReducer from './slices/authSlice'
import modalReducer from './slices/modalSlice'
import userReducer from './slices/userSlice'

// login with google
const store = configureStore({
  reducer: {
    loginWith: loginWithReducer,
    auth: authReducer,
    modal: modalReducer,
    user: userReducer,
  },
})

export default store
