import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllAllotments } from "../../../../redux/actions/Allotments";
import { formatReal } from "../../../../utils/converterToMoney";

const Transport = ({ inputTransport, setInputTransport }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const allAllotments = useSelector(
    (state) => state.AllotmentsReducer.allAllotments
  );

  const error = useSelector((state) => state.ErrorReducer.error);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputTransport({ ...inputTransport, [name]: value });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Transporte</h2>
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
                value={inputTransport.allotment}
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
              <small className="text-red">
                {error.hasOwnProperty("allotment")
                  ? `* ${error.allotment.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="means_transport">
                Principal meio de transporte da produção{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="means_transport"
                id="means_transport"
                title="Principal meio de transporte da produção"
                placeholder="Ex: Veículo próprio"
                value={inputTransport.means_transport}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
              <small className="text-red">
                {error.hasOwnProperty("means_transport")
                  ? `* ${error.means_transport.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="own_road_transport_cost"
              >
                Custo com transporte rodoviário próprio
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="own_road_transport_cost"
                id="own_road_transport_cost"
                title="Custo com transporte rodoviário próprio"
                placeholder="Ex: 100.00"
                value={inputTransport.own_road_transport_cost}
                onChange={(event) => {
                  event = {
                    target: {
                      name: event.target.name,
                      value: formatReal(event.target.value),
                    },
                  };
                  handleChangeInput(event);
                }}
                maxLength="16"
              />
              <small className="text-red">
                {error.hasOwnProperty("own_road_transport_cost")
                  ? `* ${error.own_road_transport_cost.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="waterway_transportation_cost"
              >
                Custo com transporte hidroviário próprio
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="waterway_transportation_cost"
                id="waterway_transportation_cost"
                title="Custo com transporte hidroviário próprio"
                placeholder="Ex: 150.00"
                value={inputTransport.waterway_transportation_cost}
                onChange={(event) => {
                  event = {
                    target: {
                      name: event.target.name,
                      value: formatReal(event.target.value),
                    },
                  };
                  handleChangeInput(event);
                }}
                maxLength="16"
              />
              <small className="text-red">
                {error.hasOwnProperty("waterway_transportation_cost")
                  ? `* ${error.waterway_transportation_cost.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="road_chartered_transport_cost"
              >
                Custo com transporte fretado rodoviário
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="road_chartered_transport_cost"
                id="road_chartered_transport_cost"
                title="Custo com transporte fretado rodoviário"
                placeholder="Ex: 150.00"
                value={inputTransport.road_chartered_transport_cost}
                onChange={(event) => {
                  event = {
                    target: {
                      name: event.target.name,
                      value: formatReal(event.target.value),
                    },
                  };
                  handleChangeInput(event);
                }}
                maxLength="16"
              />
              <small className="text-red">
                {error.hasOwnProperty("road_chartered_transport_cost")
                  ? `* ${error.road_chartered_transport_cost.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="waterway_chartered_transportation_cost"
              >
                Custo transporte fretado hidroviário
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="waterway_chartered_transportation_cost"
                id="waterway_chartered_transportation_cost"
                title="Custo transporte fretado hidroviário"
                placeholder="Ex: 100.00"
                value={inputTransport.waterway_chartered_transportation_cost}
                onChange={(event) => {
                  event = {
                    target: {
                      name: event.target.name,
                      value: formatReal(event.target.value),
                    },
                  };
                  handleChangeInput(event);
                }}
                maxLength="16"
              />
              <small className="text-red">
                {error.hasOwnProperty("waterway_chartered_transportation_cost")
                  ? `* ${error.waterway_chartered_transportation_cost.join(" ")}`
                  : ""}
              </small>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Transport;
