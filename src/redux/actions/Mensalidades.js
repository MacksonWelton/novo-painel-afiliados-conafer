export const newPayments = (payments) => (dispatch) => {
  dispatch(setPayments(payments));
}

export const setPayments = (payments) => ({
  type: "SET_PAYMENTS",
  payload: {
    payments
  }
});