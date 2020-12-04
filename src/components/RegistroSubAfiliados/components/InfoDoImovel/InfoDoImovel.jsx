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
      <Col lg="12">
        <label className="form-control-label" htmlFor="join_pra">
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
            name="join_pra"
            value={inputPropertyInformation.join_pra}
            title="Deseja aderir ao Programa de Regularização Ambiental - PRA, caso o
          imóvel rural possua (uma das situações a seguir, ocorrida até 22 de
          julho de 2008): necessidade de recomposição de áreas de APP e de uso
          restrito; déficit referente a Reserva Legal; autuação?"
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
      <Col lg="12">
        <label className="form-control-label" htmlFor="has_area_with_deficit_native_vegetation">
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
            name="has_area_with_deficit_native_vegetation"
            value={inputPropertyInformation.has_area_with_deficit_native_vegetation}
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
      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="alternatives_regularize_deficit">
            Qual alternativa você pretende adotar, isolada ou conjuntamente,
            para regularizar o déficit?
          </label>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="alternatives_regularize_deficit"
            rows="6"
            title="Qual alternativa você pretende adotar, isolada ou conjuntamente, para
          regularizar o déficit?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="how_want_make_up_deficit_area">
            Caso realize a compensação, como deseja compensar a área com
            deficit?
          </label>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="how_want_make_up_deficit_area"
            value={inputPropertyInformation.how_want_make_up_deficit_area}
            rows="6"
            title="Caso realize a compensação, como deseja compensar a área com deficit?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <label className="form-control-label" htmlFor="has_tac_with_app">
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
            value={inputPropertyInformation.has_tac_with_app}
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
      <Col lg="12">
        <label className="form-control-label" htmlFor="has_infractions_committed">
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
            value={inputPropertyInformation.has_infractions_committed}
            name="has_infractions_committed"
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
      <Col lg="12">
        <label className="form-control-label" htmlFor="property_has_arvn">
          O imóvel rural possuí Área Remanescente de Vegetação Nativa excedente
          ao mínimo exigido para Reserva Legal?
        </label>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.property_has_arvn}
            name="property_has_arvn"
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
      <Col lg="12">
        <label className="form-control-label" htmlFor="what_wantto_with_surplus_area">
          O que você deseja fazer com a área excedente?
        </label>
      </Col>
      <Col lg="12">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="textarea"
            name="what_wantto_with_surplus_area"
            value={inputPropertyInformation.what_wantto_with_surplus_area}
            rows="6"
            title="O que você deseja fazer com a área excedente?"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_rppn">
            Existe Reserva Particular do Patrimônio Natural (RPPN) no interior
            do imóvel rural?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.has_rppn}
            name="has_rppn"
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
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="has_crf">
            Possuí Cota de Reverva Florestal (CRF)?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.has_crf}
            name="has_crf"
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
          <label className="form-control-label" htmlFor="rli_period">
            A Reserva Legal do Imóvel rural está submetida à legislação de que
            período?
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="rli_period"
            title="A Reserva Legal do Imóvel rural está submetida à legislação de que período?"
            placeholder="Ex: 21/01/2002 a 10/03/2012"
            value={inputPropertyInformation.rli_period}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>

      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="size_changes_after">
            Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPropertyInformation.size_changes_after}
            title="Ocorreu alteração no tamanho da área do imóvel após 22/07/2008?"
            name="size_changes_after"
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
