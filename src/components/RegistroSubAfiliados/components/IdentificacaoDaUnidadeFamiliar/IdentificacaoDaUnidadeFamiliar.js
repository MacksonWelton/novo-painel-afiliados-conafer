import React from "react";
import { Input, InputGroup } from "reactstrap";
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
    <div className="row">
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="settlementCode"
          title="Código do Assentamento"
          placeholder="Código do Assentamento"
          value={inputFamilyUnitId.settlementCode}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="status"
          name="status"
          title="Status"
          placeholder="Status"
          value={inputFamilyUnitId.status}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="cpf"
          value={mask(unMask(inputFamilyUnitId.cpf), ["999.999.999-99"])}
          placeholder="CPF"
          onChange={handleChangeInput}
          title="CPF deve conter mais de 11 números."
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="rg"
          title="RG"
          placeholder="RG"
          value={inputFamilyUnitId.rg}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="nis"
          title="NIS"
          placeholder="NIS"
          value={inputFamilyUnitId.nis}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="civilStatus"
          title="Estado Civil"
          placeholder="Estado Civil"
          value={inputFamilyUnitId.civilStatus}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="placeOfBirth"
          title="Nome da Mãe"
          placeholder="Nome da Mãe"
          value={inputFamilyUnitId.motherName}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="spouseName"
          title="Nome do Cônjuge"
          placeholder="Nome do Cônjuge"
          value={inputFamilyUnitId.spouseName}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="spouseCPF"
          title="CPF do Cônjuge"
          placeholder="CPF do Cônjuge"
          value={mask(unMask(inputFamilyUnitId.spouseCPF), ["999.999.999-99"])}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="naturalness"
          title="Naturalidade"
          placeholder="Naturalidade"
          value={inputFamilyUnitId.naturalness}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="nationality"
          title="Nacionalidade"
          placeholder="Nacionalidade"
          value={inputFamilyUnitId.nationality}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
    </div>
  );
};

export default IdentificacaoDaUnidadeFamiliar;