import React from "react";
import { Input, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const ModalPhotoChange = ({
  open,
  setOpen,
  input,
  fileName,
  handleChangeFile,
}) => {
  return (
    <Modal isOpen={open} toggle={() => setOpen(!open)} centered>
      <ModalHeader>Editar Foto de Perfil</ModalHeader>
      <ModalBody>
        {fileName && (
          <div className="mb-3 col-xl-12 col-sm-12 col-lg-12">
            <img
              src={fileName ? URL.createObjectURL(input.photo) : ""}
              alt=""
              style={{ height: "250px" }}
            />
          </div>
        )}
        <label className="btn bg-light ml-1 mb-0">
          {fileName ? fileName : "Escolha uma foto de perfil"}
          <Input
            style={{ display: "none" }}
            type="file"
            name="photo"
            onChange={handleChangeFile}
          />
        </label>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </Modal>
  );
};

export default ModalPhotoChange;
