const initialState = {
  habitation: null,
  resident: null,
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
    case "SET_HABITATION":
      return {...state, habitation: action.payload.habitation};
    case "SET_RESIDENT":
      return {...state, resident: action.payload.resident};
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
