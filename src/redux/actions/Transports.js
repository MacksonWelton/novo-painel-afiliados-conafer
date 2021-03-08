import api from "services/api";
import { setAlert } from "./Alerts";
import { setError } from "./Error";

export const newTransport = (inputTransport) => async (dispatch) => {
  try {
    await api.post("transport/transport/", inputTransport);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getTransports());
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

export const getTransportById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`transport/transport/${id}/`);

    const allotmentData = await api.get(
      `allotment/allotment/${response.data.allotment}/`
    );

    response.data.allotmentName = allotmentData.data.property_name;

    dispatch(setTransport(response.data));
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

const setTransport = (transport) => ({
  type: "SET_TRANSPORT",
  payload: {
    transport,
  },
});

export const updateTransport = (input) => async (dispatch) => {
  try {
    const response = await api.put(`transport/transport/${input.id}/`, input);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setTransport(response.data));
    dispatch(getTransports());
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
