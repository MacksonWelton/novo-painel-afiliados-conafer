import React from "react";
import { Input, InputGroup } from "reactstrap";

const QualidadeAmbiental = ({
  inputEnvironmentalQuality,
  setInputEnvironmentQuality,
}) =>  {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputEnvironmentQuality({ ...inputEnvironmentalQuality, [name]: value });
  };

  return (
    <div className="row">
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Neste momento a qualidade ambiental local atende as necessidades
        particulares da família?
      </p>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputEnvironmentalQuality.environmentalQuality}
          title="Neste momento a qualidade ambiental local atende as necessidades particulares da família?"
          name="environmentalQuality"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={true}>Sim</option>
          <option value={false}>Não</option>
        </Input>
      </InputGroup>
      <div className="col-12">
        <h3>Quanto afeta a vida e produção</h3>
        <hr />
      </div>
      <p className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        Em ordem de importância (1 interfere mais e 5 interfere menos) os fatos
        que mais interferem na sua produção e qualidade de vida
      </p>
      <InputGroup className="mb-3 col-xl-2 col-sm-12 col-lg-2">
        <Input
          custom
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
      </InputGroup>
      <InputGroup className="mb-3 col-xl-2 col-sm-12 col-lg-2">
        <Input
          custom
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
      </InputGroup>
      <InputGroup className="mb-3 col-xl-2 col-sm-12 col-lg-2">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputEnvironmentalQuality.soil}
          title="Solo"
          name="soil"
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
      </InputGroup>
      <InputGroup className="mb-3 col-xl-2 col-sm-12 col-lg-2">
        <Input
          custom
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
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Você tem desenvolvido alguma atividade de forma a melhorar a qualidade
        ambiental local e/ou regional?
      </p>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={
            inputEnvironmentalQuality.activityToImproveEnvironmentalQuality
          }
          title="Você tem desenvolvido alguma atividade de forma a melhorar a qualidade ambiental local e/ou regional?"
          name="activityToImproveEnvironmentalQuality"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </Input>
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Especifique qual é a atividade
      </p>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="specifyActivity"
          title="Especifique qual é a atividade"
          value={inputEnvironmentalQuality.specifyActivity}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Você acha que as suas ações cotidianas podem interferir no meio ambiente
        a sua volta?
      </p>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputEnvironmentalQuality.interferesWithTheEnvironment}
          title="Você acha que as suas ações cotidianas podem interferir no meio ambiente a sua volta?"
          name="interferesWithTheEnvironment"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </Input>
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">De que forma?</p>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="inWhatWay"
          title="De que forma?"
          value={inputEnvironmentalQuality.inWhatWay}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Você participa de algum espaço para troca de experiência ou treinamento
        visando melhora da qualidade da sua produção?
      </p>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="experienceTraining"
          title="Você participa de algum espaço para troca de experiência ou treinamento
          visando melhora da qualidade da sua produção?"
          value={inputEnvironmentalQuality.experienceTraining}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="typeOrganization"
          placeholder="Qual é o tipo de organização?"
          title="Qual é o tipo de organização?"
          value={inputEnvironmentalQuality.typeOrganization}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="activitiesInterest"
          title="E quais são as atividades de interesse?"
          placeholder="E quais são as atividades de interesse?"
          value={inputEnvironmentalQuality.activitiesInterest}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <div className="col-12">
        <h3>Avaliação do assentado regular</h3>
        <hr />
      </div>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="positiveSide"
          title="O que considera de positivo/bom em morar em um assentamento"
          placeholder="O que considera de positivo/bom em morar em um assentamento"
          value={inputEnvironmentalQuality.positiveSide}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="negativeSide"
          title="O que considera de negativo/ruim em morar em um assentamento"
          placeholder="O que considera de negativo/ruim em morar em um assentamento"
          value={inputEnvironmentalQuality.negativeSide}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <Input
          type="text"
          name="restriction"
          title="Principais restrições para a produção na propriedade"
          placeholder="Principais restrições para a produção na propriedade"
          value={inputEnvironmentalQuality.restriction}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <p className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        Qual a expectativa de uso futuro da propriedade nos próximos 5 anos?
      </p>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
      <Input
          name="expectationFuture"
          type="textarea"
          rows="6"
          title="Qual a expectativa de uso futuro da propriedade nos próximos 5 anos?"
          onChange={handleChangeInput}
        />
      </InputGroup>
      <p className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        Tem interesse em estabelecer turismo rural em sua propriedade?
      </p>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-4">
        <Input
          custom
          type="select"
          onChange={handleChangeInput}
          value={inputEnvironmentalQuality.ruralTourism}
          title="Tem interesse em estabelecer turismo rural em sua propriedade?"
          name="ruralTourism"
          id="select"
          required
        >
          <option value={undefined} hidden>
            Escolha uma opção
          </option>
          <option value={false}>Não</option>
          <option value={true}>Sim</option>
        </Input>
      </InputGroup>
    </div>
  );
}

export default QualidadeAmbiental;