export const newPayments = (payments) => (dispatch) => {
  try {
    dispatch(setPayments(payments));
  } catch(err) {
    console.error(err.message)
  }
}

const setPayments = (payments) => ({
  type: "SET_PAYMENTS",
  payload: {
    payments
  }
});

export const downloadPayments = (data) => () => {
  try {
    
  } catch (err) {
    console.error(err.message);
  }
}

export const deletePayments = (data) => (dispatch) => {
  try {
    
    dispatch(removePayments)
  } catch (err) {
    console.error(err.message);
  }
}

const removePayments= (charges) => ({
  type: "DELETE_CHARGES",
  payload: {
    charges
  }
})