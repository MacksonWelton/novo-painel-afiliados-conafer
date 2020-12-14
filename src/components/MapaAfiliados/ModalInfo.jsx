import React, { useState } from "react";
import { Button, Modal, ModalBody, ModalHeader, Row, Col } from "reactstrap";

const ModalInfo = ({ openModal, setOpenModal, map }) => {
  const [zoom, setZoom] = useState({
    modal: false,
    picture: "",
  });

  return (
    <>
      <Modal
        isOpen={openModal}
        toggle={() => setOpenModal(!openModal)}
        size="lg"
      >
        <ModalHeader toggle={() => setOpenModal(!openModal)}>
          Geometria do Lote
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="6">
              <Button
                onClick={() =>
                  setZoom({
                    modal: !zoom.modal,
                    picture: map.info.lot.lot_geometry.before,
                  })
                }
              >
                <img
                  className="w-100"
                  src={map.info.lot.lot_geometry.before}
                  alt=""
                />
              </Button>
              <label>2008</label>
            </Col>
            <Col lg="6">
              <Button
                onClick={() =>
                  setZoom({
                    modal: !zoom.modal,
                    picture: map.info.lot.lot_geometry.after,
                  })
                }
              >
                <img
                  className="w-100"
                  src={map.info.lot.lot_geometry.after}
                  alt=""
                />
              </Button>
              <label>2018</label>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={zoom.modal}
        toggle={() => setZoom({ modal: !zoom.modal })}
        size="lg"
      >
        <ModalHeader toggle={() => setZoom({ modal: !zoom.modal })}>
          Lote: {map.info.lot.incra_allotment_number}
        </ModalHeader>
        <ModalBody>
          <img className="w-100" src={zoom.picture} alt="" />
        </ModalBody>
      </Modal>
    </>
  );
};

export default ModalInfo;
