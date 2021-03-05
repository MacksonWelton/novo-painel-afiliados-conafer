import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { mask, unMask } from "remask";
import { findZipCode } from "utils/findZipCode";
import { cpfValidator } from "utils/validators";
import { clearInput } from "utils/validators";

const Member = ({ inputMember, setInputMember, usersAffiliation }) => {
  const [invalidInput, setInvalidInput] = useState(false);

  const handleChangeInputZipCode = (res) => {
    setInputMember({
      ...inputMember,
      city: res.city,
      state: res.state,
      address: res.street,
    });
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputMember({ ...inputMember, [name]: value });
  };

  const error = useSelector((state) => state.ErrorReducer.error);

  return (
    <>
      <Row>
        <Col lg="12" className="border p-4 mb-3 shadow rounded">
          <Row>
            <Col lg="12">
              <h2 className="text-center mb-3">Dados do Membro</h2>
              <hr />
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="affiliation">
                  Afiliação <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  type="select"
                  id="affiliation"
                  name="affiliation"
                  onChange={handleChangeInput}
                  value={inputMember.affiliation}
                  required
                >
                  <option value="" hidden>
                    Escolha uma opção
                  </option>
                  {usersAffiliation.map((afilliate, i) => (
                    <option key={i} value={afilliate.id}>
                      {afilliate.name}
                    </option>
                  ))}
                </Input>
                <small className="text-red">
                  {error.hasOwnProperty("affiliation")
                    ? `* ${error.affiliation.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="name">
                  Nome completo{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="name"
                  id="name"
                  title="Digite seu nome completo"
                  placeholder="Ex: João da Silva"
                  value={inputMember.name}
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
                <label className="form-control-label" htmlFor="cpf">
                  CPF <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="cpf"
                  value={mask(inputMember.cpf, ["999.999.999-99"])}
                  placeholder="123.567.112-99"
                  onChange={(e) => {
                    handleChangeInput(e);
                    setInvalidInput(cpfValidator(e));
                  }}
                  onBlur={(e) => {
                    setInvalidInput(clearInput(e, cpfValidator(e)));
                  }}
                  title="CPF"
                  maxLength="14"
                  minLength="1"
                  required
                />
                {invalidInput && (
                  <small className="ml-2 text-red">
                    O número do CPF está incorreto. Por favor, tente novamente.
                  </small>
                )}
                <small className="text-red">
                  {error.hasOwnProperty("cpf")
                    ? `* ${error.cpf.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="rg">
                  RG
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="rg"
                  title="RG"
                  placeholder="Ex: 0000000"
                  value={inputMember.rg}
                  onChange={handleChangeInput}
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="nis">
                  NIS
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="nis"
                  title="NIS"
                  placeholder="Ex: 0000000"
                  value={inputMember.nis}
                  maxLength="14"
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("nis")
                    ? `* ${error.nis.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="email">
                  Email
                </label>
                <Input
                  className="form-control-alternative"
                  type="email"
                  name="email"
                  title="Email"
                  placeholder="Ex: email@conafer.org.br"
                  value={inputMember.email}
                  onChange={handleChangeInput}
                  maxLength="254"
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
                <label className="form-control-label" htmlFor="phone">
                  Telefone <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="tel"
                  name="phone"
                  title="Telefone"
                  placeholder="Ex: (00) 00000-0000"
                  value={mask(inputMember.phone, ["(99) 99999-9999"])}
                  onChange={handleChangeInput}
                  maxLength="17"
                  minLength="1"
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
                <label
                  className="form-control-label"
                  htmlFor="alternative_phone"
                >
                  Telefone Alternativo
                </label>
                <Input
                  className="form-control-alternative"
                  type="tel"
                  name="alternative_phone"
                  title="Telefone Alternativo"
                  placeholder="Ex: (00) 00000-0000"
                  value={mask(inputMember.alternative_phone, [
                    "(99) 99999-9999",
                  ])}
                  onChange={handleChangeInput}
                  maxLength="17"
                />
                <small className="text-red">
                  {error.hasOwnProperty("alternative_phone")
                    ? `* ${error.alternative_phone.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="collection_code">
                  Código de Coleta
                </label>
                <Input
                  className="form-control-alternative"
                  type="number"
                  name="collection_code"
                  title="Código de Coleta"
                  placeholder="Ex: 0000"
                  value={inputMember.collection_code}
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("collection_code")
                    ? `* ${error.collection_code.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="citizenship">
                  Naturalidade
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="citizenship"
                  title="Naturalidade"
                  placeholder="Ex: Maceió - AL"
                  value={inputMember.citizenship}
                  onChange={handleChangeInput}
                  maxLength="30"
                  minLength="1"
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
                <label className="form-control-label" htmlFor="rb_status">
                  Status na RB
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="rb_status"
                  title="Status na RB"
                  placeholder="Ex: Titulado"
                  value={inputMember.rb_status}
                  onChange={handleChangeInput}
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
                <label className="form-control-label" htmlFor="incra_area">
                  Ocupa área destinada pelo Incra{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  name="incra_area"
                  title="Ocupa área destinada pelo Incra"
                  placeholder="Ocupa área destinada pelo Incra"
                  value={inputMember.incra_area}
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
                  {error.hasOwnProperty("incra_area")
                    ? `* ${error.incra_area.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="border p-4 mb-3 shadow rounded">
          <Row>
            <Col lg="12">
              <h2 className="text-center mb-3">
                Idenificação da Unidade Familiar
              </h2>
              <hr />
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="status">
                  Status
                </label>
                <Input
                  className="form-control-alternative"
                  type="status"
                  name="status"
                  title="Status"
                  placeholder="Ex: Beneficiário"
                  value={inputMember.status}
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("status")
                    ? `* ${error.status.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="marital_status">
                  Estado Civil <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  name="marital_status"
                  title="Estado Civil"
                  placeholder="Ex: Solteiro"
                  value={inputMember.marital_status}
                  onChange={handleChangeInput}
                  required
                >
                  <option value="" hidden>
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
                <label className="form-control-label" htmlFor="mother_name">
                  Nome da Mãe <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="mother_name"
                  title="Nome da Mãe"
                  placeholder="Ex: Maria da Silva"
                  value={inputMember.mother_name}
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
            {(inputMember.marital_status === "União Estável" ||
              inputMember.marital_status === "Casado(a)") && (
              <>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="spouse_name">
                      Nome do Cônjuge
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="spouse_name"
                      title="Nome do Cônjuge"
                      placeholder="Ex: Fernanda da Silva"
                      value={inputMember.spouse_name}
                      onChange={handleChangeInput}
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("spouse_name")
                        ? `* ${error.spouse_name.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="spouse_cpf">
                      CPF do Cônjuge
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="spouse_cpf"
                      title="CPF do Cônjuge"
                      placeholder="Ex: 123.567.112-99"
                      value={mask(unMask(inputMember.spouse_cpf), [
                        "999.999.999-99",
                      ])}
                      onChange={handleChangeInput}
                      maxLength="14"
                      required
                    />
                    <small className="text-red">
                      {error.hasOwnProperty("spouse_cpf")
                        ? `* ${error.spouse_cpf.join(" ")}`
                        : ""}
                    </small>
                  </FormGroup>
                </Col>
              </>
            )}
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="nationality">
                  Nacionalidade{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="nationality"
                  title="Nacionalidade"
                  placeholder="Ex: Brasileiro"
                  value={inputMember.nationality}
                  maxLength="30"
                  minLength="1"
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("nationality")
                    ? `* ${error.nationality.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col lg="12" className="border p-4 mb-3 shadow rounded">
          <Row>
            <Col lg="12">
              <h2 className="text-center mb-3">
                Informações Gerais da Unidade Familiar
              </h2>
              <hr />
            </Col>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="operational_core"
                >
                  Núcleo Operacional da ATER (Município)
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="operational_core"
                  title="Núcleo Operacional da ATER (Município)"
                  placeholder="Ex: Seaprof"
                  value={inputMember.operational_core}
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("operational_core")
                    ? `* ${error.operational_core.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="location_zone">
                  Zona de Localização
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="location_zone"
                  title="Zona de Localização"
                  placeholder="Ex: Zona Rural"
                  value={inputMember.location_zone}
                  onChange={handleChangeInput}
                  maxLength="17"
                />
                <small className="text-red">
                  {error.hasOwnProperty("location_zone")
                    ? `* ${error.location_zone.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="cep">
                  CEP <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="cep"
                  title="CEP"
                  placeholder="Ex: 57.160-000"
                  value={mask(inputMember.cep, ["99.999-999"])}
                  onChange={handleChangeInput}
                  onBlur={async (e) => {
                    const response = await findZipCode(e);
                    if (response) {
                      handleChangeInputZipCode(response);
                    }
                  }}
                  maxLength="10"
                  minLength="1"
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
                  title="Endereço"
                  placeholder="Ex: Av. São Paulo"
                  value={inputMember.address}
                  onChange={handleChangeInput}
                  maxLength="17"
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
                <label className="form-control-label" htmlFor="district">
                  Bairro <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="district"
                  title="Bairro"
                  placeholder="Ex: Centro"
                  value={inputMember.district}
                  onChange={handleChangeInput}
                  maxLength="17"
                  required
                />
                <small className="text-red">
                  {error.hasOwnProperty("district")
                    ? `* ${error.district.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="number">
                  Número <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="number"
                  name="number"
                  title="Número"
                  placeholder="Ex: 123"
                  value={inputMember.number}
                  onChange={handleChangeInput}
                  max="2147483647"
                  min="0"
                  required
                />
                <small className="text-red">
                  {error.hasOwnProperty("number")
                    ? `* ${error.number.join(" ")}`
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
                  title="Cidade"
                  placeholder="Ex: São Paulo"
                  value={inputMember.city}
                  onChange={handleChangeInput}
                  maxLength="17"
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
                  value={inputMember.state}
                  title="Estado"
                  name="state"
                  id="state"
                  required
                >
                  <option value="AC">Acre</option>
                  <option value="AL">Alagoas</option>
                  <option value="AP">Amapá</option>
                  <option value="AM">Amazonas</option>
                  <option value="BA">Bahia</option>
                  <option value="CE">Ceará</option>
                  <option value="DF">Distrito Federal</option>
                  <option value="ES">Espírito Santo</option>
                  <option value="GO">Goiás</option>
                  <option value="MA">Maranhão</option>
                  <option value="MT">Mato Grosso</option>
                  <option value="MS">Mato Grosso do Sul</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="PA">Pará</option>
                  <option value="PB">Paraíba</option>
                  <option value="PR">Paraná</option>
                  <option value="PE">Pernambuco</option>
                  <option value="PI">Piauí</option>
                  <option value="RJ">Rio de Janeiro</option>
                  <option value="RN">Rio Grande do Norte</option>
                  <option value="RS">Rio Grande do Sul</option>
                  <option value="RO">Rondônia</option>
                  <option value="RR">Roraima</option>
                  <option value="SC">Santa Catarina</option>
                  <option value="SP">São Paulo</option>
                  <option value="SE">Sergipe</option>
                  <option value="TO">Tocantins</option>
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
                  País
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  id="country"
                  name="country"
                  title="País"
                  placeholder="Ex: Brasil"
                  value={inputMember.country}
                  onChange={handleChangeInput}
                  maxLength="17"
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
                <label className="form-control-label" htmlFor="year_residence">
                  Anos que reside na região{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="number"
                  name="year_residence"
                  title="Anos que reside na região"
                  placeholder="Ex: 6"
                  value={inputMember.year_residence}
                  onChange={handleChangeInput}
                  max="2147483647"
                  min="0"
                  required
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
                <label
                  className="form-control-label"
                  htmlFor="concession_validity"
                >
                  Validade da Concessão
                </label>
                <Input
                  className="form-control-alternative"
                  id="concession_validity"
                  type="date"
                  name="concession_validity"
                  title="Validade da Concessão"
                  value={inputMember.concession_validity}
                  onChange={handleChangeInput}
                />
                <small className="text-red">
                  {error.hasOwnProperty("concession_validity")
                    ? `* ${error.concession_validity.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="always_resided">
                  Sempre residiu no meio rural?
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputMember.always_resided}
                  title="Sempre residiu no meio rural?"
                  name="always_resided"
                  id="always_resided"
                >
                  <option value="" hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
                <small className="text-red">
                  {error.hasOwnProperty("always_resided")
                    ? `* ${error.always_resided.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="beneficiary_knows_limit"
                >
                  O beneficiário conhece o limite do lote?{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputMember.beneficiary_knows_limit}
                  title="O beneficiário conhece o limite do lote?"
                  name="beneficiary_knows_limit"
                  id="beneficiary_knows_limit"
                  required
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
                <small className="text-red">
                  {error.hasOwnProperty("beneficiary_knows_limit")
                    ? `* ${error.beneficiary_knows_limit.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="lot_has_marking">
                  Lote tem marco que identifica os limites?{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputMember.lot_has_marking}
                  title="Lote tem marco que identifica os limites?"
                  name="lot_has_marking"
                  id="lot_has_marking"
                  required
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
                <small className="text-red">
                  {error.hasOwnProperty("lot_has_marking")
                    ? `* ${error.lot_has_marking.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="has_contract">
                  O beneficiário tem o contrato/termo de concessão de uso?{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputMember.has_contract}
                  title="O beneficiário tem o contrato/termo de concessão de uso?"
                  name="has_contract"
                  id="has_contract"
                  required
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
                <small className="text-red">
                  {error.hasOwnProperty("has_contract")
                    ? `* ${error.has_contract.join(" ")}`
                    : ""}
                </small>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Member;
