import React from "react";

import { Card, CardBody, CardTitle, Row, Col } from "reactstrap";

const StatsCard = ({ CardData }) => {
  return (
    <>
      {CardData.map((card, index) => (
        <Col key={index} lg="6" xl="3" className="mb-4">
          <Card className="card-stats">
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
                    {card.progress}
                  </span>
                </div>
                <Col className="col-auto">
                  <div className={`icon icon-shape ${card.color} text-white rounded-circle shadow`}>
                    <i className={card.icon} />
                  </div>
                </Col>
              </Row>
              <p className="mt-3 mb-0 text-muted text-sm">
                <span className={card.comparison > 0 ? "text-success mr-2" : "text-danger mr-2"}>
                  {card.comparison > 0 ? (
                    <i className="fa fa-arrow-up" />
                  ) : (
                    <i className="fas fa-arrow-down" />
                  )}{" "}
                  {card.comparison}%
                </span>{" "}
                <span className="text-nowrap">{card.comparisonDate}</span>
              </p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default StatsCard;
