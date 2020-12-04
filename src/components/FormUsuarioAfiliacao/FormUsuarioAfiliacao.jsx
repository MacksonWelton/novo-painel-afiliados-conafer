import React from "react";
import { mask } from "remask";

import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
} from "reactstrap";

const FormUsuarioAfiliacao = ({
  files,
  input,
  handleChangeInput,
  handleChangeInputFile,
}) => {
  return (
    <Row>
      <Col lg="12">
        <FormGroup>
          <InputGroup className="input-group-alternative mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-user" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Nome"
              type="text"
              name="name"
              onChange={handleChangeInput}
              required
            />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg="12">
        <div style={{width: "50%"}}>
          {files.profilepic.value ? (
            <img
              className="w-25 ml-2 mb-2 rounded"
              src={URL.createObjectURL(files.profilepic.value)}
              alt=""
            />
          ) : null}
          </div>
        <FormGroup>
          <InputGroup>
            <label className="btn bg-light ml-1 mb-0">
              {files.profilepic.fileName
                ? files.profilepic.fileName
                : "Selecione uma Foto"}
              <Input
                className="form-control-alternative"
                type="file"
                style={{ display: "none" }}
                name="profilepic"
                onChange={handleChangeInputFile}
              />
            </label>
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <InputGroup className="input-group-alternative mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-email-83" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Email"
              type="email"
              autoComplete="new-email"
              name="email"
              onChange={handleChangeInput}
              required
            />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <InputGroup className="input-group-alternative mb-3">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="fas fa-phone-alt" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Telefone"
              type="tel"
              autoComplete="new-tel"
              name="phone"
              value={mask(input.phone, ["(99) 99999-9999"])}
              onChange={handleChangeInput}
              required
            />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Senha"
              type="password"
              autoComplete="new-password"
              name="password1"
              onChange={handleChangeInput}
              required
            />
          </InputGroup>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Digite a senha novamente"
              type="password"
              autoComplete="new-password"
              name="password2"
              onChange={handleChangeInput}
              required
            />
          </InputGroup>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default FormUsuarioAfiliacao;
