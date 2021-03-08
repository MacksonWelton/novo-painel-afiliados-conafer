const initialState = {
  transport: null,
  transports: {
    results: [],
  },
};

const TransportsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TRANSPORT":
      return { ...state, transport: action.payload.transport };
    case "SET_TRANSPORTS":
      return { ...state, transports: action.payload.transports };
    case "SET_HABITATIONS":
      return { ...state, habitations: action.payload.habitations };
    default:
      return state;
  }
};

export default TransportsReducer;
