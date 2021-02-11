import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Resident = ({ resident }) => {
  return (
    <>
      <Title>
        Morador
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Nome do morador:</b>{" "}
                {resident.resident_name}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Parentesco:</b>{" "}
                {resident.kinship}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Sexo:</b>{" "}
                {resident.sex}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Data de nascimento:</b>{" "}
                {resident.birthdate}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Escolaridade:</b>{" "}
                {resident.schooling}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Principal fonte de renda:</b>{" "}
                {resident.main_source_income}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Gera renda para a família:</b>{" "}
                {resident.generates_income}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tempo trabalho no lote (anos):</b>{" "}
                {resident.batch_work_time}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Emite nota fiscal:</b>{" "}
                {resident.issues_invoice ? "Sim" : "Não"}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Ex beneficiário:</b>{" "}
                {resident.ex_beneficiary}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Atividade:</b>{" "}
                {resident.activity}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Atividade desmotivador:</b>{" "}
                {resident.demotivating_activity}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Aposentado:</b>{" "}
                {resident.retired}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Trabalho remunerado fora do lote:</b>{" "}
                {resident.work_outside}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Trabalho fora do lote (ano inicial):</b>{" "}
                {resident.initial_age_work_outside}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Deficiência:</b>{" "}
                {resident.deficiency}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Doenças nos últimos dois anos:</b>{" "}
                {resident.last_diceases}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo de tratamento:</b>{" "}
                {resident.type_treatment}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Forma de acesso ao tratamento:</b>{" "}
                {resident.access_treatment}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Resident;