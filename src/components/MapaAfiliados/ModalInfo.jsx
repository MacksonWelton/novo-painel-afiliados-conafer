import ZoomImage from "components/ZoomImage/ZoomImage";
import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalInfo = ({ openModal, setOpenModal, map }) => {

  return (
    <>
      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
        size="lg"
        centered
      >
        <ModalHeader toggle={() => setOpenModal(!openModal)}>
          Lote: {map.allotmentInfo.incra_allotment_number}
        </ModalHeader>
        <ModalBody>
          <ZoomImage image={map.allotmentInfo.lot_geometry}/>
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalInfo;
