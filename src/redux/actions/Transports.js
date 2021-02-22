import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";

export const newTransport = (inputTransport) => async (dispatch) => {
    try {
      await api.post("transport/transport/", inputTransport);
  
      dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
  
      dispatch(getTransports());
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

export const getTransports = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `transport/transport/?offset=${offset}&limit=${limit}`
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

    dispatch(setTransports(response.data));
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

const setTransports = (transports) => ({
  type: "SET_TRANSPORTS",
  payload: {
    transports,
  },
});
