import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const AnimalsProduction = ({ animalsProduction }) => {

  return (
    <>
      <Title>
        Produção Animal
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção:</b>{" "}
                {animalsProduction.productionName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {animalsProduction.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção mensal:</b>{" "}
                {animalsProduction.mensal_production}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quantidade comercializada mensal:</b>{" "}
                {animalsProduction.mensal_marketed}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Recursos em complementação alimentar:</b>{" "}
                {animalsProduction.food_supplementation_value}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo de complementação alimenta:</b>{" "}
                {animalsProduction.food_supplementation}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo de produção (corte ou derivado):</b>{" "}
                {animalsProduction.production_type}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default AnimalsProduction;