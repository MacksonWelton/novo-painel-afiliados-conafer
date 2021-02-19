import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllAllotments } from "redux/actions/Allotments";

const TechnicalVisit = ({ inputTechnicalVisit, setInputTechnicalVisit }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
  }, []);

  const allAllotments = useSelector(
    (state) => state.AllotmentsReducer.allAllotments
  );

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputTechnicalVisit({ ...inputTechnicalVisit, [name]: value });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Visita Técnica</h2>
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
                value={inputTechnicalVisit.allotment}
                onChange={handleChangeInput}
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
              <label
                className="form-control-label"
                htmlFor="conversation_participants"
              >
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
      </Col>
    </Row>
  );
};

export default TechnicalVisit;
