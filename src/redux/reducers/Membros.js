const initialState = {
  members: []
}

const MembersReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_MEMBERS":
      return {...state, members: action.payload.members};
    case "SET_MEMBER":
      return {...state, member: action.payload.member};
    default: 
    return state;
  }
}

export default MembersReducer;