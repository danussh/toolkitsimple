import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrement, increment } from '../../reducers/counterReducer'

const Counter = () => {
    const dispatch=useDispatch()
    const count = useSelector(state => state.counter.value)
    return (
        <div>
            <h1>Counter</h1>
            <button type="button" onClick={()=>dispatch(increment())}>increment</button>
            <br></br>
            {
                count
            }
            <br></br>
            <button type="button" onClick={()=>dispatch(decrement())}>increment</button>
        </div>
    )
}
export default Counter
