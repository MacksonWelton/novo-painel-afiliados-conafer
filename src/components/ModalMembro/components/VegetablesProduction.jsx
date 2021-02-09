import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const VegetablesProduction = ({ vegetablesProduction }) => {
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
                {vegetablesProduction.productionName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {vegetablesProduction.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção anual:</b>{" "}
                {vegetablesProduction.annual_production}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Preço por kg:</b>{" "}
                {vegetablesProduction.price_per_kg}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quantidade comercializada anual:</b>{" "}
                {vegetablesProduction.annual_marketed}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Quanto vende (kg):</b>{" "}
                {vegetablesProduction.how_much_sell}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Semente muda origem:</b>{" "}
                {vegetablesProduction.seedling_origin}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Semente muda origem:</b>{" "}
                {vegetablesProduction.creole_seed ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Problemas com pragas:</b>{" "}
                {vegetablesProduction.pest_problems ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Área irrigada:</b>{" "}
                {vegetablesProduction.irrigated_area}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção gera resíduo?:</b>{" "}
                {vegetablesProduction.generates_waste ? "Sim" : "Não"}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default VegetablesProduction;