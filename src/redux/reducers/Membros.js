const initialState = {
  members: {
    results: [],
  },
  allMembers: [],
  member: null,
  productionName: [],
  typeProduction: [],
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
    case "SET_ALL_MEMBERS":
      return { ...state, allMembers: action.payload.allMembers };
    case "SET_SUBMIT_MESSAGE":
      return { ...state, submitMessage: action.payload.submitMessage };
    default:
      return state;
  }
};

export default MembersReducer;
