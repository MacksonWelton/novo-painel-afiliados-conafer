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
import classnames from "classnames";
import { getProductionById } from "../../../../../redux/actions/Productions";
import { Title, Content } from "../../Styles";
import ProductionEditForm from "./ProductionEditForm";
import { getUsersPJAffiliation } from "redux/actions/UsuariosAfiliacao";
import { getUsersPFAffiliation } from "redux/actions/UsuariosAfiliacao";
import { updateProduction } from "../../../../../redux/actions/Productions";

const Producao = ({ productionData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);
  const [usersAffiliation, setUsersAffiliation] = useState([]);

  useEffect(() => {
    dispatch(getProductionById(productionData.id));
    dispatch(getUsersPJAffiliation());
    dispatch(getUsersPFAffiliation());
  }, [dispatch, productionData.id]);

  const [inputProduction, setInputProduction] = useState({
    affiliation: "",
    production: "",
    how_produces: 0,
    type_production: "",
    issues_invoice: 0,
  });

  const production = useSelector(
    (state) => state.ProductionsReducer.production
  );

  const usersPFAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersPFAffiliation
  );

  const usersPJAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersPJAffiliation
  );

  const [users, setUsers] = useState({
    pf: true,
    pj: true,
  });

  if (users.pf && usersPFAffiliation[0]) {
    setUsers({ ...users, pf: !users.pf });

    usersPFAffiliation.forEach((affiliation) => {
      setUsersAffiliation([
        ...usersAffiliation,
        { id: affiliation.id, name: affiliation.name },
      ]);
    });
  }

  if (users.pj && usersPJAffiliation[0]) {
    setUsers({ ...users, pj: !users.pj });

    usersPJAffiliation.forEach((affiliation) => {
      setUsersAffiliation([
        ...usersAffiliation,
        { id: affiliation.id, name: affiliation.name_initials },
      ]);
    });
  }

  if (production && loadDataInput) {
    let aux = inputProduction;

    Object.keys(production).forEach((key) => {
      if (production[key] !== null && key !== "productionName" && key !== "typeName") {
        aux = { ...aux, [key]: production[key] };
      }
    });

    setInputProduction(aux);
    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateProduction(inputProduction));
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
      {production && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Produção</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Produção:</b> {production.productionName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantidade Produzida:</b> {production.how_produces}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de Produção:</b> {production.typeName}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Emite Nota?:</b>{" "}
                    {production.issues_invoice ? "Sim" : "Não"}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <ProductionEditForm
                inputProduction={inputProduction}
                setInputProduction={setInputProduction}
                usersAffiliation={usersAffiliation}
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

export default Producao;
