import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alertas";

export const getProfile = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/user/detail/user_affiliation/");
    dispatch(setProfile(response.data));
  } catch (err) {
    console.error(err.response);
    // console.error(err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
};

export const updateProfile = (input, files) => async (dispatch) => {
  const formData = converterDataToFormData(input, files);

  try {
    const response = await api.put(
      `/api/v1/user/user_affiliation/${input.id}/`,
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }
    );
    dispatch(setProfile(response.data));

    dispatch(setAlert(response.status, "Dados atualizados com sucesso!", true));
  } catch (err) {
    console.error(err.response);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
};

const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: {
    profile,
  },
});

export const updatePassword = (input, profile) => async (dispatch) => {
  try {
    const response = await api.patch(
      `/api/v1/user/user_affiliation/${profile.id}/`,
      input,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch(setAlert(response.status, "Dados atualizados com sucesso!", true));
  } catch (err) {
    console.error(err.response);
    // console.error(err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
};

export const newProfile = (profile) => () => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};
