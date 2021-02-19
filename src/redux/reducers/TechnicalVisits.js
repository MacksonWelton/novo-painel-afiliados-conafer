const initialState = {
    technicalVisits: {
        results: []
      },
  };
  
  const TechnicalVisitsReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_TECHNICAL_VISITS":
        return { ...state, technicalVisits: action.payload.technicalVisits };
      default:
        return state;
    }
  };
  
  export default TechnicalVisitsReducer;
