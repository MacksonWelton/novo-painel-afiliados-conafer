import React, { useState, useEffect } from "react";
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
import VegetablesProductionEditForm from "./VegetablesProductionEditForm";
import { getVegetablesProduction } from "redux/actions/Productions";
import { updateVegetablesProduction } from "redux/actions/Productions";

const VegetablesProduction = ({ vegetablesProductionData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getVegetablesProduction(vegetablesProductionData.id));
  }, [dispatch, vegetablesProductionData.id]);

  const [inputVegetables, setInputVegetables] = useState({
    allotment: "",
    production: "",
    annual_production: 0,
    price_per_kg: null,
    annual_marketed: 0,
    how_much_sell: null,
    seedling_origin: "",
    creole_seed: "",
    pest_problems: "",
    irrigated_area: 0,
    generates_waste: "",
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateVegetablesProduction(inputVegetables));
  };

  const vegetablesProduction = useSelector(
    (state) => state.ProductionsReducer.vegetablesProduction
  );

  if (vegetablesProduction && loadDataInput) {
    let aux = inputVegetables;

    Object.keys(vegetablesProduction).forEach((key) => {
      if (vegetablesProduction[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: vegetablesProduction[key] };
      }
    });

    setInputVegetables(aux);
    setLoadDataInput(!loadDataInput);
  }

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
      {vegetablesProduction && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Produção de Vegetais</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção:</b> {vegetablesProduction.productionName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {vegetablesProduction.allotmentName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção anual:</b>{" "}
                    {vegetablesProduction.annual_production}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Preço por kg:</b> {vegetablesProduction.price_per_kg}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantidade comercializada anual:</b>{" "}
                    {vegetablesProduction.annual_marketed}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quanto vende (kg):</b>{" "}
                    {vegetablesProduction.how_much_sell}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Semente muda origem:</b>{" "}
                    {vegetablesProduction.seedling_origin}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Semente muda origem:</b>{" "}
                    {vegetablesProduction.creole_seed ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Problemas com pragas:</b>{" "}
                    {vegetablesProduction.pest_problems ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Área irrigada:</b> {vegetablesProduction.irrigated_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção gera resíduo?:</b>{" "}
                    {vegetablesProduction.generates_waste ? "Sim" : "Não"}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <VegetablesProductionEditForm
                inputVegetables={inputVegetables}
                setInputVegetables={setInputVegetables}
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

export default VegetablesProduction;
