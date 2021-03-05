import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Col,
  Form,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { getDocumentById } from "redux/actions/Documents";
import {
  getBithCertificates,
  getCPFS,
  getEconomicActivities,
  getImprovementsImage,
} from "redux/actions/Documents";
import { Title, Content } from "../Styles";
import DocumentsEditForm from "./DocumentsEditForm";
import { updateDocumentation } from "redux/actions/Documents";

const Documents = ({ documentData }) => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [loadDataInput, setLoadDataInput] = useState(true);

  useEffect(() => {
    dispatch(getDocumentById(documentData.id));
    dispatch(getBithCertificates(documentData.id));
    dispatch(getCPFS(documentData.id));
    dispatch(getEconomicActivities(documentData.id));
    dispatch(getImprovementsImage(documentData.id));
  }, [dispatch, documentData.id]);

  const [inputDocumentation, setInputDocumentation] = useState({
    member: "",
  });

  const [inputDocumentationFile, setInputDocumentationFile] = useState({
    front_domain_title: {
      fileName: "",
      value: "",
    },
    back_domain_title: {
      fileName: "",
      value: "",
    },
    front_nesting_card: {
      fileName: "",
      value: "",
    },
    back_nesting_card: {
      fileName: "",
      value: "",
    },
    georeferencing: {
      fileName: "",
      value: "",
    },
    front_beneficiary_rg: {
      fileName: "",
      value: "",
    },
    back_beneficiary_rg: {
      fileName: "",
      value: "",
    },
    front_companion_rg: {
      fileName: "",
      value: "",
    },
    back_companion_rg: {
      fileName: "",
      value: "",
    },
  });

  const [inputDocumentationList, setInputDocumentationList] = useState({
    birth_certificates: [],
    cpf_files: [],
    economic_activities: [],
    improvements_image: [],
  });

  const {
    document,
    birthCertificates,
    cpfs,
    economicActivities,
    improvementsImage,
  } = useSelector((state) => state.DocumentsReducer);

  if (document && loadDataInput) {
    let idMember;
    let fileData = inputDocumentationFile;

    Object.keys(document).forEach((key) => {
      if (
        document[key] !== null &&
        key !== "id" &&
        key !== "member" &&
        key !== "memberName" &&
        key !== "created_at" &&
        key !== "modified_at"
      ) {
        let fileName = document[key].split("?");
        fileName = fileName[0].split("/");
        fileName = fileName[fileName.length - 1];
        fileData = {
          ...fileData,
          [key]: { fileName: fileName, value: document[key] },
        };
      } else if (key === "member") {
        idMember = document[key];
      }
    });

    setInputDocumentation({ ...inputDocumentation, member: idMember });
    setInputDocumentationFile(fileData);

    let files = {
      birth_certificates: [],
      cpf_files: [],
      economic_activities: [],
      improvements_image: [],
    };

    if (birthCertificates.length) {
      let fileData = inputDocumentationList.birth_certificates;
      birthCertificates.forEach((file) => {
        Object.keys(file).forEach((key, i) => {
          if (key === "archive") {
            let fileName = file[key].split("?");
            fileName = fileName[0].split("/");
            fileName = fileName[fileName.length - 1];

            fileData = [
              ...fileData,
              { id: file["id"], fileName: fileName, value: file[key] },
            ];
          }
        });
      });

      files = {
        ...files,
        birth_certificates: fileData,
      };
    }

    if (cpfs.length) {
      let fileData = inputDocumentationList.cpf_files;
      cpfs.forEach((file) => {
        Object.keys(file).forEach((key) => {
          if (key === "archive") {
            let fileName = file[key].split("?");
            fileName = fileName[0].split("/");
            fileName = fileName[fileName.length - 1];

            fileData = [
              ...fileData,
              { id: file["id"], fileName: fileName, value: file[key] },
            ];
          }
        });
      });

      files = {
        ...files,
        cpf_files: fileData,
      };
    }

    if (economicActivities.length) {
      let fileData = inputDocumentationList.economic_activities;
      economicActivities.forEach((file) => {
        Object.keys(file).forEach((key) => {
          if (key === "archive") {
            let fileName = file[key].split("?");
            fileName = fileName[0].split("/");
            fileName = fileName[fileName.length - 1];

            fileData = [
              ...fileData,
              { id: file["id"], fileName: fileName, value: file[key] },
            ];
          }
        });
      });

      files = {
        ...files,
        economic_activities: fileData,
      };
    }

    if (improvementsImage.length) {
      let fileData = inputDocumentationList.improvements_image;
      improvementsImage.forEach((file) => {
        Object.keys(file).forEach((key) => {
          if (key === "archive") {
            let fileName = file[key].split("?");
            fileName = fileName[0].split("/");
            fileName = fileName[fileName.length - 1];

            fileData = [
              ...fileData,
              { id: file["id"], fileName: fileName, value: file[key] },
            ];
          }
        });
      });

      files = {
        ...files,
        improvements_image: fileData,
      };
    }

    setInputDocumentationList(files);

    setLoadDataInput(!loadDataInput);
  }

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      updateDocumentation(
        documentData.id,
        inputDocumentation,
        inputDocumentationFile,
        inputDocumentationList
      )
    );
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Dados
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Editar
          </NavLink>
        </NavItem>
      </Nav>
      {document && (
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Title>Documentos</Title>
            <div>
              <Row>
                <Col lg="12" className="mb-3">
                  <Content>
                    <b>Membro:</b> {document.memberName}
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
                              Download {i + 1}{" "}
                              <i className="fas fa-download"></i>
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
                            <a
                              className="border p-2 rounded"
                              href={cpf.archive}
                            >
                              Download {i + 1}{" "}
                              <i className="fas fa-download"></i>
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
                              Download {i + 1}{" "}
                              <i className="fas fa-download"></i>
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
                        <Col key={i} lg="12" className="mb-2">
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
          </TabPane>
          <TabPane tabId="2">
            <Form onSubmit={handleSubmitForm}>
              <DocumentsEditForm
                inputDocumentation={inputDocumentation}
                setInputDocumentation={setInputDocumentation}
                inputDocumentationFile={inputDocumentationFile}
                setInputDocumentationFile={setInputDocumentationFile}
                inputDocumentationList={inputDocumentationList}
                setInputDocumentationList={setInputDocumentationList}
              />
              <div className="text-center">
                <Button
                  color="primary"
                  title="Clique para salvar as alterações."
                  type="submit"
                >
                  Salvar Alterações
                </Button>
              </div>
            </Form>
          </TabPane>
        </TabContent>
      )}
    </div>
  );
};

export default Documents;
