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
import { getDiagnosisAgriculturalSystemsById } from "redux/actions/DiagnosisAgriculturalSystems";
import { Title, Content } from "../Styles";
import { updateDiagnosisAgriculturalSystem } from "redux/actions/DiagnosisAgriculturalSystems";
import DiagnosisAgriculturalSystemsEditForm from "../../../SubAffiliateRegistrationModel/components/DiagnosisAgriculturalSystems/DiagnosisAgriculturalSystems";

const DiagnosisAgriculturalSystems = ({ diagnosisAgriculturalSystemData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  const [
    inputDiagnosisOfAgriculturalSystems,
    setInputDiagnosisOfAgriculturalSystems,
  ] = useState({
    allotment: "",
    income_off_lot: "",
    government_assistance: "",
    housing_policy: "",
    financing_line: "",
    has_rural_communication: "",
    rural_communication: "",
    final_destination_waste: "",
    has_basic_sanitation: "",
    schools_transport: "",
    hire_employees: "",
    technical_assistance: "",
    reminds_burning_in_lot: "",
    has_water_access: "",
    year_water_access: "",
    riparian_forest: "",
    has_energy: "",
    network_type: "",
    energy_meets_production: "",
    complements_energy: "",
    uses_any_these: "",
    want_to_get: "",
    potable_water: "",
    distance_water_intake: "",
    alteration_water_course: "",
    fixed_employees: "",
    year_burning: "",
    captures_rain_water: "",
    how_uses_rainwater: "",
  });

  useEffect(() => {
    dispatch(
      getDiagnosisAgriculturalSystemsById(diagnosisAgriculturalSystemData.id)
    );
  }, [dispatch, diagnosisAgriculturalSystemData.id]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const diagnosisAgriculturalSystem = useSelector(
    (state) =>
      state.DiagnosisAgriculturalSystemsReducer.diagnosisAgriculturalSystem
  );

  if (diagnosisAgriculturalSystem && loadDataInput) {
    let aux = inputDiagnosisOfAgriculturalSystems;

    Object.keys(diagnosisAgriculturalSystem).forEach((key) => {
      if (
        diagnosisAgriculturalSystem[key] !== null &&
        key !== "property_name"
      ) {
        aux = { ...aux, [key]: diagnosisAgriculturalSystem[key] };
      }
    });

    setInputDiagnosisOfAgriculturalSystems(aux);
    setLoadDataInput(!loadDataInput);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      updateDiagnosisAgriculturalSystem(inputDiagnosisOfAgriculturalSystems)
    );
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
      {diagnosisAgriculturalSystem && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Diagnóstico de Sistemas Agrários</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Qual é a renda extra lote (fora do lote) anual?:</b>{" "}
                    {diagnosisAgriculturalSystem.income_off_lot}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      A família recebe algum tipo de aux. de programa social
                      governamental?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.government_assistance
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      A família acessou alguma política pública para moradia?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.housing_policy ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      Acessou alguma linha de financiamento para projetos
                      desenvolvidos no lote?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.financing_line ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tem meio de comunicação rural?:</b>{" "}
                    {diagnosisAgriculturalSystem.has_rural_communication
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Comunicação rural - Tipo:</b>{" "}
                    {diagnosisAgriculturalSystem.rural_communication}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Destino final do lixo seco:</b>{" "}
                    {diagnosisAgriculturalSystem.final_destination_waste}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Saneamento básico da moradia (esgoto sanitário):</b>{" "}
                    {diagnosisAgriculturalSystem.has_basic_sanitation
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Principal meio de transporte escolar:</b>{" "}
                    {diagnosisAgriculturalSystem.schools_transport}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Contrata empregados para ajudar na produção do lote?:</b>{" "}
                    {diagnosisAgriculturalSystem.hire_employees ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantos empregados permanentes?:</b>{" "}
                    {diagnosisAgriculturalSystem.fixed_employees}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Recebeu assistência técnica na última safra/ano?:</b>{" "}
                    {diagnosisAgriculturalSystem.technical_assistance
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      Lembra da última queimada descontrolada que atingiu o
                      lote?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.reminds_burning_in_lot
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Ano dessa queimada:</b>{" "}
                    {diagnosisAgriculturalSystem.year_burning}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>O lote tem acesso a água?:</b>{" "}
                    {diagnosisAgriculturalSystem.has_water_access
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
              </Row>
              <Row>
                <Col
                  lg="12"
                  className="bg-default rounded d-flex justify-content-center mb-2"
                >
                  <h3 className="text-white my-2">Fornecimento de energia</h3>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tem eletrificação?:</b>{" "}
                    {diagnosisAgriculturalSystem.has_energy ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de rede:</b>{" "}
                    {diagnosisAgriculturalSystem.network_type}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Energia disponível atende à produção?:</b>{" "}
                    {diagnosisAgriculturalSystem.energy_meets_production
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Complementa o fornecimento de energia?:</b>{" "}
                    {diagnosisAgriculturalSystem.complements_energy
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Utiliza, também, algum desses?:</b>{" "}
                    {diagnosisAgriculturalSystem.uses_any_these}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Deseja obter / complementar?:</b>{" "}
                    {diagnosisAgriculturalSystem.want_to_get ? "Sim" : "Não"}
                  </Content>
                </Col>
              </Row>
              <Row>
                <Col
                  lg="12"
                  className="bg-default rounded d-flex justify-content-center mb-2"
                >
                  <h3 className="text-white my-2">Água Produção</h3>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote tem água tratada?:</b>{" "}
                    {diagnosisAgriculturalSystem.potable_water ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote tem acesso a água o ano todo?:</b>{" "}
                    {diagnosisAgriculturalSystem.year_water_access
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Há fonte de água natural no lote?:</b>{" "}
                    {diagnosisAgriculturalSystem.there_is_natural_water_source
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      As fontes de água natural no lote são protegidas por mata
                      ciliar?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.riparian_forest
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      Qual a distância entre o local de captação da fonte de
                      água natural para sua moradia e elementos contaminantes?
                      (m):
                    </b>{" "}
                    {diagnosisAgriculturalSystem.distance_water_intake}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      A captação levou à alteração do curso natural do córrego
                      da fonte?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.alteration_in_the_watercourse
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>
                      Há captação de água de chuva para reaproveitamento no
                      lote?:
                    </b>{" "}
                    {diagnosisAgriculturalSystem.captures_rain_water
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Como é utilizada a água captada da chuva?:</b>{" "}
                    {diagnosisAgriculturalSystem.how_uses_rainwater}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Alterações no curso natural do córrego da fonte?:</b>{" "}
                    {diagnosisAgriculturalSystem.alteration_water_course
                      ? "Sim"
                      : "Não"}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <DiagnosisAgriculturalSystemsEditForm
                inputDiagnosisOfAgriculturalSystems={
                  inputDiagnosisOfAgriculturalSystems
                }
                setInputDiagnosisOfAgriculturalSystems={
                  setInputDiagnosisOfAgriculturalSystems
                }
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

export default DiagnosisAgriculturalSystems;
