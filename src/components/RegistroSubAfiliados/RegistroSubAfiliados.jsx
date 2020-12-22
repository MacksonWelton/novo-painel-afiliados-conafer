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
import { newBeneficiaryIdentity } from "../../redux/actions/Membros";
import { setPlotLocation } from "../../redux/actions/Registro";
import { setResidents } from "../../redux/actions/Registro";
import { setDiagnosisOfAgriculturalSystems } from "../../redux/actions/Registro";
import { setProduction } from "../../redux/actions/Registro";

import FormContext from "./context";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";

const RegistroSubAfiliados = ({ title }) => {
  const dispatch = useDispatch();
  const [usersAffiliation, setUsersAffiliation] = useState([]);

  useEffect(() => {
    dispatch(getUsersAffiliation());
  }, [dispatch])

  const {usersPFAffiliation, usersPJAffiliation} = useSelector(state => state.UsersAffiliationReducer)

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

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [inputBeneficiaryIdentity, setInputBeneficiaryIdentity] = useState({
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
    citizenship: "",
    rb_status: "",
    incra_area: "",
  });

  const [inputPlotLocation, setInputPlotLocation] = useState({
    member: "",
    bioma: "",
    operational_core: "",
    allotmenet_state: "",
    allotment_city: "",
    settlement: "",
    incra_allotment_number: "",
    access_way: "",
    coordinates: "",
    lot_geometry: "",
    thirst: "",
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
    planted_area: "",
    amount_crops: 0,
    wild_animals_sighted_lot: "",
    wild_animals_cause_problems: "",
    oxen: 0,
    equine: 0,
    mules: 0,
    documentation_area: "",
    property_name: "",
    georeferenced: "",
    property_ownership: "",
    domain_title: "",
    ccu:"",
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
    vegetation: "",
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
    alternatives_regularize_deficit: "",
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
            inputPlotLocation={inputPlotLocation}
            setInputPlotLocation={setInputPlotLocation}
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
    handleNext();

    switch (activeStep) {
      case 0:
        // dispatch(newBeneficiaryIdentity(inputBeneficiaryIdentity));
        break;
      case 1:
        dispatch(setPlotLocation(inputPlotLocation));
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
