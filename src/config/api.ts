import axios from "axios";

const api = axios.create({
  baseURL: "https://www.iped.com.br/",
});

export { api };
