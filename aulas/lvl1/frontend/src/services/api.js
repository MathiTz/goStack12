import axios from "axios";

const api = axios.create({
  baseURL: "http://locallhost:3333",
});

export default api;
