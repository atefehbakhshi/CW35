import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodoService } from "../../api/services/get";
import { sendTodoSrvice } from "../../api/services/post";

const initialState = {
  todoList: [],
  status: "idle",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetchTodoService();
  return res.data;
});

export const sendTodo = createAsyncThunk("todos/sendTodo", async (data) => {
  const res = await sendTodoSrvice(data);
});

const todoSlice = createSlice({
  name: "todos/list",
  initialState,
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "pending";
    },
    [fetchTodos.rejected]: (state) => {
      state.status = "rejected";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.todoList = action.payload;
      state.status = "success";
    },
  },
});

export default todoSlice.reducer;
