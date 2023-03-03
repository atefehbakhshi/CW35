import { instance } from "../constants";

export const deleteTodoSrvice = (id) => instance.delete(`/todos/${id}`);
