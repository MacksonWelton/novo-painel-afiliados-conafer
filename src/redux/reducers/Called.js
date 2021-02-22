const initialState = {
  calledAnswers: {
    results: [],
  },
  answer: {},
  callAnswersByQuestion: [],
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
    default:
      return state;
  }
};

export default CalledReducer;
