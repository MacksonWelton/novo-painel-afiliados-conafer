import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const Moradias = ({member}) => {
  return (
    <>
      <h3
        id="houses"
        className="heading-small border text-muted mb-4 btn w-100"
      >
        3 - Moradias
      </h3>
      <div className="px-3">
        <UncontrolledCollapse toggler="#houses">
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Moradias</h3>
            </Col>
            <Col>
              {member.houses &&
                member.houses.map((house, i) => (
                  <Row
                    key={i}
                    className="border border-default rounded py-3 mb-2"
                  >
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Moradia: </b>
                        {house.house}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Residentes: </b>
                        {house.residents}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Cômodos: </b>
                        {house.rooms}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Contrução: </b>
                        {house.builder}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Forração interna: </b>
                        {house.internalLining}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Piso: </b>
                        {house.floor}
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="border border-default rounded p-2">
                        <b>Risco Ambiental: </b>
                        {house.environmentalRisk}
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="border border-default rounded p-2">
                        <b>Telhado/Cobertura: </b>
                        {house.roofCover}
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">Moradores</h3>
            </Col>
            <Col lg="12">
              {member.residents &&
                member.residents.map((resident, i) => (
                  <Row
                    key={i}
                    className="border border-default rounded py-3 mb-2"
                  >
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Residente: </b>
                        {resident.resident_name}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Parentesco: </b>
                        {resident.kinship}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Sexo: </b>
                        {resident.sex}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Nascimento: </b>
                        {resident.birthdate}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Escolaridade: </b>
                        {resident.schooling}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Princ. fonte renda: </b>
                        {resident.main_source_income}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Gera renda para a família: </b>
                        {resident.generates_income ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Tempo de trabalho no lote: </b>
                        {resident.batch_work_time}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Emite NF: </b>
                        {resident.issues_invoice ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Ex-beneficiário: </b>
                        {resident.ex_beneficiary ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Atividade: </b>
                        {resident.activity}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Atividades Desmotivador: </b>
                        {resident.demotivating_activity}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Aposentado: </b>
                        {resident.retired ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Trabalho remunerado fora do lote: </b>
                        {resident.work_outside}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Trab. fora lote Idade Inicial: </b>
                        {resident.initial_age_work_outside}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Deficiência: </b>
                        {resident.deficiency ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6" className="mb-3">
                      <div className="border border-default rounded p-2">
                        <b>Doenças que tem ou teve nos últimos 2 anos: </b>
                        {resident.last_diceases ? "Sim" : "Não"}
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="border border-default rounded p-2">
                        <b>Tipo de tratamento: </b>
                        {resident.type_treatment}
                      </div>
                    </Col>
                    <Col lg="6">
                      <div className="border border-default rounded p-2">
                        <b>Forma de acesso para tratamento: </b>
                        {resident.access_treatment}
                      </div>
                    </Col>
                  </Row>
                ))}
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Moradias;
