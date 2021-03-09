import axios from "axios";
import { setAlert } from "redux/actions/Alerts";

const api = axios.create({
  baseURL: "https://apisistema.conafer.org.br/api/v1/"
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

api.interceptors.response.use(async (response) => {

  return response;
},
async (error) => {

  if (error.response.status === 401) {
    setAlert(error.response.status, error.response.data.detail, true)
  }

  return Promise.reject(error);
}
)


export default api;
