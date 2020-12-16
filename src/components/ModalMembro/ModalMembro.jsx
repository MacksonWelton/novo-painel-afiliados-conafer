import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Col,
  Button,
  UncontrolledCollapse,
} from "reactstrap";
import PropTypes from "prop-types";

const ModalMembro = ({ open, setOpen, member }) => {

  return (
    <Modal
      isOpen={open}
      toggle={() => {
        setOpen(!open);
      }}
      size="lg"
    >
      <ModalHeader
        toggle={() => {
          setOpen(!open);
        }}
      >
        Informações de Membro
      </ModalHeader>
      <ModalBody>
        <h3
          id="member"
          className="heading-small border text-muted mb-4 btn w-100"
        >
          Dados do Beneficiário
        </h3>
        <div>
          <UncontrolledCollapse toggler="member">
            <Row>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Beneficiário(a): </b> {member.name}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>CPF: </b> {member.cpf}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código de coleta: </b>
                  {member.collect_code}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Código de assentado: </b> {member.settlement_code}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Naturalidade: </b> {member.naturality}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Status na RB: </b> {member.status_rb}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Ocupa área Destinada pelo INCRA: </b>
                  {member.incra}
                </div>
              </Col>
            </Row>
          </UncontrolledCollapse>
        </div>
        <h3 id="lot" className="heading-small border  text-muted mb-4 btn w-100">
          Localização do Lote
        </h3>
        <div>
          <UncontrolledCollapse toggler="#lot">
            <Row>
              <Col lg="12">
                <MapaAfiliados members={[member]} />
              </Col>
              <Col lg="12" className="my-3">
                <div className="border border-default rounded p-2">
                  <b>Núcleo Operacional: </b>
                  {member.lot ? member.lot.operational_core : null}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Estado: </b>
                  {member.lot ? member.lot.state : null}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Município: </b>
                  {member.lot ? member.lot.city : null}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Assentamento: </b>
                  {member.lot ? member.lot.settlement : null}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Nº do Lote: </b>
                  {member.lot ? member.lot.incra_allotment_number : ""}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border border-default rounded p-2">
                  <b>Via de acesso ao imóvel: </b>
                  {member.lot ? member.lot.access_way : null}
                </div>
              </Col>
            </Row>
          </UncontrolledCollapse>
        </div>
        <h3
          id="houses"
          className="heading-small border text-muted mb-4 btn w-100"
        >
          Moradias
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
                {member.houses && member.houses.map((house, i) => (
                  <Row key={i} className="border border-default text-dark rounded py-3 mb-2">
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
                {member.residents && member.residents.map((resident, i) => (
                  <Row key={i} className="border border-default text-dark rounded py-3 mb-2">
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
        <h3
          id="production"
          className="heading-small border  text-muted mb-4 btn w-100"
        >
          Identificação da Unidade Familiar
        </h3>
        <div>
          <UncontrolledCollapse toggler="#production">
            <Row>
              <Col lg="6" className="mb-3">
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
      </ModalBody>
      <ModalFooter className="d-flex justify-content-end">
        <Button color="primary" onClick={() => setOpen(!open)}>
          Dowload PDF
        </Button>
        <Button color="secondary" onClick={() => setOpen(!open)}>
          Sair
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ModalMembro.propTypes = {
  open: PropTypes.any.isRequired,
  setOpen: PropTypes.any.isRequired,
  member: PropTypes.object.isRequired,
};

export default ModalMembro;
