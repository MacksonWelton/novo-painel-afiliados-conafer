import React, { useState, useEffect } from "react";
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
import { Title, Content } from "../Styles";
import classnames from "classnames";
import HabitationEditForm from "../../../SubAffiliateRegistrationModel/components/Resident/Habitation/Habitation";
import { getHabitationById } from "redux/actions/Residents";
import { updateHabitation } from "redux/actions/Residents";

const Habitation = ({ habitationData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getHabitationById(habitationData.id));
  }, [dispatch, habitationData.id]);

  const [inputHabitation, setInputHabitation] = useState({
    allotment: "",
  });

  const habitation = useSelector((state) => state.ResidentsReducer.habitation);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (habitation && loadDataInput) {
    let aux = inputHabitation;

    Object.keys(habitation).forEach((key) => {
      if (habitation[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: habitation[key] };
      }
    });

    setInputHabitation(aux);
    setLoadDataInput(!loadDataInput);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateHabitation(inputHabitation));
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
      {habitation && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Moradia</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote:</b> {habitation.property_name}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <HabitationEditForm
                inputHabitation={inputHabitation}
                setInputHabitation={setInputHabitation}
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

export default Habitation;
