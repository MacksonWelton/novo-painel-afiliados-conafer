import api from "services/api";
import { setAlert } from "./Alerts";

export const newHabitation = (habitation) => async (dispatch) => {
  try {
    await api.post("resident/habitation/", habitation);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(getHabitations());
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

export const getHabitations = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `resident/habitation?offset=${offset}&limit=${limit}`
    );

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          property_name: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setHabitations(response.data));
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

const setHabitations = (habitations) => ({
  type: "SET_HABITATIONS",
  payload: {
    habitations,
  },
});

export const newResident = (resident) => async (dispatch) => {
  try {
    await api.post("resident/resident/", resident);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(getResidents);
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

export const getResidents = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `resident/resident/?offset=${offset}&limit=${limit}`
    );

    dispatch(setResidents(response.data));
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

const setResidents = (residents) => ({
  type: "SET_RESIDENTS",
  payload: {
    residents,
  },
});
