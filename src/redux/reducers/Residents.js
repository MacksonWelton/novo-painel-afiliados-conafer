const initialState = {
  residents: {
    results: [],
  },
  habitations: {
    results: [],
  },
};

const ResidentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESIDENTS":
      return { ...state, residents: action.payload.residents };
    case "SET_HABITATIONS":
      return { ...state, habitations: action.payload.habitations };
    default:
      return state;
  }
};

export default ResidentsReducer;
