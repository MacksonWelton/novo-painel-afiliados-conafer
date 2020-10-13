import React from "react";
import { mask } from "remask";

import { Col, Form, FormGroup, Input, Row, Button } from "reactstrap";

const ProfileEditForm = ({ submitForm, input, handleChangeInput }) => {
  return (
    <Form onSubmit={submitForm}>
      <h6 className="heading-small text-muted mb-4">Dados Pessoais</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="name">
                Nome completo
              </label>
              <Input
                className="form-control-alternative"
                id="name"
                placeholder="Digite seu nome completo"
                name="name"
                value={input.name}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="sex">
                Sexo
              </label>
              <Input
                className="form-control-alternative"
                id="sex"
                type="select"
                value={input.sex}
                name="maritalStatus"
                onChange={handleChangeInput}
              >
                <option value={undefined} hidden>
                  Escolha uma opção
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="birthDate">
                Data de Nascimento
              </label>
              <Input
                className="form-control-alternative"
                id="birthDate"
                name="birthDate"
                placeholder="dd/mm/aaaa"
                value={mask(input.birthDate, ["99/99/9999"])}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="maritalStatus">
                Estado Civil
              </label>
              <Input
                className="form-control-alternative"
                id="maritalStatus"
                type="select"
                value={input.maritalStatus}
                name="maritalStatus"
                onChange={handleChangeInput}
              >
                <option value={undefined} hidden>
                  Escolha uma opção
                </option>
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
                <option value="Divorciado/Separado">Divorciado/Separado</option>
                <option value="Viúvo">Viúvo</option>
                <option value="Outro">Outro</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="cpf">
                CPF
              </label>
              <Input
                className="form-control-alternative"
                id="cpf"
                name="cpf"
                placeholder="000.000.00-00"
                value={mask(input.cpf, ["999.999.999-99"])}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="rg">
                RG
              </label>
              <Input
                className="form-control-alternative"
                id="rg"
                name="rg"
                placeholder="00000000"
                value={input.rg}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="emittingOrgan">
                Órgão Emissor
              </label>
              <Input
                className="form-control-alternative"
                id="emittingOrgan"
                name="emittingOrgan"
                placeholder="Órgão Emissor"
                value={input.emittingOrgan}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="emissionDate">
                Data de Emissão
              </label>
              <Input
                className="form-control-alternative"
                id="emissionDate"
                name="emissionDate"
                placeholder="dd/mm/aaaa"
                value={input.emissionDate}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="voterTitle">
                Título de Eleitor
              </label>
              <Input
                className="form-control-alternative"
                id="voterTitle"
                name="voterTitle"
                placeholder="00000000"
                value={input.voterTitle}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="electoralZone">
                Zona Eleitoral
              </label>
              <Input
                className="form-control-alternative"
                id="electoralZone"
                name="electoralZone"
                placeholder="000"
                value={input.electoralZone}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="section">
                Seção
              </label>
              <Input
                className="form-control-alternative"
                id="section"
                name="section"
                placeholder="000"
                value={input.section}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="profession">
                Profissão
              </label>
              <Input
                className="form-control-alternative"
                id="profession"
                name="profession"
                placeholder="Ex: Agricultor"
                value={input.profession}
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Informações de Contato</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="email">
                Email
              </label>
              <Input
                className="form-control-alternative"
                id="email"
                name="email"
                placeholder="email@provedor.com"
                value={input.email}
                onChange={handleChangeInput}
                type="email"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="phone">
                Telefone
              </label>
              <Input
                className="form-control-alternative"
                id="phone"
                name="phone"
                placeholder="(00) 0000-0000"
                value={mask(input.phone, ["(99) 99999-9999"])}
                onChange={handleChangeInput}
                type="tel"
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Informações de Endereço</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="12">
            <FormGroup>
              <label className="form-control-label" htmlFor="address">
                Endereço
              </label>
              <Input
                className="form-control-alternative"
                id="address"
                name="address"
                value={input.address}
                placeholder="Endereço"
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="cep">
                CEP
              </label>
              <Input
                className="form-control-alternative"
                id="cep"
                name="cep"
                value={input.cep}
                placeholder="CEP"
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="city">
                Cidade
              </label>
              <Input
                className="form-control-alternative"
                id="city"
                name="city"
                value={input.city}
                placeholder="Cidade"
                onChange={handleChangeInput}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col lg="4">
            <FormGroup>
              <label className="form-control-label" htmlFor="state">
                Estado
              </label>
              <Input
                className="form-control-alternative"
                id="state"
                name="state"
                value={input.state}
                type="select"
              >
                <option value={undefined} hidden>
                  Escolha uma opção
                </option>
                <option value="Acre">Acre</option>
                <option value="Alagoas">Alagoas</option>
                <option value="Amapá">Amapá</option>
                <option value="Amazonas">Amazonas</option>
                <option value="Bahia">Bahia</option>
                <option value="Ceará">Ceará</option>
                <option value="Distrito Federal">Distrito Federal</option>
                <option value="Espírito Santo">Espírito Santo</option>
                <option value="Goiás">Goiás</option>
                <option value="Maranhão">Maranhão</option>
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                <option value="Minas Gerais">Minas Gerais</option>
                <option value="Pará">Pará</option>
                <option value="Paraíba">Paraíba</option>
                <option value="Paraná">Paraná</option>
                <option value="Pernambuco">Pernambuco</option>
                <option value="Piauí">Piauí</option>
                <option value="Rio de Janeiro">Rio de Janeiro</option>
                <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                <option value="Rondônia">Rondônia</option>
                <option value="Roraima">Roraima</option>
                <option value="Santa Catarina">Santa Catarina</option>
                <option value="São Paulo">São Paulo</option>
                <option value="Sergipe">Sergipe</option>
                <option value="Tocantins">Tocantins</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <h6 className="heading-small text-muted mb-4">Trocar Senha</h6>
      <div className="pl-lg-4">
        <Row>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="currentPassword">
                Senha atual
              </label>
              <Input
                className="form-control-alternative"
                id="currentPassword"
                name="currentPassword"
                type="password"
                onChange={handleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="newPassword">
                Nova senha
              </label>
              <Input
                className="form-control-alternative"
                id="newPassword"
                name="newPassword"
                type="password"
                onChange={handleChangeInput}
              />
            </FormGroup>
          </Col>
        </Row>
      </div>
      <hr className="my-4" />
      <div className="d-flex justify-content-center">
        <Button color="primary" type="submit">
          Salvar Alterações
        </Button>
      </div>
    </Form>
  );
};

export default ProfileEditForm;
