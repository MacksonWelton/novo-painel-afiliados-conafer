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
import { useSelector } from "react-redux";

const FormUsuarioAfiliacao = ({
  files,
  input,
  handleChangeInput,
  handleChangeInputFile,
}) => {
  const error = useSelector((state) => state.ErrorReducer.error);

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
            <small className="text-red mt-3 mr-2">(obrigatório)</small>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("name") ? `* ${error.name.join(" ")}` : ""}
          </small>
        </FormGroup>
      </Col>
      <Col lg="12">
        <div style={{ width: "50%" }}>
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
                className="form-control-alternative d-none"
                type="file"
                name="profilepic"
                onChange={handleChangeInputFile}
              />
            </label>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("profilepic")
              ? `* ${error.profilepic.join(" ")}`
              : ""}
          </small>
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
            <small className="text-red mt-3 mr-2">(obrigatório)</small>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("email") ? `* ${error.email.join(" ")}` : ""}
          </small>
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
            <small className="text-red mt-3 mr-2">(obrigatório)</small>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("phone") ? `* ${error.phone.join(" ")}` : ""}
          </small>
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
            <small className="text-red mt-3 mr-2">(obrigatório)</small>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("password1")
              ? `* ${error.password1.join(" ")}`
              : ""}
          </small>
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
            <small className="text-red mt-3 mr-2">(obrigatório)</small>
          </InputGroup>
          <small className="text-red">
            {error.hasOwnProperty("password2")
              ? `* ${error.password2.join(" ")}`
              : ""}
          </small>
        </FormGroup>
      </Col>
      <Col lg="12">
        {Object.keys(error).length > 0 && (
          <div className="mt-3 p-2 text-white bg-red rounded">
            Atenção: Role a página para cima e corrija os campos que contém um *
            seguindo de um texto em vermelho.
          </div>
        )}
      </Col>
    </Row>
  );
};

export default FormUsuarioAfiliacao;
