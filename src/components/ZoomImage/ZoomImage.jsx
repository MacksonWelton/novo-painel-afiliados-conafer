import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Button, Row, Col } from "reactstrap";

const ZoomImage = ({image}) => {
  return (
    <TransformWrapper>
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                <Row>
                  <Col lg="9" className="d-flex align-items-end visible-xs">
                    <small className="ml-2">
                      Para dar zoom na imagem role com o mouse, faça movimento de pinça ou utilize os controles a direita.
                    </small>
                  </Col>
                  <Col lg="3">
                    <div className="d-flex align-items-center justify-content-end m-2">
                      <span className="mr-2">Zoom</span>
                      <Button size="sm" color="primary" onClick={zoomIn}>
                        +
                      </Button>
                      <Button size="sm" color="primary" onClick={zoomOut}>
                        -
                      </Button>
                      <Button size="sm" color="danger" onClick={resetTransform}>
                        x
                      </Button>
                    </div>
                  </Col>
                </Row>
                <TransformComponent>
                  <img className="w-100" src={image} alt="" />
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
  )
}

export default ZoomImage
