// import api from "services/api";
import api from "services/api";
import MembrosData from "views/Sindicato/Membros/MembrosData";
import { setAlert } from "./Alertas";
import converterDataToFormData from "../../utils/converterDataToFormData";

export const getMembers = () => async (dispatch) => {
  try {
    // const response = await api.get("/api/v1/member/member/");
    dispatch(setMembers(MembrosData));
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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

export const newMember = (input) => async (dispatch) => {
  try {
    const response = await api.post("/api/v1/member/member/", input);

    dispatch(setMember(response.data));

    dispatch(setSubmitMessage(false));
  } catch (err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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

const setMember = (member) => ({
  type: "SET_MEMBER",
  payload: {
    member,
  },
});

const setSubmitMessage = (submitMessage) => ({
  type: "SET_SUBMIT_MESSAGE",
  payload: {
    submitMessage,
  },
});

export const newAllotment = (input, files) => async (dispatch) => {
  const formData = converterDataToFormData(input, files);
  try {
    const response = await api.post("/api/v1/allotment/allotment/", formData, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
      },
    });

    dispatch(setAllotment(response.data));
    dispatch(setSubmitMessage(false));
    
  } catch (err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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

const setAllotment = (allotment) => ({
  type: "SET_ALLOTMENT",
  payload: {
    allotment
  }
})

export const newAgriculturalSystem = (input) => async (dispatch) => {
  try {
    await api.post("/api/v1/agricultural_system/agricultural_system/", input);

    dispatch(setSubmitMessage(false));
  } catch(err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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
}

export const getProductionName = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/name_production/");

    dispatch(setProductionName(response.data))
  } catch(err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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
}

const setProductionName = (productionName) => ({
  type: "SET_PRODUCTION_NAME",
  payload: {
    productionName
  }
})

export const getTypeProduction = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/type_production/");

    dispatch(setTypeProduction(response.data));
  } catch(err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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
}

const setTypeProduction = (typeProduction) => ({
  type: "SET_TYPE_PRODUCTION",
  payload: {
    typeProduction
  }
})


export const getDataMembers = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/member/member/");
    dispatch(setDataMembers(response.data));
  } catch (err) {
    console.error(err.response);
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(
        setAlert(err.response.status, err.response.data.error_description, true)
      );
    }
  }
};

const setDataMembers = (dataMembers) => ({
  type: "SET_DATA_MEMBERS",
  payload: {
    dataMembers,
  },
});

export const getBiomes = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/allotment/bioma/");

    dispatch(setBiomes(response.data));
  } catch (err) {
    if (!err.response) {
      dispatch(
        setAlert(400, "Ocorreu um erro de conexão com o servidor.", true)
      );
    } else if (err.response.status === 400 || err.response.status === 401) {
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

export const downloadMembers = (data) => () => {
  try {
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteMembers = (data) => (dispatch) => {
  try {
    dispatch(removeMembers(data));
  } catch (err) {
    console.error(err.message);
  }
};

const removeMembers = (members) => ({
  type: "DELETE_MEMBERS",
  payload: {
    members,
  },
});
