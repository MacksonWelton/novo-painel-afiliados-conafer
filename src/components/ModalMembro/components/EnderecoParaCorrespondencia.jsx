import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const EnderecoParaCorrespondencia = ({ member }) => {
  return (
    <>
      <h3
        id="mailing-address"
        className="heading-small border  text-muted mb-4 btn w-100"
      >
        7 - Endereço para correspondência
      </h3>
      <div>
        <UncontrolledCollapse toggler="#mailing-address">
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Endereço/Logradouro: </b>
                {member.mailingAddress && member.mailingAddress.address}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Número: </b>
                {member.mailingAddress && member.mailingAddress.number}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Complemento: </b>
                {member.mailingAddress && member.mailingAddress.complement}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>CEP: </b>
                {member.mailingAddress && member.mailingAddress.cep}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Estado: </b>
                {member.mailingAddress && member.mailingAddress.state}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Zona de localização: </b>
                {member.mailingAddress && member.mailingAddress.location_zone}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>E-mail: </b>
                {member.mailingAddress && member.mailingAddress.email}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Telefone 1: </b>
                {member.mailingAddress && member.mailingAddress.phone}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Telefone 2: </b>
                {member.mailingAddress &&
                  member.mailingAddress.alternative_phone}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Município: </b>
                {member.mailingAddress &&
                  member.mailingAddress.city}
              </div>
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default EnderecoParaCorrespondencia;
