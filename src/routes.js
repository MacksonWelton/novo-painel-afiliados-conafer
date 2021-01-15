/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "./views/Index";
import Perfil from "./views/Perfil/Perfil";
import Registro from "./views/Registro/Registro";
import RecuperarSenha from "./views/RecuperarSenha/RecuperarSenha";
import RegistroDeAfiliados from "./views/Registro/RegistroDeAfiliados";
import RegistroPJ from "./views/Registro/RegistroPJ";
import RegistroPF from "./views/Registro/RegistroPF";
import Login from "./views/Login/Login";
import Contratos from "./views/Contratos/Contratos";
import Suporte from "./views/Suporte/Suporte";
import Orcamentos from "./views/Orcamentos/Orcamentos";
import Propostas from "./views/Propostas/Propostas";
import Mensalidades from "./views/Mensalidades/Mensalidades";
import Membros from "./views/Sindicato/Membros/Membros";
import Allotments from "./views/Sindicato/Allotments/Allotments";
import DiagnosisAgriculturalSystems from "./views/Sindicato/DiagnosisAgriculturalSystems/DiagnosisAgriculturalSystems";
import UserAffiliation from "./views/Sindicato/UsuariosAfiliacao/UsuariosAfiliacao";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    show: true
  },
  {
    path: "/contratos",
    name: "Contratos",
    icon: "ni ni-single-copy-04 text-pink",
    component: Contratos,
    layout: "/admin",
    show: true
  },
  {
    path: "/orcamentos",
    name: "Orçamentos",
    icon: "fas fa-coins text-yellow",
    component: Orcamentos,
    layout: "/admin",
    show: true
  },
  {
    path: "/propostas",
    name: "Propostas",
    icon: "fas fa-handshake text-gray",
    component: Propostas,
    layout: "/admin",
    show: true
  },
  {
    path: "/mensalidades",
    name: "Mensalidades",
    icon: "far fa-calendar-alt text-orange",
    component: Mensalidades,
    layout: "/admin",
    show: true
  },
  {
    path: "/usuario-de-afiliacao",
    name: "Usuário de Afiliação",
    icon: "fas fa-users text-black",
    component: UserAffiliation,
    layout: "/admin",
    show: false
  },
  {
    path: "/membros",
    name: "Membros",
    icon: "fas fa-users text-dark",
    component: Membros,
    layout: "/admin",
    show: true
  },
  {
    path: "/allotments",
    name: "Lotes",
    icon: "fas fa-map-marked-alt text-info",
    component: Allotments,
    layout: "/admin",
    show: true
  },
  {
    path: "/diagnosis-agricultural-systems",
    name: "Diagnóstico de Sistemas Agrários",
    icon: "far fa-chart-bar text-green",
    component: DiagnosisAgriculturalSystems,
    layout: "/admin",
    show: true
  },
  {
    path: "/suporte",
    name: "Ajuda",
    icon: "ni ni-support-16 text-red",
    component: Suporte,
    layout: "/admin",
    show: false
  },
  {
    path: "/user-profile",
    name: "Perfil",
    icon: "ni ni-single-02 text-info",
    component: Perfil,
    layout: "/admin",
    show: false
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    show: true
  },
  {
    path: "/register",
    name: "Registro",
    icon: "ni ni-circle-08 text-pink",
    component: Registro,
    layout: "/auth",
    show: true
  },
  {
    path: "/recover-password",
    name: "Recuperar Senha",
    icon: "ni ni-circle-08 text-pink",
    component: RecuperarSenha,
    layout: "/auth",
    show: true
  },
  {
    path: "/affiliate-registration",
    name: "Cadastro de Afiliados",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroDeAfiliados,
    layout: "/auth",
    show: true
  },
  {
    path: "/registration-pj",
    name: "Cadastro de Afiliado PJ",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroPJ,
    layout: "/admin",
    show: false
  },
  {
    path: "/registration-pf",
    name: "Cadastro de Afiliado PF",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroPF,
    layout: "/admin",
    show: false
  },
];

export default routes;
