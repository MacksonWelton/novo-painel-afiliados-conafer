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
import { updateResident } from "redux/actions/Residents";
import { useDispatch, useSelector } from "react-redux";
import ResidentEditForm from "../../../SubAffiliateRegistrationModel/components/Resident/Resident/Resident";
import { getResidentById } from "redux/actions/Residents";

const Resident = ({ residentData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResidentById(residentData.id));
  }, [dispatch, residentData.id]);

  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);
  
  const [inputResident, setInputResident] = useState({
    habitation: "",
    resident_name: "",
    kinship: "",
    sex: "",
    birthdate: "",
    schooling: "",
    main_source_income: "",
    generates_income: "",
    batch_work_time: 0,
    issues_invoice: "",
    ex_beneficiary: "",
    activity: "",
    demotivating_activity: "",
    retired: "",
    work_outside: "",
    initial_age_work_outside: 0,
    deficiency: "",
    last_diceases: "",
    type_treatment: "",
    access_treatment: "",
  });
  
  const resident = useSelector((state) => state.ResidentsReducer.resident);
  
  if (resident && loadDataInput) {
    let aux = inputResident;
    
    Object.keys(resident).forEach((key) => {
      if (resident[key] !== null && key !== "property_name") {
        aux = { ...aux, [key]: resident[key] };
      }
    });
    
    setInputResident(aux);
    setLoadDataInput(!loadDataInput);
  }
  
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateResident(inputResident));
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
      {resident && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Morador</Title>
            <div>
              <Row>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nome do morador:</b> {resident.resident_name}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Parentesco:</b> {resident.kinship}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Sexo:</b> {resident.sex}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Data de nascimento:</b> {resident.birthdate}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Escolaridade:</b> {resident.schooling}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Principal fonte de renda:</b>{" "}
                    {resident.main_source_income}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Gera renda para a família:</b>{" "}
                    {resident.generates_income}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tempo trabalho no lote (anos):</b>{" "}
                    {resident.batch_work_time}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Emite nota fiscal:</b>{" "}
                    {resident.issues_invoice ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Ex beneficiário:</b> {resident.ex_beneficiary}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Atividade:</b> {resident.activity}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Atividade desmotivador:</b>{" "}
                    {resident.demotivating_activity}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Aposentado:</b> {resident.retired ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Trabalho remunerado fora do lote:</b>{" "}
                    {resident.work_outside ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Trabalho fora do lote (ano inicial):</b>{" "}
                    {resident.initial_age_work_outside}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Deficiência:</b> {resident.deficiency ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Doenças nos últimos dois anos:</b>{" "}
                    {resident.last_diceases}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de tratamento:</b> {resident.type_treatment}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Forma de acesso ao tratamento:</b>{" "}
                    {resident.access_treatment}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <ResidentEditForm
                inputResident={inputResident}
                setInputResident={setInputResident}
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

export default Resident;
