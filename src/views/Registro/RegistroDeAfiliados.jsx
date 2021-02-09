import React from "react";

import { Link } from "react-router-dom";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Col,
  CardTitle,
  CardFooter,
} from "reactstrap";

import logo from "../../assets/img/brand/sistemalogo.png";


const RegistroDeAfiliados = () => {


  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent mt-4 d-flex flex-column align-items-center">
            <img src={logo} alt="" />
            <CardTitle className="mt-3 h1">É TEMPO DE CRESCER!</CardTitle>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5 d-flex flex-column align-items-center">
            <Link to="/admin/registration-pj" className="mb-3 p-2 bg-primary w-100 text-white text-center rounded">
              PESSOA JURÍDICA
            </Link>
            <Link to="/admin/registration-pf" className="mb-3 p-2 bg-primary w-100 text-white text-center rounded">
              PESSOA FÍSICA
            </Link>
          </CardBody>
          <CardFooter className="text-center">
            Caso tenha alguma dúvida ou problema, consulte nosso FAQ ou entre em
            contato
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default RegistroDeAfiliados;
