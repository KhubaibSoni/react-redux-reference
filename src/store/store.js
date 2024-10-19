import { configureStore } from '@reduxjs/toolkit'
import  counterReducer from "../features/counter/counter"
import TodoReducer from"../features/todo"

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    todo:TodoReducer
  },
})