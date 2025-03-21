import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer,
    devTools: process.env.NODE_ENV !== 'production',    // ensures Dev Tools are enabled
})
// this (configureStore()) generally takes object as its argument