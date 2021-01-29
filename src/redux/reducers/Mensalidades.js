const initialState = {
  payments: []
}

const PaymentsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_PAYMENTS":
      return {...state, payments: action.payload.payments};
    case "SET_PAYMENT":
      return {...state, payment: action.payload.payment};
    default: 
    return state;
  }
}

export default PaymentsReducer;