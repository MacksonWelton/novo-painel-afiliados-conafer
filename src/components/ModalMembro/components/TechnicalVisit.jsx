import React from "react";
import { Col, Row } from "reactstrap";

const TechnicalVisit = ({ technicalVisit }) => {
  return (
    <>
      <h3
        className="border rounded bg-default text-center text-white py-2 w-100"
      >
        Visita Técnica
      </h3>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Lote:</b>{" "}
                {technicalVisit.allotmentName}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Nome do informante:</b>{" "}
                {technicalVisit.informant_name}
              </div>
            </Col>
            <Col lg="12" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Participantes da conversa:</b>{" "}
                {technicalVisit.conversation_participants}
              </div>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default TechnicalVisit;