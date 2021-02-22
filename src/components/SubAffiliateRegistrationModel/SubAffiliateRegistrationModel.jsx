import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "reactstrap";
import { newMember } from "redux/actions/Membros";

import { newAllotment } from "../../redux/actions/Allotments";
import { newProduction } from "../../redux/actions/Productions";
import { newDiagnosisAgriculturalSystems } from "../../redux/actions/DiagnosisAgriculturalSystems";
import { newImprovements } from "../../redux/actions/Improvements";
import { newPsicultureProduction } from "redux/actions/Productions";
import { newAnimalProduction } from "../../redux/actions/Productions";
import { newVegetableProduction } from "../../redux/actions/Productions";
import { newHabitation, newResident } from "../../redux/actions/Residents";
import { newDocumentation } from "../../redux/actions/Documents";
import { getUsersAffiliation } from "../../redux/actions/UsuariosAfiliacao";
import { newTransport } from "redux/actions/Transports";
import { newTechnicalVisit } from "redux/actions/TechnicalVisits";

import Member from "./components/Member/Member";
import Resident from "./components/Resident/Resident/Resident";
import Allotment from "./components/Allotment/Allotment";
import DiagnosisAgriculturalSystems from "./components/DiagnosisAgriculturalSystems/DiagnosisAgriculturalSystems";
import Psiculture from "./components/Production/Psiculture/Psiculture";
import VegetablesProduction from "./components/Production/VegetablesProduction/VegetablesProduction";
import Production from "./components/Production/Production/Production";
import Improvement from "./components/Improvement/Improvement";
import Transport from "./components/Transport/Transport";
import TechnicalVisit from "./components/TechnicalVisit/TechnicalVisit";
import Documentation from "./components/Documentation/Documentation";
import Habitation from "./components/Resident/Habitation/Habitation";
import AnimalProduction from "./components/Production/AnimalProduction/AnimalProduction";
import Call from "./components/Call/Call";
import { newCall } from "redux/actions/Called";

