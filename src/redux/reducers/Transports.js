const initialState = {
    transports: {
      results: [],
    },
  };
  
  const TransportsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TRANSPORTS":
        return { ...state, transports: action.payload.transports };
      case "SET_HABITATIONS":
        return { ...state, habitations: action.payload.habitations };
      default:
        return state;
    }
  };
  
  export default TransportsReducer;
  