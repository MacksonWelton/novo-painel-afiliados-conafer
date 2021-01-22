import api from "services/api";
import { setAlert } from "./Alertas";

export const login = (data) => async (dispatch) => {
  const { email, password } = data;
  const userData = {
    grant_type: "password",
    client_id: "CXPJ3Wfi8bmabuHbj9BWl1mqgE15HW20RxRVw1Aj",
    client_secret:
      "NnWl37fjkQ7Qcj2EnfU5xng8XsyOlj4ct6MihB4TWxjr143QMxQqX5bjyZWz04ys4HZIjugeSyDhe48k4EZFPJpyvSzRuD2gh2Zs5myivnCOIYD1i7Pd17YwU2AstuMD",
    username: email,
    password: password,
  };

  try {
    const response = await api.post("oauth/token/", userData);

    dispatch(setAlert(response.status, "Login realizado com sucesso!", true));

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("expires_in", response.data.expires_in);
    localStorage.setItem("token_type", response.data.token_type);
    localStorage.setItem("scope", response.data.scope);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    const auth = localStorage.getItem("access_token") ? true : false;
    
    dispatch(setAuthentication(auth));
    
  } catch (err) {
    console.error(err.response);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

export const setAuthentication = (auth) => ({
  type: "AUTHENTICATION",
  payload: {
    auth,
  },
});


export const refreshToken = () => async (dispatch) => {
  try {

    const refresh_token = await localStorage.getItem("refresh_token");

    const body = {
      grant_type: "refresh_token",
      client_id: "CXPJ3Wfi8bmabuHbj9BWl1mqgE15HW20RxRVw1Aj",
      client_secret:
        "NnWl37fjkQ7Qcj2EnfU5xng8XsyOlj4ct6MihB4TWxjr143QMxQqX5bjyZWz04ys4HZIjugeSyDhe48k4EZFPJpyvSzRuD2gh2Zs5myivnCOIYD1i7Pd17YwU2AstuMD",
      refresh_token: refresh_token,
    };

      const res = await api.post("oauth/token/", body);

      localStorage.setItem("access_token", res.data.access_token);
      localStorage.setItem("refresh_token", res.data.refresh_token);
      localStorage.setItem("expires_in", res.data.expires_in);
      localStorage.setItem("token_type", res.data.token_type);
      localStorage.setItem("scope", res.data.scope);
  } catch (err) {
    dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    localStorage.clear();
    alert("Não foi possível estabelecer uma conexão.");
  }
};