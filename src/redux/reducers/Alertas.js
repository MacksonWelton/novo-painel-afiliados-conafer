const initialState = {
  alerts: {
    status: "",
    message: "",
    show: false,
  },
};

const AlertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALERT":
      return {
        ...state,
        alerts: {
          ...state.alerts,
          status: action.payload.status,
          message: action.payload.message,
          show: action.payload.show,
        },
      };
    case "UPDATE_VISIBLE_ALERT":
      return {
        ...state,
        alerts: {
          ...state.alerts,
          show: action.payload.show,
        },
      };
    default:
      return state;
  }
};

export default AlertsReducer;
