import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addTodo,removeTodo } from "./assets/redux/todosSlices.js";


const App = () => {
  const [inpuText,setInputText]=useState('')
  const dispatch = useDispatch()
  const todos = useSelector(state=>state.todos)

  const handleClick = ()=>{
    dispatch(addTodo({
      id: Math.random(),
      text: inpuText
  }))
  setInputText('')
  }
  
  return (
    <>
    <h1>todo list</h1>
    <input type='text' value={inpuText} onChange={e => setInputText(e.target.value)} placeholder="write a task"/>
    <ul>
      {todos.map(todo=>(
        <li key = {todo.id}>
          {todo.text}
          <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
        </li>
        
      ))}
    </ul>
    <button onClick={handleClick}>add task</button>
    </>
  );
};

export default App;
