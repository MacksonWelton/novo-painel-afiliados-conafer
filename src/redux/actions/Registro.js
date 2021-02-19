import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alerts";

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await api.post(
      "user/user_affiliation/",
      userData,
      {
        header: {
          "content-type": "application/json",
        },
      }
    );

    dispatch(
      setAlert(
        response.status,
        "Cadastro realizado com sucesso! Confira a mensagem de ativação em seu e-mail.",
        true
      )
    );
    dispatch(setSignUp(response.status));
  } catch (err) {
    console.error(err.response);
    // console.error(err.message);

    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.data.email) {
      dispatch(
        setAlert(err.response.status, err.response.data.email[0], true)
      );
    } else if (err.response.data[0]) {
      dispatch(
        setAlert(err.response.status, err.response.data[0], true)
      );
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }

  }
};

export const setSignUp = (status) => ({
  type: "SET_SIGN_UP",
  payload: {
    status,
  },
});

export const recoverPassword = (email) => (dispatch) => {
  try {
  } catch (err) {
    console.error(err.response);
    // console.error(err.message);
    dispatch(setAlert("error", err.response.data.error_description, true));
  }
};

export const getAgriculturalProduction = () => async (dispatch) => {
  try {
    const response = await api.get("production/name_production/");
    dispatch(setAgriculturalProduction(response.data));
  } catch (err) {
    console.error(err.response);
    dispatch(setAlert("error", err.response.data.error_description, true));
  }
};

export const TypeAgriculturalProduction = () => async (dispatch) => {
  try {
    const response = await api.get("production/type_production/");

    dispatch(setTypeAgriculturalProduction(response.data));
  } catch (err) {
    console.error(err.response);
    // console.error(err.message);
    dispatch(setAlert("error", err.response.data.error_description, true));
  }
};

export const pjAffiliateRegister = (
  input,
  files,
  agriculturalProduction
) => async (dispatch) => {
  const formData = converterDataToFormData(input, files);

  try {
    const response = await api.post(
      "affiliation/affiliation_pj/",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        },
      }
    );

    if (agriculturalProduction.length > 0 && response.data.id) {
      dispatch(
        newAgriculturalProduction(response.data.id, agriculturalProduction)
      );
    }

    dispatch(
      setAlert(response.status, "Cadastro realizado com sucesso!", true)
    );
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

const newAgriculturalProduction = (id, agriculturalProduction) => async (
  dispatch
) => {
  try {
    let response;

    agriculturalProduction.forEach(async (production) => {
      production.affiliation = id;
      response = await api.post("production/production/", production);
    });

    dispatch(
      setAlert(response.status, "Cadastro realizado com sucesso!", true)
    );
  } catch (err) {
    dispatch(
      setAlert(err.response.status, err.response.data.error_description, true)
    );
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

export const pfAffiliateRegister = (userData, agriculturalProduction) => async (
  dispatch
) => {
  try {
    const response = await api.post(
      "affiliation/affiliation_pf/",
      userData
    );

    if (agriculturalProduction.length > 0 && response.data.id) {
      dispatch(
        newAgriculturalProduction(response.data.id, agriculturalProduction)
      );
    }

    dispatch(
      setAlert(response.status, "Cadastro realizado com sucesso!", true)
    );
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

const setAgriculturalProduction = (agriculturalProductions) => ({
  type: "SET_AGRICULTURAL_PRODUCTIONS",
  payload: {
    agriculturalProductions,
  },
});

const setTypeAgriculturalProduction = (typeProduction) => ({
  type: "SET_TYPE_PRODUCTION",
  payload: {
    typeProduction,
  },
});
