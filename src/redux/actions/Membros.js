// import api from "services/api";
import api from "services/api";
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

export const newBeneficiaryIdentity = (input) => async (dispatch) => {
  try {
    const response = await api.post("/api/v1/member/member/", input);
  } catch(err) {
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
}

export const setBeneficiaryIdentity = (beneficiaryIdentity) => ({
  type: "SET_BENEFICIARY_IDENTITY",
  payload: {
    beneficiaryIdentity,
  },
});

export const getBiomes = () => async (dispatch) => {
  try {
    const response = await api.get("/api/v1/allotment/bioma/");

    dispatch(setBiomes(response.data));
  } catch(err) {
    if (!err.response) {
      dispatch(setAlert(400, "Ocorreu um erro de conexão com o servidor.", true));
    } else if (err.response.status === 400 || err.response.status === 401) {
      dispatch(setAlert(err.response.status, err.response.data.detail, true));
    } else {
      dispatch(setAlert(err.response.status, err.response.data.error_description, true));
    }
  }
}

const setBiomes = (biomes) => ({
  type: "BIOMES",
   payload: {
     biomes
   }
})


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