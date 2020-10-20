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


const AffiliateRegistration = () => {


  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent mt-4 d-flex flex-column align-items-center">
            <img src={require("../../assets/img/brand/sistemalogo.png")} alt="" />
            <CardTitle className="mt-3 h1">É TEMPO DE CRESCER!</CardTitle>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5 d-flex flex-column align-items-center">
            <Link to="/auth/registration-pj" className="mb-3 p-2 bg-primary w-100 text-white text-center rounded">
              PESSOA JURÍDICA
            </Link>
            <Link className="mb-3 p-2 bg-primary w-100 text-white text-center rounded">
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

export default AffiliateRegistration;
