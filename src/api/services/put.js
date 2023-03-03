import { instance } from "../constants";

export const editTodoSrvice = (id, data) => instance.put(`/todos/${id}`, data);
