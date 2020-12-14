import React, { useState, useEffect } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header";
import StatsCard from "components/StatsCard/StatsCard";
import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";
import { getMembers } from "redux/actions/Membros";

const Index = () => {
  const dispatch = useDispatch();
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const cardData = [
    {
      title: "Membros",
      progress: 40,
      comparison: 5,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-user-friends",
      color: "bg-dark",
    },
    {
      title: "Contratos",
      progress: 10,
      comparison: 3,
      comparisonDate: "Desde do último mês",
      icon: "ni ni-single-copy-04 text-white",
      color: "bg-green",
    },
    {
      title: "Propostas",
      progress: 6,
      comparison: 3,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-handshake text-white",
      color: "bg-blue",
    },
    {
      title: "Orçamentos",
      progress: 6,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-coins text-white",
      color: "bg-yellow",
    },
  ];

  useEffect(() => {
    dispatch(getUsersAffiliation());
    dispatch(getMembers());
  }, [dispatch]);

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
  };

  const members = useSelector((state) => state.MembersReducer.members);

  const { usersPFAffiliation, usersPJAffiliation } = useSelector(
    (state) => state.UsersAffiliationReducer
  );

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />} />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardBody>
                <MapaAfiliados
                  usersPFAffiliation={usersPFAffiliation}
                  usersPJAffiliation={usersPJAffiliation}
                  members={members}
                />
              </CardBody>
            </Card>
          </Col>
          <Col xl="4">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance no mês{" "}
                      {`${
                        new Date().getMonth() + 1
                      } de ${new Date().getFullYear()}`}
                    </h6>
                    <h3 className="mb-0 text-uppercase text-default">
                      Afiliações por Estado
                    </h3>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* {Chart} */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Estatística
                    </h6>
                    <h2 className="text-default mb-0">Membros</h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Ano</span>
                          <span className="d-md-none">A</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Semestre</span>
                          <span className="d-md-none">S</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* {Chart} */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
