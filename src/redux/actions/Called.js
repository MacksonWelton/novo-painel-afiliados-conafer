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
    const response = await api.get(`call/?call=${answerId}`);

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
    const response = await api.get(`call/anwser/?question=${questionId}`);

    response.data = await Promise.all(
      response.data.map(async (answer) => {
        const answeredBy = await api.get(
          `user/user_affiliation/${answer.answered_by}`
        );

        return { ...answer, answered_by: answeredBy.data.name };
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

    const response = await api.post("call/question/", input)

    dispatch(getCalledAnswers());
    dispatch(newCallAttachments(response.data, inputFile));
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

const newCallAttachments = (call, callFiles) => async (
  dispatch
) => {


  try {
    for (const file of callFiles) {
      const fileId = {
        call: call.id,
      };

      const files = {
        archive: file,
      };

      const formDataAttachments = await converterDataToFormData(
        fileId,
        files
      );

      await api.post(
        "call/attachment/",
        formDataAttachments,
        {
          headers: {
            "Content-Type": `multipart/form-data; boundary=${formDataAttachments._boundary}`,
          },
        }
      );
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



