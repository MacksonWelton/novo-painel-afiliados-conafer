import React, { useState } from "react";
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
} from "reactstrap";
import { mask } from "remask";

const RegistroPF = () => {
  const [input, setInput] = useState({
    name: "",
    birthdate: "",
    marital_status: "",
    sex: "",
    nacionality: "",
    citizenship: "",
    cpf: "",
    rg: "",
    organ_issuing: "",
    emission_date: "",
    voter_title: "",
    electoral_zone: "",
    section: "",
    with_gorup: undefined,
    how_many: "",
    rb_status: "",
    settlement_code: "",
    incra_ocupation: undefined,
    collect_code: "",
    mother_name: "",
    partner_name: "",
    partner_cpf: "",
    ater_core: "",
    year_residence: "",
    always_been_rural: undefined,
    phone: "",
    email: "",
    entity_group: "",
    profession: undefined,
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  console.log("renderizou")

  return (
    <>
      <Col lg="12">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent text-center">
            <CardTitle className="h1">
              Formulário de Afiliação de Pessoa Física
            </CardTitle>
          </CardHeader>
          <Form>
            <CardBody>
              <Row>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="name">
                      Nome
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="name"
                      placeholder="Ex: Renato da Silva"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="birthdate">
                      Data de Nascimento
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="birthdate"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="birthdate">
                      Sexo
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="sex"
                      titulo="Sexo"
                      value={input.sex}
                      onChange={handleChangeInput}
                      required
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
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="birthdate">
                      Estado Civil
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="marital_status"
                      titulo="Estado Civil"
                      value={input.marital_status}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Solteiro(a)">Solteiro(a)</option>
                      <option value="Casado(a)">Casado(a)</option>
                      <option value="Divorciado(a)">Divorciado(a)</option>
                      <option value="Viúvo(a)">Viúvo(a)</option>
                      <option value="Separado(a)">Separado(a)</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="cpf">
                      CPF
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="cpf"
                      title="CPF"
                      placeholder="Ex: 000.000.000-00"
                      value={mask(input.cpf, ["999.999.999-99"])}
                      onChange={handleChangeInput}
                      required
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
                      type="text"
                      name="rg"
                      title="RG"
                      placeholder="Ex: 0000000"
                      value={mask(input.rg, ["999.999.999-99"])}
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="organ_issuing"
                    >
                      Órgão Emissor
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="organ_issuing"
                      title="Órgão Emissor"
                      placeholder="Ex: SEDS"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="emission_date"
                    >
                      Data de Emissão
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="emission_date"
                      title="Data de Emissão"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="voter_title">
                      Título de Eleitor
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="voter_title"
                      title="Título de Eleitor"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="electoral_zone"
                    >
                      Zona Eleitoral
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="electoral_zone"
                      title="Zona Eleitoral"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="section">
                      Seção
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="section"
                      title="Seção"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="with_gorup">
                      Está com grupo ou família
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="with_gorup"
                      title="Está com grupo ou família"
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
                  </FormGroup>
                </Col>
                {input.with_gorup === "true" ? (
                  <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="how_many">
                        Quantas pessoas
                      </label>
                      <Input
                        className="form-control-alternative"
                        type="number"
                        name="how_many"
                        title="Quantas pessoas"
                        onChange={handleChangeInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                ) : null}
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="address">
                      Endereço
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="address"
                      title="Endereço"
                      placeholder="Ex: Rua Dr. Oswaldo Cruz"
                      onChange={handleChangeInput}
                      required
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
                      placeholder="Ex: 5700000"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="city">
                      Cidade
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="city"
                      title="Cidade"
                      placeholder="Ex: 5700000"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="state">
                      Estado
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      onChange={handleChangeInput}
                      title="Estado"
                      name="state"
                      id="select"
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
                    <label className="form-control-label" htmlFor="city">
                      Telefone
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="tel"
                      name="phone"
                      title="Telefone"
                      placeholder="Ex: 5700000"
                      value={mask(input.phone, ["(99) 99999-9999"])}
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="city">
                      Email
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="email"
                      name="phone"
                      title="Email"
                      placeholder="Ex: email@conafer.org.br"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="entity_group">
                      Grupo da sua Entidade (se houver)
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="entity_group"
                      title="Grupo da sua Entidade (se houver)"
                      value={input.entity_group}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Associação Indígena">Associação Indígena</option>
                      <option value="Associação de Moradores">Associação de Moradores</option>
                      <option value="Coletivo">Coletivo</option>
                      <option value="Outros">Outros</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="profession">
                      Profissão
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="profession"
                      title="Profissão"
                      value={input.profession}
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Agricultor(a)">Agricultor(a)</option>
                      <option value="Outra">Outra</option>
                    </Input>
                  </FormGroup>
                </Col>
                {input.profession !== undefined && input.profession !== "Agricultor(a)" ?
                  (
                    <Col lg="6">
                    <FormGroup>
                      <label className="form-control-label" htmlFor="profession">
                        Outra Profissão
                      </label>
                      <Input
                        className="form-control-alternative"
                        type="text"
                        name="profession"
                        title="Outra Profissão"
                        placeholder="Ex: Eletricista"
                        onChange={handleChangeInput}
                        required
                      />
                    </FormGroup>
                  </Col>
                  ) : null
                }
              </Row>
            </CardBody>
            <CardFooter></CardFooter>
          </Form>
        </Card>
      </Col>
    </>
  );
};

export default RegistroPF;
