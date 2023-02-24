import axios from "axios";

export const baseURL = "http://localhost:3000";

export const instance = axios.create({
  baseURL,
  timeout: 80000,
});
