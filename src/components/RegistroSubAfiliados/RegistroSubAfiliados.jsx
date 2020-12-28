import HorizontalLabelPositionBelowStepper from "components/HorizontalLabelPositionBelowStepper/HorizontalLabelPositionBelowStepper";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import EnderecoCorrespondencia from "./components/EnderecoCorrespondencia/EnderecoCorrespondencia";
import IdentificacaoDoBeneficiario from "./components/IdentificacaoDoBeneficiario/IdentificacaoDoBeneficiario";
import LocalizacaoDoLote from "./components/LocalizacaoDoLote/LocalizacaoDoLote";
import Moradias from "./components/Moradias/Moradias";
import DiagnosticoDeSistemasAgrarios from "./components/DiagnosticoDeSistemasAgrarios/DiagnosticoDeSistemasAgrarios";
import Producao from "./components/Producao/Producao";
import Documentacao from "./components/Documentacao/Documentacao";
import InfoDoImovel from "./components/InfoDoImovel/InfoDoImovel";
import QualidadeAmbiental from "./components/QualidadeAmbiental/QualidadeAmbiental";
import VisitaTecnica from "./components/VisitaTecnica/VisitaTecnica";
import FotosGeometria from "./components/FotosGeometria/FotosGeometria";
import { newAllotment, newBeneficiaryIdentity } from "../../redux/actions/Membros";
import { setResidents } from "../../redux/actions/Registro";
import { setDiagnosisOfAgriculturalSystems } from "../../redux/actions/Registro";
import { setProduction } from "../../redux/actions/Registro";

import FormContext from "./context";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";

