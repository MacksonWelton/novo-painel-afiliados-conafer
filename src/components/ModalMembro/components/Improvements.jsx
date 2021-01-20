import React from "react";
import { Row, Col } from "reactstrap";

const Improvements = ({ improvement }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Benfeitoria
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {improvement.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Benfeitoria:</b>{" "}
                {improvement.improvement}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo:</b>{" "}
                {improvement.type_improvement}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Metragem:</b>{" "}
                {improvement.footage}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Idade da benfeitoria:</b>{" "}
                {improvement.age_improvement}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Improvements;