import React, { useRef } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import Member from "./components/Member";
import Allotment from "./components/Allotment";
// import Moradias from "./components/Moradias";
import DiagnosisAgriculturalSystems from "./components/DiagnosisAgriculturalSystems";
import Producao from "./components/Producao";
import VegetablesProduction from "./components/VegetablesProduction";
import Psiculture from "./components/Psiculture";
import Improvements from "./components/Improvements";
import Transports from "./components/Transports";
import TechnicalVisit from "./components/TechnicalVisit";
import Documents from "./components/Documents";

const ModalMembro = ({
  open,
  setOpen,
  member,
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
        RAPATRA
      </ModalHeader>
      <ModalBody>
        <div ref={ref}>
          {member && <Member member={member} />}
          {allotment && <Allotment allotment={allotment} />}
          {diagnosisAgriculturalSystem && (
            <DiagnosisAgriculturalSystems
              diagnosisAgriculturalSystem={diagnosisAgriculturalSystem}
            />
          )}
          {production && <Producao production={production} />}
          {vegetablesProduction && (
            <VegetablesProduction vegetablesProduction={vegetablesProduction} />
          )}
          {/* {animalsProduction} */}
          {psiculture && <Psiculture psiculture={psiculture} />}
          {improvement && <Improvements improvement={improvement} />}
          {transport && <Transports transport={transport} />}
          {technicalVisit && <TechnicalVisit technicalVisit={technicalVisit} />}
          {/* <Moradias member={member} />
           */}
          {document && <Documents document={document} />}
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
