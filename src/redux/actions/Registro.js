import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert } from "./Alertas";

export const signUp = (userData) => async (dispatch) => {
  try {
    const response = await api.post(
      "/api/v1/user/user_affiliation/",
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
    console.error(err.message);

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
    console.error(err.message);
    dispatch(setAlert("error", err.response.data.error_description, true));
  }
};

export const AgriculturalProduction = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/name_production/");
    dispatch(setAgriculturalProduction(response.data));
  } catch (err) {
    console.error(err.message);
  }
};

export const TypeAgriculturalProduction = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/type_production/");

    dispatch(setTypeAgriculturalProduction(response.data));
  } catch (err) {
    dispatch(setAlert("error", err.response.data.error_description, true));
    console.error(err.message);
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
      "/api/v1/affiliation/affiliation_pj/",
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
    console.error(err.message);
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
      response = await api.post("/api/v1/production/production/", production);
    });

    dispatch(
      setAlert(response.status, "Cadastro realizado com sucesso!", true)
    );
  } catch (err) {
    dispatch(
      setAlert(err.response.status, err.response.data.error_description, true)
    );
    console.error(err.message);
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
      "/api/v1/affiliation/affiliation_pf/",
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
    console.error(err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
};

const setAgriculturalProduction = (production) => ({
  type: "SET_PRODUCTIONS",
  payload: {
    production,
  },
});

const setTypeAgriculturalProduction = (typeProduction) => ({
  type: "SET_TYPE_PRODUCTION",
  payload: {
    typeProduction,
  },
});

export const setBeneficiaryIdentity = (beneficiaryIdentity) => ({
  type: "SET_BENEFICIARY_IDENTITY",
  payload: {
    beneficiaryIdentity,
  },
});

export const setPlotLocation = (plotLocation) => ({
  type: "SET_PLOT_LOCATION",
  payload: {
    plotLocation,
  },
});

export const setHouses = (houses) => ({
  type: "SET_HOUSES",
  payload: {
    houses,
  },
});

export const deleteHouse = () => ({
  type: "DELETE_HOUSE",
});

export const setResidents = (resident, houseNumber) => ({
  type: "SET_RESIDENTS",
  payload: {
    resident,
    houseNumber,
  },
});

export const setFamilyUnitIdentification = (familyUnitIdentification) => ({
  type: "SET_FAMILY_UNIT_IDENTIFICATION",
  payload: {
    familyUnitIdentification,
  },
});

export const setGeneralFamilyUnitInfo = (generalFamilyUnitInfo) => ({
  type: "SET_GENERAL_FAMILY_UNIT_INFO",
  payload: {
    generalFamilyUnitInfo,
  },
});

export const setDiagnosisOfAgriculturalSystems = (
  diagnosisOfAgriculturalSystems
) => ({
  type: "SET_DIAGNOSIS_OF_AGRICULTURAL_SYSTEMS",
  payload: {
    diagnosisOfAgriculturalSystems,
  },
});

export const setProduction = (production) => ({
  type: "SET_PRODUCTION",
  payload: {
    production,
  },
});
