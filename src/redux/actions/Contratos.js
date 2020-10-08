export const newContracts = (contracts) => (dispatch) => {
  dispatch(setContracts(contracts));
}

export const newComment = (comment) => (dispatch) => {
  dispatch(setComment(comment));
};

export const newContract = (contract) => (dispatch) => {
  dispatch(setContract(contract));
};

export const setContracts = (contracts) => ({
  type: "SET_CONTRACTS",
  payload: {
    contracts,
  },
});

export const setContract = (contract) => ({
  type: "SET_CONTRACT",
  payload: {
    contract,
  },
});

export const setComment = (comment) => ({
  type: "SET_COMMENT",
  payload: {
    comment,
  },
});
