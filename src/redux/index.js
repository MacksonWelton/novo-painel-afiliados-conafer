import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import SupportsReducer from "./reducers/Suporte"

const Reducers = combineReducers({
  ContractsReducer,
  SupportsReducer
});

export default Reducers;