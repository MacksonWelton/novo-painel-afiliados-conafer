import { combineReducers } from 'redux';

import ContractsReducer from "./reducers/Contratos";
import SupportsReducer from "./reducers/Suporte";
import BudgetsReducer from "./reducers/Orcamentos";
import ProposalsReducer from "./reducers/Propostas";
import ProfileReducer from "./reducers/Perfil";
import PaymentsReducer from "./reducers/Mensalidades";
import MembersReducer from "./reducers/Membros";
import ResidentsReducer from "./reducers/Residents";
import AllotmentsReducer from "./reducers/Allotments";
import DiagnosisAgriculturalSystemsReducer from "./reducers/DiagnosisAgriculturalSystems";
import ImprovementsReducer from "./reducers/Improvements";
import TransportsReducer from "./reducers/Transports";
import TechnicalVisitsReducer from "./reducers/TechnicalVisits";
import ProductionsReducer from "./reducers/Productions";
import DocumentsReducer from "./reducers/Documents";
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
  AllotmentsReducer,
  ResidentsReducer,
  ImprovementsReducer,
  DiagnosisAgriculturalSystemsReducer,
  ProductionsReducer,
  TransportsReducer,
  TechnicalVisitsReducer,
  DocumentsReducer,
  RegistroReducer,
  GoogleMapsReducer,
  LoginReducer,
  AlertsReducer,
  UsersAffiliationReducer
});

export default Reducers;