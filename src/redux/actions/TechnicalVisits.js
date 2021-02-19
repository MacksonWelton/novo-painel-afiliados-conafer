import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";

export const newTechnicalVisit = (inputTechnicalVisit) => async (dispatch) => {
  try {
    await api.post("/technical_visit/technical_visit/", inputTechnicalVisit);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getTechnicalVisits());
  } catch (err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
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
