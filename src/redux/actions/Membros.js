export const newMembers = (members) => (dispatch) => {
  dispatch(setMembers(members));
}

export const setMembers = (members) => ({
  type: "SET_MEMBERS",
  payload: {
    members
  }
});

export const downloadMembers = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deleteMembers = (data) => (dispatch) => {
  try {
    
    dispatch(removeMembers(data))
  } catch (err) {
    console.error(err.message);
  }
}

const removeMembers = (members) => ({
  type: "DELETE_MEMBERS",
  payload: {
    members
  }
})