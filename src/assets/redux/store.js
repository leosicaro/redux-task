import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './todosSlices.js'

const store = configureStore(
    {
        reducer:{
            todos: todosReducer,
        }
    }
)

export default store