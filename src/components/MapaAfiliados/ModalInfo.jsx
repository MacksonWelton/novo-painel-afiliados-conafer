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
        centered
      >
        <ModalHeader toggle={() => setOpenModal(!openModal)}>
          <><h3>Geometria do Lote</h3></>
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
                color="default"
              >
                <img
                  className="w-100"
                  src={map.info.lot.lot_geometry.before}
                  alt=""
                />
              </Button>
              <label className="d-flex justify-content-center mt-2"><small>2008</small></label>
            </Col>
            <Col lg="6">
              <Button
                onClick={() =>
                  setZoom({
                    modal: !zoom.modal,
                    picture: map.info.lot.lot_geometry.after,
                  })
                }
                color="default"
              >
                <img
                  className="w-100"
                  src={map.info.lot.lot_geometry.after}
                  alt=""
                />
              </Button>
              <label className="d-flex justify-content-center mt-2"><small>2018</small></label>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={zoom.modal}
        toggle={() => setZoom({ modal: !zoom.modal })}
        size="lg"
        centered
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
