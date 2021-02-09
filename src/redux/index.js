import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import SupportsReducer from "./reducers/Suporte";
import BudgetsReducer from "./reducers/Orcamentos";
import ProposalsReducer from "./reducers/Propostas";
import ProfileReducer from "./reducers/Perfil";
import PaymentsReducer from "./reducers/Mensalidades";
import MembersReducer from "./reducers/Membros";
import RegistroReducer from "./reducers/Registro";
import GoogleMapsReducer from "./reducers/GoogleMaps";
import LoginReducer from "./reducers/Login";
import AlertsReducer from "./reducers/Alertas";
import UsersAffiliationReducer from "./reducers/UsuariosAfiliacao";

const Reducers = combineReducers({
  ContractsReducer,
  SupportsReducer,
  BudgetsReducer,
  ProposalsReducer,
  ProfileReducer,
  PaymentsReducer,
  MembersReducer,
  RegistroReducer,
  GoogleMapsReducer,
  LoginReducer,
  AlertsReducer,
  UsersAffiliationReducer
});

export default Reducers;