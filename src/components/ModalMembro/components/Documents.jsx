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
  }, [dispatch, document.id]);

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
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Título domínio frente:</b>{" "}
              </div>
              {document.front_domain_title && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.front_domain_title}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Título domínio verso:</b>{" "}
              </div>
              {document.back_domain_title && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.back_domain_title}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Cartão assentamento frente:</b>{" "}
              </div>
              {document.front_nesting_card && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.front_nesting_card}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Cartão assentamento verso:</b>{" "}
              </div>
              {document.back_nesting_card && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.back_nesting_card}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Gerenciamento:</b>{" "}
              </div>
              {document.georeferencing && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.georeferencing}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do beneficiário frente:</b>{" "}
              </div>
              {document.front_beneficiary_rg && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.front_beneficiary_rg}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do beneficiário verso:</b>{" "}
              </div>
              {document.back_beneficiary_rg && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.back_beneficiary_rg}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do companheiro frente:</b>{" "}
              </div>
              {document.front_companion_rg && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.front_companion_rg}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
              )}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>RG do companheiro verso:</b>{" "}
              </div>
              {document.back_companion_rg && (
                <div className="mb-3">
                  <a
                    className="border p-2 rounded"
                    href={document.back_companion_rg}
                  >
                    Download <i className="fas fa-download"></i>
                  </a>
                </div>
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
                  <Col key={i} lg="4">
                    <div className="mb-3">
                      <a
                        className="border p-2 rounded"
                        href={certificate.archive}
                      >
                        Download {i + 1} <i className="fas fa-download"></i>
                      </a>
                    </div>
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
                  <Col key={i} lg="4">
                    <div className="mb-3">
                      <a className="border p-2 rounded" href={cpf.archive}>
                        Download {i + 1}  <i className="fas fa-download"></i>
                      </a>
                    </div>
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
                  <Col key={i} lg="4">
                    <div className="mb-3">
                      <a
                        className="border p-2 rounded"
                        href={activitie.archive}
                      >
                        Download {i + 1}  <i className="fas fa-download"></i>
                      </a>
                    </div>
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
                  <Col key={i} lg="12">
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
