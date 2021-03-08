import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert, setSubmitMessage } from "./Alerts";
import { setError } from "./Error";

export const getDocuments = (offset = 0, limit = 10) => async (dispatch) => {
  try {
    const response = await api.get(
      `documentation/documentation/?offset=${offset}&limit=${limit}`
    );

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

const newDocuments = (inputDocumentationFile, inputDocumentationList) => async (
  dispatch
) => {
  try {
    for (const documents of Object.keys(inputDocumentationList)) {
      for (const document of inputDocumentationList[documents]) {
        const documentId = {
          documentation: inputDocumentationFile.id,
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

export const getBithCertificates = (documentId) => async (dispatch) => {
  try {
    const response = await api.get(
      `/documentation/birth-certificates?documentation=${documentId}`
    );

    dispatch(setBithCertificates(response.data));
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

const setBithCertificates = (birthCertificates) => ({
  type: "SET_BIRTH_CERTIFICATES",
  payload: {
    birthCertificates,
  },
});

export const getCPFS = (documentId) => async (dispatch) => {
  try {
    const response = await api.get(
      `/documentation/cpf-files?documentation=${documentId}`
    );

    dispatch(setCPFS(response.data));
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

const setCPFS = (cpfs) => ({
  type: "SET_CPFS",
  payload: {
    cpfs,
  },
});

export const getEconomicActivities = (documentId) => async (dispatch) => {
  try {
    const response = await api.get(
      `/documentation/economic-activities?documentation=${documentId}`
    );

    dispatch(setEconomicActivities(response.data));
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

const setEconomicActivities = (economicActivities) => ({
  type: "SET_ECONOMIC_ACTIVITIES",
  payload: {
    economicActivities,
  },
});

export const getImprovementsImage = (documentId) => async (dispatch) => {
  try {
    const response = await api.get(
      `/documentation/improvements-image?documentation=${documentId}`
    );

    dispatch(setImprovementsImage(response.data));
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

const setImprovementsImage = (improvementsImage) => ({
  type: "SET_IMPROVEMENTS_IMAGE",
  payload: {
    improvementsImage,
  },
});

export const getDocumentById = (id) => async (dispatch) => {
  try {
    const response = await api.get(`documentation/documentation/${id}`);

    const member = await api.get(`member/member/${response.data.member}`);

    response.data.memberName = member.data.name;

    dispatch(setDocument(response.data));
  } catch (err) {
    console.error(err.message);
  }
};

const setDocument = (document) => ({
  type: "SET_DOCUMENT",
  payload: {
    document,
  },
});

export const updateDocumentation = (
  id,
  inputDocumentation,
  inputDocumentationFile,
  inputDocumentationList
) => async (dispatch) => {
  const formDataDocumentation = await converterDataToFormData(
    inputDocumentation,
    inputDocumentationFile
  );

  try {
    const response = await api.put(
      `documentation/documentation/${id}/`,
      formDataDocumentation,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formDataDocumentation._boundary}`,
        },
      }
    );

    dispatch(updateDocuments(response.data, inputDocumentationList));
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

const updateDocuments = (
  inputDocumentationFile,
  inputDocumentationList
) => async (dispatch) => {
  try {
    for (const documents of Object.keys(inputDocumentationList)) {
      for (const document of inputDocumentationList[documents]) {
        const documentId = {
          documentation: inputDocumentationFile.id,
        };

        if (!document.id) {
          dispatch(
            newDocuments(inputDocumentationFile, inputDocumentationList)
          );
        } else {
          const files = {
            archive: document,
          };

          const formDataDocumentationList = await converterDataToFormData(
            documentId,
            files
          );

          await api.put(
            `documentation/${documents.replace("_", "-")}/${document.id}/`,
            formDataDocumentationList,
            {
              headers: {
                "Content-Type": `multipart/form-data; boundary=${formDataDocumentationList._boundary}`,
              },
            }
          );
        }
      }
      dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
    }
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
