import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";

const Improvement = ({
  inputImprovement,
  setInputImprovement
}) => {

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInputImprovement({...inputImprovement, [name]: value});
  }

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="improvement">
            Benfeitoria{" "}<small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="improvement"
            id="improvement"
            title="Benfeitoria"
            value={inputImprovement.improvement}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="type_improvement">
            Tipo{" "} <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="type_improvement"
            id="type_improvement"
            title="Tipo"
            value={inputImprovement.type_improvement}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="age_improvement">
          Idade benfeitoria
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="age_improvement"
            id="age_improvement"
            title="Idade benfeitoria"
            value={inputImprovement.age_improvement}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="footage">
          Metragem
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="footage"
            id="footage"
            title="Metragem"
            value={inputImprovement.footage}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Improvement;
