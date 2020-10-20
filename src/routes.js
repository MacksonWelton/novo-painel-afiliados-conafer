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
import Maps from "./views/examples/Maps";
import Register from "./views/Register/Register";
import RecoverPassword from "./views/RecoverPassword/RecoverPassword";
import AffiliateRegistration from "./views/Register/AffiliateRegistration";
import RegistrationPJ from "./views/Register/RegistrationPJ";
import Login from "./views/Login/Login";
import Tables from "./views/examples/Tables";
import Icons from "./views/examples/Icons";
import Contratos from "./views/Contratos/Contratos";
import Suporte from "./views/Suporte/Suporte";
import Orcamentos from "./views/Orcamentos/Orcamentos";
import Propostas from "./views/Propostas/Propostas";
import Mensalidades from "./views/Mensalidades/Mensalidades";
import Membros from "./views/Sindicato/Membros/Membros";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/contratos",
    name: "Contratos",
    icon: "ni ni-single-copy-04 text-green",
    component: Contratos,
    layout: "/admin"
  },
  {
    path: "/orcamentos",
    name: "Orçamentos",
    icon: "fas fa-coins text-yellow",
    component: Orcamentos,
    layout: "/admin"
  },
  {
    path: "/propostas",
    name: "Propostas",
    icon: "far fa-file-alt text-blue",
    component: Propostas,
    layout: "/admin"
  },
  {
    path: "/mensalidades",
    name: "Mensalidades",
    icon: "far fa-calendar-alt text-black",
    component: Mensalidades,
    layout: "/admin"
  },
  {
    path: "/membros",
    name: "Membros",
    icon: "fas fa-users text-infon",
    component: Membros,
    layout: "/admin"
  },
  {
    path: "/suporte",
    name: "Ajuda",
    icon: "ni ni-support-16 text-red",
    component: Suporte,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "Perfil",
    icon: "ni ni-single-02 text-yellow",
    component: Perfil,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/recover-password",
    name: "Recuperar Senha",
    icon: "ni ni-circle-08 text-pink",
    component: RecoverPassword,
    layout: "/auth"
  },
  {
    path: "/affiliate-registration",
    name: "Cadastro de Afiliados",
    icon: "ni ni-circle-08 text-pink",
    component: AffiliateRegistration,
    layout: "/auth"
  },
  {
    path: "/registration-pj",
    name: "Cadastro de Afiliado PJ",
    icon: "ni ni-circle-08 text-pink",
    component: RegistrationPJ,
    layout: "/auth"
  },
];

export default routes;
