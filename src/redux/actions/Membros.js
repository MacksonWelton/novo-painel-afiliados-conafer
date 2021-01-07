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

const setSubmitMessage = (submitMessage) => ({
  type: "SET_SUBMIT_MESSAGE",
  payload: {
    submitMessage,
  },
});

export const newMember = (
  inputMember,
  inputAllotment,
  fileAllotment,
  inputDiagnosisOfAgriculturalSystems,
  inputVegetablesProduction,
  inputPsicultureProduction,
  inputImprovements,
  inputTransport,
  inputTechnicalVisit,
  inputDocumentation,
  inputDocumentationList
) => async (dispatch) => {
  try {
    const responseMember = await api.post(
      "/api/v1/member/member/",
      inputMember
    );

    inputAllotment.member = responseMember.data.id;

    const formDataAllotment = converterDataToFormData(
      inputAllotment,
      fileAllotment
    );

    const responseAllotment = await api.post(
      "/api/v1/allotment/allotment/",
      formDataAllotment,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formDataAllotment._boundary}`,
        },
      }
    );

    inputDiagnosisOfAgriculturalSystems.allotment = responseAllotment.data.id;

    dispatch(
      postDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
    );

    dispatch(
      postProduction(
        responseAllotment.data.id,
        inputVegetablesProduction,
        inputPsicultureProduction
      )
    );

    dispatch(postImprovements(responseAllotment.data.id, inputImprovements));

    dispatch(postTransport(responseAllotment.data.id, inputTransport));

    dispatch(postTechinicalVisit(responseAllotment.data.id, inputTechnicalVisit));

    dispatch();

    inputDocumentation.allotment = responseAllotment.data.id;

  } catch (err) {
    console.error(err.message);
  }
};

export const postDiagnosisOfAgriculturalSystems = (
  inputDiagnosisOfAgriculturalSystems
) => async () => {
  try {
    await api.post(
      "/api/v1/agricultural_system/agricultural_system/",
      inputDiagnosisOfAgriculturalSystems
    );
  } catch (err) {
    console.error(err.message);
  }
};

export const postTransport = (idAllotment, inputTransport) => async () => {
  try {
    for (const transport of inputTransport) {
      transport.allotment = idAllotment;
      await api.post("/api/v1/transport/transport");
    }
  } catch(err) {
    console.error(err.message);
  }
}

export const postTechinicalVisit = (idAllotment, inputTechnicalVisit) => async () => {

  inputTechnicalVisit.allotment = idAllotment;

  try {
    await api.post(
      "/api/v1/technical_visit/technical_visit/",
      inputTechnicalVisit
    );
  } catch (err) {
    console.error(err.message);
  }
}

export const postProduction = (
  idAllotment,
  inputVegetablesProduction,
  inputPsicultureProduction
) => async () => {
  try {
    for (const production of inputVegetablesProduction) {
      production.allotment = idAllotment;
      await api.post("/api/v1/production/vegetables_production/", production);
    }

    for (const production of inputPsicultureProduction) {
      production.allotment = idAllotment;
      await api.post("/api/v1/production/vegetables_production/", production);
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const postImprovements = (idAllotment, inputImprovements) => async () => {
  try {
    for (const improvement of inputImprovements) {
      improvement.allotment = idAllotment;
      await api.post("/api/v1/improvement/improvement/", improvement);
    }
  } catch (err) {
    console.error(err.message)
  }
}

export const postDocumentation = (idAllotment, inputDocumentation, inputDocumentationList) => async () => {
  try {
    const formDataDocumentation = converterDataToFormData(
      inputDocumentation,
      inputDocumentation
    );

    let formData;

    for (formData of inputDocumentationList) {
      formData = Object.assign(
        formDataDocumentation,
        converterDataToFormData("", inputDocumentationList)
      );
    }

    await api.post("/api/v1/documentation/documentation/", formData);
  } catch (err) {
    console.error(err.message);
  }
}

export const getProductionName = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/name_production/");

    dispatch(setProductionName(response.data));
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

const setProductionName = (productionName) => ({
  type: "SET_PRODUCTION_NAME",
  payload: {
    productionName,
  },
});

export const getTypeProduction = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/production/type_production/");

    dispatch(setTypeProduction(response.data));
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

const setTypeProduction = (typeProduction) => ({
  type: "SET_TYPE_PRODUCTION",
  payload: {
    typeProduction,
  },
});

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
