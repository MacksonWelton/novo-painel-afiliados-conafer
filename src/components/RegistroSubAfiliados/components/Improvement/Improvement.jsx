import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Button, Col, FormGroup, Input, Row, Table } from "reactstrap";

const Improvement = ({ inputImprovements, setInputImprovements }) => {
  const [inputImprovement, setInputImprovement] = useState({
    improvement: "",
    type_improvement: "",
    footage: "",
    age_improvement: 0,
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputImprovement({ ...inputImprovement, [name]: value });
  };

  const addImprovment = () => {
    if (
      inputImprovement.improvement &&
      inputImprovement.type_improvement &&
      inputImprovement.footage &&
      inputImprovement.age_improvement
    ) {
      setInputImprovements([...inputImprovements, inputImprovement]);
    }
  };

  const removeImprovment = (index) => {
    setInputImprovements(inputImprovements.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Benfeitorias</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="improvement">
                Benfeitoria <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="improvement"
                id="improvement"
                title="Benfeitoria"
                placeholder="Ex: Moradia"
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
                Tipo <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="type_improvement"
                id="type_improvement"
                title="Tipo"
                placeholder="Ex: Alvenaria"
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
                Idade benfeitoria{" "}
                <small className="text-red">(obrigatório)</small>
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
                Metragem <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="footage"
                id="footage"
                title="Metragem"
                placeholder="Ex: 400m²"
                value={inputImprovement.footage}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="12" className="mb-3 d-flex justify-content-center">
            <Button color="primary" onClick={addImprovment}>
              Adicionar
            </Button>
          </Col>
          <Col lg="12">
            <Table>
              <thead>
                <tr>
                  <th>Benfeitoria</th>
                  <th>Tipo</th>
                  <th>Idade</th>
                  <th>Metragem</th>
                </tr>
              </thead>
              <tbody>
                {inputImprovements.map((item, i) => (
                  <tr key={i}>
                    <td className="border">{item.improvement}</td>
                    <td className="border">{item.type_improvement}</td>
                    <td className="border">{item.footage}</td>
                    <td className="border">{item.age_improvement}</td>
                    <td className="border">
                      <Button onClick={() => removeImprovment(i)}>
                        <DeleteForeverOutlined />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Improvement;
