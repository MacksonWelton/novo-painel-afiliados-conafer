import React from "react";
import { Input, InputGroup } from "reactstrap";

const InfoGeraisUnidadeProducaoFamiliar = ({
  inputGeneralFamilyUnitInfo,
  setInputGeneralFamilyUnitInfo,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputGeneralFamilyUnitInfo({
      ...inputGeneralFamilyUnitInfo,
      [name]: value,
    });
  };

  return (
    <div className="row">
      <InputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <Input
          type="text"
          name="operationalCore"
          title="Núcleo Operacional da ATER (Município)"
          placeholder="Núcleo Operacional da ATER (Município)"
          value={inputGeneralFamilyUnitInfo.operationalCore}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.state}
          title="Estado de Origem do Responsável"
          name="state"
          id="select"
        >
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </Input>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-5 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="county"
          value={inputGeneralFamilyUnitInfo.county}
          title="Muncípio de Origem do Responsável pelo Lote"
          placeholder="Muncípio de Origem do Responsável"
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-12">
        <Input
          type="number"
          name="yearsResidingInTheRegion"
          title="Anos que reside na região"
          placeholder="Anos que reside na região"
          value={inputGeneralFamilyUnitInfo.yearsResidingInTheRegion}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-3 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="contractValidity"
          title="Validade da Concessão"
          placeholder="Validade da Concessão"
          value={inputGeneralFamilyUnitInfo.contractValidity}
          onChange={handleChangeInput}
          onFocus={(e) => (e.currentTarget.type = "date")}
          onBlur={(e) => (e.currentTarget.type = "text")}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <Input
          type="select"
          custom
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.alwaysResidedInTheCountryside}
          title="Sempre residiu no meio rural?"
          name="alwaysResidedInTheCountryside"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Sempre residiu no meio rural?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Input>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.knowHheLimitsOfTheLandPlot}
          title="O beneficiário conhece o limite do lote?"
          name="knowHheLimitsOfTheLandPlot"
          id="select"
          required
        >
          <option value={undefined} hidden>
            O benef. conhece o limite do lote?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Input>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.landPlotBoundaries}
          title="Lote tem marco que identifica os limites?"
          name="landPlotBoundaries"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Lote tem marco que identifica os limites?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Input>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-12">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputGeneralFamilyUnitInfo.contract}
          title="O beneficiário tem o contrato/termo de concessão de uso?"
          name="contract"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Contrato/termo de concessão de uso?
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Input>
      </InputGroup>
    </div>
  );
};

export default InfoGeraisUnidadeProducaoFamiliar;