import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Input, FormGroup, Col, Row, Button, Table } from "reactstrap";

const Documentation = ({ inputDocumentation, setInputDocumentation }) => {
  const [files, setFiles] = useState({
    documentation_birth_cetificate: {
      fileName: "",
      value: "",
    },
  });

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value) {
      const fileName = event.target.files[0].name;

      setInputDocumentation({
        ...inputDocumentation,
        [name]: {
          ...inputDocumentation[name],
          fileName: fileName,
          value: value,
        },
      });
    } else {
      setInputDocumentation({
        ...inputDocumentation,
        [name]: { ...inputDocumentation[name], fileName: "", value: "" },
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

    if (files[name]) {
      setInputDocumentation({
        ...inputDocumentation,
        [name]: [...inputDocumentation[name], files[name]],
      });
    }

  };

  const removeFile = (name, index) => {
    setInputDocumentation({
      ...inputDocumentation,
      [name]: inputDocumentation[name].filter((item, i) => i !== index),
    });
  }

  return (
    <Row>
      <div className="col-12">
        <hr />
        <h2 className="text-center mb-4">Informações Gerais</h2>
      </div>
      <Col lg="6">
        <label className="form-control-label ml-2" htmlFor="front_domain_title">
          Título domínio frente
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.front_domain_title.fileName
              ? inputDocumentation.front_domain_title.fileName
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
        <label className="form-control-label ml-2" htmlFor="back_domain_title">
          Título domínio verso
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.back_domain_title.fileName
              ? inputDocumentation.back_domain_title.fileName
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
      <Col lg="6">
        <label className="form-control-label ml-2" htmlFor="front_nesting_card">
          Cartão assentamento frente
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.front_nesting_card.fileName
              ? inputDocumentation.front_nesting_card.fileName
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
        <label className="form-control-label ml-2" htmlFor="back_nesting_card">
          Cartão assentamento verso
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.back_nesting_card.fileName
              ? inputDocumentation.back_nesting_card.fileName
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
      <Col lg="12">
        <label className="form-control-label ml-2" htmlFor="georeferencing">
          Georeferenciamento
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.georeferencing.fileName
              ? inputDocumentation.georeferencing.fileName
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
      <Col lg="6">
        <label
          className="form-control-label ml-2"
          htmlFor="front_beneficiary_rg"
        >
          RG do beneficiário frente
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.front_beneficiary_rg.fileName
              ? inputDocumentation.front_beneficiary_rg.fileName
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
            {inputDocumentation.back_beneficiary_rg.fileName
              ? inputDocumentation.back_beneficiary_rg.fileName
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
      <Col lg="6">
        <label className="form-control-label ml-2" htmlFor="front_companion_rg">
          RG do companheiro frente
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.front_companion_rg.fileName
              ? inputDocumentation.front_companion_rg.fileName
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
        <label className="form-control-label ml-2" htmlFor="back_companion_rg">
          RG do companheiro verso
        </label>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputDocumentation.back_companion_rg.fileName
              ? inputDocumentation.back_companion_rg.fileName
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
      <div className="col-12">
        <hr />
        <h2 className="text-center mb-4">Certidões de nascimento</h2>
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
      <Col lg="6" className="d-flex align-items-center">
          <Button
            name="documentation_birth_cetificate"
            color="primary"
            onClick={addDocumentation}
          >
            Adicionar
          </Button>
      </Col>
      <Col lg="12">
        <Table>
          <thead>
            <tr>
              <th>Arquivo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inputDocumentation.documentation_birth_cetificate.map(
              (file, i) => (
                <tr key={i}>
                  <td>{file.fileName}</td>
                  <td>
                  <Button onClick={() => removeFile("documentation_birth_cetificate", i)}>
                    <DeleteForeverOutlined/>
                  </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default Documentation;
