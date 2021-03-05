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
import { Title, Content } from "../Styles";
import { getTechnicalVisitById } from "../../../../redux/actions/TechnicalVisits";
import TechincialVisitEditForm from "../../../SubAffiliateRegistrationModel/components/TechnicalVisit/TechnicalVisit";
import { updateTechnicalVisit } from "../../../../redux/actions/TechnicalVisits";

const TechnicalVisit = ({ technicalVisitData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getTechnicalVisitById(technicalVisitData.id));
  }, [dispatch, technicalVisitData.id]);

  const [inputTechnicalVisit, setInputTechnicalVisit] = useState({
    informant_name: "",
    conversation_participants: "",
  });

  const technicalVisit = useSelector(
    (state) => state.TechnicalVisitsReducer.technicalVisit
  );

  if (technicalVisit && loadDataInput) {
    let aux = inputTechnicalVisit;

    Object.keys(technicalVisit).forEach((key) => {
      if (technicalVisit[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: technicalVisit[key] };
      }
    });

    setInputTechnicalVisit(aux);
    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateTechnicalVisit(inputTechnicalVisit));
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
      {technicalVisit && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Visita Técnica</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {technicalVisit.allotmentName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nome do informante:</b> {technicalVisit.informant_name}
                  </Content>
                </Col>
                <Col lg="12" className="mb-3">
                  <Content>
                    <b>Participantes da conversa:</b>{" "}
                    {technicalVisit.conversation_participants}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <TechincialVisitEditForm
                inputTechnicalVisit={inputTechnicalVisit}
                setInputTechnicalVisit={setInputTechnicalVisit}
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

export default TechnicalVisit;
