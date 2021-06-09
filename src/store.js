import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterReducer'
import todoReducer from './reducers/todoReducer'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer
  }
})