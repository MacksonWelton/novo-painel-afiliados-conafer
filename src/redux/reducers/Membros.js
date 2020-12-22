const initialState = {
  members: [],
  biomes: [],
};

const MembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MEMBERS":
      return { ...state, members: action.payload.members };
    case "SET_MEMBER":
      return { ...state, member: action.payload.member };
    case "BIOMES":
      return { ...state, biomes: action.payload.biomes };
    default:
      return state;
  }
};

export default MembersReducer;
