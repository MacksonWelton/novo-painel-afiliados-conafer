import axios from "axios";

const api = axios.create({
  baseURL: "https://cra.conafer.org.br:7999/api/v1/"
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem("access_token");

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default api;
