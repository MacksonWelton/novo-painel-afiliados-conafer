import React from "react";
import { Input, FormGroup, Row, Col } from "reactstrap";

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
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Núcleo Operacional da ATER (Município)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="operationalCore"
            title="Núcleo Operacional da ATER (Município)"
            placeholder="Núcleo Operacional da ATER (Município)"
            value={inputGeneralFamilyUnitInfo.operationalCore}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Estado de Origem do Responsável
          </label>
          <Input
            className="form-control-alternative"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Muncípio de Origem do Responsável pelo Lote
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="county"
            value={inputGeneralFamilyUnitInfo.county}
            title="Muncípio de Origem do Responsável pelo Lote"
            placeholder="Muncípio de Origem do Responsável"
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Anos que reside na região
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="yearsResidingInTheRegion"
            title="Anos que reside na região"
            placeholder="Anos que reside na região"
            value={inputGeneralFamilyUnitInfo.yearsResidingInTheRegion}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Validade da Concessão
          </label>
          <Input
            className="form-control-alternative"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Sempre residiu no meio rural?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            O beneficiário conhece o limite do lote?
          </label>
          <Input
            className="form-control-alternative"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Lote tem marco que identifica os limites?
          </label>
          <Input
            className="form-control-alternative"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            O beneficiário tem o contrato/termo de concessão de uso?
          </label>
          <Input
            className="form-control-alternative"
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
        </FormGroup>
      </Col>
    </Row>
  );
};

export default InfoGeraisUnidadeProducaoFamiliar;
