import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodoService } from "../../api/services/get";
import { sendTodoSrvice } from "../../api/services/post";
import { deleteTodoSrvice } from "../../api/services/delete";

const initialState = {
  todoList: [],
  status: "idle",
  showModal: false,
  selectedTodoId: 0,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetchTodoService();
  return res.data;
});

export const sendTodo = createAsyncThunk("todos/sendTodo", async (data) => {
  const res = await sendTodoSrvice(data);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const res = await deleteTodoSrvice(id);
  return id;
});

const todoSlice = createSlice({
  name: "todos/list",
  initialState,
  reducers: {
    hideModal: (state) => {
      state.showModal = false;
    },
    showModal: (state, action) => {
      state.showModal = true;
      state.selectedTodoId = action.payload;
    },
  },
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
    [deleteTodo.fulfilled]: (state, action) => {
      let filteredList = state.todoList;
      filteredList = filteredList.filter(({ id }) => id !== action.payload);
      state.todoList = filteredList;
    },
  },
});

export const { showModal, hideModal } = todoSlice.actions;

export default todoSlice.reducer;
