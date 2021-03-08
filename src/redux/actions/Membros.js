import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";
import { setError } from "./Error";

export const getAllMembers = () => async (dispatch) => {
  try {
    const response = await api.get("member/member/");

    dispatch(setAllMembers(response.data));
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

const setAllMembers = (allMembers) => ({
  type: "SET_ALL_MEMBERS",
  payload: {
    allMembers,
  },
});

export const getMembers = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `member/member/?offset=${offset}&limit=${limit}`
    );

    dispatch(setMembers(response.data));
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

export const setMembers = (members) => ({
  type: "SET_MEMBERS",
  payload: {
    members,
  },
});

export const getMemberById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`member/member/${id}/`);

    dispatch(setMember(response.data));
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

const setMember = (member) => ({
  type: "SET_MEMBER",
  payload: {
    member,
  },
});

export const newMember = (inputMember) => async (dispatch) => {
  try {
    await api.post("member/member/", inputMember);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getMembers());
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

export const updateMember = (input) => async (dispatch) => {
  try {
    const response = await api.put(`member/member/${input.id}/`, input);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setMember(response.data));
    dispatch(getMembers());
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
