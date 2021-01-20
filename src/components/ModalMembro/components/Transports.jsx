import React from "react";
import { Row, Col } from "reactstrap";

const Transports = ({ transport }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Transportes
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {transport.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b> Principal meio de transporte:</b>{" "}
                {transport.means_transport}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Custo de transporte rodoviário próprio:</b>{" "}
                {transport.own_road_transport_cost}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Custo de transporte hidroviário próprio:</b>{" "}
                {transport.waterway_transportation_cost}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Custo de transporte fretado rodoviário:</b>{" "}
                {transport.road_chartered_transport_cost}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Custo de transporte fretado hidroviário:</b>{" "}
                {transport.waterway_chartered_transportation_cost}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Transports;