export const setCurrentLatpointAction = (lat) => ({
  type: "SET_LAT",
  payload: {
    lat
  }
})

export const setCurrentLonpointAction = (lng) => ({
  type: "SET_LNG",
  payload: {
    lng
  }
})