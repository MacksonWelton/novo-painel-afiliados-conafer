import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import SupportsReducer from "./reducers/Suporte";
import BudgetsReducer from "./reducers/Orcamentos";
import ProposalsReducer from "./reducers/Propostas";
import ProfileReducer from "./reducers/Perfil";

const Reducers = combineReducers({
  ContractsReducer,
  SupportsReducer,
  BudgetsReducer,
  ProposalsReducer,
  ProfileReducer
});

export default Reducers;