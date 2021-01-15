import axios from "axios";
import { setAlert } from "redux/actions/Alertas";

const api = axios.create({
  baseURL: "https://cra.conafer.org.br:7999/api/v1/",
});

api.interceptors.request.use(
  async (config) => {
    const accessToken = await localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  async (config) => {
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

const refreshToken = async () => {

  try {

    const refresh_token = localStorage.getItem("refresh_token");
    const header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const parameters = {
      method: "POST",
      headers: header,
    };

    const body = {
      grant_type: "refresh_token",
      client_id: "CXPJ3Wfi8bmabuHbj9BWl1mqgE15HW20RxRVw1Aj",
      client_secret:
        "NnWl37fjkQ7Qcj2EnfU5xng8XsyOlj4ct6MihB4TWxjr143QMxQqX5bjyZWz04ys4HZIjugeSyDhe48k4EZFPJpyvSzRuD2gh2Zs5myivnCOIYD1i7Pd17YwU2AstuMD",
      refresh_token: refresh_token,
    };

    api.post("oauth/token/", body, parameters).then(async (res) => {
      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("expires_in", res.data.expires_in);
      localStorage.setItem("token_type", res.data.token_type);
      localStorage.setItem("scope", res.data.scope);
    });
  } catch (err) {
    setAlert(400, "Ocorreu um erro de conexão com o servidor.", true);
    localStorage.clear();
    alert("Não foi possível estabelecer uma conexão.");
  }
};

(function temporizador() {
  if (localStorage.getItem("refresh_token")) {
    refreshToken()
  }

  setTimeout(temporizador, 270000);
})()

export default api;
