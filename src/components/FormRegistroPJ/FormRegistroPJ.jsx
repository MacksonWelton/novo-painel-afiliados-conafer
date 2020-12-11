import React from "react";
import PropTypes from "prop-types";
import { mask } from "remask";

import {
  Card,
  CardHeader,
  CardBody,
  Col,
  CardTitle,
  CardFooter,
  Form,
  FormGroup,
  Input,
  Button,
  Row,
} from "reactstrap";
import FormProduction from "components/FormProduction/FormProduction";
import { cnpjValidator } from "utils/validators";
import { clearInput } from "utils/validators";
import { findZipCode } from "utils/findZipCode";

const FormRegistroPJ = ({
  production,
  typeProduction,
  input,
  setInput,
  tableAgriculturalProduction,
  handleChangeInputAgriculturalProduction,
  inputAgriculturalProduction,
  deleteAgriculturalProduction,
  handleChangeInput,
  handleChangeInputFile,
  addAgriculturalProduction,
  handleChecked,
  submitForm,
}) => {
  const handleChangeZip = (res) => {
    setInput({
      ...input,
      address: res.street,
      city: res.city,
      state: res.state,
      neighborhood: res.neighborhood,
    });
  };

  return (
    <>
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent text-center">
            <CardTitle className="h1">
              Formulário de Afiliação de Pessoa Jurídica
            </CardTitle>
          </CardHeader>
          <Form onSubmit={submitForm} role="form">
            <CardBody className="px-lg-5 py-lg-5">
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="name_initials"
                    >
                      Nome Completo da entidade ou Sigla{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="name_initials"
                      id="name_initials"
                      title="Nome Completo da entidade ou Sigla"
                      placeholder="Ex: Chacará Santo Antônio"
                      onChange={handleChangeInput}
                      maxLength="255"
                      minLength="1"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="cnpj">
                      CNPJ <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="cnpj"
                      id="cnpj"
                      title="CNPJ"
                      value={mask(input.cnpj, ["99.999.999/9999-99"])}
                      placeholder="Ex: 00.000.000/0000-00"
                      onChange={(e) => {
                        handleChangeInput(e);
                        cnpjValidator(e);
                      }}
                      onBlur={(e) => {
                        clearInput(e, cnpjValidator(e));
                      }}
                      maxLength="18"
                      minLength="1"
                      required
                    />
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
                      id="cep"
                      title="CEP"
                      value={mask(input.cep, ["99999-999"])}
                      onBlur={async (e) => {
                        const response = await findZipCode(e);
                        if (response) {
                          handleChangeZip(response);
                        }
                      }}
                      placeholder="Ex: 57160-000"
                      onChange={handleChangeInput}
                      maxLength="10"
                      minLength="1"
                      required
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
                      id="address"
                      title="Endereço"
                      placeholder="Ex: Rua Pedro Álvares Cabral"
                      onChange={handleChangeInput}
                      value={input.address}
                      maxLength="255"
                      minLength="1"
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
                      id="city"
                      title="Cidade"
                      placeholder="Ex: Curitiba"
                      onChange={handleChangeInput}
                      value={input.city}
                      maxLength="60"
                      minLength="1"
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
                      type="select"
                      onChange={handleChangeInput}
                      value={input.state}
                      name="state"
                      id="state"
                      maxLength="50"
                      minLength="1"
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
                    <label
                      className="form-control-label"
                      htmlFor="contact_name"
                    >
                      Nome do Contato{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="contact_name"
                      id="contact_name"
                      title="Nome do Contato"
                      placeholder="Ex: Fernanda da Silva"
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
                      htmlFor="contact_phone"
                    >
                      Telefone de Contato{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="tel"
                      name="contact_phone"
                      id="contact_phone"
                      title="Telefone de Contato"
                      value={mask(input.contact_phone, ["(99) 99999-9999"])}
                      placeholder="Ex: (11) 99999-9999"
                      onChange={handleChangeInput}
                      maxLength="17"
                      minLength="1"
                      required
                    />
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
                      maxLength="254"
                      minLength="1"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="website">
                      Website
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="website"
                      id="website"
                      title="Website"
                      placeholder="Ex: https://www.conafer.org.br"
                      onChange={handleChangeInput}
                      maxLength="200"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="social_networks"
                    >
                      Redes Sociais (se houver)
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="social_networks"
                      id="social_networks"
                      title="Redes Sociais (se houver)"
                      placeholder="Ex: www.instagram.com"
                      onChange={handleChangeInput}
                      maxLength="255"
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="foundation_date"
                    >
                      Data de Fundação{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="foundation_date"
                      id="foundation_date"
                      title="Data de Fundação"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="active_partners"
                    >
                      Número de Sócios Ativos{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="number"
                      name="active_partners"
                      id="active_partners"
                      title="Número de Sócios Ativos"
                      placeholder="Ex: 10"
                      onChange={handleChangeInput}
                      max="2147483647"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="inactive_partners"
                    >
                      Número de Sócios Inativos{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="number"
                      name="inactive_partners"
                      id="inactive_partners"
                      title="Número de Sócios Inativos"
                      placeholder="Ex: 10"
                      onChange={handleChangeInput}
                      max="2147483647"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="traditional_communities"
                    >
                      Pertence a Associação de Comunidades Tradicionais{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="traditional_communities"
                      id="traditional_communities"
                      title="Pertence a Associação de Comunidades Tradicionais"
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
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="entity_group"
                    >
                      Grupo da sua entidade (se houver)
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="entity_group"
                      id="entity_group"
                      title="Pertence a Associação de Comunidades Tradicionais"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="SAFER">SAFER</option>
                      <option value="FAFER">FAFER</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
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
              <Row>
                <Col lg="12" className="mt-3">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="objective">
                      Qual objetivo da entidade, seus fins?{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      name="objective"
                      id="objective"
                      onChange={handleChangeInput}
                      minLength="1"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" className="mt-3">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="services">
                      Que serviços e treinamentos a entidade realiza para seus
                      associados?{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      id="services"
                      name="services"
                      onChange={handleChangeInput}
                      minLength="1"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" className="mt-3">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="wait_conafer"
                    >
                      O que a entidade espera da CONAFER?{" "}
                      <small className="text-red">(obrigatório)</small>
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      id="wait_conafer"
                      name="wait_conafer"
                      onChange={handleChangeInput}
                      minLength="1"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col lg="12">
                  <b className="ml-3">Observações:</b>
                </Col>
                <Col lg="12">
                  <ol>
                    <li>
                      Anexar a listagem de Sócios Ativos e Inativos com nome
                      completo, data de nascimento, RG e CPF.
                    </li>
                    <li>
                      Anexar a listagem da Diretoria com nome completo, cargo,
                      telefones, endereço completo e e-mail.
                    </li>
                  </ol>
                  <p className="ml-4 text-red">
                    <b>
                      Atenção: Esse documento só tem validade se tiver anexado a
                      ele as Listagens de Associados e Diretoria.
                    </b>
                  </p>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="file_partners"
                    >
                      Anexar a listagem de Sócios Ativos e Inativos (envie
                      compactado zip/rar)
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="file"
                      name="file_partners"
                      id="file_partners"
                      onChange={handleChangeInputFile}
                      accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="file_directory"
                    >
                      Anexar a listagem da Diretoria (envie compactado zip/rar)
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="file"
                      name="file_directory"
                      id="file_directory"
                      onChange={handleChangeInputFile}
                      accept="zip,application/octet-stream,application/zip,application/x-zip,application/x-zip-compressed"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" className="text-dark">
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
                      checked={input.agree}
                      name="agree_terms"
                      id="agree_terms"
                      onChange={handleChecked}
                    />
                    <label className="form-control-label" htmlFor="agree_terms">
                      Concordo com os Termos e Condições
                    </label>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button color="primary" type="submit">
                Enviar Informações
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Col>
    </>
  );
};

FormRegistroPJ.propTypes = {
  input: PropTypes.shape({
    name_initials: PropTypes.string.isRequired,
    cnpj: PropTypes.string.isRequired,
    cep: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    contact_name: PropTypes.string.isRequired,
    contact_phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    social_networks: PropTypes.string.isRequired,
    foundation_date: PropTypes.string.isRequired,
    active_partners: PropTypes.any.isRequired,
    inactive_partners: PropTypes.any.isRequired,
    traditional_communities: PropTypes.any,
    entity_group: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
    services: PropTypes.string.isRequired,
    wait_conafer: PropTypes.string.isRequired,
    file_partners: PropTypes.object,
    file_directory: PropTypes.object,
    agree_terms: PropTypes.bool.isRequired,
  }),
};

export default FormRegistroPJ;