const RegistroSubAfiliados = ({ title }) => {
  const dispatch = useDispatch();
  const [usersAffiliation, setUsersAffiliation] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    dispatch(getUsersAffiliation());
  }, [dispatch])

  const submitMessage = useSelector((state) => state.MembersReducer.submitMessage);
  const {usersPFAffiliation, usersPJAffiliation} = useSelector(state => state.UsersAffiliationReducer);

  if (!usersAffiliation.length) {
    if (usersPFAffiliation && usersPJAffiliation) {
      usersPFAffiliation.forEach(affiliate => {
        setUsersAffiliation([{
          affiliation: affiliate.id,
          name: affiliate.name
        }])});
        usersPJAffiliation.forEach(affiliate => {
          setUsersAffiliation([{
            affiliation: affiliate.id,
            name: affiliate.name
          }])});
      } else if (usersPFAffiliation) {
        usersPFAffiliation.forEach(affiliate => {
          setUsersAffiliation([{
            affiliation: affiliate.id,
            name: affiliate.name
          }])});
      } else {
        usersPJAffiliation.forEach(affiliate => {
          setUsersAffiliation([{
            affiliation: affiliate.id,
            name: affiliate.name
          }])});
      }
    }

  const handleNext = async () => {
    const message = await submitMessage;
    if (!message) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const [inputBeneficiaryIdentity, setInputBeneficiaryIdentity] = useState({
    affiliation: "",
    name: "João da Silva",
    email: "teste@teste.com",
    cpf: "121.911.500-20",
    rg: "55555",
    nis: "44444",
    marital_status: "",
    mother_name: "Maria da Silva",
    spouse_name: "",
    spouse_cpf: "",
    nationality: "Brasileira",
    citizenship: "Maceió - AL",
    year_residence: 10,
    always_resided: "",
    phone: "82999999999",
    alternative_phone: "82499999999",
    state: "Teste",
    country: "Brasil",
    city: "",
    district: "Centro",
    address: "",
    number: 10,
    cep: "57055-620",
    location_zone: "Zona Rural",
    collection_code: "1111",
    status: "Teste",
    operational_core: "Seaprof",
    has_contract: "",
    concession_validity: "",
    lot_has_marking: "",
    beneficiary_knows_limit: "",
    rb_status: "Teste",
    incra_area: "",
  });

  const [inputAllotment, setInputAllotment] = useState({
    member: "97a2be13-eb10-4124-9f2b-6f71ead05c71",
    bioma: "",
    operational_core: "Seaprof",
    allotment_state: "",
    allotment_city: "Maceió",
    settlement: "AASS555444",
    incra_allotment_number: 40,
    access_way: "Estrada de Terra",
    coordinates: "-15.7810, -14.444",
    thirst: 5,
    own_planting: 5,
    native_forest: 5,
    forest: 5,
    fallow_capoeira: 5,
    native_pasture: 5,
    planted_pasture: 5,
    degraded_area: 5,
    batch_partnership: 5,
    third_party_partnership: 5,
    total: 5,
    has_garden: "",
    grow_medicinal_plants: "",
    production_system: "Monocultivo",
    planting_type: "Convencional",
    management: "Convencional",
    planted_area: 5,
    amount_crops: 5,
    wild_animals_sighted_lot: "",
    wild_animals_cause_problems: "",
    oxen: 5,
    equine: 5,
    mules: 5,
    documentation_area: "",
    property_name: "Teste",
    georeferenced: "",
    property_ownership: "",
    domain_title: "",
    ccu:"",
    ccru: "",
    regularization: "",
    sncr: "3455",
    incra_certificate: "47589",
    join_pra: "",
    alternatives_regularize_deficit: "",
    how_want_make_up_deficit_area: "",
    has_tac_with_app: "",
    has_infractions_committed: "",
    property_has_arvn: "",
    what_want_to_with_surplus_area: "Teste",
    has_rppn: "",
    has_crf: "",
    rli_period: "",
    size_changes_after: "",
    qa_meets_family: "",
    water: 5,
    climate: 5,
    ground: 5,
    vegetation: 5,
    develops_activity_qa: "",
    what_activity_qa: "Teste",
    everyday_actions_interfere: "",
    what_shape: "Contaminação do solo",
    exchange_experience: "Teste",
    which_organization: "Teste",
    activities_interest: "Teste",
    positive_in_settlement: "Tudo",
    negative_in_settlement: "Nada",
    main_ownership_restrictions: "Nenhuma",
    future_expectations_property: "Aumentar Produção",
    rural_tourism: "",
  });

  const [fileAllotment, setFileAllotment] = useState({
    lot_geometry: {
      fileName: "",
      value: "",
    },
  });

  const [inputResidents, setInputResidents] = useState({
    resident_name: "",
    kinship: "",
    sex: "",
    birthdate: "",
    schooling: "",
    main_source_income: "",
    generates_income: undefined,
    batch_work_time: "",
    issues_invoice: undefined,
    ex_beneficiary: undefined,
    activity: "",
    demotivating_activity: "",
    retired: undefined,
    work_outside: undefined,
    initial_age_work_outside: "",
    deficiency: "",
    last_diceases: "",
    type_treatment: "",
    access_treatment: "",
  });

  const [resident, setResident] = useState();

  const [inputAddress, setInputAddress] = useState({
    address: "",
    number: "",
    city: "",
    district: "",
    cep: "",
    state: "",
    location_zone: "",
    email: "",
    phone: "",
    alternative_phone: "",
    country: "",
  });

  const [
    inputDiagnosisOfAgriculturalSystems,
    setInputDiagnosisOfAgriculturalSystems,
  ] = useState({
    income_off_lot: "",
    government_assistance: undefined,
    housing_policy: undefined,
    financing_line: "",
    has_rural_communication: undefined,
    rural_communication: "",
    final_destination_waste: "",
    has_basic_sanitation: "",
    schools_transport: "",
    hire_employees: "",
    technical_assistance: undefined,
    reminds_burning_in_lot: undefined,
    has_water_access: undefined,
    year_water_access: undefined,
    riparian_forest: undefined,
    has_energy: undefined,
    network_type: "",
    energy_meets_production: undefined,
    complements_energy: undefined,
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

  const [inputProduction, setInputProduction] = useState({
    thirst: "",
    own_planting: "",
    native_forest: "",
    forest: "",
    fallow_capoeira: "",
    native_pasture: "",
    planted_pasture: "",
    degraded_area: "",
    batch_partnership: "",
    third_party_partnership: "",
    total: "",
    has_garden: undefined,
    grow_medicinal_plants: undefined,
    has_own_planting: undefined,
    plantations: [],
    production_system: "",
    planting_type: "",
    management: "",
    planted_area: "",
    amount_crops: "",
    wild_animals_sighted_lot: "",
    wild_nimals_cause_problems: undefined,
    oxen: "",
    equine: "",
    mules: "",
    improvements: [],
    annual_production: "",
    self_consumption: "",
    annual_marketed: "",
  });

  const [inputDocumentation, setInputDocumentation] = useState({
    documentation_area: "",
    property_name: "",
    georeferenced: undefined,
    property_ownership: "",
    domain_title: undefined,
    ccu: undefined,
    ccdru: undefined,
    regularization: undefined,
    sncr: "",
    incra_certificate: "",
  });

  const [inputPropertyInformation, setInputPropertyInformation] = useState({
    join_pra: undefined,
    has_area_with_deficit_native_vegetation: undefined,
    alternatives_regularize_deficit: "Teste",
    how_want_make_up_deficit_area: "",
    has_tac_with_app: undefined,
    has_infractions_committed: undefined,
    property_has_arvn: undefined,
    what_wantto_with_surplus_area: "",
    has_rppn: undefined,
    has_crf: undefined,
    rli_period: "",
    size_changes_after: undefined,
  });

  const [inputEnvironmentalQuality, setInputEnvironmentQuality] = useState({
    qa_meets_family: undefined,
    water: "",
    climate: "",
    ground: "",
    vegetation: "",
    develops_activity_qa: undefined,
    what_activity_qa: "",
    everyday_actions_interfere: undefined,
    what_shape: "",
    exchange_experience: "",
    which_organization: "",
    activities_interest: "",
    positive_in_settlement: "",
    negative_in_settlement: "",
    main_ownership_restrictions: "",
    future_expectations_property: "",
    rural_tourism: undefined,
  });

  const [inputTechnicalVisit, setInputTechnicalVisit] = useState({
    informant_name: "",
    conversation_participants: "",
  });

  const [inputPhotosAndGeometry, setInputPhotosAndGeometry] = useState({
    front_domain_title: undefined,
    back_domain_title: undefined,
    front_nesting_card: undefined,
    back_nesting_card: undefined,
    georeferencing: undefined,
    back_beneficiary_rg: "",
    front_beneficiary_rg: "",
    front_companion_rg: "",
    back_companion_rg: "",
    birth_certificate: [""],
    cpf: [""],
    economic_activities_file: [""],
    improvements_file: [""],
  });

  const steps = [
    "Id. do Beneficiário",
    "Local do Lote",
    "Moradias",
    "Id. da Unid. Familiar",
    "Endereço",
    "Diagnóstico de Sis. Agrários",
    "Produção",
    "Documentação",
    "Info. do Imóvel",
    "Qual. Ambiental",
    "Visita Técnica",
    "Fotos e Geometria",
  ];

  let house;

  const setHouseNumber = (houseNumber) => {
    house = houseNumber;
  };

  function getStepContent(stepIndex) {

    switch (stepIndex) {
      case 0:
        return (
          <IdentificacaoDoBeneficiario
            usersAffiliation={usersAffiliation}
            inputBeneficiaryIdentity={inputBeneficiaryIdentity}
            setInputBeneficiaryIdentity={setInputBeneficiaryIdentity}
          />
        );
      case 1:
        return (
          <LocalizacaoDoLote
            inputAllotment={inputAllotment}
            setInputAllotment={setInputAllotment}
            fileAllotment={fileAllotment}
            setFileAllotment={setFileAllotment}
          />
        );
      case 2:
        return (
          <Moradias
            inputResidents={inputResidents}
            setInputResidents={setInputResidents}
          />
        );
      case 3:
        return (
          <EnderecoCorrespondencia
            inputAddress={inputAddress}
            setInputAddress={setInputAddress}
          />
        );
      case 4:
        return (
          <DiagnosticoDeSistemasAgrarios
            inputDiagnosisOfAgriculturalSystems={
              inputDiagnosisOfAgriculturalSystems
            }
            setInputDiagnosisOfAgriculturalSystems={
              setInputDiagnosisOfAgriculturalSystems
            }
          />
        );
      case 5:
        return (
          <Producao
            inputProduction={inputProduction}
            setInputProduction={setInputProduction}
          />
        );
      case 6:
        return (
          <Documentacao
            inputDocumentation={inputDocumentation}
            setInputDocumentation={setInputDocumentation}
          />
        );
      case 7:
        return (
          <InfoDoImovel
            inputPropertyInformation={inputPropertyInformation}
            setInputPropertyInformation={setInputPropertyInformation}
          />
        );
      case 8:
        return (
          <QualidadeAmbiental
            inputEnvironmentalQuality={inputEnvironmentalQuality}
            setInputEnvironmentQuality={setInputEnvironmentQuality}
          />
        );
      case 9:
        return (
          <VisitaTecnica
            inputTechnicalVisit={inputTechnicalVisit}
            setInputTechnicalVisit={setInputTechnicalVisit}
          />
        );
      case 10:
        return (
          <FotosGeometria
            inputPhotosAndGeometry={inputPhotosAndGeometry}
            setInputPhotosAndGeometry={setInputPhotosAndGeometry}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    switch (activeStep) {
      case 0:
        // dispatch(newBeneficiaryIdentity(inputBeneficiaryIdentity));
        break;
      case 1:
        dispatch(newAllotment(inputAllotment, fileAllotment));
        break;
      case 2:
        dispatch(setResidents(resident, house));
        break;
      case 3:
        dispatch(
          setDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
        );
        break;
      case 4:
        dispatch(setProduction(inputProduction));
        break;
      default:
        return;
    }

    handleNext();
  };

  return (
    <FormContext.Provider value={{ setResident, setHouseNumber }}>
      <Form onSubmit={handleSubmitForm}>
        <HorizontalLabelPositionBelowStepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          getStepContent={getStepContent}
          handleSubmitForm={handleSubmitForm}
        />
      </Form>
    </FormContext.Provider>
  );
};

export default RegistroSubAfiliados;
