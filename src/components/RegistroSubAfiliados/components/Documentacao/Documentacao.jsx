import React from "react";
import { Input, FormGroup, Col } from "reactstrap";

function Documentacao({ inputDocumentation, setInputDocumentation }) {
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputDocumentation({ ...inputDocumentation, [name]: value });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Informações Gerais</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="documentation_area">
            Área na Documentação (ha)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="documentation_area"
            title="Área na Documentação (ha)"
            placeholder="Ex: 1.500"
            value={inputDocumentation.documentation_area}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="property_name">
            Nome da Propriedade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="property_name"
            title="Nome da Propriedade"
            placeholder="Ex: Chácara São Pedro"
            value={inputDocumentation.property_name}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="georeferenced">
            Georreferenciada
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDocumentation.georeferenced}
            title="Georreferenciada"
            name="georeferenced"
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
          <label className="form-control-label" htmlFor="property_ownership">
            Propriedade / Posse / Concessão
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="property_ownership"
            title="Propriedade / Posse / Concessão"
            placeholder="Propriedade / Posse / Concessão"
            value={inputDocumentation.property_ownership}
            onChange={handleChangeInput}
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value="Propriedades">Propriedades</option>
            <option value="Posse">Posse</option>
            <option value="Concessão">Concessão</option>
          </Input>
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Documentação - Propriedade - Somente para Propriedade</h3>
        <hr />
      </div>
      <div className="col-12">
        <h3>Documentação - Concessão - Tipo de Documento</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="domain_title">
            Título de Domínio
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDocumentation.domain_title}
            title="Título de Domínio"
            name="domain_title"
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
          <label className="form-control-label" htmlFor="ccu">
            Contrato de Concessão de Uso - CCU
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDocumentation.ccu}
            title="Contrato de Concessão de Uso - CCU"
            name="ccu"
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
          <label className="form-control-label" htmlFor="ccdru">
            Contrato de Concessão de Direito Real de Uso - CCDRU
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputDocumentation.ccdru}
            title="Contrato de Concessão de Direito Real de Uso - CCDRU"
            name="ccdru"
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
          <label className="form-control-label" htmlFor="regularization">
            Em Regularização
          </label>
          <Input
            className="form-control-alternative d-inline"
            type="select"
            onChange={handleChangeInput}
            value={inputDocumentation.regularization}
            title="Em Regularização"
            name="regularization"
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
        <h3>Documentação - Propriedades e Concessões</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="sncr">
            Código de Sistema Nacional de Cadastro Rural (SNCR)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="sncr"
            title="Código de Sistema Nacional de Cadastro Rural (SNCR)"
            placeholder="Ex: 0000000"
            value={inputDocumentation.sncr}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="incra_certificate">
            Certificação do Imóvel no INCRA
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="incra_certificate"
            title="Certificação do Imóvel no INCRA"
            placeholder="Ex: 0000"
            value={inputDocumentation.incra_certificate}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </div>
  );
}

export default Documentacao;
