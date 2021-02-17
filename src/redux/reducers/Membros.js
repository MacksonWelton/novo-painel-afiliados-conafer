const initialState = {
  member: null,
  residents: {
    results: []
  },
  habitations: {
    results: []
  },
  allotments: {
    results: [],
  },
  diagnosisAgriculturalSystems: {
    results: [],
  },
  productions: {
    results: []
  },
  vegetablesProductions: {
    results: []
  },
  animalsProductions: {
    results: []
  },
  psicultureProductions: {
    results: []
  },
  improvements: {
    results: []
  },
  transports: {
    results: []
  },
  technicalVisits: {
    results: []
  },
  documents: {
    results: [],
  },
  allotment: "",
  production: "",
  improvement: "",
  transport: "",
  technicalVisit: "",
  productionName: [],
  typeProduction: [],
  members: {
    results: [],
  },
  biomes: [],
  submitMessage: "",
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEMBER":
      return {
        ...state,
        member: action.payload.member,
      };
    case "SET_MEMBERS":
      return { ...state, members: action.payload.members };
    case "SET_HABITATIONS":
      return {...state, habitations: action.payload.habitations};
    case "SET_RESIDENTS":
      return {...state, residents: action.payload.residents };
    case "SET_ALLOTMENTS":
      return { ...state, allotments: action.payload.allotments };
    case "SET_DIAGNOSIS_AGRICULTURAL_SYSTEMS":
      return {
        ...state,
        diagnosisAgriculturalSystems: action.payload.diagnosisAgriculturalSystems,
      };
    case "SET_PRODUCTIONS":
      return {...state, productions: action.payload.productions};
    case "SET_VEGETABLES_PRODUCTIONS":
      return {...state, vegetablesProductions: action.payload.vegetablesProductions};
    case "SET_ANIMALS_PRODUCTIONS":
      return {...state, animalsProductions: action.payload.animalsProductions};
    case "SET_PSICULTURE_PRODUCTIONS":
      return {...state, psicultureProductions: action.payload.psicultureProductions};
    case "SET_IMPROVEMENTS":
      return {...state, improvements: action.payload.improvements };
    case "SET_TRANSPORTS":
      return {...state, transports: action.payload.transports };
    case "SET_TECHNICAL_VISITS":
      return {...state, technicalVisits: action.payload.technicalVisits };
    case "SET_DOCUMENTS":
      return {...state, documents: action.payload.documents };
    case "SET_ALLOTMENT":
      return {...state, allotment: action.payload.allotment };
    case "SET_PRODUCTION":
      return {
        ...state,
        production: {
          inputVegetablesProduction: action.payload.inputVegetablesProduction,
          inputPsicultureProduction: action.payload.inputPsicultureProduction,
        },
      };
    case "SET_IMPROVEMENT":
      return { ...state, improvement: action.payload.improvement };
    case "SET_TRANSPORT":
      return { ...state, transport: action.payload.transport };
    case "SET_TECHNICAL_VISIT":
      return { ...state, technicalVisit: action.payload.technicalVisit };
    case "SET_DOCUMENTATION":
      return { ...state, documentation: action.payload.documentation };
    case "SET_PRODUCTION_NAME":
      return { ...state, productionName: action.payload.productionName };
    case "SET_TYPE_PRODUCTION":
      return { ...state, typeProduction: action.payload.typeProduction };
    case "BIOMES":
      return { ...state, biomes: action.payload.biomes };
    case "SET_SUBMIT_MESSAGE":
      return { ...state, submitMessage: action.payload.submitMessage };
    default:
      return state;
  }
};

export default MembersReducer;
