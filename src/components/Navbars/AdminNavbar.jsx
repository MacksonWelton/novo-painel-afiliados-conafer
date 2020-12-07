import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

import Avatar from "../../assets/img/theme/avatar.png";

import { getProfile } from "../../redux/actions/Perfil";
import { setAuthentication } from "redux/actions/Login";
import ModalRegistroAfiliados from "components/ModalRegistroAfiliados/ModalRegistroAfiliados";
import { getUsersPJAffiliation } from "redux/actions/UsuariosAfiliacao";
import { getUsersPFAffiliation } from "redux/actions/UsuariosAfiliacao";

const AdminNavbar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [confirmAuth, setConfirmAuth] = useState(false);
  const [open, setOpen] = useState({
    modal: false,
    active: true
  });

  const profile = useSelector((state) => state.ProfileReducer.profile);
  const auth = useSelector((state) => state.LoginReducer.auth);

  
  const {usersPFAffiliation, usersPJAffiliation} = useSelector(state => state.UsersAffiliationReducer);

    if (auth && !confirmAuth) {
      dispatch(getProfile());
      dispatch(getUsersPJAffiliation());
      dispatch(getUsersPFAffiliation());
      setConfirmAuth(true);
    } else if (!confirmAuth) {
      history.push("/");
      setConfirmAuth(true);
    }

  if (Object.keys(profile).length && !profile.is_active) {
    history.push("/auth/affiliate-registration");
  }

  if (usersPFAffiliation && usersPJAffiliation && open) {
    setOpen({...open, modal: !open.modal, active: !open.active});
  }

  const exit = () => {
    dispatch(setAuthentication());
    localStorage.clear();
    history.push("/");
  };

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <h4 className="mb-0 text-white text-uppercase d-none d-lg-inline-block">
            {props.brandText}
          </h4>
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Pesquisar..." type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle title="Clique para abrir o menu" className="pr-0" nav>
                <Media className="align-items-center">
                  <span
                    className="avatar avatar-sm rounded-circle"
                    style={{
                      position: "relative",
                      width: "40px",
                      height: "40px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt="..."
                      src={profile.profilepic ? profile.profilepic : Avatar}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {profile.name}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Bem-vindo(a)!</h6>
                </DropdownItem>
                <DropdownItem title="Acessar e editar meus dados" to="/admin/user-profile" tag={Link}>
                  <i className="fas fa-user-circle" />
                  <span>Meu Perfil</span>
                </DropdownItem>
                <DropdownItem title="Visualizar e adicionar usuários do painel" to="/admin/usuario-de-afiliacao" tag={Link}>
                  <i className="fas fa-users" />
                  <span>Usuários</span>
                </DropdownItem>
                <DropdownItem title="Entrar em contato com o suporte da CONAFER" to="/admin/suporte" tag={Link}>
                  <i className="far fa-life-ring" />
                  <span>Ajuda</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem title="Sair do painel" onClick={exit} style={{cursor: "pointer"}}>
                  <i className="ni ni-user-run" />
                  <span>Sair</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
      <ModalRegistroAfiliados open={open} setOpen={setOpen}/>
    </>
  );
};

export default AdminNavbar;
