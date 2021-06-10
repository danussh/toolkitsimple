import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from "react-redux"
import { selectAllTodo } from '../../reducers/selectors';
import { addTododata } from '../../reducers/todoReducer';
import { getUsers, postUsers } from "../../actions/userFetch"


const Todo = () => {
    const [change, setchange] = useState("");
    const dispatch =useDispatch()
   // const arr=useSelector(selectAllTodo) reselect with Selector
   const arr=useSelector(state=>state.todo.data)
    const addData = ()=>{
        //dispatch(addTododata(change))
        setchange("")
        dispatch(postUsers(change))
        
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [])
    return (
        <div>
            <input type="text" value={change}onChange={(e)=>setchange(e.target.value)}/><br></br>
            <button type="button" onClick={addData}>Click Me</button>
            {
                arr.map((val,index)=>{
                    return <li key={index}>{val.title}</li>
                })
            }
        </div>
    )
}
export default Todo

