import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice(
    {
        name:'todo',
        initialState:[],
        reducers:{
            addTodo:(state,action)=>{
                state.push(action.payload)//e dato que se esta guardando
            },
            removeTodo: (state,action)=>{
                return state.filter(todo=>todo.id !==action.payload)
            }
        }
    }
)

export const {addTodo,removeTodo} = todoSlice.actions //actions viene de create slices
export default todoSlice.reducer