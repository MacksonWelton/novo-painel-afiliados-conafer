export const newProposals = (proposals) => (dispatch) => {

  dispatch(setProposals(proposals));
}

export const newComment = (comment) => (dispatch) => {
  dispatch(setComment(comment));
}

const setProposals = (proposals) => ({
  type: "SET_PROPOSALS",
  payload: {
    proposals
  }
});

const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment
  }
});

export const downloadProposals  = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteProposals  = (data) => (dispatch) => {
  try {
    
    dispatch(removeProposals )
  } catch (err) {
    console.error(err.message);
  }
}

const removeProposals  = (proposals) => ({
  type: "DELETE_PROPOSALS",
  payload: {
    proposals
  }
})