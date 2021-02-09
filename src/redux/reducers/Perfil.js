const initialState = {
  profile: {}
}

const ProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROFILE":
      return {...state, profile: action.payload.profile};
    default: 
    return state;
  }
}

export default ProfileReducer;