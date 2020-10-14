import React from "react";
import { Input, FormGroup, Col, Row } from "reactstrap";

const DiagnosticoDeSistemasAgrarios = ({
  inputDiagnosisOfAgriculturalSystems,
  setInputDiagnosisOfAgriculturalSystems,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputDiagnosisOfAgriculturalSystems({
      ...inputDiagnosisOfAgriculturalSystems,
      [name]: value,
    });
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Qual é a renda extra lote (fora do lote) anual?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="name"
            title="Qual é a renda extra lote (fora do lote) anual?"
            placeholder="Qual é a renda extra lote fora do lote) anual?"
            value={inputDiagnosisOfAgriculturalSystems.extraIncome}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            A família recebe algum tipo de aux. de programa social
            governamental?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.assistance}
            title="A família recebe algum tipo de aux. de programa social
          governamental?"
            name="assistance"
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
          <label className="form-control-label" htmlFor="name">
            A família acessou alguma política pública para moradia?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.publicHousingpolicy}
            title="A família acessou alguma política pública para moradia?"
            name="publicHousingpolicy"
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
          <label className="form-control-label" htmlFor="name">
            A família acessou alguma linha de financiamento para projetos
            desenvolvidos no lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.financing}
            title="A família acessou alguma linha de financiamento para projetos desenvolvidos no lote?"
            name="financing"
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
          <label className="form-control-label" htmlFor="name">
            Tem meio de comunicação rural?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.ruralCommunicationMedium}
            title="Tem meio de comunicação rural?"
            name="ruralCommunicationMedium"
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
          <label className="form-control-label" htmlFor="name">
            Comunicação rural - Tipo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="ruralCommunicationType"
            value={inputDiagnosisOfAgriculturalSystems.ruralCommunicationType}
            placeholder="Comunicação rural - Tipo"
            onChange={handleChangeInput}
            title="Comunicação rural - Tipo"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Destino final do lixo seco
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="garbageDestination"
            title="Destino final do lixo seco"
            placeholder="Destino final do lixo seco"
            value={inputDiagnosisOfAgriculturalSystems.garbageDestination}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Saneamento básico da moradia (esgoto sanitário)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="sanitation"
            title="Saneamento básico da moradia (esgoto sanitário)"
            placeholder="Saneamento básico da moradia (esgoto sanitário)"
            value={inputDiagnosisOfAgriculturalSystems.sanitation}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Principal meio de transporte escolar
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="schoolTransport"
            title="Principal meio de transporte escolar"
            placeholder="Principal meio de transporte escolar"
            value={inputDiagnosisOfAgriculturalSystems.schoolTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Contrata empregados para ajudar na produção do lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.hireEmployees}
            title="Contrata empregados para ajudar na produção do lote?"
            name="hireEmployees"
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
          <label className="form-control-label" htmlFor="name">
            Quantos empregados permanentes
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="howManyPermanentEmployees"
            title="Quantos empregados permanentes"
            placeholder="Quantos empregados permanentes"
            value={
              inputDiagnosisOfAgriculturalSystems.howManyPermanentEmployees
            }
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Recebeu assistência técnica na última safra/ano?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.receivedTechnicalAssistance
            }
            title="Recebeu assistência técnica na última safra/ano?"
            name="receivedTechnicalAssistance"
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
          <label className="form-control-label" htmlFor="name">
            Lembra da última queimada descontrolada que atingiu o lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.rememberTheLastFire}
            title="Lembra da última queimada descontrolada que atingiu o lote?"
            name="rememberTheLastFire"
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
          <label className="form-control-label" htmlFor="name">
            Ano dessa queimada
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="yearOfTheBurn"
            title="Ano dessa queimada"
            placeholder="Ano dessa queimada"
            value={inputDiagnosisOfAgriculturalSystems.yearOfTheBurn}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            O lote tem acesso a água?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.accessToWater}
            title="O lote tem acesso a água?"
            name="accessToWater"
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
          <label className="form-control-label" htmlFor="name">
            Tem eletrificação?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.electricity}
            title="Tem eletrificação?"
            name="electricity"
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
          <label className="form-control-label" htmlFor="name">
            Tipo de rede
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="NetworkType"
            title="Tipo de rede"
            placeholder="Tipo de rede"
            value={inputDiagnosisOfAgriculturalSystems.NetworkType}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Energia disponível atender à produção?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.availableEnergyMeetsProduction
            }
            title="Energia disponível atender à produção?"
            name="availableEnergyMeetsProduction"
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
          <label className="form-control-label" htmlFor="name">
            Complementa o fornecimento de energia?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.complementsEnergySupply}
            title="Complementa o fornecimento de energia?"
            name="complementsEnergySupply"
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
          <label className="form-control-label" htmlFor="name">
            Utiliza, também, algum dessses?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="itAlsoUses"
            title="Utiliza, também, algum dessses?"
            placeholder="Utiliza, também, algum dessses?"
            value={inputDiagnosisOfAgriculturalSystems.itAlsoUses}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Deseja obter/complementar?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.wantToGetComplementary}
            title="Deseja obter/complementar?"
            name="wantToGetComplementary"
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
          <label className="form-control-label" htmlFor="name">
            Tratamento da água de consumo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterTreatment"
            title="Tratamento da água de consumo"
            placeholder="Tratamento da água de consumo"
            value={inputDiagnosisOfAgriculturalSystems.waterTreatment}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Lote tem acesso a água o ano todo?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.accessToWaterAllYear}
            title="Lote tem acesso a água o ano todo?"
            name="accessToWaterAllYear"
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
          <label className="form-control-label" htmlFor="name">
            Fontes de água natural no lote são protegidas por mata ciliar?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.protectedByRiparianForest
            }
            title="Fontes de água natural no lote são protegidas por mata ciliar?"
            name="protectedByRiparianForest"
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
          <label className="form-control-label" htmlFor="name">
            Distância entre local da captação da fonte de água natural para
            moradia e elementos contaminantes? (m)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="distanceFromTheCatchment"
            title="Distância entre local da captação da fonte de água natural para moradia e elementos contaminantes? (m)"
            placeholder="Ex: 50"
            value={inputDiagnosisOfAgriculturalSystems.distanceFromTheCatchment}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            A captação levou à alteração no curso natural do córrego da fonte?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.alterationWatercourse}
            title="A captação levou à alteração no curso natural do córrego da fonte?"
            name="alterationWatercourse"
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
          <label className="form-control-label" htmlFor="name">
            Há captação de água da chuva para reaproveitamento no lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.rainwaterHarvesting}
            title="Há captação de água da chuva para reaproveitamento no lote?"
            name="rainwaterHarvesting"
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
          <label className="form-control-label" htmlFor="name">
            Como é utilizada a água captada da chuva?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="howRainwaterIsUsed"
            title="Como é utilizada a água captada da chuva?"
            placeholder="Como é utilizada a água captada da chuva?"
            value={inputDiagnosisOfAgriculturalSystems.howRainwaterIsUsed}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default DiagnosticoDeSistemasAgrarios;
