export const newProposals = (proposals) => (dispatch) => {

  dispatch(setProposals(proposals));
}

export const newComment = (comment) => (dispatch) => {
  dispatch(setComment(comment));
}

export const setProposals = (proposals) => ({
  type: "SET_PROPOSALS",
  payload: {
    proposals
  }
});

export const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment
  }
});