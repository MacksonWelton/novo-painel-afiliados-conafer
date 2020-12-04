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
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="income_off_lot">
            Qual é a renda extra lote (fora do lote) anual?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="income_off_lot"
            title="Qual é a renda extra lote (fora do lote) anual?"
            placeholder="Ex: R$ 0,00 a R$ 5.000,00"
            value={inputDiagnosisOfAgriculturalSystems.income_off_lot}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="government_assistance">
            A família recebe algum tipo de aux. de programa social
            governamental?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.government_assistance}
            title="A família recebe algum tipo de aux. de programa social
          governamental?"
            name="government_assistance"
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
          <label className="form-control-label" htmlFor="housing_policy">
            A família acessou alguma política pública para moradia?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.housing_policy}
            title="A família acessou alguma política pública para moradia?"
            name="housing_policy"
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
          <label className="form-control-label" htmlFor="financing_line">
            A família acessou alguma linha de financiamento para projetos
            desenvolvidos no lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.financing_line}
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
          <label className="form-control-label" htmlFor="has_rural_communication">
            Tem meio de comunicação rural?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.has_rural_communication}
            title="Tem meio de comunicação rural?"
            name="has_rural_communication"
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
          <label className="form-control-label" htmlFor="rural_communication">
            Comunicação rural - Tipo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="rural_communication"
            value={inputDiagnosisOfAgriculturalSystems.rural_communication}
            placeholder="Ex: Telefone Celular"
            onChange={handleChangeInput}
            title="Comunicação rural - Tipo"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="final_destination_waste">
            Destino final do lixo seco
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="final_destination_waste"
            title="Destino final do lixo seco"
            placeholder="Ex: Coleta pública"
            value={inputDiagnosisOfAgriculturalSystems.final_destination_waste}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_basic_sanitation">
            Saneamento básico da moradia (esgoto sanitário)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="has_basic_sanitation"
            title="Saneamento básico da moradia (esgoto sanitário)"
            placeholder="Ex: Fossa Séptica"
            value={inputDiagnosisOfAgriculturalSystems.has_basic_sanitation}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="schools_transport">
            Principal meio de transporte escolar
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="schools_transport"
            title="Principal meio de transporte escolar"
            placeholder="Ex: Ônibus Público"
            value={inputDiagnosisOfAgriculturalSystems.schools_transport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="hire_employees">
            Contrata empregados para ajudar na produção do lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.hire_employees}
            title="Contrata empregados para ajudar na produção do lote?"
            name="hire_employees"
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
          <label className="form-control-label" htmlFor="fixed_employees">
            Quantos empregados permanentes
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="fixed_employees"
            title="Quantos empregados permanentes"
            placeholder="Ex: 10"
            value={
              inputDiagnosisOfAgriculturalSystems.fixed_employees
            }
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="technical_assistance">
            Recebeu assistência técnica na última safra/ano?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.technical_assistance
            }
            title="Recebeu assistência técnica na última safra/ano?"
            name="technical_assistance"
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
          <label className="form-control-label" htmlFor="reminds_burning_in_lot">
            Lembra da última queimada descontrolada que atingiu o lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.reminds_burning_in_lot}
            title="Lembra da última queimada descontrolada que atingiu o lote?"
            name="reminds_burning_in_lot"
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
      <Col lg="6" className="d-flex align-items-end justify-content-stretch">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="year_burning">
            Ano dessa queimada
          </label>
          <Input
            className="form-control-alternative d-inline"
            type="text"
            name="year_burning"
            title="Ano dessa queimada"
            placeholder="Ex: 2016"
            value={inputDiagnosisOfAgriculturalSystems.year_burning}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_water_access">
            O lote tem acesso a água?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.has_water_access}
            title="O lote tem acesso a água?"
            name="has_water_access"
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
          <label className="form-control-label" htmlFor="has_energy">
            Tem eletrificação?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.has_energy}
            title="Tem eletrificação?"
            name="has_energy"
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
          <label className="form-control-label" htmlFor="network_type">
            Tipo de rede
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="network_type"
            title="Tipo de rede"
            placeholder="Tipo de rede"
            value={inputDiagnosisOfAgriculturalSystems.network_type}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="energy_meets_production">
            Energia disponível atender à produção?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.energy_meets_production
            }
            title="Energia disponível atender à produção?"
            name="energy_meets_production"
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
          <label className="form-control-label" htmlFor="complements_energy">
            Complementa o fornecimento de energia?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.complements_energy}
            title="Complementa o fornecimento de energia?"
            name="complements_energy"
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
          <label className="form-control-label" htmlFor="uses_any_these">
            Utiliza, também, algum dessses?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="uses_any_these"
            title="Utiliza, também, algum dessses?"
            placeholder="Utiliza, também, algum dessses?"
            value={inputDiagnosisOfAgriculturalSystems.uses_any_these}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="want_to_get">
            Deseja obter/complementar?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.want_to_get}
            title="Deseja obter/complementar?"
            name="want_to_get"
            placeholder="Ex: Energia Solar"
            id="select"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="potable_water">
            Tratamento da água de consumo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="potable_water"
            title="Tratamento da água de consumo"
            placeholder="Ex: Estação de Tratamento de Água"
            value={inputDiagnosisOfAgriculturalSystems.potable_water}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup>
          <label className="form-control-label" htmlFor="year_water_access">
            Lote tem acesso a água o ano todo?
          </label>
          <Input
            className="form-control-alternative d-inline"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.year_water_access}
            title="Lote tem acesso a água o ano todo?"
            name="year_water_access"
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
          <label className="form-control-label" htmlFor="riparian_forest">
            Fontes de água natural no lote são protegidas por mata ciliar?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={
              inputDiagnosisOfAgriculturalSystems.riparian_forest
            }
            title="Fontes de água natural no lote são protegidas por mata ciliar?"
            name="riparian_forest"
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
          <label className="form-control-label" htmlFor="distance_water_intake">
            Distância entre local da captação da fonte de água natural para
            moradia e elementos contaminantes? (m)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="distance_water_intake"
            title="Distância entre local da captação da fonte de água natural para moradia e elementos contaminantes? (m)"
            placeholder="Ex: 50"
            value={inputDiagnosisOfAgriculturalSystems.distance_water_intake}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            A captação levou à alteração no curso natural do córrego da fonte?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.alteration_water_course}
            title="A captação levou à alteração no curso natural do córrego da fonte?"
            name="alteration_water_course"
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
          <label className="form-control-label" htmlFor="captures_rain_water">
            Há captação de água da chuva para reaproveitamento no lote?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDiagnosisOfAgriculturalSystems.captures_rain_water}
            title="Há captação de água da chuva para reaproveitamento no lote?"
            name="captures_rain_water"
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
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup>
          <label className="form-control-label" htmlFor="how_uses_rainwater">
            Como é utilizada a água captada da chuva?
          </label>
          <Input
            className="form-control-alternative d-inline"
            type="text"
            name="how_uses_rainwater"
            title="Como é utilizada a água captada da chuva?"
            placeholder="Ex: Aguar plantas"
            value={inputDiagnosisOfAgriculturalSystems.how_uses_rainwater}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default DiagnosticoDeSistemasAgrarios;
