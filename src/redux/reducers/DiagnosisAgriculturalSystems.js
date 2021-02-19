const initialState = {
  diagnosisAgriculturalSystems: {
    results: [],
  },
};

const DiagnosisAgriculturalSystemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DIAGNOSIS_AGRICULTURAL_SYSTEMS":
      return {
        ...state,
        diagnosisAgriculturalSystems:
          action.payload.diagnosisAgriculturalSystems,
      };

    default:
      return state;
  }
};

export default DiagnosisAgriculturalSystemsReducer;
