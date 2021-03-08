import React, { useEffect, useState } from "react";
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
import { Title, Content } from "../../Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  getPsicultureProductionById,
  updatePsicultureProduction,
} from "../../../../../redux/actions/Productions";
import PsicultureEditForm from "./PsicultureEditForm";

const Psiculture = ({ psicultureData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getPsicultureProductionById(psicultureData.id));
  }, [dispatch, psicultureData.id]);

  const [inputPsiculture, setInputPsiculture] = useState({
    allotment: "",
    type_psiculture: "",
    management: "",
    harvesting_systems: "",
    food_supplementation: "",
    annual_food_supplementation: "",
    goal: "",
    fish_pay: "",
    reservoir_size: 0,
    meat_production: 0,
    purchase_price: "",
    commercialized_production: 0,
    average_price: "",
    mai_marketing_channels: "",
  });

  const psiculture = useSelector(
    (state) => state.ProductionsReducer.psiculture
  );

  if (psiculture && loadDataInput) {
    let aux = inputPsiculture;

    Object.keys(psiculture).forEach((key) => {
      if (
        psiculture[key] !== null &&
        key !== "productionName" &&
        key !== "typeName"
      ) {
        aux = { ...aux, [key]: psiculture[key] };
      }
    });

    setInputPsiculture(aux);
    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updatePsicultureProduction(inputPsiculture));
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
      {psiculture && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Psiculturas</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {psiculture.allotmentName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo:</b> {psiculture.type_psiculture}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Manejo:</b> {psiculture.management}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Sistema de despesca:</b> {psiculture.harvesting_systems}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Complementação alimentar (quanto gasta em R$):</b>{" "}
                    {psiculture.food_supplementation}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Complementacao alimentar anual (quanto gasta em R$):</b>{" "}
                    {psiculture.annual_food_supplementation}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Finalidade:</b> {psiculture.goal}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Pesque pague:</b> {psiculture.fish_pay ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tamanho do reservatório:</b> {psiculture.reservoir_size}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção carne (kg):</b> {psiculture.meat_production}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Preço compra (kg):</b> {psiculture.purchase_price}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção comercializada:</b>{" "}
                    {psiculture.commercialized_production}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Preço médio (kg):</b> {psiculture.average_price}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Principais canais comercialização:</b>{" "}
                    {psiculture.mai_marketing_channels}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <PsicultureEditForm
                inputPsiculture={inputPsiculture}
                setInputPsiculture={setInputPsiculture}
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

export default Psiculture;
