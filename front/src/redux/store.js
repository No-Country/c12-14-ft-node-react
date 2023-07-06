import { configureStore } from '@reduxjs/toolkit'
import templateSlice from './slices/templateSlice'

const store = configureStore({
  reducer: {
    templateSlice,
  },
})

export default store
