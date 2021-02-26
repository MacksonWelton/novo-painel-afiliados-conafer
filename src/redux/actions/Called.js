import api from "services/api";
import converterDataToFormData from "utils/converterDataToFormData";
import { setAlert, setSubmitMessage } from "./Alerts";

export const getCalledAnswers = (offset = 0, limit = 10) => async (
  dispatch
) => {
  try {
    const response = await api.get(
      `call/question?offset=${offset}&limit=${limit}`
    );

    dispatch(setCalledAnswers(response.data));
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

const setCalledAnswers = (calledAnswers) => ({
  type: "SET_CALLED_ANSWERS",
  payload: {
    calledAnswers,
  },
});

export const getCallAnswerById = (answerId) => async (dispatch) => {
  try {
    const response = await api.get(`call/anwser/${answerId}`);

    const files = await api.get(`call/attachment?call=${response.data.id}`);
    response.data.files = files.data;

    dispatch(setCallAnswerById(response.data));
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

const setCallAnswerById = (answer) => ({
  type: "SET_ANSWER",
  payload: {
    answer,
  },
});

export const getCallAnswersByQuestion = (questionId) => async (dispatch) => {
  try {
    const response = await api.get(`call/anwser/?call=${questionId}`);

    response.data = await Promise.all(
      response.data.map(async (answer) => {

        const files = await api.get(`call/attachment?call=${answer.id}`);

        const questions = await api.get(`call/question/?call=${answer.id}`);

        questions.data = await Promise.all(
          questions.data.map(async (question) => {
            const questionedBy = await api.get(
              `user/user_affiliation/${question.questioned_by}`
            );

            const files = await api.get(`call/attachment?call=${question.id}`);

            const answers = await api.get(`call/anwser/?call=${question.id}`);

            answers.data = await Promise.all(
              answers.data.map(async (answer) => {

                const files = await api.get(
                  `call/attachment?call=${answer.id}`
                );

                return {
                  ...answer,
                  files: files.data,
                };
              })
            );
            return {
              ...question,
              questioned_by: questionedBy.data.name,
              answers: answers.data,
              files: files.data,
            };
          })
        );

        return {
          ...answer,
          files: files.data,
          questions: questions.data,
        };
      })
    );

    dispatch(setCallAnswersByQuestion(response.data));
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

const setCallAnswersByQuestion = (callAnswersByQuestion) => ({
  type: "SET_CALL_ANSWERS_BY_QUESTION",
  payload: {
    callAnswersByQuestion,
  },
});

export const newCall = (input, inputFile) => async (dispatch) => {
  try {
    const response = await api.post("call/question/", input);

    dispatch(getCalledAnswers());
    dispatch(newCallAttachments(response.data, inputFile));

    dispatch(setAlert(200, "Dados foram gravados com sucesso!", true));
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

const newCallAttachments = (call, callFiles) => async (dispatch) => {
  try {
    for (const file of callFiles) {
      const fileId = {
        call: call.id,
      };

      const files = {
        archive: file,
      };

      const formDataAttachments = await converterDataToFormData(fileId, files);

      await api.post("call/attachment/", formDataAttachments, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formDataAttachments._boundary}`,
        },
      });
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

export const getCallAttachmentByQuestion = (questionId) => async (dispatch) => {
  try {
    const response = await api.get(`call/attachment?call=${questionId}`);

    dispatch(setCallAttachmentByQuestion(response.data));
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

const setCallAttachmentByQuestion = (attachmentByQuestion) => ({
  type: "SET_CALL_ATTACHMENT_BY_QUESTION",
  payload: {
    attachmentByQuestion,
  },
});