// import api from "services/api";
import api from "services/api";
import MembrosData from "views/Sindicato/Membros/MembrosData";
import { setAlert } from "./Alertas";
import converterDataToFormData from "../../utils/converterDataToFormData";

export const getMembers = () => async (dispatch) => {
  try {
    const response = await api.get("member/member/");

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

export const getDataMembers = () => async (dispatch) => {
  try {
    const response = await api.get("member/member/");
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

export const getAllotments = () => async (dispatch) => {
  try {
    const response = await api.get(`allotment/allotment/`);

    dispatch(setAllotments(response.data));
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
    } else if (err.response.status === 400 || err.response.status === 401) {
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

export const getDiagnosisAgriculturalSystems = () => async (dispatch) => {
  try {
    const response = await api("/agricultural_system/agricultural_system/");

    const diagnosisAgriculturalSystems = await Promise.all(
      response.data.map(async (item) => {
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

    dispatch(setDiagnosisAgriculturalSystems(diagnosisAgriculturalSystems));
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

const setDiagnosisAgriculturalSystems = (diagnosisAgriculturalSystems) => ({
  type: "SET_DIAGNOSIS_AGRICULTURAL_SYSTEMS",
  payload: {
    diagnosisAgriculturalSystems,
  },
});

export const getProductions = () => async (dispatch) => {
  try {
    const response = await api.get("production/production/");

    const productions = await Promise.all(
      response.data.map(async (item) => {
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

    dispatch(setProductions(productions));
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

const setProductions = (productions) => ({
  type: "SET_PRODUCTIONS",
  payload: {
    productions,
  },
});

export const getVegetablesProductions = () => async (dispatch) => {
  try {
    const response = await api.get("production/vegetables_production/");

    const vegetablesProductions = await Promise.all(
      response.data.map(async (item) => {
        const nameProduction = await api.get(
          `production/name_production/${item.production}/`
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

    dispatch(setVegetablesProductions(vegetablesProductions));
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

const setVegetablesProductions = (vegetablesProductions) => ({
  type: "SET_VEGETABLES_PRODUCTIONS",
  payload: {
    vegetablesProductions,
  },
});

export const getAnimalsProductions = () => async (dispatch) => {
  try {
    const response = await api.get("production/animal_production/");

    const animalsProductions = await Promise.all(
      response.data.map(async (item) => {
        const nameProduction = await api.get(
          `production/name_production/${item.production}/`
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

    dispatch(setAnimalsProductions(animalsProductions));

  } catch (err){
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
}

const setAnimalsProductions = (animalsProductions) => ({
  type: "SET_ANIMALS_PRODUCTIONS",
  payload: {
    animalsProductions
  }
})

export const getPsicultureProductions = () => async (dispatch) => {
  try {
    const response = await api.get("psiculture/psiculture/");

    const psicultureProductions = await Promise.all(
      response.data.map(async (item) => {

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setPsicultureProductions(psicultureProductions));
  } catch(err) {
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
}

const setPsicultureProductions = (psicultureProductions) => ({
  type: "SET_PSICULTURE_PRODUCTIONS",
  payload: {
    psicultureProductions
  }
})

export const getImprovements = () => async (dispatch) => {
  try {
    const response = await api.get("improvement/improvement/");

    const improvements = await Promise.all(
      response.data.map(async (item) => {

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setImprovements(improvements));
  } catch(err) {
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
}

const setImprovements = (improvements) => ({
  type: "SET_IMPROVEMENTS",
  payload: {
    improvements
  }
});


export const getTransports = () => async (dispatch) => {
  try {
    const response = await api.get("transport/transport/");

    const transports = await Promise.all(
      response.data.map(async (item) => {

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setTransports(transports));

  } catch(err) {
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
}

const setTransports = (transports) => ({
  type: "SET_TRANSPORTS",
  payload: {
    transports
  }
})

export const getTechnicalVisits = () => async (dispatch) => {
  try {
    const response = await api.get("technical_visit/technical_visit/");

    const technicalVisits = await Promise.all(
      response.data.map(async (item) => {

        const allotmentData = await api.get(
          `allotment/allotment/${item.allotment}/`
        );

        return {
          ...item,
          allotmentName: allotmentData.data.property_name,
        };
      })
    );

    dispatch(setTechnicalVisits(technicalVisits));

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
}

const setTechnicalVisits = (technicalVisits) => ({
  type: "SET_TECHNICAL_VISITS",
  payload: {
    technicalVisits
  }
})

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
    // const responseMember = await api.post(
    //   "member/member/",
    //   inputMember
    // );

    // inputAllotment.member = responseMember.data.id;

    // const formDataAllotment = converterDataToFormData(
    //   inputAllotment,
    //   fileAllotment
    // );

    // const responseAllotment = await api.post(
    //   "allotment/allotment/",
    //   formDataAllotment,
    //   {
    //     headers: {
    //       "Content-Type": `multipart/form-data; boundary=${formDataAllotment._boundary}`,
    //     },
    //   }
    // );

    // inputDiagnosisOfAgriculturalSystems.allotment = responseAllotment.data.id;

    // dispatch(
    //   postDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
    // );

    // dispatch(
    //   postProduction(
    //     responseAllotment.data.id,
    //     inputVegetablesProduction,
    //     inputPsicultureProduction
    //   )
    // );

    // dispatch(postImprovements(responseAllotment.data.id, inputImprovements));

    // dispatch(postTransport(responseAllotment.data.id, inputTransport));

    // dispatch(postTechinicalVisit(responseAllotment.data.id, inputTechnicalVisit));

    dispatch(
      postDocumentation(
        "f7263886-85bf-4087-9b42-96ca60dfe6f9",
        inputDocumentation,
        inputDocumentationList
      )
    );
  } catch (err) {
    console.error(err.message);
  }
};

export const postDiagnosisOfAgriculturalSystems = (
  inputDiagnosisOfAgriculturalSystems
) => async () => {
  try {
    await api.post(
      "agricultural_system/agricultural_system/",
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
      await api.post("transport/transport", transport);
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const postTechinicalVisit = (
  idAllotment,
  inputTechnicalVisit
) => async () => {
  inputTechnicalVisit.allotment = idAllotment;

  try {
    await api.post("technical_visit/technical_visit/", inputTechnicalVisit);
  } catch (err) {
    console.error(err.message);
  }
};

export const postProduction = (
  idAllotment,
  inputVegetablesProduction,
  inputPsicultureProduction
) => async () => {
  try {
    for (const production of inputVegetablesProduction) {
      production.allotment = idAllotment;
      await api.post("production/vegetables_production/", production);
    }

    for (const production of inputPsicultureProduction) {
      production.allotment = idAllotment;
      await api.post("psiculture/psiculture/", production);
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const postImprovements = (
  idAllotment,
  inputImprovements
) => async () => {
  try {
    for (const improvement of inputImprovements) {
      improvement.allotment = idAllotment;
      await api.post("improvement/improvement/", improvement);
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const postDocumentation = (
  idAllotment,
  inputDocumentation,
  inputDocumentationList
) => async () => {
  const documentationAllotment = { member: idAllotment };

  const formDataDocumentation = converterDataToFormData(
    documentationAllotment,
    inputDocumentation
  );

  console.log(inputDocumentation);

  Object.keys(inputDocumentationList).forEach((files) => {
    console.log(inputDocumentationList[files].value);
    formDataDocumentation.append(files, inputDocumentationList[files].value);
  });

  try {
    await api.post("documentation/documentation/", formDataDocumentation, {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${formDataDocumentation._boundary}`,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

export const getProductionName = () => async (dispatch) => {
  try {
    const response = await api.get("production/name_production/");

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
    const response = await api.get("production/type_production/");

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

export const getBiomes = () => async (dispatch) => {
  try {
    const response = await api.get("allotment/bioma/");

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
