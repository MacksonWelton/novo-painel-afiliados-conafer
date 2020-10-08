export const newProfile = (profile) => (dispatch) => {
  dispatch(setProfile(profile));
}

export const setProfile = (profile) => ({
  type: "SET_PROFILE",
  payload: {
    profile
  }
});