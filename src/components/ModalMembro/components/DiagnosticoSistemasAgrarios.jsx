import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const DiagnosticoSistemasAgrarios = ({ member }) => {
  return (
    <>
      <h3
        id="diagnostico-sistemas-agrarios"
        className="heading-small border text-muted mb-4 btn w-100"
      >
        8 - Diagnóstico de Sistemas Agrários
      </h3>
      <div>
        <UncontrolledCollapse toggler="#diagnostico-sistemas-agrarios">
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Qual é a renda extra lote (fora do lote) anual?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.income_off_lot}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  A família recebe algum tipo de aux. de programa social
                  governamental?:
                </b>{" "}
                {member.name}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quais programas sociais?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.government_assistance
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>A família acessou alguma política pública para moradia?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.housing_policy
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Acessou alguma linha de financiamento para projetos
                  desenvolvidos no lote?:
                </b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.financing_line
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tem meio de comunicação rural?:</b>{" "}
                {member.diagnosisAgriculturalSystems.has_rural_communication}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Comunicação rural - Tipo:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.rural_communication}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Destino final do lixo seco:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.final_destination_waste}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Saneamento básico da moradia (esgoto sanitário):</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.has_basic_sanitation}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Principal meio de transporte escolar:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.schools_transport}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Contrata empregados para ajudar na produção do lote?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.hire_employees}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantos empregados permanentes?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.fixed_employees}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Recebeu assistência técnica na última safra/ano?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.technical_assistance
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>
                  Lembra da última queimada descontrolada que atingiu o lote?:
                </b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.reminds_burning_in_lot
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Ano dessa queimada:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.year_burning}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>O lote tem acesso a água?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.has_water_access
                  ? "Sim"
                  : "Não"}
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
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.has_energy
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo de rede:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.network_type}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Energia disponível atende à produção?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.energy_meets_production
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Complementa o fornecimento de energia?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.complements_energy
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Utiliza, também, algum desses?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                  member.diagnosisAgriculturalSystems.uses_any_these}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Deseja obter / complementar?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.want_to_get
                  ? "Sim"
                  : "Não"}
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
                <b>Água consumida no lote:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.want_to_get}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>É suficiente?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.is_it_enough
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tratamento da água de consumo:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.drinking_water_treatment}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote tem acesso a água o ano todo?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.year_water_access ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote tem acesso a água o ano todo?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.year_water_access ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Há fonte de água natural no lote?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.there_is_natural_water_source ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>As fontes de água natural no lote são protegidas por mata ciliar?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.riparian_forest ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Qual a distância entre o local de captação da fonte de água natural para sua moradia e elementos contaminantes? (m):</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.distance_water_intake}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>A captação levou à alteração do curso natural do córrego da fonte?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.alteration_in_the_watercourse ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Há captação de água de chuva para reaproveitamento no lote?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.captures_rain_water ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Como é utilizada a água captada da chuva?:</b>{" "}
                {member.diagnosisAgriculturalSystems &&
                member.diagnosisAgriculturalSystems.how_uses_rainwater}
              </div>
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default DiagnosticoSistemasAgrarios;
