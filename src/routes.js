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
import Membros from "./views/Sindicato/Members/Members";
import Allotments from "./views/Sindicato/Allotments/Allotments";
import DiagnosisAgriculturalSystems from "./views/Sindicato/DiagnosisAgriculturalSystems/DiagnosisAgriculturalSystems";
import Productions from "./views/Sindicato/Production/Productions/Productions";
import VegetablesProduction from "./views/Sindicato/Production/VegetablesProduction/VegetablesProduction";
import AnimalsProduction from "./views/Sindicato/Production/AnimalProduction/AnimalProduction";
import Psiculture from "./views/Sindicato/Production/Psiculture/Psiculture";
import Improvements from "./views/Sindicato/Improvements/Improvements";
import Transports from "./views/Sindicato/Transports/Transports";
import TechnicalVisit from "./views/Sindicato/TechnicalVisit/TechnicalVisit";
import Documents from "./views/Sindicato/Documents/Documents";
import UserAffiliation from "./views/Sindicato/UsuariosAfiliacao/UsuariosAfiliacao";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "fas fa-tachometer-alt text-primary",
    component: Index,
    layout: "/admin",
    show: true,
  },
  {
    path: "/contratos",
    name: "Contratos",
    icon: "ni ni-single-copy-04 text-pink",
    component: Contratos,
    layout: "/admin",
    show: false,
  },
  {
    path: "/orcamentos",
    name: "Orçamentos",
    icon: "fas fa-coins text-yellow",
    component: Orcamentos,
    layout: "/admin",
    show: false,
  },
  {
    path: "/propostas",
    name: "Propostas",
    icon: "fas fa-handshake text-gray",
    component: Propostas,
    layout: "/admin",
    show: false,
  },
  {
    path: "/mensalidades",
    name: "Mensalidades",
    icon: "fas fa-calendar-alt text-red",
    component: Mensalidades,
    layout: "/admin",
    show: false,
  },
  {
    path: "/usuario-de-afiliacao",
    name: "Usuário de Afiliação",
    icon: "fas fa-users text-black",
    component: UserAffiliation,
    layout: "/admin",
    show: false,
  },
  {
    path: "/membros",
    name: "Membros",
    icon: "fas fa-users text-primary",
    component: Membros,
    layout: "/admin",
    show: true,
  },
  {
    path: "/allotments",
    name: "Lotes",
    icon: "fas fa-map-marked-alt text-primary",
    component: Allotments,
    layout: "/admin",
    show: true,
  },
  {
    path: "/diagnosis-agricultural-systems",
    name: "Diagnóstico de Sistemas Agrários",
    icon: "fas fa-leaf text-primary",
    component: DiagnosisAgriculturalSystems,
    layout: "/admin",
    show: true,
  },
  {
    collapse: true,
    name: "Produção",
    icon: "far fa-chart-bar text-primary",
    views: [
      {
        show: true,
        path: "/producao/producao",
        name: "Produção",
        icon: "fas fa-chart-pie text-primary",
        component: Productions,
        layout: "/admin",
      },
      {
        show: true,
        path: "/producao/vegetal",
        name: "Produção de Vegetais",
        icon: "fas fa-tractor text-primary",
        component: VegetablesProduction,
        layout: "/admin",
      },
      {
        show: true,
        path: "/producao/animais",
        name: "Produção de Animais",
        icon: "fas fa-drumstick-bite text-primary",
        component: AnimalsProduction,
        layout: "/admin",
      },
      {
        show: true,
        path: "/producao/psicultura/",
        name: "Psicultura",
        icon: "fas fa-fish text-primary",
        component: Psiculture,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/benfeitorias",
    name: "Benfeitorias",
    icon: "fas fa-hammer text-primary",
    component: Improvements,
    layout: "/admin",
    show: true,
  },
  {
    path: "/transportes",
    name: "Transportes",
    icon: "fas fa-truck text-primary",
    component: Transports,
    layout: "/admin",
    show: true,
  },
  {
    path: "/visita-tecnica",
    name: "Visita Técnica",
    icon: "fas fa-user-check text-primary",
    component: TechnicalVisit,
    layout: "/admin",
    show: true,
  },
  {
    path: "/documentos",
    name: "Documentos",
    icon: "fas fa-file-alt text-primary",
    component: Documents,
    layout: "/admin",
    show: true,
  },
  {
    path: "/suporte",
    name: "Ajuda",
    icon: "ni ni-support-16 text-primary",
    component: Suporte,
    layout: "/admin",
    show: false,
  },
  {
    path: "/user-profile",
    name: "Perfil",
    icon: "ni ni-single-02 text-info",
    component: Perfil,
    layout: "/admin",
    show: false,
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    show: false,
  },
  {
    path: "/register",
    name: "Registro",
    icon: "ni ni-circle-08 text-pink",
    component: Registro,
    layout: "/auth",
    show: false,
  },
  {
    path: "/recover-password",
    name: "Recuperar Senha",
    icon: "ni ni-circle-08 text-pink",
    component: RecuperarSenha,
    layout: "/auth",
    show: false,
  },
  {
    path: "/affiliate-registration",
    name: "Cadastro de Afiliados",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroDeAfiliados,
    layout: "/auth",
    show: false,
  },
  {
    path: "/registration-pj",
    name: "Cadastro de Afiliado PJ",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroPJ,
    layout: "/admin",
    show: false,
  },
  {
    path: "/registration-pf",
    name: "Cadastro de Afiliado PF",
    icon: "ni ni-circle-08 text-pink",
    component: RegistroPF,
    layout: "/admin",
    show: false,
  },
];

export default routes;
