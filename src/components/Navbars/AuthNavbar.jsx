import React from "react";
import { Link } from "react-router-dom";

import { NavbarBrand, Navbar, Container } from "reactstrap";

import Logo from "../../assets/img/brand/sistemalogo.png";

const AuthNavbar = () => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark" expand="md">
        <Container className="px-4 d-flex justify-content-center">
          <NavbarBrand
            to="/"
            tag={Link}
            className="d-flex justify-content-center"
          >
            <img alt="..." src={Logo} className="w-50 h-50" />
          </NavbarBrand>
        </Container>
      </Navbar>
    </>
  );
};

export default AuthNavbar;
