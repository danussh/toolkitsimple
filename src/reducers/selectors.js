import { createSelector } from "reselect";
const todos = state => state.todo.data;
export const selectAllTodo = createSelector(
  todos,
  datas => datas.filter((data)=>data.type==="dog")
);