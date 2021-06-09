import {createSlice} from "@reduxjs/toolkit"

export const todoSlice=createSlice({
    name:"todos",
    initialState:{
        data:[{
            name: "Milton",
            type: "cat",
            age: 4
          },
          {
            name: "Sammy",
            type: "dog",
            age: 2
          },
          {
            name: "Joseph",
            type: "turtle",
            age: 34
          },
          {
            name: "Simon",
            type: "dog",
            age: 8
          }]
    },
    reducers:{
        addTododata:(state,action)=>{
            console.log(action)
            state.data=[...state.data,{name:action.payload,type:"",age:null}]
        }
    }
})
export const {addTododata} = todoSlice.actions
export default todoSlice.reducer