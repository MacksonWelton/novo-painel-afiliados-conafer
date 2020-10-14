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
          <label className="form-control-label" htmlFor="name">
            Código do Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlementCode"
            title="Código do Assentamento"
            placeholder="Código do Assentamento"
            value={inputFamilyUnitId.settlementCode}
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
            placeholder="Status"
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
            placeholder="000.000.000-00"
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
            placeholder="RG"
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
            placeholder="NIS"
            value={inputFamilyUnitId.nis}
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
            name="civilStatus"
            title="Estado Civil"
            placeholder="Estado Civil"
            value={inputFamilyUnitId.civilStatus}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="placeOfBirth">
            Nome da Mãe
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="placeOfBirth"
            title="Nome da Mãe"
            placeholder="Nome da Mãe"
            value={inputFamilyUnitId.motherName}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="spouseName">
            Nome do Cônjuge
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="spouseName"
            title="Nome do Cônjuge"
            placeholder="Nome do Cônjuge"
            value={inputFamilyUnitId.spouseName}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="spouseCPF">
            CPF do Cônjuge
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="spouseCPF"
            title="CPF do Cônjuge"
            placeholder="CPF do Cônjuge"
            value={mask(unMask(inputFamilyUnitId.spouseCPF), [
              "999.999.999-99",
            ])}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="naturalness">
            Naturalidade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="naturalness"
            title="Naturalidade"
            placeholder="Naturalidade"
            value={inputFamilyUnitId.naturalness}
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
            placeholder="Nacionalidade"
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
