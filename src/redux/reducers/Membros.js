const initialState = {
  member: "",
  allotment: "",
  production: "",
  improvement: "",
  transport: "",
  technicalVisit: "",

  productionName: [],
  typeProduction: [],
  members: [],
  biomes: [],
  dataMembers: "",
  submitMessage: "",
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEMBER":
      return {
        ...state,
        member: action.payload.member,
      };
    case "SET_DATA_MEMBERS":
      return { ...state, dataMembers: action.payload.dataMembers };
    case "SET_MEMBERS":
      return { ...state, members: action.payload.members };
    case "SET_ALLOTMENT":
      return {
        ...state,
        allotment: {
          data: action.payload.allotment,
          files: action.payload.files,
        },
      };
    case "SET_AGRICULTURAL_SYSTEM":
      return {
        ...state,
        agriculturalSystem: action.payload.agriculturalSystem,
      };
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
