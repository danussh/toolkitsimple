import React,{useState} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { selectAllTodo } from '../../reducers/selectors';
import { addTododata } from '../../reducers/todoReducer';

const Todo = () => {
    const [change, setchange] = useState("");
    const dispatch =useDispatch()
   // const arr=useSelector(selectAllTodo)
   const arr=useSelector(state=>state.todo.data)
    const addData = ()=>{
        dispatch(addTododata(change))
    }
    return (
        <div>
            <input type="text" onChange={(e)=>setchange(e.target.value)}/><br></br>
            <button type="button" onClick={addData}>Click Me</button>
            {
                arr.map((val,index)=><li key={index}>{val.name}</li>)
            }
        </div>
    )
}

export default Todo

