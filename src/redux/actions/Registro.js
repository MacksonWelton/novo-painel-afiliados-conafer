export const register = (userData) => (dispatch) => {
  try {
    
    dispatch(setRegister(userData));
  } catch(err) {

  }
}

export const setRegister = (userData) => ({
  type: "SET_REGISTER",
  payload: {
    userData
  }
})

export const recoverPassword = (email) => () => {
  try {

  } catch (err) {
    
  }
}

export const registerPJ = (data) => () => {
  try {

  } catch (err) {

  }
}

export const registerPF = (data) => () => {
  try {

  } catch (err) {

  }
}

export const setBeneficiaryIdentity = (beneficiaryIdentity) => ({
  type: "SET_BENEFICIARY_IDENTITY",
  payload: {
    beneficiaryIdentity
  }
});

export const setPlotLocation = (plotLocation) => ({
  type: "SET_PLOT_LOCATION",
  payload: {
    plotLocation
  }
});

export const setHouses = (houses) => ({
  type: "SET_HOUSES",
  payload: {
    houses
  }
});

export const deleteHouse = () => ({
  type: "DELETE_HOUSE"
});

export const setResidents = (resident, houseNumber) => ({
  type: "SET_RESIDENTS",
  payload: {
    resident,
    houseNumber
  }
})

export const setFamilyUnitIdentification = (familyUnitIdentification) => ({
  type: "SET_FAMILY_UNIT_IDENTIFICATION",
  payload: {
    familyUnitIdentification
  }
})

export const setGeneralFamilyUnitInfo = (generalFamilyUnitInfo) => ({
  type: "SET_GENERAL_FAMILY_UNIT_INFO",
  payload: {
    generalFamilyUnitInfo
  }
})

export const setDiagnosisOfAgriculturalSystems = (diagnosisOfAgriculturalSystems) => ({
  type: "SET_DIAGNOSIS_OF_AGRICULTURAL_SYSTEMS",
  payload: {
    diagnosisOfAgriculturalSystems
  }
});

export const setProduction = (production) => ({
  type: "SET_PRODUCTION",
  payload: {
    production
  }
})