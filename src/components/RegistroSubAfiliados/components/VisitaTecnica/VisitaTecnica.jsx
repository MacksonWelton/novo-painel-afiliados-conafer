import React from "react";
import { Input, FormGroup, Row, Col } from "reactstrap";

function VisitaTecnica({ inputTechnicalVisit, setInputTechnicalVisit }) {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputTechnicalVisit({ ...inputTechnicalVisit, [name]: value });
  };

  return (
    <Row>
      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="informant_name">
            Nome do Informante
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="informant_name"
            title="Nome do Informante"
            placeholder="Ex: Fernando Garcia"
            value={inputTechnicalVisit.informant_name}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="conversation_participants"
          >
            Nome do Informante
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="conversation_participants"
            title="Quem participou das conversas durante a visita?"
            placeholder="Ex: Pedro Melo Santos, Inácio dos Santos"
            value={inputTechnicalVisit.conversation_participants}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
}

export default VisitaTecnica;
