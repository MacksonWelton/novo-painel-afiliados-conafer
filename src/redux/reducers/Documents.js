const initialState = {
  document: null,
  documents: {
    results: [],
  },
  birthCertificates: [],
  cpfs: [],
  economicActivities: [],
  improvementsImage: []
};

const DocumentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DOCUMENT":
      return {...state, document: action.payload.document};
    case "SET_DOCUMENTS":
      return { ...state, documents: action.payload.documents };
    case "SET_BIRTH_CERTIFICATES":
      return { ...state, birthCertificates: action.payload.birthCertificates };
    case "SET_CPFS":
      return { ...state, cpfs: action.payload.cpfs };
    case "SET_ECONOMIC_ACTIVITIES":
      return {
        ...state,
        economicActivities: action.payload.economicActivities,
      };
      case "SET_IMPROVEMENTS_IMAGE":
        return {
          ...state,
          improvementsImage: action.payload.improvementsImage,
        };
    default:
      return state;
  }
};

export default DocumentsReducer;
