import React from "react";
import { Row, Col } from "reactstrap";

const Psiculture = ({ psiculture }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Psiculturas
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {psiculture.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo:</b>{" "}
                {psiculture.type_psiculture}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Manejo:</b>{" "}
                {psiculture.management}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Sistema de despesca:</b>{" "}
                {psiculture.harvesting_systems}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Complementação alimentar (quanto gasta em R$):</b>{" "}
                {psiculture.food_supplementation}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Complementacao alimentar anual (quanto gasta em R$):</b>{" "}
                {psiculture.annual_food_supplementation}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Finalidade:</b>{" "}
                {psiculture.goal}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Pesque pague:</b>{" "}
                {psiculture.fish_pay ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tamanho do reservatório:</b>{" "}
                {psiculture.reservoir_size}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção carne (kg):</b>{" "}
                {psiculture.meat_production}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Preço compra (kg):</b>{" "}
                {psiculture.purchase_price}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção comercializada:</b>{" "}
                {psiculture.commercialized_production}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Preço médio (kg):</b>{" "}
                {psiculture.average_price}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Principais canais comercialização:</b>{" "}
                {psiculture.mai_marketing_channels}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Psiculture;