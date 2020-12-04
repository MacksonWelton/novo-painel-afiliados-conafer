import api from "services/api";

export const getMembers = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/affiliation/affiliation_pj/", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
    })

    dispatch(setMembers(response.data));
  } catch (err) {
    console.error(err.message)
  }
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