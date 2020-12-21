import React from "react";
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

const ModalMembro = ({ open, setOpen, member }) => {
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
        Informações de Membro
      </ModalHeader>
      <ModalBody>
        <DadaosBeneficiario member={member} />
        <LocalizacaoLote member={member} />
        <Moradias member={member} />
        <IdentificacaoUnidadeFamiliar member={member} />
        <SupervisaoOcupacional member={member} />
        <InfoGeraisUnidadeProdFamiliar member={member} />
        <EnderecoParaCorrespondencia member={member} />
        <DiagnosticoSistemasAgrarios member={member} />
        <Producao member={member} />
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

ModalMembro.propTypes = {
  open: PropTypes.any.isRequired,
  setOpen: PropTypes.any.isRequired,
  member: PropTypes.object.isRequired,
};

export default ModalMembro;
