import { configureStore } from '@reduxjs/toolkit'
import projectModalReducer from './slices/projectModalSlice'
import loginWithReducer from './slices/loginWithSlice'
import templateSlice from './slices/templateSlice'

// login with google
const store = configureStore({
  reducer: {
    projectModal: projectModalReducer,
    loginWith: loginWithReducer,
    templateSlice,
  },
})

export default store
