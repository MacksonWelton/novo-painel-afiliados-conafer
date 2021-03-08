import api from "services/api";
import { setAlert, setSubmitMessage } from "./Alerts";
import { setError } from "./Error";

export const newProduction = (inputProduction) => async (dispatch) => {
  try {
    for (const production of inputProduction) {
      await api.post("production/production/", production);
    }

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getProductions());
  } catch (err) {
    console.error(err.message)
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

export const getProductions = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `production/production/?offset=${offset}&limit=${limit}`
    );

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

export const getProductionById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`production/production/${id}/`);

    const nameProduction = await api.get(
      `production/name_production/${response.data.production}/`
    );

    response.data.productionName = nameProduction.data.name;

    const nameTypeProduction = await api.get(
      `production/type_production/${response.data.type_production}/`
    );

    response.data.typeName = nameTypeProduction.data.name;

    dispatch(setProduction(response.data));
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

const setProduction = (production) => ({
  type: "SET_PRODUCTION",
  payload: {
    production,
  },
});

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

export const newPsicultureProduction = (inputPsicultureProduction) => async (
  dispatch
) => {
  try {
    for (const production of inputPsicultureProduction) {
      await api.post("psiculture/psiculture/", production);
    }

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));

    dispatch(getPsicultureProductions());
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

export const getVegetablesProductions = (offset = 0, limit = 10) => async (
  dispatch
) => {
  try {
    const response = await api.get(
      `production/vegetables_production/?offset=${offset}&limit=${limit}`
    );

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
          productionName: nameProduction.data[0].name,
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

export const getAnimalsProductions = (offset = 0, limit = 10) => async (
  dispatch
) => {
  try {
    const response = await api.get(
      `production/animal_production/?offset=${offset}&limit=${limit}`
    );

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
          productionName: nameProduction.data[0].name,
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

export const getPsicultureProductions = (offset = 0, limit = 10) => async (
  dispatch
) => {
  try {
    const response = await api.get(
      `psiculture/psiculture/?offset=${offset}&limit=${limit}`
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

export const getProductionName = (type) => async (dispatch) => {
  try {
    let response;
    if (type) {
      response = await api.get(
        `production/name_production/?type_production=${type}`
      );
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
    console.error(err.message);
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

export const updateProduction = (input) => async (dispatch) => {
  try {
    const response = await api.put(`production/production/${input.id}/`, input);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setProduction(response.data));
    dispatch(getProductions());
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

export const getVegetablesProduction = (id) => async (dispatch) => {
  try {
    const response = await api.get(`production/vegetables_production/${id}/`);

    const nameProduction = await api.get(
      `production/name_production?type_production=Vegetal`
    );

    response.data.productionName = nameProduction.data[0].name;

    const allotmentData = await api.get(
      `allotment/allotment/${response.data.allotment}/`
    );

    response.data.allotmentName = allotmentData.data.property_name;

    dispatch(setVegetablesProduction(response.data));
  } catch (err) {
    console.error(err.message);
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

const setVegetablesProduction = (vegetablesProduction) => ({
  type: "SET_VEGETABLES_PRODUCTION",
  payload: {
    vegetablesProduction,
  },
});

export const updateVegetablesProduction = (input) => async (dispatch) => {
  try {
    const response = await api.put(
      `production/vegetables_production/${input.id}/`,
      input
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setVegetablesProduction(response.data));
    dispatch(getVegetablesProductions());
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

export const getAnimalsProductionById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`production/animal_production/${id}/`);

    const nameProduction = await api.get(
      `production/name_production?type_production=Animal`
    );

    response.data.productionName = nameProduction.data[0].name;

    const allotmentData = await api.get(
      `allotment/allotment/${response.data.allotment}/`
    );

    response.data.allotmentName = allotmentData.data.property_name;

    dispatch(setAnimalsProduction(response.data));
  } catch (err) {
    console.error(err.message);
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

const setAnimalsProduction = (animalsProduction) => ({
  type: "SET_ANIMALS_PRODUCTION",
  payload: {
    animalsProduction,
  },
});

export const updateAnimalsProduction = (input) => async (dispatch) => {
  try {
    const response = await api.put(
      `production/animal_production/${input.id}/`,
      input
    );

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setAnimalsProduction(response.data));
    dispatch(getAnimalsProductions());
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

export const getPsicultureProductionById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`psiculture/psiculture/${id}`);

    dispatch(setPsicultureProduction(response.data));
  } catch (err) {
    console.error(err.message);
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

const setPsicultureProduction = (psiculture) => ({
  type: "SET_PSICULTURE_PRODUCTION",
  payload: {
    psiculture,
  },
});

export const updatePsicultureProduction = (input) => async (dispatch) => {
  try {
    const response = await api.put(`psiculture/psiculture/${input.id}`, input);

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    dispatch(setPsicultureProduction(response.data));
    dispatch(getPsicultureProductions());
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
