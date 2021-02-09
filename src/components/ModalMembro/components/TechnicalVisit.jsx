import React from "react";
import { Col, Row } from "reactstrap";
import {Title, Content} from "./Styles";

const TechnicalVisit = ({ technicalVisit }) => {
  return (
    <>
      <Title>
        Visita Técnica
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {technicalVisit.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Nome do informante:</b>{" "}
                {technicalVisit.informant_name}
              </Content>
            </Col>
            <Col lg="12" className="mb-3">
              <Content>
                <b>Participantes da conversa:</b>{" "}
                {technicalVisit.conversation_participants}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default TechnicalVisit;