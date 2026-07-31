import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://moviesapi.ir',
});

export default axiosInstance;
