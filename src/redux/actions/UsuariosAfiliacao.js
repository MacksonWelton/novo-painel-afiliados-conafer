import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alertas";

export const newUserAffiliation = (input, files) => async (dispatch) => {
  const formData = converterDataToFormData(input, files);

  try {
    const response = await api.post("/api/v1/user/user_affiliation/", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
      }
    })
    dispatch(getUsersAffiliation());
    dispatch(setAlert(response.status, "Cadastro realizado com sucesso!", true));
  } catch(err) {
    console.error(err.message)
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

export const getUsersAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/user/user_affiliation/");
    dispatch(setUersAffiliation(response.data))
  } catch(err) {
    console.error(err.message);
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

const setUersAffiliation = (usersAffiliation) => ({
  type: "USERS_AFFILIATION",
  payload: {
    usersAffiliation
  }
})

export const getUsersPJAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/affiliation/affiliation_pj/");
    dispatch(setUsersPJAFFiliation(response.data));
  } catch(err) {
    console.error(err.message);
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

const setUsersPJAFFiliation = (usersPJAffiliation) => ({
  type: "SET_USERS_PJ_AFFILIATION",
  payload: {
    usersPJAffiliation
  }
});

export const getUsersPFAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/affiliation/affiliation_pf/");
    dispatch(setUsersPFAFFiliation(response.data));
  } catch(err) {
    console.error(err.message);
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

const setUsersPFAFFiliation = (usersPFAffiliation) => ({
  type: "SET_USERS_PF_AFFILIATION",
  payload: {
    usersPFAffiliation
  }
});

export const updateAffiliatesActivation = (user) => async (dispatch) => {
  try {
    const response = await api.patch(`/api/v1/user/user_affiliation/${user.id}/`, user);
    dispatch(setAlert(response.status, "Ativação realizada com sucesso!", true));
  } catch (err) {
    console.error(err.message)
    dispatch(setAlert(err.response.status, err.response.data.error_description, true));
  }
}

export const downloadUsersAffiliates = () => () => {
  try {

  } catch(err) {

  }
}

export const getUserAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/user/detail/user_affiliation/");
    dispatch(setUserAffiliation(response.data))
  } catch (err) {
    // dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    console.error(err.message)
  }
}

const setUserAffiliation = (userAffiliation) => ({
  type: "USER_AFFILIATION",
  payload: {
    userAffiliation
  }
})