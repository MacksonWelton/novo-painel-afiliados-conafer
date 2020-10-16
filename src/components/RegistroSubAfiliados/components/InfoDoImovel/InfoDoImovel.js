import React from "react";
import { Input, FormGroup, Col, Row } from "reactstrap";

function InfoDoImovel({
  inputPropertyInformation,
  setInputPropertyInformation,
}) {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPropertyInformation({ ...inputPropertyInformation, [name]: value });
  };

  return (
    <Row>
      <Col lg="6">
        <label className="form-control-label" htmlFor="pra">
          Deseja aderir ao Programa de Regularização Ambiental - PRA, caso o
          imóvel rural possua (uma das situações a seguir, ocorrida até 22 de
          julho de 2008): necessidade de recomposição de áreas de APP e de uso
          restrito; déficit referente a Reserva Legal; autuação?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.pra}
            title="Deseja aderir ao Programa de Regularização Ambiental - PRA, caso o
          imóvel rural possua (uma das situações a seguir, ocorrida até 22 de
          julho de 2008): necessidade de recomposição de áreas de APP e de uso
          restrito; déficit referente a Reserva Legal; autuação?"
            name="inputPropertyInformation"
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
        <label className="form-control-label" htmlFor="pra">
          O imóvel rural possuí área com déficit de vegetação nativa para fim de
          cumprimento da Reserva Legal?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.deficitNativeVegetation}
            title="O imóvel rural possuí área com déficit de vegetação nativa para fim de 
          cumprimento da Reserva Legal?"
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
        <label className="form-control-label" htmlFor="pra">
          Qual alternativa você pretende adotar, isolada ou conjuntamente, para
          regularizar o déficit?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="regularizeDeficit"
            rows="6"
            title="Qual alternativa você pretende adotar, isolada ou conjuntamente, para
          regularizar o déficit?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <label className="form-control-label" htmlFor="pra">
          Caso realize a compensação, como deseja compensar a área com deficit?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="compensationDeficitArea"
            rows="6"
            title="Caso realize a compensação, como deseja compensar a área com deficit?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <label className="form-control-label" htmlFor="pra">
          Existe Termo de Ajuste de Conduta (TAC) aprovado referente à
          regularização de Áreas de Preservação Permanente (APP), Reserva Legal
          ou Área de Uso Restrito do Imóvel, objeto de Autuação?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.tac}
            name="tac"
            title="Existe Termo de Ajuste de Conduta (TAC) aprovado referente à
          regularização de Áreas de Preservação Permanente (APP), Reserva Legal ou
          Área de Uso Restrito do Imóvel, objeto de Autuação?"
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
        <label className="form-control-label" htmlFor="pra">
          Existem infrações cometidas anteriores a 22 de Julho de 2008,
          relativas a supressão irregular de vegetação em Áreas de Preservação
          Permanente (APP), Reserva Legal ou Área de Uso Restrito do Imóvel,
          objeto de Autuação?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.infractions}
            name="infractions"
            title="Existem infrações cometidas anteriores a 22 de Julho de 2008, relativas
          a supressão irregular de vegetação em Áreas de Preservação Permanente
          (APP), Reserva Legal ou Área de Uso Restrito do Imóvel, objeto de
          Autuação?"
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
      <p>
        O imóvel rural possuí Área Remanescente de Vegetação Nativa excedente ao
        mínimo exigido para Reserva Legal?
      </p>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.remainingAreaNativeVegetation}
            name="infractions"
            title="O imóvel rural possuí Área Remanescente de Vegetação Nativa excedente ao
          mínimo exigido para Reserva Legal?"
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
      <p>O que você deseja fazer com a área excedente?</p>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="surplusArea"
            rows="6"
            title="O que você deseja fazer com a área excedente?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <p>
        Existe Reserva Particular do Patrimônio Natural (RPPN) no interior do
        imóvel rural?
      </p>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.rppn}
            name="rppn"
            title="Existe Reserva Particular do Patrimônio Natural (RPPN) no interior do imóvel rural?"
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
      <p>Possuí Cota de Reverva Florestal (CRF)?</p>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.crf}
            name="rppn"
            title="Possuí Cota de Reverva Florestal (CRF)?"
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
          <Input
            className="form-control-alternative"
            type="text"
            name="legislationDate"
            title="A Reserva Legal do Imóvel rural está submetida à legislação de que período?"
            placeholder="A Reserva Legal do Imóvel rural está submetida à legislação de que período?"
            value={inputPropertyInformation.legislationDate}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <p>Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?</p>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.pra}
            title="Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?"
            name="inputPropertyInformation"
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
}

export default InfoDoImovel;
