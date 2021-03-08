import api from "services/api";
import { setAlert } from "./Alerts";
import { setError } from "./Error";

export const newTechnicalVisit = (inputTechnicalVisit) => async (dispatch) => {
  try {
    await api.post("/technical_visit/technical_visit/", inputTechnicalVisit);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getTechnicalVisits());
  } catch (err) {
    console.error(err.message)
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400) {
      setAlert(400, "Formulário contém dados incorretos.", true);
      dispatch(setError(err.response.data));
    } else if (err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

export const getTechnicalVisits = (offset = 0, limit = 10) => async (
  dispatch
) => {
  try {
    const response = await api.get(
      `technical_visit/technical_visit/?offset=${offset}&limit=${limit}`
    );

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setTechnicalVisits(response.data));
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

const setTechnicalVisits = (technicalVisits) => ({
  type: "SET_TECHNICAL_VISITS",
  payload: {
    technicalVisits,
  },
});

export const getTechnicalVisitById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`technical_visit/technical_visit/${id}/`);

    const allotmentData = await api.get(
      `allotment/allotment/${response.data.allotment}/`
    );

    response.data.allotmentName = allotmentData.data.property_name;

    dispatch(setTechnicalVisit(response.data));
  } catch (err) {
    console.error(err.message);
  }
};

const setTechnicalVisit = (technicalVisit) => ({
  type: "SET_TECHNICAL_VISIT",
  payload: {
    technicalVisit,
  },
});

export const updateTechnicalVisit = (input) => async (dispatch) => {
  try {
    const response = await api.put(
      `technical_visit/technical_visit/${input.id}/`,
      input
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setTechnicalVisit(response.data));
    dispatch(getTechnicalVisits());
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
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};
