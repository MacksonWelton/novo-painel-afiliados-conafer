import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Producao = ({ production }) => {
  return (
    <>
      <Title>
        Produção
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção:</b>{" "}
                {production.productionName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quantidade Produzida:</b>{" "}
                {production.how_produces}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo de Produção:</b>{" "}
                {production.typeName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Emite Nota?:</b>{" "}
                {production.issues_invoice ? "Sim" : "Não"}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Producao;
