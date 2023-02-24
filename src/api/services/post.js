import { instance } from "../constants";

export const sendTodoSrvice = (data) => instance.post("/todos", data);
