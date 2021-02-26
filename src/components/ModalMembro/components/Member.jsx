import React, {useState} from 'react';
import { Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
import moment from "moment";
import {Title, Content} from "./Styles";

const Member = ({match, member}) => {

  const [tab, setTab] = useState("data");

  console.log(window.location.pathname)

  return (
    <>
    {/* <Nav tabs>
    <NavItem>
          <NavLink onClick={() => setTab("data")} href="#">Dados</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={() => setTab("edit")} href="#">Editar</NavLink>
        </NavItem>
    </Nav> */}
    <Title>Dados de Membro</Title>
        <div>
            <Row>
              <Col lg="12" className="mb-3">
                <Content>
                  <b>Nome completo: </b> {member.name}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Naturalidade: </b> {member.citizenship}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>CPF: </b> {member.cpf}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>RG: </b> {member.rg}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>NIS: </b> {member.nis}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Estado Civil: </b> {member.marital_status}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Nome da mãe: </b> {member.mother_name}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Nome do cônjuge: </b> {member.spouse_name}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>CPF do cônjuge: </b> {member.spouse_cpf}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Nacionalidade: </b> {member.nationality}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Anos que reside na região: </b> {member.year_residence}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Sempre residiu no meio rural?: </b> {member.always_resided}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>E-mail: </b> {member.email}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Telefone: </b> {member.phone}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Telefone alternativo: </b> {member.alternative_phone}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>País: </b> {member.country}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Estado: </b> {member.state}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Cidade: </b> {member.city}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Bairro: </b> {member.district}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Endereço: </b> {member.address}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Número: </b> {member.number}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>CEP: </b> {member.cep}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Zona de localização: </b> {member.location_zone}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Status na RB: </b> {member.rb_status}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Ocupa área Destinada pelo INCRA: </b>
                  {member.incra_area ? "Sim" : "Não"}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Código de coleta: </b>
                  {member.collection_code}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Status: </b>
                  {member.status}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Núcleo operacional ATER: </b>
                  {member.operational_core}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Beneficiário possui contrato concessão?: </b>
                  {member.has_contract ? "Sim" : "Não"}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Validade da concessão: </b>
                  {moment(member.concession_validity).format("DD/MM/YYYY")}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Lote possui marcação dos limites?: </b>
                  {member.lot_has_marking ? "Sim" : "Não"}
                </Content>
              </Col>
              <Col lg="6" className="mb-3">
                <Content>
                  <b>Beneficiário conhece limite lote?: </b>
                  {member.beneficiary_knows_limit ? "Sim" : "Não"}
                </Content>
              </Col>
            </Row>
        </div>
    </>
  )
}

export default Member;
