const initialState = {
  member: "",
  allotment: "",
  productionName: [],
  typeProduction: [],
  members: [],
  biomes: [],
  dataMembers: "",
  submitMessage: ""
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEMBER":
      return {
        ...state,
        member: action.payload.member,
      };
    case "SET_DATA_MEMBERS":
      return {...state, dataMembers: action.payload.dataMembers};
    case "SET_MEMBERS":
      return { ...state, members: action.payload.members };
    case "SET_ALLOTMENT":
      return {...state, allotment: action.payload.allotment };
    case "SET_PRODUCTION_NAME":
      return {...state, productionName: action.payload.productionName };
    case "SET_TYPE_PRODUCTION":
      return {...state, typeProduction: action.payload.typeProduction };
    case "BIOMES":
      return { ...state, biomes: action.payload.biomes };
    case "SET_SUBMIT_MESSAGE":
      return {...state, submitMessage: action.payload.submitMessage};
    default:
      return state;
  }
};

export default MembersReducer;
