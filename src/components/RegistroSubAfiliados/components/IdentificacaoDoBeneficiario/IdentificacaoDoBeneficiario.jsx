import React, { useState } from "react";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { mask, unMask } from "remask";
import { findZipCode } from "utils/findZipCode";
import { cpfValidator } from "utils/validators";
import { clearInput } from "utils/validators";

const IdentificacaoDoBeneficiario = ({
  inputBeneficiaryIdentity,
  setInputBeneficiaryIdentity,
  usersAffiliation
}) => {
  const [invalidInput, setInvalidInput] = useState(false);

  const handleChangeInputZipCode = (res) => {
    setInputBeneficiaryIdentity({
      ...inputBeneficiaryIdentity,
      city: res.city,
      state: res.state,
      address: res.street,
    });
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputBeneficiaryIdentity({ ...inputBeneficiaryIdentity, [name]: value });
  };

  return (
    <Row>
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
          value={inputBeneficiaryIdentity.affiliation}
          required
          >
            <option value="" hidden>Escolha uma opção</option>
            {usersAffiliation.map((afilliate, i) => (
              <option key={i} value={afilliate.affiliation}>{afilliate.name}</option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Nome completo <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="name"
            id="name"
            title="Digite seu nome completo"
            placeholder="Ex: João da Silva"
            value={inputBeneficiaryIdentity.name}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
            required
          />
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
            value={mask(inputBeneficiaryIdentity.cpf, ["999.999.999-99"])}
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
            value={inputBeneficiaryIdentity.rg}
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
            value={inputBeneficiaryIdentity.nis}
            maxLength="14"
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.email}
            onChange={handleChangeInput}
            maxLength="254"
          />
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
            value={mask(inputBeneficiaryIdentity.phone, ["(99) 99999-9999"])}
            onChange={handleChangeInput}
            maxLength="17"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="alternative_phone">
            Telefone Alternativo
          </label>
          <Input
            className="form-control-alternative"
            type="tel"
            name="alternative_phone"
            title="Telefone Alternativo"
            placeholder="Ex: (00) 00000-0000"
            value={mask(inputBeneficiaryIdentity.alternative_phone, [
              "(99) 99999-9999",
            ])}
            onChange={handleChangeInput}
            maxLength="17"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="collection_code">
            Código de Coleta
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="collection_code"
            title="Código de Coleta"
            placeholder="Ex: 0000"
            value={inputBeneficiaryIdentity.collection_code}
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.citizenship}
            onChange={handleChangeInput}
            maxLength="30"
            minLength="1"
            required
          />
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
            value={inputBeneficiaryIdentity.rb_status}
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.incra_area}
            onChange={handleChangeInput}
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
        <hr />
        <h3 className="text-center mb-3">Idenificação da Unidade Familiar</h3>
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
            value={inputBeneficiaryIdentity.status}
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.marital_status}
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
            value={inputBeneficiaryIdentity.mother_name}
            onChange={handleChangeInput}
            maxLength="255"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      {(inputBeneficiaryIdentity.marital_status === "União Estável" ||
        inputBeneficiaryIdentity.marital_status === "Casado(a)") && (
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
                  value={inputBeneficiaryIdentity.spouse_name}
                  onChange={handleChangeInput}
                  required
                />
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
                  value={mask(unMask(inputBeneficiaryIdentity.spouse_cpf), [
                    "999.999.999-99",
                  ])}
                  onChange={handleChangeInput}
                  maxLength="14"
                  required
                />
              </FormGroup>
            </Col>
          </>
        )}
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="nationality">
            Nacionalidade <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="nationality"
            title="Nacionalidade"
            placeholder="Ex: Brasileiro"
            value={inputBeneficiaryIdentity.nationality}
            maxLength="30"
            minLength="1"
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">
          Informações Gerais da Unidade Familiar
        </h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="operational_core">
            Núcleo Operacional da ATER (Município)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="operational_core"
            title="Núcleo Operacional da ATER (Município)"
            placeholder="Ex: Seaprof"
            value={inputBeneficiaryIdentity.operational_core}
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.location_zone}
            onChange={handleChangeInput}
            maxLength="17"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="cep">
            CEP
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="cep"
            title="CEP"
            placeholder="Ex: 57.160-000"
            value={mask(inputBeneficiaryIdentity.cep, ["99.999-999"])}
            onChange={handleChangeInput}
            onBlur={async (e) => {
              const response = await findZipCode(e);
              if (response) {
                handleChangeInputZipCode(response);
              }
            }}
            maxLength="17"
          />
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
            value={inputBeneficiaryIdentity.address}
            onChange={handleChangeInput}
            maxLength="17"
          />
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
            value={inputBeneficiaryIdentity.district}
            onChange={handleChangeInput}
            maxLength="17"
            required
          />
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
            value={inputBeneficiaryIdentity.number}
            onChange={handleChangeInput}
            max="2147483647"
            min="0"
            required
          />
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
            value={inputBeneficiaryIdentity.city}
            onChange={handleChangeInput}
            maxLength="17"
            required
          />
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
            value={inputBeneficiaryIdentity.state}
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="country">
            País
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            id="country"
            name="country"
            title="País"
            placeholder="Ex: Brasil"
            value={inputBeneficiaryIdentity.country}
            onChange={handleChangeInput}
            maxLength="17"
          />
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
            value={inputBeneficiaryIdentity.year_residence}
            onChange={handleChangeInput}
            max="2147483647"
            min="0"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="concession_validity">
            Validade da Concessão
          </label>
          <Input
            className="form-control-alternative"
            id="concession_validity"
            type="date"
            name="concession_validity"
            title="Validade da Concessão"
            value={inputBeneficiaryIdentity.concession_validity}
            onChange={handleChangeInput}
          />
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
            value={inputBeneficiaryIdentity.always_resided}
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
            value={inputBeneficiaryIdentity.beneficiary_knows_limit}
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
            value={inputBeneficiaryIdentity.lot_has_marking}
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
            value={inputBeneficiaryIdentity.has_contract}
            title="O beneficiário tem o contrato/termo de concessão de uso?"
            name="has_contract"
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
};

export default IdentificacaoDoBeneficiario;
