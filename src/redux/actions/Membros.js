import api from "services/api";
import { setAlert } from "./Alertas";
import converterDataToFormData from "../../utils/converterDataToFormData";

export const getMembers = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`member/member/?offset=${offset}&limit=${limit}`);

    dispatch(setMembers(response.data))
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

const setSubmitMessage = (submitMessage) => ({
  type: "SET_SUBMIT_MESSAGE",
  payload: {
    submitMessage,
  },
});

export const getMemberById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`member/member/${id}`);

    dispatch(setMember(response.data));
  } catch (err) {}
};

const setMember = (member) => ({
  type: "SET_MEMBER",
  payload: {
    member,
  },
});

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

export const getAllotments = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`allotment/allotment/?offset=${offset}&limit=${limit}`);

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

export const getHabitations = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get("resident/habitation/");

    console.log("funcionou", response.data)

    // const habitations = await Promise.all(
    //   response.data.map(async (item) => {
    //     const allotmentData = await api.get(
    //       `allotment/allotment/${item.allotment}/`
    //     );

    //     return {
    //       ...item,
    //       property_name: allotmentData.data.property_name,
    //     };
    //   })
    // );

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
    const response = await api.get(`resident/resident/?offset=${offset}&limit=${limit}`);

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

export const getDiagnosisAgriculturalSystems = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api(`/agricultural_system/agricultural_system/?offset=${offset}&limit=${limit}`);

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
          allotment_city: allotmentData.data.allotment_city,
          allotment_state: allotmentData.data.allotment_state,
        };
      })
    );

    dispatch(setDiagnosisAgriculturalSystems(response.data));
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

const setDiagnosisAgriculturalSystems = (diagnosisAgriculturalSystems) => ({
  type: "SET_DIAGNOSIS_AGRICULTURAL_SYSTEMS",
  payload: {
    diagnosisAgriculturalSystems,
  },
});

export const newProduction = (inputProduction) => async (dispatch) => {
  try {
    for (const production of inputProduction) {
      await api.post("production/production/", production);
    }

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getProductions());
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

export const newAnimalProduction = (inputAnimalProduction) => async (
  dispatch
) => {
  try {
    for (const production of inputAnimalProduction) {
      await api.post("production/animal_production/", production);
    }

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getAnimalsProductions());
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

export const newVegetableProduction = (inputVegetablesProduction) => async (
  dispatch
) => {
  try {
    for (const production of inputVegetablesProduction) {
      await api.post("production/vegetables_production/", production);
    }

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getVegetablesProductions());
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

export const newPsicultureProduction = (inputPsicultureProduction) => async (
  dispatch
) => {
  try {
    for (const production of inputPsicultureProduction) {
      await api.post("psiculture/psiculture/", production);
    }
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

export const getProductions = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`production/production/?offset=${offset}&limit=${limit}`);

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const nameProduction = await api.get(
          `production/name_production/${item.production}/`
        );

        const nameTypeProduction = await api.get(
          `production/type_production/${item.type_production}/`
        );

        return {
          ...item,
          productionName: nameProduction.data.name,
          typeName: nameTypeProduction.data.name,
        };
      })
    );

    dispatch(setProductions(response.data));
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

const setProductions = (productions) => ({
  type: "SET_PRODUCTIONS",
  payload: {
    productions,
  },
});

export const getVegetablesProductions = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`production/vegetables_production/?offset=${offset}&limit=${limit}`);

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const nameProduction = await api.get(
          `production/name_production?type_production=Vegetal`
        );

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          productionName: nameProduction.data.name,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setVegetablesProductions(response.data));
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

const setVegetablesProductions = (vegetablesProductions) => ({
  type: "SET_VEGETABLES_PRODUCTIONS",
  payload: {
    vegetablesProductions,
  },
});

