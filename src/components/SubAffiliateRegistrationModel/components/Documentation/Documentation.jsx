import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, FormGroup, Col, Row, Button, Table } from "reactstrap";
import {getMembers} from "../../../../redux/actions/Membros";

const Documentation = ({
  inputDocumentation,
  setInputDocumentation,
  inputDocumentationFile,
  setInputDocumentationFile,
  inputDocumentationList,
  setInputDocumentationList,
}) => {
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getMembers());
  }, [])

  const members = useSelector(state => state.MembersReducer.members);

  const [files, setFiles] = useState({
    documentation_birth_cetificate: {
      fileName: "",
      value: "",
    },
    documentation_cpf: {
      fileName: "",
      value: "",
    },
    documentation_economic_ativities: {
      fileName: "",
      value: "",
    },
    documentation_improvement: {
      fileName: "",
      value: "",
    },
  });

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInputDocumentation({...inputDocumentation, [name]: value})
  }

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value) {
      const fileName = event.target.files[0].name;

      setInputDocumentationFile({
        ...inputDocumentationFile,
        [name]: {
          ...inputDocumentationFile[name],
          fileName: fileName,
          value: value,
        },
      });
    } else {
      setInputDocumentationFile({
        ...inputDocumentationFile,
        [name]: { ...inputDocumentationFile[name], fileName: "", value: "" },
      });
    }
  };

  const handleChangeInputOtherFiles = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value) {
      const fileName = event.target.files[0].name;

      setFiles({
        ...files,
        [name]: {
          ...files[name],
          fileName: fileName,
          value: value,
        },
      });
    } else {
      setFiles({
        ...files,
        [name]: { ...files[name], fileName: "", value: "" },
      });
    }
  };

  const addDocumentation = (event) => {
    const name = event.target.name;

    if (files[name].value) {
      setInputDocumentationList({
        ...inputDocumentationList,
        [name]: [...inputDocumentationList[name], files[name]],
      });

      setFiles({
        ...files,
        [name]: { ...files[name], fileName: "", value: "" },
      });
    }
  };

  const removeFile = (name, index) => {
    setInputDocumentationList({
      ...inputDocumentationList,
      [name]: inputDocumentationList[name].filter((item, i) => i !== index),
    });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Documentos</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="member">
                Membro <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="member"
                id="member"
                title="Lote"
                value={inputDocumentation.member}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {members.map((member, i) => (
                  <option key={i} value={member.id}>
                    {member.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg="12" className="border rounded mb-3">
            <Row>
              <Col
                lg="12"
                className="text-center mb-3 pt-2 border border-bottom"
              >
                <h3>Título de Domínio</h3>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="front_domain_title"
                >
                  Título domínio frente
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.front_domain_title.fileName
                      ? inputDocumentationFile.front_domain_title.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="front_domain_title"
                      id="front_domain_title"
                      title="Título domínio frente"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </FormGroup>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="back_domain_title"
                >
                  Título domínio verso
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.back_domain_title.fileName
                      ? inputDocumentationFile.back_domain_title.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="back_domain_title"
                      id="back_domain_title"
                      title="Título domínio verso"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="12" className="border rounded mb-3">
            <Row>
              <Col
                lg="12"
                className="text-center mb-3 pt-2 border border-bottom"
              >
                <h3>Cartão Assentamento</h3>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="front_nesting_card"
                >
                  Cartão assentamento frente
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.front_nesting_card.fileName
                      ? inputDocumentationFile.front_nesting_card.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="front_nesting_card"
                      id="front_nesting_card"
                      title="Cartão assentamento frente"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </FormGroup>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="back_nesting_card"
                >
                  Cartão assentamento verso
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.back_nesting_card.fileName
                      ? inputDocumentationFile.back_nesting_card.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="back_nesting_card"
                      id="back_nesting_card"
                      title="Cartão assentamento verso"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="12" className="border rounded mb-3">
            <Row>
              <Col
                lg="12"
                className="text-center mb-3 pt-2 border border-bottom"
              >
                <h3>Georeferenciamento</h3>
              </Col>
              <Col lg="12">
                <label
                  className="form-control-label ml-2"
                  htmlFor="georeferencing"
                >
                  Georeferenciamento
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.georeferencing.fileName
                      ? inputDocumentationFile.georeferencing.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="georeferencing"
                      id="georeferencing"
                      title="Georeferenciamento"
                      onChange={handleChangeInputFile}
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="12" className="border rounded mb-3">
            <Row>
              <Col
                lg="12"
                className="text-center mb-3 pt-2 border border-bottom"
              >
                <h3>RG do Beneficiário</h3>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="front_beneficiary_rg"
                >
                  RG do beneficiário frente
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.front_beneficiary_rg.fileName
                      ? inputDocumentationFile.front_beneficiary_rg.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="front_beneficiary_rg"
                      id="front_beneficiary_rg"
                      title="RG do beneficiário frente"
                      onChange={handleChangeInputFile}
                      required
                    />
                  </label>
                </FormGroup>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="back_beneficiary_rg"
                >
                  RG do beneficiário verso
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.back_beneficiary_rg.fileName
                      ? inputDocumentationFile.back_beneficiary_rg.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="back_beneficiary_rg"
                      id="back_beneficiary_rg"
                      title="RG do beneficiário verso"
                      onChange={handleChangeInputFile}
                      required
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="12" className="border rounded mb-3">
            <Row>
              <Col
                lg="12"
                className="text-center mb-3 pt-2 border border-bottom-bottom"
              >
                <h3>RG do Companheiro</h3>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="front_companion_rg"
                >
                  RG do companheiro frente
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.front_companion_rg.fileName
                      ? inputDocumentationFile.front_companion_rg.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="front_companion_rg"
                      id="front_companion_rg"
                      title="RG do companheiro frente"
                      onChange={handleChangeInputFile}
                      required
                    />
                  </label>
                </FormGroup>
              </Col>
              <Col lg="6">
                <label
                  className="form-control-label ml-2"
                  htmlFor="back_companion_rg"
                >
                  RG do companheiro verso
                </label>
                <FormGroup>
                  <label className="btn bg-light ml-1 mb-0">
                    {inputDocumentationFile.back_companion_rg.fileName
                      ? inputDocumentationFile.back_companion_rg.fileName.substring(
                          0,
                          40
                        )
                      : "Escolher Arquivo"}
                    <Input
                      className="d-none"
                      type="file"
                      name="back_companion_rg"
                      id="back_companion_rg"
                      title="RG do companheiro verso"
                      onChange={handleChangeInputFile}
                      required
                    />
                  </label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <div className="col-12">
            <h2 className="text-center mb-4">Certidões de nascimento</h2>
            <hr />
          </div>
          <Col lg="6">
            <label
              className="form-control-label ml-2"
              htmlFor="documentation_birth_cetificate"
            >
              Certidão de Nascimento
            </label>
            <FormGroup>
              <label className="btn bg-light ml-1 mb-0">
                {files.documentation_birth_cetificate.fileName
                  ? files.documentation_birth_cetificate.fileName
                  : "Escolher Arquivo"}
                <Input
                  className="d-none"
                  type="file"
                  name="documentation_birth_cetificate"
                  id="documentation_birth_cetificate"
                  title="Certidão de Nascimento"
                  onChange={handleChangeInputOtherFiles}
                  required
                />
              </label>
            </FormGroup>
          </Col>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center pt-2"
          >
            <Button
              name="documentation_birth_cetificate"
              color="primary"
              onClick={addDocumentation}
            >
              Adicionar
            </Button>
          </Col>
          <Col lg="12" className="mt-3">
            <Table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputDocumentationList.documentation_birth_cetificate.map(
                  (file, i) => (
                    <tr key={i}>
                      <td>{file.fileName.substring(0, 35)}</td>
                      <td>
                        <Button
                          onClick={() =>
                            removeFile("documentation_birth_cetificate", i)
                          }
                        >
                          <DeleteForeverOutlined />
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <div className="col-12">
            <h2 className="text-center mb-4">CPF's</h2>
            <hr />
          </div>
          <Col lg="6">
            <label
              className="form-control-label ml-2"
              htmlFor="documentation_cpf"
            >
              CPF's
            </label>
            <FormGroup>
              <label className="btn bg-light ml-1 mb-0">
                {files.documentation_cpf.fileName
                  ? files.documentation_cpf.fileName.substring(0, 40)
                  : "Escolher Arquivo"}
                <Input
                  className="d-none"
                  type="file"
                  name="documentation_cpf"
                  id="documentation_cpf"
                  title="CPF's"
                  onChange={handleChangeInputOtherFiles}
                  required
                />
              </label>
            </FormGroup>
          </Col>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center pt-2"
          >
            <Button
              name="documentation_cpf"
              color="primary"
              onClick={addDocumentation}
            >
              Adicionar
            </Button>
          </Col>
          <Col lg="12" className="mt-3">
            <Table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputDocumentationList.documentation_cpf.map((file, i) => (
                  <tr key={i}>
                    <td>{file.fileName.substring(0, 35)}</td>
                    <td>
                      <Button
                        onClick={() => removeFile("documentation_cpf", i)}
                      >
                        <DeleteForeverOutlined />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <div className="col-12">
            <h2 className="text-center mb-4">Atividades economicas</h2>
            <hr />
          </div>
          <Col lg="6">
            <label
              className="form-control-label ml-2"
              htmlFor="documentation_economic_ativities"
            >
              Atividades economicas
            </label>
            <FormGroup>
              <label className="btn bg-light ml-1 mb-0">
                {files.documentation_economic_ativities.fileName
                  ? files.documentation_economic_ativities.fileName
                  : "Escolher Arquivo"}
                <Input
                  className="d-none"
                  type="file"
                  name="documentation_economic_ativities"
                  id="documentation_economic_ativities"
                  title="CPF's"
                  onChange={handleChangeInputOtherFiles}
                  required
                />
              </label>
            </FormGroup>
          </Col>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center pt-2"
          >
            <Button
              name="documentation_economic_ativities"
              color="primary"
              onClick={addDocumentation}
            >
              Adicionar
            </Button>
          </Col>
          <Col lg="12" className="mt-3">
            <Table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputDocumentationList.documentation_economic_ativities.map(
                  (file, i) => (
                    <tr key={i}>
                      <td>{file.fileName.substring(0, 35)}</td>
                      <td>
                        <Button
                          onClick={() =>
                            removeFile("documentation_economic_ativities", i)
                          }
                        >
                          <DeleteForeverOutlined />
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Imagens de benfeitorias</h2>
            <hr />
          </Col>
          <Col lg="6">
            <label
              className="form-control-label ml-2"
              htmlFor="documentation_improvement"
            >
              Imagens de benfeitorias
            </label>
            <FormGroup>
              <label className="btn bg-light ml-1 mb-0">
                {files.documentation_improvement.fileName
                  ? files.documentation_improvement.fileName.substring(0, 40)
                  : "Escolher Arquivo"}
                <Input
                  className="d-none"
                  type="file"
                  name="documentation_improvement"
                  id="documentation_improvement"
                  title="Imagens de benfeitorias"
                  onChange={handleChangeInputOtherFiles}
                  required
                />
              </label>
            </FormGroup>
          </Col>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center pt-2"
          >
            <Button
              name="documentation_improvement"
              color="primary"
              onClick={addDocumentation}
            >
              Adicionar
            </Button>
          </Col>
          <Col lg="12" className="mt-3">
            <Table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputDocumentationList.documentation_improvement.map(
                  (file, i) => (
                    <tr key={i}>
                      <td>{file.fileName.substring(0, 35)}</td>
                      <td>
                        <Button
                          onClick={() =>
                            removeFile("documentation_improvement", i)
                          }
                        >
                          <DeleteForeverOutlined />
                        </Button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Documentation;
