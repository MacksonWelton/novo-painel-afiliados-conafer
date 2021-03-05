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
import AnimalProductionEditForm from "./AnimalsProductionEditForm";
import { getAnimalsProductionById } from "redux/actions/Productions";
import { updateAnimalsProduction } from "redux/actions/Productions";

const AnimalsProduction = ({ animalsProductionData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getAnimalsProductionById(animalsProductionData.id))
  }, [dispatch, animalsProductionData.id])

  const [inputAnimal, setInputAnimal] = useState({
    allotment: "",
    production: "",
    mensal_production: 0,
    mensal_marketed: 0,
    food_supplementation: "",
    food_supplementation_value: "",
    production_type: "",
  });

  const animalsProduction = useSelector(
    (state) => state.ProductionsReducer.animalsProduction
  );

  if (animalsProduction && loadDataInput) {
    let aux = inputAnimal;

    Object.keys(animalsProduction).forEach((key) => {
      if (
        animalsProduction[key] !== null &&
        key !== "productionName" &&
        key !== "typeName"
      ) {
        aux = { ...aux, [key]: animalsProduction[key] };
      }
    });

    setInputAnimal(aux);
    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateAnimalsProduction(inputAnimal))
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
      {animalsProduction && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Produção Animal</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção:</b> {animalsProduction.productionName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {animalsProduction.allotmentName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção mensal:</b>{" "}
                    {animalsProduction.mensal_production}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantidade comercializada mensal:</b>{" "}
                    {animalsProduction.mensal_marketed}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Recursos em complementação alimentar:</b>{" "}
                    {animalsProduction.food_supplementation_value}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de complementação alimenta:</b>{" "}
                    {animalsProduction.food_supplementation}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de produção (corte ou derivado):</b>{" "}
                    {animalsProduction.production_type}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <AnimalProductionEditForm
                inputAnimal={inputAnimal}
                setInputAnimal={setInputAnimal}
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

export default AnimalsProduction;
