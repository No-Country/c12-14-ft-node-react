import { configureStore } from '@reduxjs/toolkit'
import projectModalReducer from './slices/projectModalSlice'
import loginWithReducer from './slices/loginWithSlice'

// login with google
const store = configureStore({
  reducer: {
    projectModal: projectModalReducer,
    loginWith: loginWithReducer,
  },
})

export default store
