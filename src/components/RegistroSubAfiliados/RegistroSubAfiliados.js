import HorizontalLabelPositionBelowStepper from "components/HorizontalLabelPositionBelowStepper/HorizontalLabelPositionBelowStepper";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "reactstrap";
import EnderecoCorrespondencia from "./components/EnderecoCorrespondencia/EnderecoCorrespondencia";
import IdentificacaoDaUnidadeFamiliar from "./components/IdentificacaoDaUnidadeFamiliar/IdentificacaoDaUnidadeFamiliar";
import InfoGeraisUnidadeProducaoFamiliar from "./components/InfoGeraisUnidadeProducaoFamiliar/InfoGeraisUnidadeProducaoFamiliar";
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
import { setBeneficiaryIdentity } from "redux/actions/Registro";
import { setPlotLocation } from "redux/actions/Registro";
import { setResidents } from "redux/actions/Registro";
import { setFamilyUnitIdentification } from "redux/actions/Registro";
import { setGeneralFamilyUnitInfo } from "redux/actions/Registro";
import { setDiagnosisOfAgriculturalSystems } from "redux/actions/Registro";
import { setProduction } from "redux/actions/Registro";

import FormContext from "./context";

const RegistroSubAfiliados = ({ title }) => {
  const dispatch = useDispatch();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const [inputBeneficiaryIdentity, setInputBeneficiaryIdentity] = useState({
    name: "",
    email: "",
    cpf: "",
    collection_code: "",
    settlement_code: "",
    citizenship: "",
    rb_status: "",
    incra_area: "",
  });

  const [inputPlotLocation, setInputPlotLocation] = useState({
    operational_core: "",
    allotmenet_state: "",
    allotment_city: "",
    settlement: "",
    incra_allotment_number: "",
    access_way: "",
    coordinates: "",
    lot_geometry: "",
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

  const [inputFamilyUnitId, setInputFamilyUnitId] = useState({
    settlement_code: "",
    status: "",
    cpf: "",
    rg: "",
    nis: "",
    marital_status: "",
    mother_name: "",
    spouse_name: "",
    spouse_cpf: "",
    citizenship: "",
    nationality: "",
  });

  const [inputGeneralFamilyUnitInfo, setInputGeneralFamilyUnitInfo] = useState({
    operational_core: "",
    state: "",
    citizenship_responsible: "",
    year_residence: "",
    concession_validity: "",
    always_resided: "",
    beneficiary_knows_limit: "",
    contraclot_has_markingt: "",
    has_contract: "",
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
    "Info. Gerais da Unid. Familiar",
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
          <IdentificacaoDaUnidadeFamiliar
            inputFamilyUnitId={inputFamilyUnitId}
            setInputFamilyUnitId={setInputFamilyUnitId}
          />
        );
      case 4:
        return (
          <InfoGeraisUnidadeProducaoFamiliar
            inputGeneralFamilyUnitInfo={inputGeneralFamilyUnitInfo}
            setInputGeneralFamilyUnitInfo={setInputGeneralFamilyUnitInfo}
          />
        );
      case 5:
        return (
          <EnderecoCorrespondencia
            inputAddress={inputAddress}
            setInputAddress={setInputAddress}
          />
        );
      case 6:
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
      case 7:
        return (
          <Producao
            inputProduction={inputProduction}
            setInputProduction={setInputProduction}
          />
        );
      case 8:
        return (
          <Documentacao
            inputDocumentation={inputDocumentation}
            setInputDocumentation={setInputDocumentation}
          />
        );
      case 9:
        return (
          <InfoDoImovel
            inputPropertyInformation={inputPropertyInformation}
            setInputPropertyInformation={setInputPropertyInformation}
          />
        );
      case 10:
        return (
          <QualidadeAmbiental
            inputEnvironmentalQuality={inputEnvironmentalQuality}
            setInputEnvironmentQuality={setInputEnvironmentQuality}
          />
        );
      case 11:
        return (
          <VisitaTecnica
            inputTechnicalVisit={inputTechnicalVisit}
            setInputTechnicalVisit={setInputTechnicalVisit}
          />
        );
      case 12:
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
        dispatch(setBeneficiaryIdentity(inputBeneficiaryIdentity));
        break;
      case 1:
        dispatch(setPlotLocation(inputPlotLocation));
        break;
      case 2:
        dispatch(setResidents(resident, house));
        break;
      case 3:
        dispatch(setFamilyUnitIdentification(inputFamilyUnitId));
        break;
      case 4:
        dispatch(setGeneralFamilyUnitInfo(inputGeneralFamilyUnitInfo));
        break;
      case 5:
        dispatch(
          setDiagnosisOfAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
        );
        break;
      case 6:
        dispatch(setProduction(inputProduction));
        break;
      default:
        return;
    }
  };

  return (
    <FormContext.Provider value={{ setResident, setHouseNumber }}>
      <Form>
        <HorizontalLabelPositionBelowStepper
          handleSubmitForm={handleSubmitForm}
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          getStepContent={getStepContent}
        />
      </Form>
    </FormContext.Provider>
  );
};

export default RegistroSubAfiliados;
