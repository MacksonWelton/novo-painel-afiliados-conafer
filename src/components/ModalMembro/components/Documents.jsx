import React from "react";
import { Col, Row } from "reactstrap";

const Documents = ({ document }) => {
  return (
    <>
      <h3 className="border rounded bg-default text-center text-white py-2 w-100">
        Documentos
      </h3>
      <div>
        <Row>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Membro:</b> {document.member}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Título domínio frente:</b>{" "}
              </div>
              {document.front_domain_title && (<img src={document.front_domain_title} width="100%" alt="Título domínio frente" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Título domínio verso:</b>{" "}
              </div>
              {document.back_domain_title && (<img src={document.back_domain_title} width="100%" alt="Título domínio verso" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Cartão assentamento frente:</b>{" "}
              </div>
              {document.front_nesting_card && (<img src={document.front_nesting_card} width="100%" alt="Cartão assentamento frente" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Cartão assentamento verso:</b>{" "}
              </div>
              {document.back_nesting_card && (<img src={document.back_nesting_card} width="100%" alt="Cartão assentamento verso" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Gerenciamento:</b>{" "}
              </div>
              {document.georeferencing && (<img src={document.georeferencing} width="100%" alt="Gerenciamento" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>RG do beneficiário frente:</b>{" "}
              </div>
              {document.front_beneficiary_rg && (<img src={document.front_beneficiary_rg} width="100%" alt="RG do beneficiário frente" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>RG do beneficiário verso:</b>{" "}
              </div>
              {document.back_beneficiary_rg && (<img src={document.back_beneficiary_rg} width="100%" alt="RG do beneficiário verso" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>RG do companheiro frente:</b>{" "}
              </div>
              {document.front_companion_rg && (<img src={document.front_companion_rg} width="100%" alt="RG do companheiro frente" />)}
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>RG do companheiro verso:</b>{" "}
              </div>
              {document.back_companion_rg && (<img src={document.back_companion_rg} width="100%" alt="RG do companheiro verso" />)}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Documents;
