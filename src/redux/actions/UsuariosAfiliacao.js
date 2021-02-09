import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alertas";

export const newUserAffiliation = (input, files) => async (dispatch) => {
  const formData = converterDataToFormData(input, files);

  try {
    const response = await api.post("user/user_affiliation/", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`
      }
    })
    dispatch(getUsersAffiliation());
    dispatch(setAlert(response.status, "Cadastro realizado com sucesso!", true));
  } catch(err) {
    console.error(err.message);
    if (err.message === "Network Error") {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      if (err.response.data.detail) {
        dispatch(setAlert(err.response.status, err.response.data.detail, true));
      } else if (err.response.data.error) {
        dispatch(setAlert(err.response.status, err.response.data.err, true));
      }
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
}

export const getUsersAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("user/user_affiliation/");
    dispatch(setUersAffiliation(response.data))
  } catch(err) {
    console.error(err.message);
    if (err.message === "Network Error") {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
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
    const response = await api.get("affiliation/affiliation_pj/");
    dispatch(setUsersPJAFFiliation(response.data));
  } catch(err) {
    console.error(err.message);
    if (err.message === "Network Error") {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      if (err.response.data.detail) {
        dispatch(setAlert(err.response.status, err.response.data.detail, true));
      } else if (err.response.data.error) {
        dispatch(setAlert(err.response.status, err.response.data.err, true));
      }
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
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
    const response = await api.get("affiliation/affiliation_pf/");
    dispatch(setUsersPFAFFiliation(response.data));
  } catch(err) {
    console.error(err.message);
    if (err.message === "Network Error") {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      if (err.response.data.detail) {
        dispatch(setAlert(err.response.status, err.response.data.detail, true));
      } else if (err.response.data.error) {
        dispatch(setAlert(err.response.status, err.response.data.err, true));
      }
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
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
    const response = await api.patch(`/user/user_affiliation/${user.id}/`, user);
    dispatch(setAlert(response.status, "Ativação realizada com sucesso!", true));
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
}

export const downloadUsersAffiliates = () => () => {
  try {

  } catch(err) {

  }
}

export const getUserAffiliation = () => async (dispatch) => {
  try {
    const response = await api.get("user/detail/user_affiliation/");
    dispatch(setUserAffiliation(response.data))
  } catch (err) {
    console.error(err.message);
    console.error("user_affiliation", err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
}

const setUserAffiliation = (userAffiliation) => ({
  type: "USER_AFFILIATION",
  payload: {
    userAffiliation
  }
})