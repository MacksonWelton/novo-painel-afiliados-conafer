import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Transports = ({ transport }) => {
  return (
    <>
      <Title>
        Transportes
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {transport.allotmentName}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b> Principal meio de transporte:</b>{" "}
                {transport.means_transport}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Custo de transporte rodoviário próprio:</b>{" "}
                {transport.own_road_transport_cost}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Custo de transporte hidroviário próprio:</b>{" "}
                {transport.waterway_transportation_cost}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Custo de transporte fretado rodoviário:</b>{" "}
                {transport.road_chartered_transport_cost}
              </Content>
            </Col>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Custo de transporte fretado hidroviário:</b>{" "}
                {transport.waterway_chartered_transportation_cost}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Transports;