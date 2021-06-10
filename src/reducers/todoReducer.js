import { createSlice } from "@reduxjs/toolkit";
import { getUsers, postUsers } from "../actions/userFetch";
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
  },
  reducers: {
    addTododata: (state, action) => {
     // console.log(action);
      state.data = [
        ...state.data,
        { title: action.payload, type: "", age: null },
      ];
    },
  },
  extraReducers: {
    [getUsers.pending]:(state,action)=>{
    },
    [getUsers.fulfilled]:(state,action)=>{
      state.data=[...action.payload]
    },
    [postUsers.pending]: (state, action) => {},
    [postUsers.fulfilled]: (state, action) => {
      state.data = [...state.data,action.payload];
    },
  },
});
export const { addTododata } = todoSlice.actions;
export default todoSlice.reducer;
