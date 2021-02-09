const initialState = {
  auth: localStorage.getItem("access_token") ? true : false
}

const LoginReducer = (state = initialState, action) => {
  switch(action.type) {
    case "AUTHENTICATION":
      return {...state, auth: action.payload.auth};
    default: 
    return state;
  }
}

export default LoginReducer;