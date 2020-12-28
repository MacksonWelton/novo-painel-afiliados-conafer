const initialState = {
  beneficiaryIdentity: "",
  members: [],
  biomes: [],
  dataMembers: "",
  submitMessage: ""
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BENEFICIARY_IDENTITY":
      return {
        ...state,
        beneficiaryIdentity: action.payload.beneficiaryIdentity,
      };
    case "SET_DATA_MEMBERS":
      return {...state, dataMembers: action.payload.dataMembers};
    case "SET_MEMBERS":
      return { ...state, members: action.payload.members };
    case "SET_MEMBER":
      return { ...state, member: action.payload.member };
    case "BIOMES":
      return { ...state, biomes: action.payload.biomes };
    case "SET_SUBMIT_MESSAGE":
      return {...state, submitMessage: action.payload.submitMessage};
    default:
      return state;
  }
};

export default MembersReducer;
