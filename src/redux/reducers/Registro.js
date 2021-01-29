const initialState = {
  signUp: 0,
  userData: {},
  beneficiaryIdentity: {},
  plotLocation: {},
  houses: [[]],
  familyUnitIdentification: {},
  diagnosisOfAgriculturalSystems: {},
  producao: {},
  production: [],
  typeProduction: [],
};

const RegistroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SIGN_UP":
      return {...state, signUp: action.payload.status}
    case "SET_REGISTER": 
      return {...state, userData: action.payload.userData}
    case "SET_BENEFICIARY_IDENTITY":
      return {
        ...state,
        beneficiaryIdentity: action.payload.beneficiaryIdentity,
      };
    case "SET_PLOT_LOCATION":
      return { ...state, plotLocation: action.payload.plotLocation };
    case "SET_HOUSES":
      return { ...state, houses: [...state.houses, action.payload.houses] };
    case "DELETE_HOUSE":
      state.houses.pop();
      return state;
    case "SET_RESIDENTS":
      state.houses[action.payload.houseNumber - 1].push(
        action.payload.resident
      );
      return {...state};
    case "SET_FAMILY_UNIT_IDENTIFICATION":
      return {
        ...state,
        familyUnitIdentification: action.payload.familyUnitIdentification,
      };
    case "SET_DIAGNOSIS_OF_AGRICULTURAL_SYSTEMS":
      return {
        ...state,
        diagnosisOfAgriculturalSystems:
          action.payload.diagnosisOfAgriculturalSystems,
      };
    case "SET_PRODUCTION":
      return {
        ...state,
        producao: action.payload.producao,
      };
    case "SET_PRODUCTIONS":
      return {
        ...state,
        production: action.payload.production
      }
    case "SET_TYPE_PRODUCTION":
      return {
        ...state,
        typeProduction: action.payload.typeProduction
      }
    default:
      return state;
  }
};

export default RegistroReducer;
