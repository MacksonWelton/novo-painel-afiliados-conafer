import React from "react";
import { Col, FormGroup, Input, InputGroup, Row } from "reactstrap";
import { mask } from "remask";

const IdentificacaoDoBeneficiario = ({
  inputBeneficiaryIdentity,
  setInputBeneficiaryIdentity,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputBeneficiaryIdentity({ ...inputBeneficiaryIdentity, [name]: value });
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Nome completo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="name"
            id="name"
            title="Digite seu nome completo"
            placeholder="Digite seu nome completo"
            value={inputBeneficiaryIdentity.name}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Email
          </label>
          <Input
            className="form-control-alternative"
            type="email"
            name="email"
            title="Email"
            placeholder="Email"
            value={inputBeneficiaryIdentity.email}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            CPF
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="cpf"
            value={mask(inputBeneficiaryIdentity.cpf, [
              "999.999.999-99",
            ])}
            placeholder="000.000.000-00"
            onChange={handleChangeInput}
            title="CPF deve conter mais de 11 números."
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Código de Coleta
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="collectionCode"
            title="Código de Coleta"
            placeholder="Código de Coleta"
            value={inputBeneficiaryIdentity.collectionCode}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Código de Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlement"
            title="Código de Assentamento"
            placeholder="Código de Assentamento"
            value={inputBeneficiaryIdentity.settlement}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Naturalidade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="placeOfBirth"
            title="Naturalidade"
            placeholder="Naturalidade"
            value={inputBeneficiaryIdentity.placeOfBirth}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Status na RB
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="rb"
            title="Status na RB"
            placeholder="Status na RB"
            value={inputBeneficiaryIdentity.rb}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Ocupa área destinada pelo Incra
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="incraArea"
            title="Ocupa área destinada pelo Incra"
            placeholder="Ocupa área destinada pelo Incra"
            value={inputBeneficiaryIdentity.incraArea}
            onChange={handleChangeInput}
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default IdentificacaoDoBeneficiario;
