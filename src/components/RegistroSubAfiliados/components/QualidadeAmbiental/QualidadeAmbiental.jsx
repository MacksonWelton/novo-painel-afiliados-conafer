import React from "react";
import { Input, FormGroup, Row, Col } from "reactstrap";

const QualidadeAmbiental = ({
  inputEnvironmentalQuality,
  setInputEnvironmentQuality,
}) => {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputEnvironmentQuality({ ...inputEnvironmentalQuality, [name]: value });
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="qa_meets_family">
            Neste momento a qualidade ambiental local atende as necessidades
            particulares da família?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.qa_meets_family}
            title="Neste momento a qualidade ambiental local atende as necessidades particulares da família?"
            name="qa_meets_family"
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
      <div className="col-12">
        <h3>Quanto afeta a vida e produção</h3>
        <hr />
      </div>
      <Col lg="12">
        <label className="form-control-label" htmlFor="equine">
          Em ordem de importância (1 interfere mais e 5 interfere menos) os
          fatos que mais interferem na sua produção e qualidade de vida
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.water}
            title="Água"
            name="water"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Água
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.climate}
            title="Clima"
            name="climate"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Clima
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.ground}
            title="Solo"
            name="ground"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Solo
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.vegetation}
            title="Vegetação"
            name="vegetation"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Vegetação
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <label className="form-control-label" htmlFor="develops_activity_qa">
          Você tem desenvolvido alguma atividade de forma a melhorar a qualidade
          ambiental local e/ou regional?
        </label>
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.develops_activity_qa}
            title="Você tem desenvolvido alguma atividade de forma a 
            melhorar a qualidade ambiental local e/ou regional?"
            name="develops_activity_qa"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="what_activity_qa">
            Especifique qual é a atividade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="what_activity_qa"
            title="Especifique qual é a atividade"
            placeholder="Ex: Reciclagem de lixo"
            value={inputEnvironmentalQuality.what_activity_qa}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="everyday_actions_interfere"
          >
            Você acha que as suas ações cotidianas podem interferir no meio
            ambiente a sua volta?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.everyday_actions_interfere}
            title="Você acha que as suas ações cotidianas podem interferir no 
            meio ambiente a sua volta?"
            name="everyday_actions_interfere"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="what_shape">
            De que forma?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="what_shape"
            title="De que forma?"
            placeholder="Ex: Provoca desmatamento"
            value={inputEnvironmentalQuality.what_shape}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="exchange_experience">
            Você participa de algum espaço para troca de experiência ou
            treinamento visando melhora da qualidade da sua produção?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="exchange_experience"
            title="Você participa de algum espaço para troca de experiência ou treinamento
          visando melhora da qualidade da sua produção?"
            placeholder="Ex: Sim, participo de treinamentos promovidos pela CONAFER"
            value={inputEnvironmentalQuality.exchange_experience}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="which_organization">
            Qual é o tipo de organização?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="which_organization"
            placeholder="Ex: Sindicato"
            title="Qual é o tipo de organização?"
            value={inputEnvironmentalQuality.which_organization}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="activities_interest">
            E quais são as atividades de interesse?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="activities_interest"
            title="E quais são as atividades de interesse?"
            placeholder="Ex: Capacitação"
            value={inputEnvironmentalQuality.activities_interest}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Avaliação do assentado regular</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="positive_in_settlement"
          >
            O que considera de positivo/bom em morar em um assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="positive_in_settlement"
            title="O que considera de positivo/bom em morar em um assentamento"
            placeholder="Ex: Proximidade com a natureza"
            value={inputEnvironmentalQuality.positive_in_settlement}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="negative_in_settlement"
          >
            O que considera de negativo/ruim em morar em um assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="negative_in_settlement"
            title="O que considera de negativo/ruim em morar em um assentamento"
            placeholder="Ex: Distância de estabelecimentos comerciais"
            value={inputEnvironmentalQuality.negative_in_settlement}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="main_ownership_restrictions"
          >
            Principais restrições para a produção na propriedade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="main_ownership_restrictions"
            title="Principais restrições para a produção na propriedade"
            placeholder="Ex: Assistência técnica"
            value={inputEnvironmentalQuality.main_ownership_restrictions}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="future_expectations_property"
          >
            Qual a expectativa de uso futuro da propriedade nos próximos 5 anos?
          </label>
          <Input
            className="form-control-alternative"
            name="future_expectations_property"
            value={inputEnvironmentalQuality.future_expectations_property}
            type="textarea"
            rows="6"
            title="Qual a expectativa de uso futuro da propriedade nos próximos 5 anos?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="rural_tourism">
            Tem interesse em estabelecer turismo rural em sua propriedade?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputEnvironmentalQuality.rural_tourism}
            title="Tem interesse em estabelecer turismo rural em sua propriedade?"
            name="rural_tourism"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={false}>Não</option>
            <option value={true}>Sim</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default QualidadeAmbiental;
