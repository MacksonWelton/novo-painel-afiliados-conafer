const initialState = {
  residents: {
    results: [],
  },
  habitations: {
    results: [],
  },
  allHabitations: [],
};

const ResidentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESIDENTS":
      return { ...state, residents: action.payload.residents };
    case "SET_HABITATIONS":
      return { ...state, habitations: action.payload.habitations };
    case "SET_ALL_HABITATIONS":
      return { ...state, allHabitations: action.payload.allHabitations };
    default:
      return state;
  }
};

export default ResidentsReducer;
