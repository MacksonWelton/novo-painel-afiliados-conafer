// import api from "services/api";
import MembrosData from "views/Sindicato/Membros/MembrosData";
import { setAlert } from "./Alertas";

export const getMembers = () => async (dispatch) => {
  try {
    // const response = await api.get("/api/v1/improvement/improvement/", {
    //   headers: {
    //     "Authorization": "Bearer " + localStorage.getItem("access_token")
    //   }
    // })


    dispatch(setMembers(MembrosData));
  } catch (err) {
    console.error(err.message);
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
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