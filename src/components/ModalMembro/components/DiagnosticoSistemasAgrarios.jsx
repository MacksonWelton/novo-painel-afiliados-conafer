import React from "react";
import { Row, Col } from "reactstrap";

const DiagnosticoSistemasAgrarios = ({ diagnosisAgriculturalSystem }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Diagnóstico de Sistemas Agrários
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Qual é a renda extra lote (fora do lote) anual?:</b>{" "}
                {diagnosisAgriculturalSystem.income_off_lot}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  A família recebe algum tipo de aux. de programa social
                  governamental?:
                </b>{" "}
                {diagnosisAgriculturalSystem.government_assistance ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>A família acessou alguma política pública para moradia?:</b>{" "}
                {diagnosisAgriculturalSystem.housing_policy ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Acessou alguma linha de financiamento para projetos
                  desenvolvidos no lote?:
                </b>{" "}
                {diagnosisAgriculturalSystem.financing_line ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tem meio de comunicação rural?:</b>{" "}
                {diagnosisAgriculturalSystem.has_rural_communication ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Comunicação rural - Tipo:</b>{" "}
                {diagnosisAgriculturalSystem.rural_communication}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Destino final do lixo seco:</b>{" "}
                {diagnosisAgriculturalSystem.final_destination_waste}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Saneamento básico da moradia (esgoto sanitário):</b>{" "}
                {diagnosisAgriculturalSystem.has_basic_sanitation ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Principal meio de transporte escolar:</b>{" "}
                {diagnosisAgriculturalSystem.schools_transport}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Contrata empregados para ajudar na produção do lote?:</b>{" "}
                {diagnosisAgriculturalSystem.hire_employees ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantos empregados permanentes?:</b>{" "}
                {diagnosisAgriculturalSystem.fixed_employees}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Recebeu assistência técnica na última safra/ano?:</b>{" "}
                {diagnosisAgriculturalSystem.technical_assistance
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Lembra da última queimada descontrolada que atingiu o lote?:
                </b>{" "}
                {diagnosisAgriculturalSystem.reminds_burning_in_lot
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Ano dessa queimada:</b>{" "}
                {diagnosisAgriculturalSystem.year_burning}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>O lote tem acesso a água?:</b>{" "}
                {diagnosisAgriculturalSystem.has_water_access ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Fornecimento de energia</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tem eletrificação?:</b>{" "}
                {diagnosisAgriculturalSystem.has_energy ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo de rede:</b> {diagnosisAgriculturalSystem.network_type}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Energia disponível atende à produção?:</b>{" "}
                {diagnosisAgriculturalSystem.energy_meets_production
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Complementa o fornecimento de energia?:</b>{" "}
                {diagnosisAgriculturalSystem.complements_energy ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Utiliza, também, algum desses?:</b>{" "}
                {diagnosisAgriculturalSystem.uses_any_these}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Deseja obter / complementar?:</b>{" "}
                {diagnosisAgriculturalSystem.want_to_get ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Água Produção</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote tem água tratada?:</b>{" "}
                {diagnosisAgriculturalSystem.potable_water ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote tem acesso a água o ano todo?:</b>{" "}
                {diagnosisAgriculturalSystem.year_water_access ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Há fonte de água natural no lote?:</b>{" "}
                {diagnosisAgriculturalSystem.there_is_natural_water_source
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  As fontes de água natural no lote são protegidas por mata
                  ciliar?:
                </b>{" "}
                {diagnosisAgriculturalSystem.riparian_forest ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Qual a distância entre o local de captação da fonte de água
                  natural para sua moradia e elementos contaminantes? (m):
                </b>{" "}
                {diagnosisAgriculturalSystem.distance_water_intake}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  A captação levou à alteração do curso natural do córrego da
                  fonte?:
                </b>{" "}
                {diagnosisAgriculturalSystem.alteration_in_the_watercourse
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Há captação de água de chuva para reaproveitamento no lote?:
                </b>{" "}
                {diagnosisAgriculturalSystem.captures_rain_water
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Como é utilizada a água captada da chuva?:</b>{" "}
                {diagnosisAgriculturalSystem.how_uses_rainwater}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Alterações no curso natural do córrego da fonte?:</b>{" "}
                {diagnosisAgriculturalSystem.alteration_water_course ? "Sim"  : "Não"}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default DiagnosticoSistemasAgrarios;
