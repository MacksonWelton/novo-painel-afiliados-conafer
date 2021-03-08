import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { updateTransport } from "redux/actions/Transports";
import { getTransportById } from "redux/actions/Transports";
import { Title, Content } from "../Styles";

import TransportEditForm from "../../../SubAffiliateRegistrationModel/components/Transport/Transport";

const Transports = ({ transportData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getTransportById(transportData.id));
  }, [dispatch, transportData.id]);

  const [inputTransport, setInputTransport] = useState({
    allotment: "",
    means_transport: "",
    own_road_transport_cost: "",
    waterway_transportation_cost: "",
    road_chartered_transport_cost: "",
    waterway_chartered_transportation_cost: "",
  });

  const transport = useSelector((state) => state.TransportsReducer.transport);

  if (transport && loadDataInput) {
    let aux = inputTransport;

    Object.keys(transport).forEach((key) => {
      if (transport[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: transport[key] };
      }
    });

    setInputTransport(aux);
    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateTransport(inputTransport));
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Dados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Editar
          </NavLink>
        </NavItem>
      </Nav>
      {transport && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Transportes</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {transport.allotmentName}
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
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <TransportEditForm
                inputTransport={inputTransport}
                setInputTransport={setInputTransport}
              />
              <div className="text-center">
                <Button
                  color="primary"
                  title="Clique para salvar as alterações."
                  type="submit"
                >
                  Salvar Alterações
                </Button>
              </div>
            </Form>
          </TabPane>
        </TabContent>
      )}
    </div>
  );
};

export default Transports;
