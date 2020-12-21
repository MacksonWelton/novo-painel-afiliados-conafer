import React from 'react'
import { UncontrolledCollapse, Row, Col } from 'reactstrap'

const DadaosBeneficiario = ({member}) => {
  return (
    <>
      <h3
          id="member"
          className="heading-small border text-muted mb-4 btn w-100"
        >
          1 - Dados do Beneficiário
        </h3>
        <div>
          <UncontrolledCollapse toggler="#member">
            <Row>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Beneficiário(a): </b> {member.name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF: </b> {member.cpf}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código de coleta: </b>
                  {member.collect_code}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código de assentado: </b> {member.settlement_code}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Naturalidade: </b> {member.naturality}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Status na RB: </b> {member.status_rb}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Ocupa área Destinada pelo INCRA: </b>
                  {member.incra}
                </div>
              </Col>
            </Row>
          </UncontrolledCollapse>
        </div>
    </>
  )
}

export default DadaosBeneficiario;
