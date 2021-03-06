import React from "react";

import { Card, CardBody, CardTitle, Row, Col, Progress } from "reactstrap";

const ProgressCard = ({ CardData }) => {
  return (
    <>
      {CardData.map((card, index) => (
        <Col key={index} lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0">
            <CardBody>
              <Row>
                <div className="col">
                  <CardTitle
                    tag="h5"
                    className="text-uppercase text-muted mb-0"
                  >
                    {card.title}
                  </CardTitle>
                  <span className="h2 font-weight-bold mb-0">
                    <Progress
                      striped
                      color={card.color}
                      style={{ height: "20px" }}
                      value={card.progress}
                      max={card.max}
                    >
                      {card.progress} de {card.max}
                    </Progress>
                  </span>
                </div>
                <Col className="col-auto">
                  <div
                    className={`icon icon-shape bg-${card.color} text-white rounded-circle shadow`}
                  >
                    <i className={card.icon} />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ProgressCard;
