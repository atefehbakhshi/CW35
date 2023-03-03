import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchEachTodoService, fetchTodoService } from "../../api/services/get";
import { sendTodoSrvice } from "../../api/services/post";
import { deleteTodoSrvice } from "../../api/services/delete";
import { editTodoSrvice } from "../../api/services/put";

const initialState = {
  todoList: [],
  editedTodo: {},
  status: "idle",
  showModal: false,
  selectedTodoId: 0,
};

// all todos
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetchTodoService();
  return res.data;
});

// single todos
export const fetchEachTodos = createAsyncThunk(
  "todos/fetchEachTodos",
  async (id) => {
    const res = await fetchEachTodoService(id);
    return res.data;
  }
);

export const sendTodo = createAsyncThunk("todos/sendTodo", async (data) => {
  const res = await sendTodoSrvice(data);
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  const res = await deleteTodoSrvice(id);
  return id;
});

export const editTodo = createAsyncThunk("todos/editTodo", async (data) => {
  const { id } = data;
  const res = await editTodoSrvice(id, data);
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
    [fetchEachTodos.fulfilled]: (state, action) => {
      state.editedTodo = action.payload;
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
