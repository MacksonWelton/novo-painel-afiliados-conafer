import React, { useRef } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Member from "./components/Member/Member";
import Allotment from "./components/Allotment/Allotment";
import Resident from "./components/Resident/Resident";
import DiagnosisAgriculturalSystems from "./components/DiagnosisAgriculturalSystems/DiagnosisAgriculturalSystems";
import Producao from "./components/Production/Production/Producao";
import VegetablesProduction from "./components/Production/VegetablesProduction/VegetablesProduction";
import Psiculture from "./components/Production/Psiculture/Psiculture";
import Improvements from "./components/Improvements/Improvements";
import Transports from "./components/Transport/Transports";
import TechnicalVisit from "./components/TechnicalVisit/TechnicalVisit";
import Documents from "./components/Documents/Documents";
import Habitation from "./components/Habitation/Habitation";
import Call from "./components/Call/Call";
import AnimalsProduction from "./components/Production/AnimalsProduction/AnimalsProduction";

const ModalMembro = ({
  open,
  setOpen,
  member,
  habitation,
  resident,
  allotment,
  diagnosisAgriculturalSystem,
  production,
  vegetablesProduction,
  animalsProduction,
  psiculture,
  improvement,
  transport,
  technicalVisit,
  document,
  call
}) => {
  const ref = useRef();

  return (
    <Modal
      isOpen={open}
      toggle={() => {
        setOpen(!open);
      }}
      size="lg"
    >
      <ModalHeader
        toggle={() => {
          setOpen(!open);
        }}
      >
      </ModalHeader>
      <ModalBody>
        <div ref={ref}>
          {member && <Member memberData={member} />}
          {allotment && <Allotment allotmentData={allotment} />}
          {habitation && <Habitation habitationData={habitation} />}
          {resident && <Resident residentData={resident}/>}
          {diagnosisAgriculturalSystem && (
            <DiagnosisAgriculturalSystems
            diagnosisAgriculturalSystemData={diagnosisAgriculturalSystem}
            />
          )}
          {production && <Producao productionData={production} />}
          {vegetablesProduction && (
            <VegetablesProduction vegetablesProductionData={vegetablesProduction} />
          )}
          {animalsProduction && <AnimalsProduction animalsProductionData={animalsProduction}/>}
          {psiculture && <Psiculture psicultureData={psiculture} />}
          {improvement && <Improvements improvementData={improvement} />}
          {transport && <Transports transportData={transport} />}
          {technicalVisit && <TechnicalVisit technicalVisitData={technicalVisit} />}
          {document && <Documents documentData={document} />}
          {call && <Call call={call} />}
        </div>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-end">
        <Button color="secondary" onClick={() => setOpen(!open)}>
          Sair
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalMembro;
