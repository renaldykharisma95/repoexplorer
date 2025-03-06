import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://developer.github.com/v3",
  timeout: 1000,
});

export default axiosInstance;
