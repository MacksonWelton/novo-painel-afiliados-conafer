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

import Header from "../components/Headers/Header";
import StatsCard from "../components/StatsCard/StatsCard";
import MapaAfiliados from "../components/MapaAfiliados/MapaAfiliados";
import { useSelector, useDispatch } from "react-redux";
import { getUsersAffiliation } from "../redux/actions/UsuariosAfiliacao";
import {
  getAllotments,
  getDiagnosisAgriculturalSystems,
  getDocuments,
  getImprovements,
  getMembers,
  getProductions,
  getTechnicalVisits,
  getTransports,
} from "../redux/actions/Membros";

const Index = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    labels: ["AC", "AL", "AP", "BA", "CE", "ES", "GO", "MA", "MT", "MS", "MG"],
    datasets: [
      {
        data: [],
        maxBarThickness: 6,
      },
    ],
  });

  const { usersPFAffiliation, usersPJAffiliation } = useSelector(
    (state) => state.UsersAffiliationReducer
  );

  const members = useSelector((state) => state.MembersReducer.members);
  const allotments = useSelector((state) => state.MembersReducer.allotments);
  const diagnosisAgriculturalSystems = useSelector(
    (state) => state.MembersReducer.diagnosisAgriculturalSystems
  );
  const productions = useSelector((state) => state.MembersReducer.productions);
  const improvements = useSelector(
    (state) => state.MembersReducer.improvements
  );
  const transports = useSelector(
    (state) => state.MembersReducer.transports
  );
  const technicalVisits = useSelector(
    (state) => state.MembersReducer.technicalVisits
  );
  const documents = useSelector(
    (state) => state.MembersReducer.documents
  );

  if (!data.datasets[0].data.length && members.length) {
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: [
            members.filter((item) => item.state === "AC").length,
            members.filter((item) => item.state === "AL").length,
            members.filter((item) => item.state === "AP").length,
            members.filter((item) => item.state === "BA").length,
            members.filter((item) => item.state === "CE").length,
            members.filter((item) => item.state === "ES").length,
            members.filter((item) => item.state === "GO").length,
            members.filter((item) => item.state === "MA").length,
            members.filter((item) => item.state === "MT").length,
            members.filter((item) => item.state === "MS").length,
            members.filter((item) => item.state === "MG").length,
          ],
        },
      ],
    });
  }


  useEffect(() => {
      dispatch(getUsersAffiliation());
      dispatch(getMembers());
      dispatch(getAllotments());
      dispatch(getDiagnosisAgriculturalSystems());
      dispatch(getProductions());
      dispatch(getImprovements());
      dispatch(getTransports());
      dispatch(getTechnicalVisits());
      dispatch(getDocuments());
  }, [
    dispatch
  ]);

  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const cardData = [
    {
      title: "Membros",
      progress: members.length,
      comparison: 5,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-user-friends",
      color: "bg-dark",
    },
    {
      title: "Lotes",
      progress: allotments.length,
      comparison: 3,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-map-marked-alt text-white",
      color: "bg-green",
    },
    {
      title: "Diag. de S. Agrários",
      progress: diagnosisAgriculturalSystems.length,
      comparison: 3,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-leaf text-white",
      color: "bg-blue",
    },
    {
      title: "Produção",
      progress: productions.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "far fa-chart-bar text-white",
      color: "bg-yellow",
    },
    {
      title: "Benfeitorias",
      progress: improvements.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-hammer text-white",
      color: "bg-info",
    },
    {
      title: "Transportes",
      progress: transports.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-truck text-white",
      color: "bg-purple",
    },
    {
      title: "Visitas Técnicas",
      progress: technicalVisits.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-user-check text-white",
      color: "bg-pink",
    },
    {
      title: "Documentos",
      progress: documents.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-file-alt text-white",
      color: "bg-red",
    },
  ];

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(chartExample1Data === "data1" ? "data2" : "data1");
  };

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
                  allotments={allotments}
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
                  <Bar data={data} options={chartExample2.options} />
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
