export const setAlert = (status, message, show) => ({
  type: "ALERT",
  payload: {
    status,
    message,
    show
  }
})

export const setVisibleAlert = (show) => {
  return ({
  type: "UPDATE_VISIBLE_ALERT",
  payload: {
    show
  }
})}

export const setSubmitMessage = (submitMessage) => ({
  type: "SET_SUBMIT_MESSAGE",
  payload: {
    submitMessage,
  },
});