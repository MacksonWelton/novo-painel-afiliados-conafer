import HorizontalLabelPositionBelowStepper from "components/HorizontalLabelPositionBelowStepper/HorizontalLabelPositionBelowStepper";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "reactstrap";
import Member from "./components/Member/Member";
import Allotment from "./components/Allotment/Allotment";
import Moradias from "./components/Moradias/Moradias";
import DiagnosticoDeSistemasAgrarios from "./components/DiagnosticoDeSistemasAgrarios/DiagnosticoDeSistemasAgrarios";
import Producao from "./components/Producao/Producao";

import {
  newMember,
} from "../../redux/actions/Membros";

import FormContext from "./context";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";
import Improvement from "./components/Improvement/Improvement";
import Transport from "./components/Transport/Transport";
import TechnicalVisit from "./components/TechnicalVisit/TechnicalVisit";
import Documentation from "./components/Documentation/Documentation";

const RegistroSubAfiliados = ({ title }) => {
  const dispatch = useDispatch();
  const [usersAffiliation, setUsersAffiliation] = useState([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    dispatch(getUsersAffiliation());
  }, [dispatch]);

  const submitMessage = useSelector(
    (state) => state.MembersReducer.submitMessage
  );

  const { usersPFAffiliation, usersPJAffiliation } = useSelector(
    (state) => state.UsersAffiliationReducer
  );

  const { member, allotment, production, improvement } = useSelector(
    (state) => state.MembersReducer
  );

  if (!usersAffiliation.length) {
    if (usersPFAffiliation && usersPJAffiliation) {
      usersPFAffiliation.forEach((affiliate) => {
        setUsersAffiliation([
          {
            affiliation: affiliate.id,
            name: affiliate.name,
          },
        ]);
      });
      usersPJAffiliation.forEach((affiliate) => {
        setUsersAffiliation([
          {
            affiliation: affiliate.id,
            name: affiliate.name,
          },
        ]);
      });
    } else if (usersPFAffiliation) {
      usersPFAffiliation.forEach((affiliate) => {
        setUsersAffiliation([
          {
            affiliation: affiliate.id,
            name: affiliate.name,
          },
        ]);
      });
    } else {
      usersPJAffiliation.forEach((affiliate) => {
        setUsersAffiliation([
          {
            affiliation: affiliate.id,
            name: affiliate.name,
          },
        ]);
      });
    }
  }

  const handleNext = async () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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

  const [inputResidents, setInputResidents] = useState({
    resident_name: "",
    kinship: "",
    sex: "",
    birthdate: "",
    schooling: "",
    main_source_income: "",
    generates_income: "",
    batch_work_time: "",
    issues_invoice: "",
    ex_beneficiary: "",
    activity: "",
    demotivating_activity: "",
    retired: "",
    work_outside: "",
    initial_age_work_outside: "",
    deficiency: "",
    last_diceases: "",
    type_treatment: "",
    access_treatment: "",
  });

  const [resident, setResident] = useState();

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

  const [inputAnimalProduction, setInputAnimalProduction] = useState([]);

  const [inputVegetablesProduction, setInputVegetablesProduction] = useState(
    []
  );

  const [inputPsicultureProduction, setInputPsicultureProduction] = useState(
    []
  );

  const [inputImprovements, setInputImprovements] = useState([]);

  const [inputTransport, setInputTransport] = useState({
    allotment: "",
    means_transport: "",
    own_road_transport_cost: "",
    waterway_transportation_cost: "",
    road_chartered_transport_cost: "",
    waterway_chartered_transportation_cost: "",
  });

  const [inputDocumentation, setInputDocumentation] = useState({
    front_domain_title: {
      fileName: "",
      value: "",
    },
    back_domain_title: {
      fileName: "",
      value: "",
    },
    front_nesting_card: {
      fileName: "",
      value: "",
    },
    back_nesting_card: {
      fileName: "",
      value: "",
    },
    georeferencing: {
      fileName: "",
      value: "",
    },
    front_beneficiary_rg: {
      fileName: "",
      value: "",
    },
    back_beneficiary_rg: {
      fileName: "",
      value: "",
    },
    front_companion_rg: {
      fileName: "",
      value: "",
    },
    back_companion_rg: {
      fileName: "",
      value: "",
    },
  });

  const [inputDocumentationList, setInputDocumentationList] = useState({
    documentation_birth_cetificate: {
      fileName: "",
      value: "",
    },
    documentation_cpf: {
      fileName: "",
      value: "",
    },
    documentation_economic_ativities: {
      fileName: "",
      value: "",
    },
    documentation_improvement: {
      fileName: "",
      value: "",
    },
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
    "Diagnóstico de Sis. Agrários",
    "Produção",
    "Benfeitorias",
    "Transporte",
    "Visita Técnica",
    "Documentação",
  ];

  let house;

  const setHouseNumber = (houseNumber) => {
    house = houseNumber;
  };

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Member
            usersAffiliation={usersAffiliation}
            inputMember={inputMember}
            setInputMember={setInputMember}
          />
        );
      case 1:
        return (
          <Allotment
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
          <DiagnosticoDeSistemasAgrarios
            inputDiagnosisOfAgriculturalSystems={
              inputDiagnosisOfAgriculturalSystems
            }
            setInputDiagnosisOfAgriculturalSystems={
              setInputDiagnosisOfAgriculturalSystems
            }
          />
        );
      case 4:
        return (
          <Producao
            inputAnimalProduction={inputAnimalProduction}
            setInputAnimalProduction={setInputAnimalProduction}
            inputVegetablesProduction={inputVegetablesProduction}
            setInputVegetablesProduction={setInputVegetablesProduction}
            inputPsicultureProduction={inputPsicultureProduction}
            setInputPsicultureProduction={setInputPsicultureProduction}
          />
        );
      case 5:
        return (
          <Improvement
            inputImprovements={inputImprovements}
            setInputImprovements={setInputImprovements}
          />
        );
      case 6:
        return (
          <Transport
            inputTransport={inputTransport}
            setInputTransport={setInputTransport}
          />
        );
      case 7:
        return (
          <TechnicalVisit
            inputTechnicalVisit={inputTechnicalVisit}
            setInputTechnicalVisit={setInputTechnicalVisit}
          />
        );
      case 8:
        return (
          <Documentation
            inputDocumentation={inputDocumentation}
            setInputDocumentation={setInputDocumentation}
            inputDocumentationList={inputDocumentationList} 
            setInputDocumentationList={setInputDocumentationList}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const handleSubmitForm = (event) => {
    event.preventDefault();

    handleNext();
  };

  const handleSubmitData = () => {

    dispatch(
      newMember(
        inputMember,
        inputAllotment,
        fileAllotment,
        inputDiagnosisOfAgriculturalSystems,
        inputVegetablesProduction,
        inputPsicultureProduction,
        inputImprovements,
        inputTransport,
        inputTechnicalVisit,
        inputDocumentation,
        inputDocumentationList
      )
    );
  };

  return (
    <FormContext.Provider value={{ setResident, setHouseNumber }}>
      <Form onSubmit={handleSubmitForm}>
        <HorizontalLabelPositionBelowStepper
          steps={steps}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          getStepContent={getStepContent}
          handleSubmitData={handleSubmitData}
          handleSubmitForm={handleSubmitForm}
        />
      </Form>
    </FormContext.Provider>
  );
};

export default RegistroSubAfiliados;
