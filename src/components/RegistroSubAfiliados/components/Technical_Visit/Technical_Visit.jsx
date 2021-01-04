import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";

const TechnicalVisit = ({
  inputTechicalVisit,
  setInputTechnicalVisit
}) => {

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInputTechnicalVisit({...inputTechicalVisit, [name]: value});
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
            value={inputTechicalVisit.informant_name}
            onChange={handleChangeInput}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
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
            value={inputTechicalVisit.conversation_participants}
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

export const TechnicalVisit;
