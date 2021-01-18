import React from "react";
import { Row, Col } from "reactstrap";

const Producao = ({ production }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Produção
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção:</b>{" "}
                {production.productionName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantidade Produzida:</b>{" "}
                {production.how_produces}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo de Produção:</b>{" "}
                {production.typeName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Emite Nota?:</b>{" "}
                {production.issues_invoice ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Producao;
