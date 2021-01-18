import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './reducers/newsReducer'

export default configureStore({
  reducer: {
    news: newsReducer
  }
})