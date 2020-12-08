const initialState = {
  usersAffiliation: [],
  userAffiliation: {
    affiliation: ""
  },
  usersPFAffiliation: false,
  usersPJAffiliation: false,
};

const UsersAffiliationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_AFFILIATION":
      return {
        ...state,
        usersAffiliation: action.payload.usersAffiliation,
      };
    case "USER_AFFILIATION":
      return {
        ...state,
        userAffiliation: action.payload.userAffiliation
      }
    case "SET_USERS_PJ_AFFILIATION":
      return {
        ...state,
        usersPJAffiliation: action.payload.usersPJAffiliation.length === 0
      }
    case "SET_USERS_PF_AFFILIATION":
      return {
        ...state,
        usersPFAffiliation: action.payload.usersPFAffiliation.length === 0
      }
    default:
      return state;
  }
};

export default UsersAffiliationReducer;
