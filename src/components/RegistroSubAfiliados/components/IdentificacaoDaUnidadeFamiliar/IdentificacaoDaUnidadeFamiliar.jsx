import React from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { mask, unMask } from "remask";

const IdentificacaoDaUnidadeFamiliar = ({
  inputFamilyUnitId,
  setInputFamilyUnitId,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputFamilyUnitId({ ...inputFamilyUnitId, [name]: value });
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement_code">
            Código do Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlement_code"
            title="Código do Assentamento"
            placeholder="Código do Assentamento"
            value={inputFamilyUnitId.settlement_code}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="status">
            Status
          </label>
          <Input
            className="form-control-alternative"
            type="status"
            name="status"
            title="Status"
            placeholder="Ex: Beneficiário"
            value={inputFamilyUnitId.status}
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
            value={mask(unMask(inputFamilyUnitId.cpf), ["999.999.999-99"])}
            placeholder="Ex: 000.000.000-00"
            onChange={handleChangeInput}
            title="CPF deve conter mais de 11 números."
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="rg">
            RG
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="rg"
            title="RG"
            placeholder="Ex: 0000000"
            value={inputFamilyUnitId.rg}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="nis">
            NIS
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="nis"
            title="NIS"
            placeholder="Ex: 0000000"
            value={inputFamilyUnitId.nis}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="marital_status">
            Estado Civil
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="marital_status"
            title="Estado Civil"
            placeholder="Ex: Solteiro"
            value={inputFamilyUnitId.civilStatus}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="mother_name">
            Nome da Mãe
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="mother_name"
            title="Nome da Mãe"
            placeholder="Ex: Maria da Silva"
            value={inputFamilyUnitId.motherName}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="spouse_name">
            Nome do Cônjuge
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="spouse_name"
            title="Nome do Cônjuge"
            placeholder="Ex: Fernanda da Silva"
            value={inputFamilyUnitId.spouse_name}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="spouse_cpf">
            CPF do Cônjuge
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="spouse_cpf"
            title="CPF do Cônjuge"
            placeholder="Ex: 000.000.000-00"
            value={mask(unMask(inputFamilyUnitId.spouse_cpf), [
              "999.999.999-99",
            ])}
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
            placeholder="Ex: São Paulo - SP"
            value={inputFamilyUnitId.citizenship}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="nationality">
            Nacionalidade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="nationality"
            title="Nacionalidade"
            placeholder="Ex: Brasileiro"
            value={inputFamilyUnitId.nationality}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default IdentificacaoDaUnidadeFamiliar;
