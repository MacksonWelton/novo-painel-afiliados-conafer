import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";

export const newImprovements = (inputImprovements) => async (dispatch) => {
  try {
    for (const improvement of inputImprovements) {
      await api.post("improvement/improvement/", improvement);
    }
    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getImprovements());
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

export const getImprovements = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `improvement/improvement/?offset=${offset}&limit=${limit}`
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

    dispatch(setImprovements(response.data));
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

const setImprovements = (improvements) => ({
  type: "SET_IMPROVEMENTS",
  payload: {
    improvements,
  },
});

export const getImprovementById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`improvement/improvement/${id}`);

    const allotmentData = await api.get(
      `allotment/allotment/${response.data.allotment}/`
    );

    response.data.allotmentName = allotmentData.data.property_name;

    dispatch(setImprovement(response.data));
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

const setImprovement = (improvement) => ({
  type: "SET_IMPROVEMENT",
  payload: {
    improvement,
  },
});

export const updateImprovement = (input) => async (dispatch) => {
  try {
    const response = await api.put(
      `improvement/improvement/${input.id}/`,
      input
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setImprovement(response.data));
    dispatch(getImprovements());
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
