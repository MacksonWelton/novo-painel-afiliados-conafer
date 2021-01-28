import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Improvements = ({ improvement }) => {
  return (
    <>
      <Title>
        Benfeitoria
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {improvement.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Benfeitoria:</b>{" "}
                {improvement.improvement}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Tipo:</b>{" "}
                {improvement.type_improvement}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Metragem:</b>{" "}
                {improvement.footage}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Idade da benfeitoria:</b>{" "}
                {improvement.age_improvement}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Improvements;