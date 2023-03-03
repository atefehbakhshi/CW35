import { instance } from "../constants";

export const fetchTodoService = () => instance.get("/todos");
export const fetchEachTodoService = (id) => instance.get(`/todos/${id}`);
