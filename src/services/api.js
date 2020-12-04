import axios from 'axios';

const api = axios.create({
  baseURL: "https://cra.conafer.org.br:7999"
});

api.interceptors.request.use(async (config) => {
    const accessToken = await localStorage.getItem("access_token")

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const access_token = localStorage.getItem("access_token");
    if (error.response.status === 401 && access_token) {
      const response = await refreshToken(error);
      return response;
    }
    return Promise.reject(error);
  }
);

const refreshToken = async (error) => {
  let originalRequest = error.config;
  return new Promise((resolve, reject) => {
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
	      client_secret: "NnWl37fjkQ7Qcj2EnfU5xng8XsyOlj4ct6MihB4TWxjr143QMxQqX5bjyZWz04ys4HZIjugeSyDhe48k4EZFPJpyvSzRuD2gh2Zs5myivnCOIYD1i7Pd17YwU2AstuMD",
        refresh_token,
      };
      api
        .post(
          "/api/v1/oauth/token/",
          body,
          parameters
        )
        .then(async (res) => {
          localStorage.setItem("access_token", res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          // Fazer algo caso seja feito o refresh token
          originalRequest.headers.Authorization = 'Bearer ' + res.data.access_token;
          return resolve(axios(originalRequest));
        })
        .catch((err) => {
          // Fazer algo caso não seja feito o refresh token
          localStorage.clear();
          return reject(err);
        });
    } catch (err) {
      return reject(err);
    }
  });
};

export default api;