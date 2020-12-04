import React from "react";
import { mask } from "remask";

import {
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";

const ProfileEditForm = ({
  submitForm,
  input,
  handleChangeInput,
  files,
  handleChangeFile,
}) => {
  return (
    <Form onSubmit={submitForm}>
      <h6 className="heading-small text-muted mb-4">Dados Pessoais</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="name">
                Nome completo
              </label>
              <Input
                className="form-control-alternative"
                id="name"
                placeholder="Digite seu nome completo"
                name="name"
                value={input.name}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
            <label className="form-control-label" htmlFor="profilepic">
                Escolha uma foto de perfil
              </label>
              <label className="btn bg-light w-100 ml-1 form-control-alternative">
                {files.profilepic.fileName
                  ? files.profilepic.fileName
                  : "Selecione uma Foto"}
                <Input
                  className="form-control-alternative"
                  type="file"
                  style={{ display: "none" }}
                  name="profilepic"
                  onChange={handleChangeFile}
                />
              </label>
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Informações de Contato</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="email">
                Email
              </label>
              <Input
                className="form-control-alternative"
                id="email"
                name="email"
                placeholder="email@provedor.com"
                value={input.email}
                onChange={handleChangeInput}
                type="email"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="phone">
                Telefone
              </label>
              <Input
                className="form-control-alternative"
                id="phone"
                name="phone"
                placeholder="(00) 0000-0000"
                value={mask(input.phone, ["(99) 99999-9999"])}
                onChange={handleChangeInput}
                type="tel"
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <div className="d-flex justify-content-center">
        <Button color="primary" type="submit">
          Salvar Alterações
        </Button>
      </div>
    </Form>
  );
};

export default ProfileEditForm;
