import React from "react";
import { Row, Col } from "reactstrap";

const VegetablesProduction = ({ vegetablesProduction }) => {
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
                {vegetablesProduction.productionName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {vegetablesProduction.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção anual:</b>{" "}
                {vegetablesProduction.annual_production}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Preço por kg:</b>{" "}
                {vegetablesProduction.price_per_kg}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantidade comercializada anual:</b>{" "}
                {vegetablesProduction.annual_marketed}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quanto vende (kg):</b>{" "}
                {vegetablesProduction.how_much_sell}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Semente muda origem:</b>{" "}
                {vegetablesProduction.seedling_origin}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Semente muda origem:</b>{" "}
                {vegetablesProduction.creole_seed ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Problemas com pragas:</b>{" "}
                {vegetablesProduction.pest_problems ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Área irrigada:</b>{" "}
                {vegetablesProduction.irrigated_area}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Produção gera resíduo?:</b>{" "}
                {vegetablesProduction.generates_waste ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default VegetablesProduction;