import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";

const TechnicalVisit = ({
  inputTechnicalVisit,
  setInputTechnicalVisit
}) => {

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInputTechnicalVisit({...inputTechnicalVisit, [name]: value});
  }

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="informant_name">
            Nome do informante
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="informant_name"
            id="informant_name"
            title="Nome do informante"
            placeholder="Ex: José Antônio"
            value={inputTechnicalVisit.informant_name}
            onChange={handleChangeInput}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="conversation_participants">
          Participantes da conversa
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="conversation_participants"
            id="conversation_participants"
            title="Participantes da conversa"
            placeholder="Ex: Maria da Silva, Fernanda dos Santos, Atônio Ferreira"
            value={inputTechnicalVisit.conversation_participants}
            onChange={handleChangeInput}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default TechnicalVisit;
