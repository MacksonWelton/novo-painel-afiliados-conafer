import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";

const Transport = ({
  inputTransport,
  setInputTransport
}) => {

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInputTransport({...inputTransport, [name]: value});
  }

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="means_transport">
            Principal meio de transporte{" "}<small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="means_transport"
            id="means_transport"
            title="Principal meio de transporte"
            value={inputTransport.means_transport}
            onChange={handleChangeInput}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="own_road_transport_cost">
          Custo com transporte rodoviário próprio
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="own_road_transport_cost"
            id="own_road_transport_cost"
            title="Custo com transporte rodoviário próprio"
            value={inputTransport.own_road_transport_cost}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waterway_transportation_cost	">
          Custo com transporte hidroviário próprio
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterway_transportation_cost	"
            id="waterway_transportation_cost	"
            title="Custo com transporte hidroviário próprio"
            value={inputTransport.waterway_transportation_cost	}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="road_chartered_transport_cost">
          Custo com transporte fretado rodoviário
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="road_chartered_transport_cost"
            id="road_chartered_transport_cost"
            title="Custo com transporte fretado rodoviário"
            value={inputTransport.road_chartered_transport_cost}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waterway_chartered_transportation_cost">
          Custo transporte fretado hidroviário
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterway_chartered_transportation_cost"
            id="waterway_chartered_transportation_cost"
            title="Custo transporte fretado hidroviário"
            value={inputTransport.waterway_chartered_transportation_cost}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Transport;
