import React, { useState } from "react";
import PropTypes from "prop-types";

import Alertas from "components/Alertas/Alertas";

import {
  Card,
  CardHeader,
  CardTitle,
  CardFooter,
  CardBody,
  Col,
  Form,
  FormGroup,
  Row,
  Input,
  Button,
} from "reactstrap";

import { mask } from "remask";
import FormProduction from "../FormProduction/FormProduction";
import { cpfValidator, clearInput } from "../../utils/validators";
import { findZipCode } from "../../utils/findZipCode";

import countries from "../../utils/listaDePaises.json";
import states from "../../utils/listaDeEstadosBrasileiros.json";
import { useSelector } from "react-redux";

const FormRegistroPF = ({
  input,
  setInput,
  handleChangeInput,
  handleChecked,
  submitForm,
  alerts,
  handleChangeInputAgriculturalProduction,
  inputAgriculturalProduction,
  production,
  typeProduction,
  addAgriculturalProduction,
  tableAgriculturalProduction,
  deleteAgriculturalProduction,
}) => {
  const [invalidInput, setInvalidInput] = useState(false);

  const handleChangeInputZipCode = (res) => {
    setInput({
      ...input,
      city: res.city,
      state: res.state,
      address: res.street,
    });
  };

  const error = useSelector((state) => state.ErrorReducer.error);

  return (
    <div>
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent text-center">
            <CardTitle className="h1">
              Formulário de Afiliação de Pessoa Física
            </CardTitle>
          </CardHeader>
          <Form onSubmit={submitForm}>
            <CardBody>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="name">
                      Nome <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Ex: Renato da Silva"
                      onChange={handleChangeInput}
                      maxLength="255"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("name")
                        ? `* ${error.name.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="birthdate">
                      Data de Nascimento{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="birthdate"
                      id="birthdate"
                      onChange={handleChangeInput}
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("birthdate")
                        ? `* ${error.birthdate.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="sex">
                      Sexo <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="sex"
                      id="sex"
                      titulo="Sexo"
                      value={input.sex}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Outro">Outro</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("sex")
                        ? `* ${error.sex.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="citizenship">
                      Naturalidade{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="citizenship"
                      id="citizenship"
                      title="Naturalidade"
                      onChange={handleChangeInput}
                      maxLength="30"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("citizenship")
                        ? `* ${error.citizenship.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="nacionality">
                      Nacionalidade{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="nacionality"
                      id="nacionality"
                      title="Nacionalidade"
                      placeholder="Ex: Brasileira"
                      onChange={handleChangeInput}
                      maxLength="30"
                      minLength="1"
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      {countries.map((country, i) => (
                        <option key={i} value={country.gentilico}>
                          {country.gentilico}
                        </option>
                      ))}
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("nacionality")
                        ? `* ${error.nacionality.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="birthdate">
                      Estado Civil{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="marital_status"
                      id="marital_status"
                      titulo="Estado Civil"
                      value={input.marital_status}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Solteiro(a)">Solteiro(a)</option>
                      <option value="União Estável">União Estável</option>
                      <option value="Casado(a)">Casado(a)</option>
                      <option value="Divorciado(a)">Divorciado(a)</option>
                      <option value="Viúvo(a)">Viúvo(a)</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("marital_status")
                        ? `* ${error.marital_status.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="cpf">
                      CPF <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="cpf"
                      id="cpf"
                      title="CPF"
                      placeholder="Ex: 000.000.000-00"
                      value={mask(input.cpf, ["999.999.999-99"])}
                      onChange={(e) => {
                        handleChangeInput(e);
                        setInvalidInput(cpfValidator(e));
                      }}
                      onBlur={(e) => {
                        setInvalidInput(clearInput(e, cpfValidator(e)));
                      }}
                      maxLength="14"
                      minLength="14"
                      required
                    />
                    {invalidInput && (
                      <small className="ml-2 text-red">
                        O número do CPF está incorreto. Por favor, tente
                        novamente.
                      </small>
                    )}
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="rg">
                      RG <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="rg"
                      id="rg"
                      title="RG"
                      placeholder="Ex: 0000000"
                      onChange={handleChangeInput}
                      maxLength="14"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("rg")
                        ? `* ${error.rg.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="organ_issuing"
                    >
                      Órgão Emissor{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="organ_issuing"
                      id="organ_issuing"
                      title="Órgão Emissor"
                      placeholder="Ex: SEDS"
                      onChange={handleChangeInput}
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("organ_issuing")
                        ? `* ${error.organ_issuing.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="emission_date"
                    >
                      Data de Emissão{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="emission_date"
                      id="emission_date"
                      title="Data de Emissão"
                      onChange={handleChangeInput}
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("emission_date")
                        ? `* ${error.emission_date.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="voter_title">
                      Título de Eleitor{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="voter_title"
                      id="voter_title"
                      title="Título de Eleitor"
                      placeholder="Ex: 5555555"
                      onChange={handleChangeInput}
                      maxLength="15"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("voter_title")
                        ? `* ${error.voter_title.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="electoral_zone"
                    >
                      Zona Eleitoral{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="electoral_zone"
                      id="electoral_zone"
                      title="Zona Eleitoral"
                      placeholder="Ex: 27"
                      onChange={handleChangeInput}
                      maxLength="5"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("electoral_zone")
                        ? `* ${error.electoral_zone.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="section">
                      Seção <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="section"
                      id="section"
                      placeholder="Ex: 12"
                      onChange={handleChangeInput}
                      maxLength="4"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("section")
                        ? `* ${error.section.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="with_gorup">
                      Está com grupo ou família{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="with_gorup"
                      id="with_gorup"
                      value={input.with_gorup}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value={true}>Sim</option>
                      <option value={false}>Não</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("with_gorup")
                        ? `* ${error.with_gorup.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                {input.with_gorup ? (
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="how_many">
                        Quantas pessoas{" "}
                        <small className="text-red">(obrigatório)</small>
                      </label>
                      <Input
                        className="form-control-alternative"
                        type="number"
                        name="how_many"
                        id="how_many"
                        title="Quantas pessoas"
                        onChange={handleChangeInput}
                        max="2147483647"
                        min="0"
                      />
                      <small className="text-red">
                        {error.hasOwnProperty("how_many")
                          ? `* ${error.how_many.join(" ")}`
                          : ""}
                      </small>
                    </FormGroup>
                  </Col>
                ) : null}
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="mother_name">
                      Nome da Mãe{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="mother_name"
                      id="mother_name"
                      placeholder="Ex: Maria dos Santos"
                      onChange={handleChangeInput}
                      maxLength="255"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("mother_name")
                        ? `* ${error.mother_name.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                {input.marital_status === "Casado(a)" ||
                input.marital_status === "União Estável" ? (
                  <>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="partner_name"
                        >
                          Nome do Parceiro(a){" "}
                          <small className="text-red">(obrigatório)</small>
                        </label>
                        <Input
                          className="form-control-alternative"
                          type="text"
                          name="partner_name"
                          id="partner_name"
                          placeholder="Ex: Luciana Gonçalves"
                          onChange={handleChangeInput}
                          maxLength="255"
                          required={
                            input.marital_status === "Casado(a)" ||
                            input.marital_status === "União Estável"
                          }
                        />
                        <small className="text-red">
                          {error.hasOwnProperty("partner_name")
                            ? `* ${error.partner_name.join(" ")}`
                            : ""}
                        </small>
                      </FormGroup>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="partner_cpf"
                        >
                          CPF do Parceiro(a){" "}
                          <small className="text-red">(obrigatório)</small>
                        </label>
                        <Input
                          className="form-control-alternative"
                          type="text"
                          name="partner_cpf"
                          id="partner_cpf"
                          value={mask(input.partner_cpf, ["999.999.999-99"])}
                          placeholder="Ex: 000.000.000-00"
                          onChange={handleChangeInput}
                          maxLength="14"
                          required={
                            input.marital_status === "Casado(a)" ||
                            input.marital_status === "União Estável"
                          }
                        />
                        <small className="text-red">
                          {error.hasOwnProperty("marital_status")
                            ? `* ${error.marital_status.join(" ")}`
                            : ""}
                        </small>
                      </FormGroup>
                    </Col>
                  </>
                ) : null}
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="cep">
                      CEP <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="cep"
                      id="cep"
                      title="CEP"
                      placeholder="Ex: 57.160-000"
                      value={mask(input.cep, ["99.999-999"])}
                      onChange={handleChangeInput}
                      onBlur={async (e) => {
                        const response = await findZipCode(e);
                        if (response) {
                          handleChangeInputZipCode(response);
                        }
                      }}
                      maxLength="10"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("cep")
                        ? `* ${error.cep.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="address">
                      Endereço <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Ex: Rua Dr. Oswaldo Cruz"
                      onChange={handleChangeInput}
                      value={input.address}
                      maxLength="255"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("address")
                        ? `* ${error.address.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="city">
                      Cidade <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="city"
                      id="city"
                      title="Cidade"
                      value={input.city}
                      onChange={handleChangeInput}
                      maxLength="60"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("city")
                        ? `* ${error.city.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="state">
                      Estado <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      onChange={handleChangeInput}
                      title="Estado"
                      name="state"
                      value={input.state}
                      id="state"
                      maxLength="50"
                      minLength="1"
                      required
                    >
                      <option value="" hidden>
                        Escolha uma Opção
                      </option>
                      {states.map((state, i) => (
                        <option key={i} value={state.sigla}>
                          {state.name}
                        </option>
                      ))}
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("state")
                        ? `* ${error.state.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="country">
                      País <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="country"
                      id="country"
                      title="País"
                      value={input.country}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="Brasil">Brasil</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Bolívia">Bolívia</option>
                      <option value="Chile">Chile</option>
                      <option value="Colômbia">Colômbia</option>
                      <option value="Equador">Equador</option>
                      <option value="Guiana">Guiana</option>
                      <option value="Paraguai">Paraguai</option>
                      <option value="Peru">Peru</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Uruguai">Uruguai</option>
                      <option value="Venezuela">Venezuela</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("country")
                        ? `* ${error.country.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="phone">
                      Telefone <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="tel"
                      name="phone"
                      id="phone"
                      title="Telefone"
                      placeholder="Ex: (00) 00000-0000"
                      value={mask(input.phone, ["(99) 99999-9999"])}
                      onChange={handleChangeInput}
                      maxLength="17"
                      minLength="1"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("phone")
                        ? `* ${error.phone.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="email">
                      Email <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="email"
                      name="email"
                      id="email"
                      title="Email"
                      placeholder="Ex: email@conafer.org.br"
                      onChange={handleChangeInput}
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("email")
                        ? `* ${error.email.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="entity_group"
                    >
                      Grupo da sua Entidade{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="entity_group"
                      id="entity_group"
                      title="Grupo da sua entidade"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      <option value="Associação Indígena">
                        Associação Indígena
                      </option>
                      <option value="Associação de moradores">
                        Associação de moradores
                      </option>
                      <option value="Coletivo">Coletivo</option>
                      <option value="Outros">Outros</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("entity_group")
                        ? `* ${error.entity_group.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="always_been_rural"
                    >
                      Sempre morou no meio rural?{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="always_been_rural"
                      id="always_been_rural"
                      title="Sempre morou no meio rural?"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      <option value={true}>Sim</option>
                      <option value={false}>Não</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("always_been_rural")
                        ? `* ${error.always_been_rural.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="incra_ocupation"
                    >
                      Ocupa área destinada pelo INCRA?{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="incra_ocupation"
                      id="incra_ocupation"
                      title="Ocupa área destinada pelo INCRA?"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      <option value={true}>Sim</option>
                      <option value={false}>Não</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("incra_ocupation")
                        ? `* ${error.incra_ocupation.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="ater_core">
                      Nucleo ATER{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="ater_core"
                      id="ater_core"
                      title="Nucleo ATER"
                      onChange={handleChangeInput}
                      maxLength="20"
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("ater_core")
                        ? `* ${error.ater_core.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="year_residence"
                    >
                      Desde que ano mora no local{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="number"
                      name="year_residence"
                      id="year_residence"
                      title="Desde que ano mora no local"
                      onChange={handleChangeInput}
                      max="2147483647"
                      min="0"
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("year_residence")
                        ? `* ${error.year_residence.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="rb_status">
                      Status na RB{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="rb_status"
                      id="rb_status"
                      title="Status na RB"
                      onChange={handleChangeInput}
                      maxLength="30"
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("rb_status")
                        ? `* ${error.rb_status.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="collect_code"
                    >
                      Código de coleta{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="collect_code"
                      id="collect_code"
                      title="Código de coleta"
                      onChange={handleChangeInput}
                      maxLength="30"
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("collect_code")
                        ? `* ${error.collect_code.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="settlement_code"
                    >
                      Código de assentamento{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="settlement_code"
                      id="settlement_code"
                      title="Código de assentamento"
                      onChange={handleChangeInput}
                      maxLength="30"
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("settlement_code")
                        ? `* ${error.settlement_code.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="profession">
                      Profissão{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="profession"
                      id="profession"
                      title="Profissão"
                      value={input.profession}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value="" hidden>
                        Escolha uma opção
                      </option>
                      <option value="Agricultor">Agricultor</option>
                      <option value="Outros">Outros</option>
                    </Input>
                    <small className="text-red">
                      {error.hasOwnProperty("profession")
                        ? `* ${error.profession.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="12">
                  <FormProduction
                    handleChangeInputAgriculturalProduction={
                      handleChangeInputAgriculturalProduction
                    }
                    inputAgriculturalProduction={inputAgriculturalProduction}
                    production={production}
                    typeProduction={typeProduction}
                    addAgriculturalProduction={addAgriculturalProduction}
                    tableAgriculturalProduction={tableAgriculturalProduction}
                    deleteAgriculturalProduction={deleteAgriculturalProduction}
                  />
                </Col>
                <Col lg="12">
                  <p>
                    Eu, DECLARO, para fins de direito, sob as penas da lei, que
                    as informações acima prestadas e documentos que apresento
                    para, relacionados acima, são verdadeiros e autênticos
                    (fieis á verdade e condizentes com a realidade dos fatos á
                    época).
                  </p>
                  <p>
                    Fico ciente através desse documento que a falsidade dessa
                    declaração configura crime previsto no Código Penal
                    Brasileiro*, passível de apuração na forma da Lei bem como
                    pode ser enquadrada como Litigância de Má Fé. Por meio deste
                    termo, declaro ainda que me comprometo em atualizar as
                    informações prestadas, tão logo eu tome conhecimento.
                  </p>
                  <p>
                    *CÓDIGO PENAL Art. 171. Obter, para si ou para outrem,
                    vantagem ilícita, em prejuízo alheio, induzindo ou manter
                    alguém em erro, mediante artifício, ardil ou qualquer outro,
                    meio fraudulento.
                  </p>
                  <p>
                    Art. 299. Omitir, em documento público ou particular,
                    declaração que dele devia constar, ou nele inserir ou fazer
                    inserir declaração falsa ou diversa da que devia ser
                    escrita, com o fim de prejudicar direito, criar obrigação ou
                    alterar a verdade sobre fato juridicamente relevante.
                  </p>
                </Col>
                <Col lg="12" className="d-flex justify-content-center mt-3">
                  <FormGroup>
                    <Input
                      className="form-control-alternative"
                      type="checkbox"
                      name="agree_terms"
                      id="agree_terms"
                      checked={input.agree_terms}
                      onChange={handleChecked}
                      required
                    />
                    <label className="form-control-label" htmlFor="agree_terms">
                      Concordo com os Termos e Condições
                    </label>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Alertas alerts={alerts} />
              <Button color="primary" type="submit">
                Enviar Informações
              </Button>
              {Object.keys(error).length > 0 && (
                <div className="mt-3 p-2 text-white bg-red rounded">
                  Atenção: Role a página para cima e corrija os campos que
                  contém um * seguindo de um texto em vermelho.
                </div>
              )}
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </div>
  );
};

FormRegistroPF.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birthdate: PropTypes.string.isRequired,
    marital_status: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired,
    nacionality: PropTypes.string.isRequired,
    citizenship: PropTypes.string.isRequired,
    rg: PropTypes.string.isRequired,
    organ_issuing: PropTypes.string.isRequired,
    emission_date: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    voter_title: PropTypes.string.isRequired,
    electoral_zone: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    with_gorup: PropTypes.any,
    how_many: PropTypes.number.isRequired,
    mother_name: PropTypes.string.isRequired,
    partner_name: PropTypes.string.isRequired,
    partner_cpf: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    entity_group: PropTypes.string.isRequired,
    always_been_rural: PropTypes.any,
    incra_ocupation: PropTypes.any,
    ater_core: PropTypes.string.isRequired,
    year_residence: PropTypes.number.isRequired,
    rb_status: PropTypes.string.isRequired,
    collect_code: PropTypes.string.isRequired,
    settlement_code: PropTypes.string.isRequired,
    profession: PropTypes.string,
    agree_terms: PropTypes.any.isRequired,
  }),
};

export default FormRegistroPF;
