import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert, setSubmitMessage } from "./Alerts";

export const newAllotment = (inputAllotment, fileAllotment) => async (
  dispatch
) => {
  const formDataAllotment = converterDataToFormData(
    inputAllotment,
    fileAllotment
  );

  try {
    await api.post("allotment/allotment/", formDataAllotment, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formDataAllotment._boundary}`,
      },
    });

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getAllotments());
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

export const getAllAllotments = () => async (dispatch) => {
  try {
    const response = await api.get(`allotment/allotment/`);

    dispatch(setAllAllotments(response.data));
  } catch (err) {
    console.error(err);
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

const setAllAllotments = (allAllotments) => ({
  type: "SET_ALL_ALLOTMENTS",
  payload: {
    allAllotments,
  },
});

export const getAllotments = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `allotment/allotment/?offset=${offset}&limit=${limit}`
    );

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const bioma = await api.get(`allotment/bioma/${item.bioma}/`);

        return {
          ...item,
          biomaName: bioma.data.name,
        };
      })
    );

    dispatch(setAllotments(response.data));
  } catch (err) {
    console.error(err.response);
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

const setAllotments = (allotments) => ({
  type: "SET_ALLOTMENTS",
  payload: {
    allotments,
  },
});

export const getAllotmentById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`allotment/allotment/${id}/`);

    dispatch(setAllotmentById(response.data));
  } catch (err) {
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

const setAllotmentById = (allotment) => ({
  type: "",
  payload: {
    allotment,
  },
});

export const getBiomes = () => async (dispatch) => {
  try {
    const response = await api.get("allotment/bioma/");

    dispatch(setBiomes(response.data));
  } catch (err) {
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

const setBiomes = (biomes) => ({
  type: "BIOMES",
  payload: {
    biomes,
  },
});
