const initialState = {
    error: {}
  }
  
  const ErrorReducer = (state = initialState, action) => {
    switch(action.type) {
      case "SET_ERROR":
        return {...state, error: action.payload.error};
      default: 
      return state;
    }
  }
  
  export default ErrorReducer;