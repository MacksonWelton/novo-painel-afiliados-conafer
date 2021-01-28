import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const AnimalsProduction = ({ animalsProduction }) => {
  return (
    <>
      <Title>
        Produção de Vegetais
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
                <b>Produção anual:</b>{" "}
                {animalsProduction.annual_production}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Preço por kg:</b>{" "}
                {animalsProduction.price_per_kg}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quantidade comercializada anual:</b>{" "}
                {animalsProduction.annual_marketed}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quanto vende (kg):</b>{" "}
                {animalsProduction.how_much_sell}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Semente muda origem:</b>{" "}
                {animalsProduction.seedling_origin}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Semente muda origem:</b>{" "}
                {animalsProduction.creole_seed ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Problemas com pragas:</b>{" "}
                {animalsProduction.pest_problems ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Área irrigada:</b>{" "}
                {animalsProduction.irrigated_area}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção gera resíduo?:</b>{" "}
                {animalsProduction.generates_waste ? "Sim" : "Não"}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default AnimalsProduction;