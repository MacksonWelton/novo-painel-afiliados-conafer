import React from "react";
// react library for routing
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";
// reactstrap components
import { connect } from "react-redux";

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Media,
  Row,
  Col,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";

import Avatar from "../../assets/img/theme/avatar.png";

import { setAuthentication } from "redux/actions/Login";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      ...this.getCollapseStates(props.routes),
    };
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute = (routeName) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  // makes the sidenav normal on hover (actually when mouse enters on it)
  onMouseEnterSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  };
  // makes the sidenav mini on hover (actually when mouse leaves from it)
  onMouseLeaveSidenav = () => {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  };
  // toggles collapse between opened and closed (true/false)
  toggleCollapse = () => {
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };
  // closes the collapse
  closeCollapse = () => {
    this.setState({
      collapseOpen: false,
    });
  };
  // this creates the intial state of this component based on the collapse routes
  // that it gets through this.props.routes
  getCollapseStates = (routes) => {
    let initialState = {};
    routes.map((prop, key) => {
      if (prop.collapse) {
        initialState = {
          [prop.state]: this.getCollapseInitialState(prop.views),
          ...this.getCollapseStates(prop.views),
          ...initialState,
        };
      }
      return null;
    });
    return initialState;
  };
  // this verifies if any of the collapses should be default opened on a rerender of this component
  // for example, on the refresh of the page,
  // while on the src/views/forms/RegularForms.js - route /admin/regular-forms
  getCollapseInitialState(routes) {
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse && this.getCollapseInitialState(routes[i].views)) {
        return true;
      } else if (window.location.href.indexOf(routes[i].path) !== -1) {
        return true;
      }
    }
    return false;
  }
  // this is used on mobile devices, when a user navigates
  // the sidebar will autoclose
  closeSidenav = () => {
    if (window.innerWidth < 1200) {
      this.props.toggleSidenav();
    }
  };


  exit = () => {
    localStorage.clear();
    const auth = localStorage.getItem("access_token") ? true : false;
    this.props.setAuthentication(auth);
    this.props.history.push("/")
    window.location.reload();
  };

  // this function creates the links and collapses that appear in the sidebar (left menu)
  createLinks = (routes) => {
    return routes.map((prop, key) => {

      if (prop.redirect) {
        return null;
      }

      if (prop.collapse) {
        var st = {};
        st[prop["state"]] = !this.state[prop.state];
        return (
          <NavItem key={key}>
            <NavLink
              href="#pablo"
              data-toggle="collapse"
              aria-expanded={this.state[prop.state]}
              className={classnames({
                active: this.getCollapseInitialState(prop.views),
              })}
              onClick={(e) => {
                e.preventDefault();
                this.setState(st);
              }}
            >
              {prop.icon ? (
                <>
                  <i className={prop.icon} />
                  <span className="nav-link-text">{prop.name}</span>
                </>
              ) : prop.miniName ? (
                <>
                  <span className="sidenav-mini-icon"> {prop.miniName} </span>
                  <span className="sidenav-normal"> {prop.name} </span>
                </>
              ) : null}
            </NavLink>
            <Collapse isOpen={this.state[prop.state]}>
              <Nav className="nav-sm flex-column">
                {this.createLinks(prop.views)}
              </Nav>
            </Collapse>
          </NavItem>
        );
      } else if (prop.show) {
        return (
          <NavItem
            className={this.activeRoute(prop.layout + prop.path)}
            key={key}
          >
            <NavLink
              to={prop.layout + prop.path}
              activeClassName=""
              onClick={this.toggleCollapse}
              tag={NavLinkRRD}
            >
              {prop.icon !== undefined ? (
                <>
                  <i className={prop.icon} />
                  <span className="nav-link-text">{prop.name}</span>
                </>
              ) : prop.miniName !== undefined ? (
                <>
                  <span className="sidenav-mini-icon">{prop.miniName}</span>
                  <span className="sidenav-normal">{prop.name}</span>
                </>
              ) : (
                prop.name
              )}
            </NavLink>
          </NavItem>
        );
      }
      return null;
    });
  };

  
  render() {
    const { routes, logo } = this.props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
      navbarBrandProps = {
        to: logo.innerLink,
        tag: Link,
      };
    } else if (logo && logo.outterLink) {
      navbarBrandProps = {
        href: logo.outterLink,
        target: "_blank",
      };
    }
    return (
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleCollapse}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Brand */}
          {logo ? (
            <NavbarBrand className="pt-0" {...navbarBrandProps}>
              <img
                alt={logo.imgAlt}
                className="navbar-brand-img"
                src={logo.imgSrc}
              />
            </NavbarBrand>
          ) : null}
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle title="Clique para abrir o menu" nav>
                <Media className="align-items-center">
                  <span
                    className="avatar avatar-sm rounded-circle"
                    style={{
                      position: "relative",
                      maxWidth: "36px",
                      height: "36px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      alt="..."
                      src={
                        this.props.profile.profilepic
                          ? this.props.profile.profilepic
                          : Avatar
                      }
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Bem-vindo(a)!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>Meu Perfil</span>
                </DropdownItem>
                <DropdownItem to="/admin/usuario-de-afiliacao" tag={Link}>
                  <i className="fas fa-users" />
                  <span>Usuários</span>
                </DropdownItem>
                <DropdownItem to="/admin/suporte" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Ajuda</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.exit} style={{cursor: "pointer"}}>
                  <i className="ni ni-user-run" />
                  <span>Sair</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={this.state.collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                {logo ? (
                  <Col className="collapse-brand" xs="6">
                    {logo.innerLink ? (
                      <Link to={logo.innerLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </Link>
                    ) : (
                      <a href={logo.outterLink}>
                        <img alt={logo.imgAlt} src={logo.imgSrc} />
                      </a>
                    )}
                  </Col>
                ) : null}
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={this.toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            {/* <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Pesquisar..."
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form> */}
            {/* Navigation */}
            <Nav navbar>{this.createLinks(routes)}</Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

Sidebar.defaultProps = {
  routes: [{}],
  toggleSidenav: () => {},
  sidenavOpen: false,
  rtlActive: false,
};

Sidebar.propTypes = {
  // function used to make sidenav mini or normal
  toggleSidenav: PropTypes.func,
  // prop to know if the sidenav is mini or normal
  sidenavOpen: PropTypes.bool,
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  // logo
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outterLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outterLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired,
  }),
  // rtl active, this will make the sidebar to stay on the right side
  rtlActive: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  profile: state.ProfileReducer.profile,
});

const mapDispatchToProps = (dispatch) => ({
  setAuthentication: () => dispatch(setAuthentication()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
