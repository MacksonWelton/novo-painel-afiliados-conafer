import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";
import { setError } from "./Error";

export const newDiagnosisAgriculturalSystems = (
  inputDiagnosisOfAgriculturalSystems
) => async (dispatch) => {
  try {
    await api.post(
      "agricultural_system/agricultural_system/",
      inputDiagnosisOfAgriculturalSystems
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getDiagnosisAgriculturalSystems());
  } catch (err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400) {
      setAlert(400, "Formulário contém dados incorretos.", true);
      dispatch(setError(err.response.data));
    } else if (err.response.status === 401) {
      if (err.response.data.detail) {
        dispatch(setAlert(err.response.status, err.response.data.detail, true));
      } else {
        dispatch(setSubmitMessage(Object.values(err.response.data).join(" ")));
      }
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

export const getDiagnosisAgriculturalSystems = (
  offset = 0,
  limit = 10
) => async (dispatch) => {
  try {
    const response = await api(
      `/agricultural_system/agricultural_system/?offset=${offset}&limit=${limit}`
    );

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
          allotment_city: allotmentData.data.allotment_city,
          allotment_state: allotmentData.data.allotment_state,
        };
      })
    );

    dispatch(setDiagnosisAgriculturalSystems(response.data));
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

const setDiagnosisAgriculturalSystems = (diagnosisAgriculturalSystems) => ({
  type: "SET_DIAGNOSIS_AGRICULTURAL_SYSTEMS",
  payload: {
    diagnosisAgriculturalSystems,
  },
});

export const getDiagnosisAgriculturalSystemsById = (id) => async (dispatch) => {
  try {
    const response = await api.get(
      `agricultural_system/agricultural_system/${id}/`
    );

    console.log(response.data);

    dispatch(setDiagnosisAgriculturalSystem(response.data));
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

const setDiagnosisAgriculturalSystem = (diagnosisAgriculturalSystem) => ({
  type: "SET_DIAGNOSIS_AGRICULTURAL_SYSTEM",
  payload: {
    diagnosisAgriculturalSystem,
  },
});

export const updateDiagnosisAgriculturalSystem = (input) => async (
  dispatch
) => {
  try {
    const response = await api.put(
      `agricultural_system/agricultural_system/${input.id}/`,
      input
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setDiagnosisAgriculturalSystem(response.data));
    dispatch(getDiagnosisAgriculturalSystems());
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400) {
      setAlert(400, "Formulário contém dados incorretos.", true);
      dispatch(setError(err.response.data));
    } else if (err.response.status === 401) {
      if (err.response.data.detail) {
        dispatch(setAlert(err.response.status, err.response.data.detail, true));
      } else {
        dispatch(setSubmitMessage(Object.values(err.response.data).join(" ")));
      }
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};
