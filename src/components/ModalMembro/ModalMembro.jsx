import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import DadaosBeneficiario from "./components/DadaosBeneficiario";
import LocalizacaoLote from "./components/LocalizacaoLote";
import Moradias from "./components/Moradias";
import DiagnosticoSistemasAgrarios from "./components/DiagnosticoSistemasAgrarios";
import Producao from "./components/Producao";
import VegetablesProduction from "./components/VegetablesProduction";
import Psiculture from "./components/Psiculture";
import Improvements from "./components/Improvements";
import Transports from "./components/Transports";
import TechnicalVisit from "./components/TechnicalVisit";

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
  technicalVisit
}) => {

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
        Informações RAPATRA
      </ModalHeader>
      <ModalBody>
        {member && <DadaosBeneficiario member={member} />}
        {allotment && <LocalizacaoLote allotment={allotment} />}
        {diagnosisAgriculturalSystem && (
          <DiagnosticoSistemasAgrarios
            diagnosisAgriculturalSystem={diagnosisAgriculturalSystem}
          />
        )}
        {production && (<Producao production={production} />)}
        {vegetablesProduction && (<VegetablesProduction vegetablesProduction={vegetablesProduction}/>)}
        {/* {animalsProduction} */}
        {psiculture && (<Psiculture psiculture={psiculture}/>)}
        {improvement && (<Improvements improvement={improvement}/>)}
        {transport && (<Transports transport={transport} />)}
        {technicalVisit && (<TechnicalVisit technicalVisit={technicalVisit}/>)}
        {/* <Moradias member={member} />
         */}
      </ModalBody>
      <ModalFooter className="d-flex justify-content-end">
        <Button color="primary" onClick={() => setOpen(!open)}>
          Dowload PDF
        </Button>
        <Button color="secondary" onClick={() => setOpen(!open)}>
          Sair
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalMembro;
