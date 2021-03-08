import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, FormGroup, Input, Row, Table } from "reactstrap";
import { getAllAllotments } from "../../../../redux/actions/Allotments";

const Improvement = ({ inputImprovements, setInputImprovements }) => {
  const dispatch = useDispatch();

  const [inputImprovement, setInputImprovement] = useState({
    improvement: "",
    type_improvement: "",
    footage: "",
    age_improvement: 0,
  });

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const allAllotments = useSelector(
    (state) => state.AllotmentsReducer.allAllotments
  );

  const error = useSelector((state) => state.ErrorReducer.error);

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
              <label className="form-control-label" htmlFor="allotment">
                Lote <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="allotment"
                id="allotment"
                title="Lote"
                placeholder="Ex: Moradia"
                value={inputImprovement.allotment}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allAllotments.map((allotment, i) => (
                  <option key={i} value={allotment.id}>
                    {allotment.property_name}
                  </option>
                ))}
              </Input>
              <small className="text-red">
                {error.hasOwnProperty("allotment")
                  ? `* ${error.allotment.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
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
                required
              />
              <small className="text-red">
                {error.hasOwnProperty("improvement")
                  ? `* ${error.improvement.join(" ")}`
                  : ""}
              </small>
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
                required
              />
              <small className="text-red">
                {error.hasOwnProperty("type_improvement")
                  ? `* ${error.type_improvement.join(" ")}`
                  : ""}
              </small>
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
                required
              />
              <small className="text-red">
                {error.hasOwnProperty("age_improvement")
                  ? `* ${error.age_improvement.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="footage">
                Metragem (m²) <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="footage"
                id="footage"
                title="Metragem"
                placeholder="Ex: 400m²"
                value={inputImprovement.footage}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              />
              <small className="text-red">
                {error.hasOwnProperty("footage")
                  ? `* ${error.footage.join(" ")}`
                  : ""}
              </small>
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
                    <td className="border">{item.age_improvement}</td>
                    <td className="border">{item.footage}</td>
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
      <Col lg="12">
        {Object.keys(error).length > 0 && (
          <div className="mt-3 p-2 text-white bg-red rounded">
            Atenção: Role a página para cima e corrija os campos que contém um *
            seguindo de um texto em vermelho.
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Improvement;
