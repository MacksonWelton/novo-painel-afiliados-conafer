import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, FormGroup, Col, Row } from "reactstrap";
import { getAllAllotments } from "redux/actions/Allotments";
import { formatReal } from "utils/converterToMoney";

const DiagnosisAgriculturalSystems = ({
  inputDiagnosisOfAgriculturalSystems,
  setInputDiagnosisOfAgriculturalSystems,
}) => {
  const dispatch = useDispatch();

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [])

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputDiagnosisOfAgriculturalSystems({
      ...inputDiagnosisOfAgriculturalSystems,
      [name]: value,
    });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">
              Diagnóstico de Sistemas Agrários (social, ambiental e econômico)
            </h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="allotment">
                Lote
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="allotment"
                id="allotment"
                value={inputDiagnosisOfAgriculturalSystems.allotment}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allAllotments.map((allotment, i) => (
                  <option key={i} value={allotment.id}>
                    {allotment.property_name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex align-items-end">
            <FormGroup className="w-100">
              <label className="form-control-label" htmlFor="income_off_lot">
                Qual é a renda extra lote (fora do lote) anual?
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="income_off_lot"
                id="income_off_lot"
                title="Qual é a renda extra lote (fora do lote) anual?"
                placeholder="Ex: 1.000,00"
                value={inputDiagnosisOfAgriculturalSystems.income_off_lot}
                onChange={(event) => {
                  event = {target: {
                    name: event.target.name,
                    value: formatReal(event.target.value)
                  }}
                  handleChangeInput(event)}}
                  maxLength="16"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="government_assistance"
              >
                A família recebe algum tipo de aux. de programa social
                governamental? <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={
                  inputDiagnosisOfAgriculturalSystems.government_assistance
                }
                title="A família recebe algum tipo de aux. de programa social
          governamental?"
                name="government_assistance"
                id="government_assistance"
                required
              >
                <option value="" hidden>
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
                A família acessou alguma política pública para moradia?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.housing_policy}
                title="A família acessou alguma política pública para moradia?"
                name="housing_policy"
                id="housing_policy"
                required
              >
                <option value="" hidden>
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
                desenvolvidos no lote?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.financing_line}
                title="A família acessou alguma linha de financiamento para projetos desenvolvidos no lote?"
                name="financing_line"
                id="financing_line"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="has_rural_communication"
              >
                Tem meio de comunicação rural?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={
                  inputDiagnosisOfAgriculturalSystems.has_rural_communication
                }
                title="Tem meio de comunicação rural?"
                name="has_rural_communication"
                id="has_rural_communication"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="rural_communication"
              >
                Comunicação rural - Tipo
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="rural_communication"
                id="rural_communication"
                value={inputDiagnosisOfAgriculturalSystems.rural_communication}
                placeholder="Ex: Telefone Celular"
                onChange={handleChangeInput}
                title="Comunicação rural - Tipo"
                maxLength="255"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="final_destination_waste"
              >
                Destino final do lixo seco{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="final_destination_waste"
                id="final_destination_waste"
                title="Destino final do lixo seco"
                placeholder="Ex: Coleta pública"
                value={
                  inputDiagnosisOfAgriculturalSystems.final_destination_waste
                }
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="has_basic_sanitation"
              >
                Saneamento básico da moradia (esgoto sanitário){" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="has_basic_sanitation"
                id="has_basic_sanitation"
                title="Saneamento básico da moradia (esgoto sanitário)"
                placeholder="Ex: Fossa Séptica"
                value={inputDiagnosisOfAgriculturalSystems.has_basic_sanitation}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex flex-column justify-content-end">
            <FormGroup>
              <label className="form-control-label" htmlFor="schools_transport">
                Principal meio de transporte escolar{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="schools_transport"
                id="schools_transport"
                title="Principal meio de transporte escolar"
                placeholder="Ex: Ônibus Público"
                value={inputDiagnosisOfAgriculturalSystems.schools_transport}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="hire_employees">
                Contrata empregados para ajudar na produção do lote?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.hire_employees}
                title="Contrata empregados para ajudar na produção do lote?"
                name="hire_employees"
                id="hire_employees"
                required
              >
                <option value="" hidden>
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
                id="fixed_employees"
                title="Quantos empregados permanentes"
                placeholder="Ex: 10"
                value={inputDiagnosisOfAgriculturalSystems.fixed_employees}
                onChange={handleChangeInput}
                max="2147483647"
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="technical_assistance"
              >
                Recebeu assistência técnica na última safra/ano?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.technical_assistance}
                title="Recebeu assistência técnica na última safra/ano?"
                name="technical_assistance"
                id="technical_assistance"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="reminds_burning_in_lot"
              >
                Lembra da última queimada descontrolada que atingiu o lote?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={
                  inputDiagnosisOfAgriculturalSystems.reminds_burning_in_lot
                }
                title="Lembra da última queimada descontrolada que atingiu o lote?"
                name="reminds_burning_in_lot"
                id="reminds_burning_in_lot"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col
            lg="6"
            className="d-flex align-items-end justify-content-stretch"
          >
            <FormGroup className="w-100">
              <label className="form-control-label" htmlFor="year_burning">
                Ano dessa queimada
              </label>
              <Input
                className="form-control-alternative d-inline"
                type="date"
                name="year_burning"
                id="year_burning"
                title="Ano dessa queimada"
                placeholder="Ex: 2016"
                value={inputDiagnosisOfAgriculturalSystems.year_burning}
                onChange={handleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="has_water_access">
                O lote tem acesso a água?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.has_water_access}
                title="O lote tem acesso a água?"
                name="has_water_access"
                id="has_water_access"
                required
              >
                <option value="" hidden>
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
                Tem eletrificação?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.has_energy}
                title="Tem eletrificação?"
                name="has_energy"
                id="has_energy"
                required
              >
                <option value="" hidden>
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
                Tipo de rede <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="network_type"
                title="Tipo de rede"
                placeholder="Tipo de rede"
                value={inputDiagnosisOfAgriculturalSystems.network_type}
                onChange={handleChangeInput}
                maxLength="255"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="energy_meets_production"
              >
                Energia disponível atender à produção?{" "}
                <small className="text-red">(obrigatório)</small>
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
                id="energy_meets_production"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="complements_energy"
              >
                Complementa o fornecimento de energia?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.complements_energy}
                title="Complementa o fornecimento de energia?"
                name="complements_energy"
                id="complements_energy"
                required
              >
                <option value="" hidden>
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
                Utiliza, também, algum dessses?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="uses_any_these"
                id="uses_any_these"
                title="Utiliza, também, algum dessses?"
                placeholder="Utiliza, também, algum dessses?"
                value={inputDiagnosisOfAgriculturalSystems.uses_any_these}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="want_to_get">
                Deseja obter/complementar?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.want_to_get}
                title="Deseja obter/complementar?"
                name="want_to_get"
                id="want_to_get"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="potable_water">
                Tratamento da água de consumo{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="potable_water"
                id="potable_water"
                title="Tratamento da água de consumo"
                placeholder="Ex: Estação de Tratamento de Água"
                value={inputDiagnosisOfAgriculturalSystems.potable_water}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex align-items-end">
            <FormGroup>
              <label className="form-control-label" htmlFor="year_water_access">
                Lote tem acesso a água o ano todo?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative d-inline"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.year_water_access}
                title="Lote tem acesso a água o ano todo?"
                name="year_water_access"
                id="year_water_access"
                required
              >
                <option value="" hidden>
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
                Fontes de água natural no lote são protegidas por mata ciliar?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.riparian_forest}
                title="Fontes de água natural no lote são protegidas por mata ciliar?"
                name="riparian_forest"
                id="riparian_forest"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="distance_water_intake"
              >
                Distância entre local da captação da fonte de água natural para
                moradia e elementos contaminantes? (m){" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="distance_water_intake"
                id="distance_water_intake"
                title="Distância entre local da captação da fonte de água natural para moradia e elementos contaminantes? (m)"
                placeholder="Ex: 50"
                value={
                  inputDiagnosisOfAgriculturalSystems.distance_water_intake
                }
                onChange={handleChangeInput}
                max="2147483647"
                min="0"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex align-items-end">
            <FormGroup>
              <label className="form-control-label" htmlFor="name">
                A captação levou à alteração no curso natural do córrego da
                fonte?
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={
                  inputDiagnosisOfAgriculturalSystems.alteration_water_course
                }
                title="A captação levou à alteração no curso natural do córrego da fonte?"
                name="alteration_water_course"
                id="alteration_water_course"
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="captures_rain_water"
              >
                Há captação de água da chuva para reaproveitamento no lote?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputDiagnosisOfAgriculturalSystems.captures_rain_water}
                title="Há captação de água da chuva para reaproveitamento no lote?"
                name="captures_rain_water"
                id="captures_rain_water"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex align-items-end">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="how_uses_rainwater"
              >
                Como é utilizada a água captada da chuva?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative d-inline"
                type="text"
                name="how_uses_rainwater"
                id="how_uses_rainwater"
                title="Como é utilizada a água captada da chuva?"
                placeholder="Ex: Aguar plantas"
                value={inputDiagnosisOfAgriculturalSystems.how_uses_rainwater}
                onChange={handleChangeInput}
                maxLength="255"
                required
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default DiagnosisAgriculturalSystems;