export const getAnimalsProductions = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`production/animal_production/?offset=${offset}&limit=${limit}`);

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const nameProduction = await api.get(
          `production/name_production?type_production=Animal`
        );

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          productionName: nameProduction.data.name,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setAnimalsProductions(response.data));
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

const setAnimalsProductions = (animalsProductions) => ({
  type: "SET_ANIMALS_PRODUCTIONS",
  payload: {
    animalsProductions,
  },
});

export const getPsicultureProductions = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`psiculture/psiculture/?offset=${offset}&limit=${limit}`);

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

    dispatch(setPsicultureProductions(response.data));
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

const setPsicultureProductions = (psicultureProductions) => ({
  type: "SET_PSICULTURE_PRODUCTIONS",
  payload: {
    psicultureProductions,
  },
});

export const getImprovements = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`improvement/improvement/?offset=${offset}&limit=${limit}`);

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

export const getTransports = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`transport/transport/?offset=${offset}&limit=${limit}`);

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

export const getTechnicalVisits = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`technical_visit/technical_visit/?offset=${offset}&limit=${limit}`);

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

export const getDocuments = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(`documentation/documentation/?offset=${offset}&limit=${limit}`);

    response.data.results = await Promise.all(
      response.data.results.map(async (item) => {
        const member = await api.get(`member/member/${item.member}`);

        return {
          ...item,
          member: member.data.name,
          state: member.data.state,
          city: member.data.city,
        };
      })
    );

    dispatch(setDocuments(response.data));
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

const setDocuments = (documents) => ({
  type: "SET_DOCUMENTS",
  payload: {
    documents,
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

export const newDiagnosisAgriculturalSystems = (
  inputDiagnosisOfAgriculturalSystems
) => async (dispatch) => {
  try {
    await api.post(
      "agricultural_system/agricultural_system/",
      inputDiagnosisOfAgriculturalSystems
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getDiagnosisAgriculturalSystems());
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

export const newTransport = (inputTransport) => async (dispatch) => {
  try {
    await api.post("transport/transport", inputTransport);

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

export const newDocumentation = (
  inputDocumentation,
  inputDocumentationFile,
  inputDocumentationList
) => async (dispatch) => {
  const formDataDocumentation = converterDataToFormData(
    inputDocumentation,
    inputDocumentationFile
  );

  try {
    const response = await api.post(
      "documentation/documentation/",
      formDataDocumentation,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formDataDocumentation._boundary}`,
        },
      }
    );

    dispatch(newDocuments(response.data, inputDocumentationList));
    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
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

const newDocuments = (inputDocumentationFile, inputDocumentationList) => async (
  dispatch
) => {
  try {
    for (const documents of Object.keys(inputDocumentationList)) {
      for (const document of inputDocumentationList[documents]) {
        const documentId = {
          documentation: inputDocumentationFile.id,
          member: inputDocumentationFile.member,
        };

        const files = {
          archive: document,
        };

        const formDataDocumentationList = await converterDataToFormData(
          documentId,
          files
        );

        await api.post(
          `documentation/${documents.replace("_", "-")}/`,
          formDataDocumentationList,
          {
            headers: {
              "Content-Type": `multipart/form-data; boundary=${formDataDocumentationList._boundary}`,
            },
          }
        );
      }
    }
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

export const getProductionName = (type) => async (dispatch) => {
  try {
    let response;
    if (type) {
       response = await api.get(`production/name_production/?type_production=${type}`);
    } else {
      response = response = await api.get(`production/name_production/`);
    }


    dispatch(setProductionName(response.data));
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

const setProductionName = (productionName) => ({
  type: "SET_PRODUCTION_NAME",
  payload: {
    productionName,
  },
});

export const getTypeProduction = () => async (dispatch) => {
  try {
    const response = await api.get("production/type_production/");

    dispatch(setTypeProduction(response.data));
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

const setTypeProduction = (typeProduction) => ({
  type: "SET_TYPE_PRODUCTION",
  payload: {
    typeProduction,
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
