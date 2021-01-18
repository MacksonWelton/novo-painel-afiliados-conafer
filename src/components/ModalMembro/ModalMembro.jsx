import React, { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import PropTypes from "prop-types";
import DadaosBeneficiario from "./components/DadaosBeneficiario";
import LocalizacaoLote from "./components/LocalizacaoLote";
import Moradias from "./components/Moradias";
import IdentificacaoUnidadeFamiliar from "./components/IdentificacaoUnidadeFamiliar";
import InfoGeraisUnidadeProdFamiliar from "./components/InfoGeraisUnidadeProdFamiliar";
import EnderecoParaCorrespondencia from "./components/EnderecoParaCorrespondencia";
import SupervisaoOcupacional from "./components/SupervisaoOcupacional";
import DiagnosticoSistemasAgrarios from "./components/DiagnosticoSistemasAgrarios";
import Producao from "./components/Producao";
import VegetablesProduction from "./components/VegetablesProduction";
import Psiculture from "./components/Psiculture";

const ModalMembro = ({
  open,
  setOpen,
  member,
  allotment,
  diagnosisAgriculturalSystem,
  production,
  vegetablesProduction,
  animalsProduction,
  psiculture
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
        {/* <Moradias member={member} />
        <IdentificacaoUnidadeFamiliar member={member} />
        <SupervisaoOcupacional member={member} />
        <InfoGeraisUnidadeProdFamiliar member={member} />
        <EnderecoParaCorrespondencia member={member} />
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
