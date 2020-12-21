import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const LocalizacaoLote = ({member}) => {
  return (
    <>
      <h3 id="lot" className="heading-small border  text-muted mb-4 btn w-100">
        2 - Localização do Lote
      </h3>
      <div>
        <UncontrolledCollapse toggler="#lot">
          <Row>
            <Col lg="12">
              <MapaAfiliados members={[member]} />
            </Col>
            <Col lg="6" className="my-3">
              <div className="border border-default rounded p-2">
                <b>Núcleo Operacional: </b>
                {member.lot ? member.lot.operational_core : null}
              </div>
            </Col>
            <Col lg="6" className="my-3">
              <div className="border border-default rounded p-2">
                <b>Estado: </b>
                {member.lot ? member.lot.state : null}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Município: </b>
                {member.lot ? member.lot.city : null}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Assentamento: </b>
                {member.lot ? member.lot.settlement : null}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Nº do Lote: </b>
                {member.lot ? member.lot.incra_allotment_number : ""}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Via de acesso ao imóvel: </b>
                {member.lot ? member.lot.access_way : null}
              </div>
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default LocalizacaoLote;
