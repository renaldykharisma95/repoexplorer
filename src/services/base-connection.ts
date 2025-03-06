import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
});

export default axiosInstance;
