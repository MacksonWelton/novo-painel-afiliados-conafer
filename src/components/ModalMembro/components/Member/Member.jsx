import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Form,
  Button,
} from "reactstrap";
import classnames from "classnames";
import moment from "moment";
import { Title, Content } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { getMemberById } from "redux/actions/Membros";
import { getUsersPJAffiliation } from "redux/actions/UsuariosAfiliacao";
import { getUsersPFAffiliation } from "redux/actions/UsuariosAfiliacao";
import { updateMember } from "redux/actions/Membros";
import MemberEditForm from "../../../SubAffiliateRegistrationModel/components/Member/Member";

const Member = ({ memberData }) => {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getMemberById(memberData.id));
    dispatch(getUsersPJAffiliation());
    dispatch(getUsersPFAffiliation());
  }, [dispatch, memberData.id]);

  const usersPFAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersPFAffiliation
  );

  const usersPJAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersPJAffiliation
  );

  const [inputMember, setInputMember] = useState({
    affiliation: "",
    name: "",
    email: "",
    cpf: "",
    rg: "",
    nis: "",
    marital_status: "",
    mother_name: "",
    spouse_name: "",
    spouse_cpf: "",
    nationality: "",
    citizenship: "",
    year_residence: 0,
    always_resided: "",
    phone: "",
    alternative_phone: "",
    state: "",
    country: "",
    city: "",
    district: "",
    address: "",
    number: 0,
    cep: "",
    location_zone: "",
    collection_code: "",
    status: "",
    operational_core: "",
    has_contract: "",
    concession_validity: "",
    lot_has_marking: "",
    beneficiary_knows_limit: "",
    rb_status: "",
    incra_area: "",
  });

  const [usersAffiliation, setUsersAffiliation] = useState([]);

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

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  
  const member = useSelector((state) => state.MembersReducer.member);
  
  if (member && loadDataInput) {
    let aux = inputMember;
    
    Object.keys(member).forEach((key) => {
      if (member[key] !== null) {
        aux = {...aux, [key]: member[key]}
      }
    });
    
    setInputMember(aux);
    setLoadDataInput(!loadDataInput);
  }
  
  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(updateMember(inputMember));
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
      {member && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Dados de Membro</Title>
            <div>
              <Row>
                <Col lg="12" className="mb-3">
                  <Content>
                    <b>Nome completo: </b> {member.name}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Naturalidade: </b> {member.citizenship}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>CPF: </b> {member.cpf}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>RG: </b> {member.rg}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>NIS: </b> {member.nis}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Estado Civil: </b> {member.marital_status}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nome da mãe: </b> {member.mother_name}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nome do cônjuge: </b> {member.spouse_name}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>CPF do cônjuge: </b> {member.spouse_cpf}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nacionalidade: </b> {member.nationality}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Anos que reside na região: </b> {member.year_residence}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Sempre residiu no meio rural?: </b>{" "}
                    {member.always_resided}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>E-mail: </b> {member.email}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Telefone: </b> {member.phone}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Telefone alternativo: </b> {member.alternative_phone}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>País: </b> {member.country}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Estado: </b> {member.state}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Cidade: </b> {member.city}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Bairro: </b> {member.district}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Endereço: </b> {member.address}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Número: </b> {member.number}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>CEP: </b> {member.cep}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Zona de localização: </b> {member.location_zone}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Status na RB: </b> {member.rb_status}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Ocupa área Destinada pelo INCRA: </b>
                    {member.incra_area ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Código de coleta: </b>
                    {member.collection_code}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Status: </b>
                    {member.status}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Núcleo operacional ATER: </b>
                    {member.operational_core}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Beneficiário possui contrato concessão?: </b>
                    {member.has_contract ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Validade da concessão: </b>
                    {moment(member.concession_validity).format("DD/MM/YYYY")}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Lote possui marcação dos limites?: </b>
                    {member.lot_has_marking ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Beneficiário conhece limite lote?: </b>
                    {member.beneficiary_knows_limit ? "Sim" : "Não"}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
                <MemberEditForm
                  inputMember={inputMember}
                  setInputMember={setInputMember}
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

export default Member;
