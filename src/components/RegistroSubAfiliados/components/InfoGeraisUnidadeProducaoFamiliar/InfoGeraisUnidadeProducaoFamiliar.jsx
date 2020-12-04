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
          <label className="form-control-label" htmlFor="operational_core">
            Núcleo Operacional da ATER (Município)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="operational_core"
            title="Núcleo Operacional da ATER (Município)"
            placeholder="Ex: Seaprof"
            value={inputGeneralFamilyUnitInfo.operational_core}
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
          <label className="form-control-label" htmlFor="citizenship_responsible">
            Muncípio de Origem do Responsável pelo Lote
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="citizenship_responsible"
            value={inputGeneralFamilyUnitInfo.citizenship_responsible}
            title="Muncípio de Origem do Responsável pelo Lote"
            placeholder="Ex: Aracaju"
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="year_residence">
            Anos que reside na região
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="year_residence"
            title="Anos que reside na região"
            placeholder="Ex: 6"
            value={inputGeneralFamilyUnitInfo.year_residence}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="concession_validity">
            Validade da Concessão
          </label>
          <Input
            className="form-control-alternative"
            type="date"
            name="concession_validity"
            title="Validade da Concessão"
            value={inputGeneralFamilyUnitInfo.concession_validity}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="always_resided">
            Sempre residiu no meio rural?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputGeneralFamilyUnitInfo.always_resided}
            title="Sempre residiu no meio rural?"
            name="always_resided"
            id="select"
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
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="beneficiary_knows_limit">
            O beneficiário conhece o limite do lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputGeneralFamilyUnitInfo.beneficiary_knows_limit}
            title="O beneficiário conhece o limite do lote?"
            name="beneficiary_knows_limit"
            id="select"
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
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="lot_has_marking">
            Lote tem marco que identifica os limites?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputGeneralFamilyUnitInfo.lot_has_marking}
            title="Lote tem marco que identifica os limites?"
            name="lot_has_marking"
            id="select"
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
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_contract">
            O beneficiário tem o contrato/termo de concessão de uso?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputGeneralFamilyUnitInfo.has_contract}
            title="O beneficiário tem o contrato/termo de concessão de uso?"
            name="has_contract"
            id="select"
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

export default InfoGeraisUnidadeProducaoFamiliar;
