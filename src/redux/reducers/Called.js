const initialState = {
  calledAnswers: {
    results: [],
  },
  answer: null,
  callAnswersByQuestion: [],
  attachmentByQuestion: []
};

const CalledReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CALLED_ANSWERS":
      return { ...state, calledAnswers: action.payload.calledAnswers };
    case "SET_ANSWER":
      return { ...state, answer: action.payload.answer };
    case "SET_CALL_ANSWERS_BY_QUESTION":
      return {
        ...state,
        callAnswersByQuestion: action.payload.callAnswersByQuestion,
      };
    case "SET_CALL_ATTACHMENT_BY_QUESTION":
      return {...state, attachmentByQuestion: action.payload.attachmentByQuestion}
    default:
      return state;
  }
};

export default CalledReducer;
