import axios from "axios";

const instance = axios.create({
  baseURL: process.env.PROJECT_ENV == "development" ? "/" : process.env.API_URL,
});

export default instance;
