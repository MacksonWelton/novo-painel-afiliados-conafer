const initialState = {
  allAllotments: [],
  allotments: {
    results: [],
  },
  biomes: [],
  allotment: null
};

const AllotmentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ALLOTMENT":
      return { ...state, allotment: action.payload.allotment };
    case "SET_ALLOTMENTS":
      return { ...state, allotments: action.payload.allotments };
    case "SET_ALL_ALLOTMENTS":
      return { ...state, allAllotments: action.payload.allAllotments };
    case "BIOMES":
      return { ...state, biomes: action.payload.biomes };
    default:
      return state;
  }
};

export default AllotmentsReducer;
