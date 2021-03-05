const initialState = {
  production: null,
  vegetablesProduction: null,
  animalsProduction: null,
  psiculture: null,
  productions: {
    results: [],
  },
  vegetablesProductions: {
    results: [],
  },
  animalsProductions: {
    results: [],
  },
  psicultureProductions: {
    results: [],
  },
  productionName: [],
  typeProduction: [],
};

const ProductionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTION":
      return { ...state, production: action.payload.production };
    case "SET_PRODUCTIONS":
      return { ...state, productions: action.payload.productions };
    case "SET_ANIMALS_PRODUCTION":
      return { ...state, animalsProduction: action.payload.animalsProduction };
    case "SET_VEGETABLES_PRODUCTION":
      return {
        ...state,
        vegetablesProduction: action.payload.vegetablesProduction,
      };
    case "SET_PSICULTURE_PRODUCTION":
      return {
        ...state,
        psiculture: action.payload.psiculture,
      };
    case "SET_VEGETABLES_PRODUCTIONS":
      return {
        ...state,
        vegetablesProductions: action.payload.vegetablesProductions,
      };
    case "SET_ANIMALS_PRODUCTIONS":
      return {
        ...state,
        animalsProductions: action.payload.animalsProductions,
      };
    case "SET_PSICULTURE_PRODUCTIONS":
      return {
        ...state,
        psicultureProductions: action.payload.psicultureProductions,
      };
    case "SET_PRODUCTION_NAME":
      return { ...state, productionName: action.payload.productionName };
    case "SET_TYPE_PRODUCTION":
      return { ...state, typeProduction: action.payload.typeProduction };
    default:
      return state;
  }
};

export default ProductionsReducer;
