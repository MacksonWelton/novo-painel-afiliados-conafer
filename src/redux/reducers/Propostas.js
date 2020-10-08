const initialState = {
  proposals: []
}

const ProposalsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PROPOSALS":
      return {...state, proposals: action.payload.proposals};
    case "SET_PROPOSAL":
      return {...state, proposals: action.payload.proposal};
    default: 
    return state;
  }
}

export default ProposalsReducer;