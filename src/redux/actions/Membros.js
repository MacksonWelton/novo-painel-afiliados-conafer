export const newMembers = (members) => (dispatch) => {
  dispatch(setMembers(members));
}

export const setMembers = (members) => ({
  type: "SET_MEMBERS",
  payload: {
    members
  }
});