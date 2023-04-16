import axios from "axios";

const BASE_URL = "htpp://localhost:4000/student";

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    const error = err.response;
    console.error(error);
    return Promise.reject(error);
  }
);

export default axiosClient;
