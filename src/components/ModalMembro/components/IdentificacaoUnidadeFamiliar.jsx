import React from 'react'
import { UncontrolledCollapse, Row, Col} from 'reactstrap'

const IdentificacaoUnidadeFamiliar = ({member}) => {
  
  return (
    <>
      <h3
          id="iuf"
          className="heading-small border  text-muted mb-4 btn w-100"
        >
          4 - Identificação da Unidade Familiar
        </h3>
        <div>
          <UncontrolledCollapse toggler="#iuf">
            <Row>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código do Assentado: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.settlement_code}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Status: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.status}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.cpf}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>RG: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.rg}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>NIS: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.nis}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Estado civil: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.marital_status}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nome da Mãe: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.mother_name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nome do Cônjunge: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.spouse_name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF do Cônjunge: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.spouse_cpf}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Naturalidade: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.citizenship}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nacionalidade: </b>
                  {member.familyUnitIdentification && member.familyUnitIdentification.nationality}
                </div>
              </Col>
            </Row>
          </UncontrolledCollapse>
        </div>
    </>
  )
}

export default IdentificacaoUnidadeFamiliar;
