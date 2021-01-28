import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Psiculture = ({ psiculture }) => {
  return (
    <>
      <Title>
        Psiculturas
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {psiculture.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo:</b>{" "}
                {psiculture.type_psiculture}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Manejo:</b>{" "}
                {psiculture.management}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Sistema de despesca:</b>{" "}
                {psiculture.harvesting_systems}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Complementação alimentar (quanto gasta em R$):</b>{" "}
                {psiculture.food_supplementation}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Complementacao alimentar anual (quanto gasta em R$):</b>{" "}
                {psiculture.annual_food_supplementation}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Finalidade:</b>{" "}
                {psiculture.goal}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Pesque pague:</b>{" "}
                {psiculture.fish_pay ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tamanho do reservatório:</b>{" "}
                {psiculture.reservoir_size}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção carne (kg):</b>{" "}
                {psiculture.meat_production}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Preço compra (kg):</b>{" "}
                {psiculture.purchase_price}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Produção comercializada:</b>{" "}
                {psiculture.commercialized_production}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Preço médio (kg):</b>{" "}
                {psiculture.average_price}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Principais canais comercialização:</b>{" "}
                {psiculture.mai_marketing_channels}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Psiculture;