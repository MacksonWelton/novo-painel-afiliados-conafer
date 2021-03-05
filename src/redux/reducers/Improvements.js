const initialState = {
  improvement: null,
    improvements: {
        results: []
      },
  };
  
  const ImprovementsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_IMPROVEMENT":
        return {...state, improvement: action.payload.improvement}
      case "SET_IMPROVEMENTS":
        return { ...state, improvements: action.payload.improvements };
      default:
        return state;
    }
  };
  
  export default ImprovementsReducer;
  