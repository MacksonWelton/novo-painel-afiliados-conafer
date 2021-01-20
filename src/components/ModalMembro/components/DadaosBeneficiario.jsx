import React from 'react'
import { Row, Col } from 'reactstrap'

const DadaosBeneficiario = ({member}) => {
  return (
    <>
      <h3
          className="border rounded bg-default text-center text-white py-2 w-100"
        >
          Dados do Membro
        </h3>
        <div>
            <Row>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nome completo: </b> {member.name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Naturalidade: </b> {member.citizenship}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF: </b> {member.cpf}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>RG: </b> {member.rg}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>NIS: </b> {member.nis}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Estado Civil: </b> {member.marital_status}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nome da mãe: </b> {member.mother_name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nome do cônjuge: </b> {member.spouse_name}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF do cônjuge: </b> {member.spouse_cpf}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nacionalidade: </b> {member.nationality}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Anos que reside na região: </b> {member.year_residence}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Sempre residiu no meio rural?: </b> {member.always_resided}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>E-mail: </b> {member.email}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Telefone: </b> {member.phone}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Telefone alternativo: </b> {member.alternative_phone}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>País: </b> {member.country}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Estado: </b> {member.state}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Cidade: </b> {member.city}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Bairro: </b> {member.district}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Endereço: </b> {member.address}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Número: </b> {member.number}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CEP: </b> {member.cep}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Zona de localização: </b> {member.location_zone}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Status na RB: </b> {member.rb_status}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Ocupa área Destinada pelo INCRA: </b>
                  {member.incra_area ? "Sim" : "Não"}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código de coleta: </b>
                  {member.collection_code}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Status: </b>
                  {member.status}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Núcleo operacional ATER: </b>
                  {member.operational_core}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Beneficiário possui contrato concessão?: </b>
                  {member.has_contract ? "Sim" : "Não"}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Validade da concessão: </b>
                  {member.concession_validity}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Lote possui marcação dos limites?: </b>
                  {member.lot_has_marking ? "Sim" : "Não"}
                </div>
              </Col>
              <Col lg="6" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Beneficiário conhece limite lote?: </b>
                  {member.beneficiary_knows_limit ? "Sim" : "Não"}
                </div>
              </Col>
            </Row>
        </div>
    </>
  )
}

export default DadaosBeneficiario;
