import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const InfoGeraisUnidadeProdFamiliar = ({ member }) => {
  return (
    <>
      <h3 id="upf" className="heading-small border text-muted mb-4 btn w-100">
        6 - Info. Gerais da Unidade de Prod. Familiar
      </h3>
      <div>
        <UncontrolledCollapse toggler="upf">
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Dados gerais</h3>
            </Col>
            <Col lg="12" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Núcleo Operacional da ATER (Município): </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.operational_core}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Estado de origem do responsável pelo lote: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.state}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Município de origem do responsável pelo lote: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm
                    .citizenship_responsible}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Anos que reside na região: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.year_residence}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Sempre residiu no meio rural: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.always_resided}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Limites e situação legal do lote</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>O beneficiário conhece os limites do lote: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.beneficiary_knows_limit ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>O lote tem marco que identifica os limites do lote: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.lot_has_marking ? "Sim" : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>O beneficiário tem o contrato/termo de concessão de uso: </b>
                {member.generalInformationOnTheFamilyFarm &&
                  member.generalInformationOnTheFamilyFarm.has_contract ? "Sim" : "Não"}
              </div>
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default InfoGeraisUnidadeProdFamiliar;
