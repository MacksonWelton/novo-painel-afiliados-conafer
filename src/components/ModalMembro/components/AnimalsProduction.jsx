import React from "react";
import { Row, Col } from "reactstrap";

const AnimalsProduction = ({ animalsProduction }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Produção de Vegetais
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção:</b>{" "}
                {animalsProduction.productionName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {animalsProduction.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção anual:</b>{" "}
                {animalsProduction.annual_production}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Preço por kg:</b>{" "}
                {animalsProduction.price_per_kg}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantidade comercializada anual:</b>{" "}
                {animalsProduction.annual_marketed}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quanto vende (kg):</b>{" "}
                {animalsProduction.how_much_sell}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Semente muda origem:</b>{" "}
                {animalsProduction.seedling_origin}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Semente muda origem:</b>{" "}
                {animalsProduction.creole_seed ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Problemas com pragas:</b>{" "}
                {animalsProduction.pest_problems ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Área irrigada:</b>{" "}
                {animalsProduction.irrigated_area}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção gera resíduo?:</b>{" "}
                {animalsProduction.generates_waste ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default AnimalsProduction;