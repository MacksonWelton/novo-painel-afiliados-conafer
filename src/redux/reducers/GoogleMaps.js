const initialState = {
  lat: 0,
  lng: 0
}

const GoogleMapsReducer = (state = initialState, action) => {
  switch(action.type) {
    case "SET_LAT":
      return {...state, lat: action.payload.lat};
    case "SET_LNG":
      return {...state, lng: action.payload.lng};
    default: 
    return state;
  }
}

export default GoogleMapsReducer;