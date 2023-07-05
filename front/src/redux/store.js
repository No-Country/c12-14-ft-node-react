import { configureStore } from '@reduxjs/toolkit'
import projectModalReducer from './slices/projectModalSlice'

const store = configureStore({
  reducer: {
    projectModal: projectModalReducer,
  },
})

export default store
