import React from "react";
import { Col, Row } from "reactstrap";
import {Title, Content} from "./Styles";

const Habitation = ({ habitation }) => {
  return (
    <>
      <Title>
        Moradia
      </Title>
      <div>
          <Row>
            <Col lg="6" className="mb-3">
              <Content>
                <b>Lote:</b>{" "}
                {habitation.property_name}
              </Content>
            </Col>
          </Row>
      </div>
    </>
  );
};

export default Habitation;