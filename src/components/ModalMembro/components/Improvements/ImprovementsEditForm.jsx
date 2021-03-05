import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllAllotments } from "../../../../redux/actions/Allotments";

const Improvement = ({ inputImprovement, setInputImprovement }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputImprovement({ ...inputImprovement, [name]: value });
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
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Improvement;
