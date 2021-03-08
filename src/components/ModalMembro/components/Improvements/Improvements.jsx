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
import { Title, Content } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import ImprovementEditForm from "./ImprovementsEditForm";
import { updateImprovement } from "redux/actions/Improvements";
import { getImprovementById } from "redux/actions/Improvements";

const Improvements = ({ improvementData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getImprovementById(improvementData.id));
  }, [dispatch, improvementData.id]);

  const [inputImprovement, setInputImprovement] = useState({
    improvement: "",
    type_improvement: "",
    footage: "",
    age_improvement: 0,
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const improvement = useSelector(
    (state) => state.ImprovementsReducer.improvement
  );

  if (improvement && loadDataInput) {
    let aux = inputImprovement;

    Object.keys(improvement).forEach((key) => {
      if (improvement[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: improvement[key] };
      }
    });

    setInputImprovement(aux);
    setLoadDataInput(!loadDataInput);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateImprovement(inputImprovement));
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
      {improvement && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Benfeitoria</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {improvement.allotmentName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Benfeitoria:</b> {improvement.improvement}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo:</b> {improvement.type_improvement}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Metragem:</b> {improvement.footage}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Idade da benfeitoria:</b> {improvement.age_improvement}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <ImprovementEditForm
                inputImprovement={inputImprovement}
                setInputImprovement={setInputImprovement}
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

export default Improvements;
