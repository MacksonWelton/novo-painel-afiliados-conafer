import api from "services/api";
import { setAlert } from "./Alertas";

export const login = (data) => async (dispatch) => {
  const { email, password} = data;
  const userData = 
    {
      grant_type: "password",
      username: email,
      password: password,
    }

  try {
    const response = await api.post('/api/v1/oauth/token/', userData, {
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    dispatch(setAlert(response.status, "Login realizado com sucesso!", true));

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("expires_in", response.data.expires_in);
    localStorage.setItem("token_type", response.data.token_type);
    localStorage.setItem("scope", response.data.scope);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    const auth = localStorage.getItem("access_token") ? true : false;

    dispatch(setAuthentication(auth));
  } catch (err) {
    console.error("erro", err.message);
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

export const setAuthentication = (auth) => ({
  type: "AUTHENTICATION",
  payload: {
    auth
  }
})