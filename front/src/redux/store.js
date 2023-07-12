import { configureStore } from '@reduxjs/toolkit'
import loginWithReducer from './slices/loginWithSlice'
import templateSlice from './slices/templateSlice'

// login with google
const store = configureStore({
  reducer: {
    loginWith: loginWithReducer,
    templateSlice,
  },
})

export default store
