import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
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
            placeholder="Ex: João da Silva"
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
            placeholder="Ex: email@conafer.org.br"
            value={inputBeneficiaryIdentity.email}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="cpf">
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
          <label className="form-control-label" htmlFor="collection_code">
            Código de Coleta
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="collection_code"
            title="Código de Coleta"
            placeholder="Ex: 0000"
            value={inputBeneficiaryIdentity.collection_code}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement_code">
            Código de Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlement_code"
            title="Código de Assentamento"
            placeholder="Ex: AFG0000"
            value={inputBeneficiaryIdentity.settlement_code}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="citizenship">
            Naturalidade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="citizenship"
            title="Naturalidade"
            placeholder="Ex: Maceió - AL"
            value={inputBeneficiaryIdentity.citizenship}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="rb_status">
            Status na RB
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="rb_status"
            title="Status na RB"
            placeholder="Ex: Titulado"
            value={inputBeneficiaryIdentity.rb_status}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="incra_area">
            Ocupa área destinada pelo Incra
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="incra_area"
            title="Ocupa área destinada pelo Incra"
            placeholder="Ocupa área destinada pelo Incra"
            value={inputBeneficiaryIdentity.incra_area}
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
