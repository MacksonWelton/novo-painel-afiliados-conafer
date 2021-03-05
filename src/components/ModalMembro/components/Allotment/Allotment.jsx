import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import ZoomImage from "components/ZoomImage/ZoomImage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getAllotmentById } from "../../../../redux/actions/Allotments";
import { Title, Content } from "../Styles";
import classnames from "classnames";
import AllotmentEditForm from "../../../SubAffiliateRegistrationModel/components/Allotment/Allotment";
import { updateAllotment } from "../../../../redux/actions/Allotments";

const Allotment = ({ allotmentData }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllotmentById(allotmentData.id));
  }, [dispatch, allotmentData.id]);

  const allotment = useSelector((state) => state.AllotmentsReducer.allotment);

  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  const [inputAllotment, setInputAllotment] = useState({
    member: "",
    bioma: "",
    operational_core: "",
    allotment_state: "",
    allotment_city: "",
    settlement: "",
    incra_allotment_number: 0,
    access_way: "",
    coordinates: "",
    thirst: 0,
    own_planting: 0,
    native_forest: 0,
    forest: 0,
    fallow_capoeira: 0,
    native_pasture: 0,
    planted_pasture: 0,
    degraded_area: 0,
    batch_partnership: 0,
    third_party_partnership: 0,
    total: 0,
    has_garden: "",
    grow_medicinal_plants: "",
    production_system: "",
    planting_type: "",
    management: "",
    planted_area: 0,
    amount_crops: 0,
    wild_animals_sighted_lot: "",
    wild_animals_cause_problems: "",
    oxen: 0,
    equine: 0,
    mules: 0,
    documentation_area: 0,
    property_name: "",
    georeferenced: "",
    property_ownership: "",
    domain_title: "",
    ccu: "",
    ccru: "",
    regularization: "",
    sncr: "",
    incra_certificate: "",
    join_pra: "",
    alternatives_regularize_deficit: "",
    how_want_make_up_deficit_area: "",
    has_tac_with_app: "",
    has_infractions_committed: "",
    property_has_arvn: "",
    what_want_to_with_surplus_area: "",
    has_rppn: "",
    has_crf: "",
    rli_period: "",
    size_changes_after: "",
    qa_meets_family: "",
    water: 0,
    climate: 0,
    ground: 0,
    vegetation: 0,
    develops_activity_qa: "",
    what_activity_qa: "",
    everyday_actions_interfere: "",
    what_shape: "",
    exchange_experience: "",
    which_organization: "",
    activities_interest: "",
    positive_in_settlement: "",
    negative_in_settlement: "",
    main_ownership_restrictions: "",
    future_expectations_property: "",
    rural_tourism: "",
  });

  const [fileAllotment, setFileAllotment] = useState({
    lot_geometry: {
      fileName: "",
      value: "",
    },
  });

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (allotment && loadDataInput) {
    let inputData = inputAllotment;
    let fileData = fileAllotment;

    Object.keys(allotment).forEach((key) => {
      if (allotment["lot_geometry"] && key === "lot_geometry") {
        let fileName = allotment[key].split("?");
        fileName = fileName[0].split("/");
        fileName = fileName[fileName.length - 1];
        fileData = {
          ...fileData,
          [key]: { fileName: fileName, value: allotment[key] },
        };
      } else if (allotment[key] !== null && key !== "biomaName") {
        inputData = { ...inputData, [key]: allotment[key] };
      }
    });

    setInputAllotment(inputData);
    setFileAllotment(fileData);
    setLoadDataInput(!loadDataInput);
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (typeof fileAllotment.lot_geometry.value === "string") {
      dispatch(updateAllotment(inputAllotment));
    } else {
      dispatch(updateAllotment(inputAllotment, fileAllotment));
    }
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
      {allotment && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Informações do Lote</Title>
            <div>
              <Row>
                <Col lg="6" className="my-3">
                  <Content>
                    <b>Bioma: </b>
                    {allotment.biomaName}
                  </Content>
                </Col>
                <Col lg="6" className="my-3">
                  <Content>
                    <b>Núcleo Operacional: </b>
                    {allotment.operational_core}
                  </Content>
                </Col>
                <Col lg="6" className="my-3">
                  <Content>
                    <b>Estado: </b>
                    {allotment.allotment_state}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Município: </b>
                    {allotment.allotment_city}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Assentamento: </b>
                    {allotment.settlement}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nº do Lote: </b>
                    {allotment.incra_allotment_number}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Via de acesso ao imóvel: </b>
                    {allotment.access_way}
                  </Content>
                </Col>
                <Col lg="12">
                  <div className="mb-3 border rounded p-2">
                    <div className="mb-3">
                      <b>Coordenadas geográficas: </b>
                      {allotment.coordinates}
                    </div>
                    <MapaAfiliados allotments={[allotment]} />
                  </div>
                </Col>
                <Col lg="12" className="mb-3">
                  <Content>
                    <div className="mb-3">
                      <b>Arquivo geometria lote: </b>
                    </div>
                    <ZoomImage image={allotment.lot_geometry} />
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Sede: </b>
                    {allotment.thirst}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Plantio próprio: </b>
                    {allotment.own_planting}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Mata nativa: </b>
                    {allotment.native_forest}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Pousio capoeira: </b>
                    {allotment.fallow_capoeira}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Pastagem nativa: </b>
                    {allotment.native_pasture}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Pastagem plantada: </b>
                    {allotment.planted_pasture}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Area degradada: </b>
                    {allotment.degraded_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Parceria lote: </b>
                    {allotment.batch_partnership}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Parceria lote terceiros: </b>
                    {allotment.third_party_partnership}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Total: </b>
                    {allotment.total}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Possui horta: </b>
                    {allotment.has_garden ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Cultiva plantas medicinais: </b>
                    {allotment.grow_medicinal_plants ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Tipo de plantio: </b>
                    {allotment.planting_type}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Manejo: </b>
                    {allotment.management}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Área plantada: </b>
                    {allotment.planted_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantidade de culturas: </b>
                    {allotment.amount_crops}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Animais silvestres avistados no lote: </b>
                    {allotment.wild_animals_sighted_lot}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Animais silvestres causam problemas: </b>
                    {allotment.wild_animals_cause_problems}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Bois: </b>
                    {allotment.oxen}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Equinos: </b>
                    {allotment.equine}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Muares: </b>
                    {allotment.mules}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Área da documentação: </b>
                    {allotment.documentation_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Nome da propriedade: </b>
                    {allotment.property_name}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Georreferenciada: </b>
                    {allotment.georeferenced ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Concessão da propriedade posse: </b>
                    {allotment.property_ownership}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Título domínio: </b>
                    {allotment.domain_title ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>CCU: </b>
                    {allotment.ccu ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>CCDRU: </b>
                    {allotment.ccru ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Regularização: </b>
                    {allotment.regularization ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>SNCR: </b>
                    {allotment.sncr}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Certidão INCRA: </b>
                    {allotment.incra_certificate}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Aderir PRA: </b>
                    {allotment.join_pra ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Alternativas regularizar déficit: </b>
                    {allotment.alternatives_regularize_deficit}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Como deseja compensar área com déficit: </b>
                    {allotment.how_want_make_up_deficit_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Existe TAC com APP: </b>
                    {allotment.has_tac_with_app ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Existe infrações cometidas: </b>
                    {allotment.has_infractions_committed}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Imovel possui ARVN: </b>
                    {allotment.property_has_arvn ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>O que pretende com área excedente: </b>
                    {allotment.what_want_to_with_surplus_area}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Existe RPPN: </b>
                    {allotment.has_rppn ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Possui CRF: </b>
                    {allotment.has_crf ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Alteração tamanho após 22/07/2008: </b>
                    {allotment.size_changes_after ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Quantidade atende a família: </b>
                    {allotment.qa_meets_family ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Água: </b>
                    {allotment.water}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Clima: </b>
                    {allotment.climate}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Solo: </b>
                    {allotment.ground}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Vegetação: </b>
                    {allotment.vegetation}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Desenvolve atividade qa: </b>
                    {allotment.develops_activity_qa ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Qual atividade qa: </b>
                    {allotment.what_activity_qa}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Ações cotidianas interferem no ambiente: </b>
                    {allotment.everyday_actions_interfere ? "Sim" : "Não"}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Participa espaços troca de experiência: </b>
                    {allotment.exchange_experience}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Qual organização: </b>
                    {allotment.which_organization}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Atividades de interesse: </b>
                    {allotment.activities_interest}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>O que considera positivo no assentamento: </b>
                    {allotment.positive_in_settlement}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>O que considera negativo no no assentamento: </b>
                    {allotment.negative_in_settlement}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Principais restrições de propriedade: </b>
                    {allotment.main_ownership_restrictions}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Expectativa futuras para propriedade: </b>
                    {allotment.future_expectations_property}
                  </Content>
                </Col>
                <Col lg="6" className="mb-3">
                  <Content>
                    <b>Interesse em turismo rural: </b>
                    {allotment.rural_tourism ? "Sim" : "Não"}
                  </Content>
                </Col>
              </Row>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <AllotmentEditForm
                inputAllotment={inputAllotment}
                setInputAllotment={setInputAllotment}
                fileAllotment={fileAllotment}
                setFileAllotment={setFileAllotment}
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

export default Allotment;
