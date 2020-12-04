import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alertas";

export const getProfile = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/user/detail/user_affiliation/");
    dispatch(setProfile(response.data));
  } catch (err) {
    dispatch(
      setAlert(err.response.status, err.response.data.error_description, true)
    );
    console.error(err.response.status);
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
    dispatch(
      setAlert(err.response.status, err.response.data.error_description, true)
    );
    console.error(err.message);
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
    dispatch(
      setAlert(err.response.status, err.response.data.error_description, true)
    );
    console.error(err.message);
  }
};

export const newProfile = (profile) => () => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};