const SubAffiliateRegistrationModel = ({ setOpen, open }) => {
  const dispatch = useDispatch();
  const [usersAffilitationOptions, setUserAffiliationOptions] = useState([]);

  useEffect(() => {
    dispatch(getUsersAffiliation());
  }, [dispatch]);

  const usersAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersAffiliation
  );

  if (
    usersAffilitationOptions.length === 0 &&
    usersAffiliation.results.length
  ) {
    setUserAffiliationOptions(
      usersAffiliation.results.map((item) => {
        item.name = item.name_initials ? item.name_initials : item.name;
        return item;
      })
    );
  }

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

  const [inputHabitation, setInputHabitation] = useState({
    allotment: "",
  });

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

  const [inputProductionList, setInputProductionList] = useState([]);

  const [inputVegetablesProduction, setInputVegetablesProduction] = useState(
    []
  );

  const [inputAnimalProduction, setInputAnimalProduction] = useState([]);

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

  const [inputTechnicalVisit, setInputTechnicalVisit] = useState({
    informant_name: "",
    conversation_participants: "",
  });

  const [inputDocumentation, setInputDocumentation] = useState({
    member: "",
  });

  const [inputDocumentationFile, setInputDocumentationFile] = useState({
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
    birth_certificates: [],
    cpf_files: [],
    economic_activities: [],
    improvements_image: [],
  });

  const [inputCall, setInputCall] = useState({
    text: "",
    questioned_by: "",
  });

  const [inputCallFiles, setInputCallFiles] = useState([]);

  const handleSubmitForm = (event) => {
    event.preventDefault();

    if (open.member) {
      dispatch(newMember(inputMember));
    } else if (open.resident) {
      dispatch(newResident(inputResident));
    } else if (open.allotment) {
      dispatch(newAllotment(inputAllotment, fileAllotment));
    } else if (open.habitation) {
      dispatch(newHabitation(inputHabitation));
    } else if (open.diagnosisAgriculturalSystems) {
      dispatch(
        newDiagnosisAgriculturalSystems(inputDiagnosisOfAgriculturalSystems)
      );
    } else if (open.production) {
      dispatch(newProduction(inputProductionList));
    } else if (open.animal) {
      dispatch(newAnimalProduction(inputAnimalProduction));
    } else if (open.vegetable) {
      dispatch(newVegetableProduction(inputVegetablesProduction));
    } else if (open.psiculture) {
      dispatch(newPsicultureProduction(inputPsicultureProduction));
    } else if (open.improvement) {
      dispatch(newImprovements(inputImprovements));
    } else if (open.transport) {
      dispatch(newTransport(inputTransport));
    } else if (open.technicalVisit) {
      dispatch(newTechnicalVisit(inputTechnicalVisit));
    } else if (open.documentation) {
      dispatch(
        newDocumentation(
          inputDocumentation,
          inputDocumentationFile,
          inputDocumentationList
        )
      );
    } else if (open.call) {
      dispatch(newCall(inputCall, inputCallFiles));
    }
  };

  return (
    <Modal isOpen={open.modal} size="lg">
      <ModalHeader
        toggle={() => {
          setOpen({ ...open, modal: !open.modal });
        }}
      >
        RAPATRA
      </ModalHeader>
      <Form onSubmit={handleSubmitForm}>
        <ModalBody>
          {open.member && (
            <Member
              inputMember={inputMember}
              setInputMember={setInputMember}
              usersAffiliation={usersAffilitationOptions}
            />
          )}
          {open.habitation && (
            <Habitation
              inputHabitation={inputHabitation}
              setInputHabitation={setInputHabitation}
            />
          )}
          {open.resident && (
            <Resident
              inputResident={inputResident}
              setInputResident={setInputResident}
            />
          )}
          {open.allotment && (
            <Allotment
              inputAllotment={inputAllotment}
              setInputAllotment={setInputAllotment}
              fileAllotment={fileAllotment}
              setFileAllotment={setFileAllotment}
            />
          )}
          {open.diagnosisAgriculturalSystems && (
            <DiagnosisAgriculturalSystems
              inputDiagnosisOfAgriculturalSystems={
                inputDiagnosisOfAgriculturalSystems
              }
              setInputDiagnosisOfAgriculturalSystems={
                setInputDiagnosisOfAgriculturalSystems
              }
            />
          )}
          {open.production && (
            <Production
              inputProductionList={inputProductionList}
              setInputProductionList={setInputProductionList}
              usersAffiliation={usersAffilitationOptions}
            />
          )}
          {open.animal && (
            <AnimalProduction
              inputAnimalProduction={inputAnimalProduction}
              setInputAnimalProduction={setInputAnimalProduction}
            />
          )}
          {open.vegetable && (
            <VegetablesProduction
              inputVegetablesProduction={inputVegetablesProduction}
              setInputVegetablesProduction={setInputVegetablesProduction}
            />
          )}
          {open.psiculture && (
            <Psiculture
              inputPsicultureProduction={inputPsicultureProduction}
              setInputPsicultureProduction={setInputPsicultureProduction}
            />
          )}
          {open.improvement && (
            <Improvement
              inputImprovements={inputImprovements}
              setInputImprovements={setInputImprovements}
            />
          )}
          {open.transport && (
            <Transport
              inputTransport={inputTransport}
              setInputTransport={setInputTransport}
            />
          )}
          {open.technicalVisit && (
            <TechnicalVisit
              inputTechnicalVisit={inputTechnicalVisit}
              setInputTechnicalVisit={setInputTechnicalVisit}
            />
          )}
          {open.documentation && (
            <Documentation
              inputDocumentation={inputDocumentation}
              setInputDocumentation={setInputDocumentation}
              inputDocumentationFile={inputDocumentationFile}
              setInputDocumentationFile={setInputDocumentationFile}
              inputDocumentationList={inputDocumentationList}
              setInputDocumentationList={setInputDocumentationList}
            />
          )}
          {open.call && (
            <Call
              inputCall={inputCall}
              setInputCall={setInputCall}
              inputCallFiles={inputCallFiles}
              setInputCallFiles={setInputCallFiles}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" type="submit">
            Enviar
          </Button>
          <Button
            color="secondary"
            onClick={() => setOpen({ ...open, modal: !open.modal })}
          >
            Sair
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default SubAffiliateRegistrationModel;
