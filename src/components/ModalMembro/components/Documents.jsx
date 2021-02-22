import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import {
  getBithCertificates,
  getCPFS,
  getEconomicActivities,
  getImprovementsImage,
} from "redux/actions/Documents";
import { Title, Content } from "./Styles";

const Documents = ({ document }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBithCertificates(document.id));
    dispatch(getCPFS(document.id));
    dispatch(getEconomicActivities(document.id));
    dispatch(getImprovementsImage(document.id));
  }, []);

  const {
    birthCertificates,
    cpfs,
    economicActivities,
    improvementsImage,
  } = useSelector((state) => state.DocumentsReducer);

  return (
    <>
      <Title>Documentos</Title>
      <div>
        <Row>
          <Col lg="12" className="mb-3">
            <Content>
              <b>Membro:</b> {document.member}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Título domínio frente:</b>{" "}
              </div>
              {document.front_domain_title && (
                <img
                  src={document.front_domain_title}
                  width="100%"
                  alt="Título domínio frente"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Título domínio verso:</b>{" "}
              </div>
              {document.back_domain_title && (
                <img
                  src={document.back_domain_title}
                  width="100%"
                  alt="Título domínio verso"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Cartão assentamento frente:</b>{" "}
              </div>
              {document.front_nesting_card && (
                <img
                  src={document.front_nesting_card}
                  width="100%"
                  alt="Cartão assentamento frente"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Cartão assentamento verso:</b>{" "}
              </div>
              {document.back_nesting_card && (
                <img
                  src={document.back_nesting_card}
                  width="100%"
                  alt="Cartão assentamento verso"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Gerenciamento:</b>{" "}
              </div>
              {document.georeferencing && (
                <img
                  src={document.georeferencing}
                  width="100%"
                  alt="Gerenciamento"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do beneficiário frente:</b>{" "}
              </div>
              {document.front_beneficiary_rg && (
                <img
                  src={document.front_beneficiary_rg}
                  width="100%"
                  alt="RG do beneficiário frente"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do beneficiário verso:</b>{" "}
              </div>
              {document.back_beneficiary_rg && (
                <img
                  src={document.back_beneficiary_rg}
                  width="100%"
                  alt="RG do beneficiário verso"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do companheiro frente:</b>{" "}
              </div>
              {document.front_companion_rg && (
                <img
                  src={document.front_companion_rg}
                  width="100%"
                  alt="RG do companheiro frente"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do companheiro verso:</b>{" "}
              </div>
              {document.back_companion_rg && (
                <img
                  src={document.back_companion_rg}
                  width="100%"
                  alt="RG do companheiro verso"
                />
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Certidões de Nascimento:</b>{" "}
              </div>
              <Row>
                {birthCertificates.map((certificate, i) => (
                  <Col key={i} lg="12 mb-2">
                    <img
                      src={certificate.archive}
                      width="100%"
                      alt="Ceritidão de Nascimento"
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>CPF's:</b>{" "}
              </div>
              <Row>
                {cpfs.map((cpf, i) => (
                  <Col key={i} lg="12 mb-2">
                    <img
                      src={cpf.archive}
                      width="100%"
                      alt="CPF"
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Atividades Economicas:</b>{" "}
              </div>
              <Row>
                {economicActivities.map((activitie, i) => (
                  <Col key={i} lg="12 mb-2">
                    <img
                      src={activitie.archive}
                      width="100%"
                      alt="Atividade Economica"
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Imagens de Benfeitorias:</b>{" "}
              </div>
              <Row>
                {improvementsImage.map((improvement, i) => (
                  <Col key={i} lg="12 mb-2">
                    <img
                      src={improvement.archive}
                      width="100%"
                      alt="Imagem de Benfeitoria"
                    />
                  </Col>
                ))}
              </Row>
            </Content>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Documents;
