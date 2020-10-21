import React, { useState } from "react";
import { mask } from "remask";
import { useDispatch } from "react-redux";

// reactstrap components
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
  Table,
} from "reactstrap";
import { registerPJ } from "redux/actions/Registro";

const RegistroPJ = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name_initials: "",
    cnpj: "",
    contact_name: "",
    contact_phone: "",
    email: "",
    website: "",
    social_networks: "",
    foundation_date: "",
    active_partners: "",
    inactive_partners: "",
    traditional_communities: undefined,
    entity_group: "",
    objective: "",
    services: "",
    wait_conafer: "",
    file_partners: "",
    file_directory: "",
    agree: false,
  });

  const [
    inputAgriculturalProduction,
    setInputAgriculturalProduction,
  ] = useState({
    production: undefined,
    how_produces: "",
    issues_invoice: undefined,
  });

  const [agriculturalProduction, setAgriculturalProduction] = useState([]);

  const handleChangeInputAgriculturalProduction = (event) => {
    const { name, value } = event.target;

    setInputAgriculturalProduction({
      ...inputAgriculturalProduction,
      [name]: value,
    });
  };

  const deleteAgriculturalProduction = (id) => {
    setAgriculturalProduction(
      agriculturalProduction.filter((item, i) => i !== id)
    );
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const addAgriculturalProduction = () => {
    setAgriculturalProduction([
      ...agriculturalProduction,
      {
        production: inputAgriculturalProduction.production,
        how_produces: inputAgriculturalProduction.how_produces,
        issues_invoice: inputAgriculturalProduction.issues_invoice,
      },
    ]);
  };

  const handleChecked = () => {
    setInput({ ...input, agree: !input.agree });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(registerPJ(input))
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
                      Nome Completo da Entidade ou Sigla
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="name_initials"
                      title="Nome Completo da Entidade ou Sigla"
                      placeholder="Ex: Chacará Santo Antônio"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="cnpj">
                      CNPJ
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="cnpj"
                      title="CNPJ"
                      value={mask(input.cnpj, ["999.999.999-99"])}
                      placeholder="Ex: 000.000.000-00"
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
                      placeholder="Ex: 56000000"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
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
                      placeholder="Ex: Rua Pedro Álvares Cabral"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label>Estado</label>
                    <Input
                      type="select"
                      onChange={handleChangeInput}
                      value={input.state}
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
                    <label
                      className="form-control-label"
                      htmlFor="contact_name"
                    >
                      Nome do Contato
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="contact_name"
                      title="Nome do Contato"
                      placeholder="Ex: Fernanda da Silva"
                      onChange={handleChangeInput}
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
                      Telefone de Contato
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="tel"
                      name="contact_phone"
                      title="Telefone de Contato"
                      value={mask(input.contact_phone, ["(99) 99999-9999"])}
                      placeholder="Ex: (11) 99999-9999"
                      onChange={handleChangeInput}
                      required
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
                      onChange={handleChangeInput}
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
                      title="Website"
                      placeholder="Ex: www.conafer.org.br"
                      onChange={handleChangeInput}
                      required
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
                      title="Redes Sociais (se houver)"
                      placeholder="Ex: www.instagram.com"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="foundation_date"
                    >
                      Data de Fundação
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="date"
                      name="foundation_date"
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
                      Número de Sócios Ativos
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="number"
                      name="active_partners"
                      title="Número de Sócios Ativos"
                      placeholder="Ex: 10"
                      onChange={handleChangeInput}
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
                      Número de Sócios Inativos
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="number"
                      name="inactive_partners"
                      title="Número de Sócios Inativos"
                      placeholder="Ex: 10"
                      onChange={handleChangeInput}
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
                      Pertence a Associação de Comunidades Tradicionais
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="traditional_communities"
                      title="Pertence a Associação de Comunidades Tradicionais"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value={true}>Sim</option>
                      <option value="">Não</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="6">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="entity_group"
                    >
                      Grupo da sua Entidade (se houver)
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      name="entity_group"
                      title="Pertence a Associação de Comunidades Tradicionais"
                      onChange={handleChangeInput}
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Cooperativa">Cooperativa</option>
                      <option value="Federação">Federação</option>
                      <option value="Instituto">Instituto</option>
                      <option value="Fundação">Fundação</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <hr className="my-4" />
              <h2 className="mb-4">Produção Agrícola</h2>
              <p>
                Caso possua, informe abaixo qual produto e a quantidade mensal
                aproximadamente.
              </p>
              <Row>
                <Col lg="4" className="d-flex align-items-end">
                  <FormGroup className="w-100">
                    <label className="form-control-label" htmlFor="production">
                      Produção Agrícola
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      onChange={handleChangeInputAgriculturalProduction}
                      value={inputAgriculturalProduction.agriculturalProduction}
                      name="production"
                      id="select"
                      required
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Abacate">Abacate</option>
                      <option value="Abacaxi">Abacaxi</option>
                      <option value="Abóbora Moranga">Abóbora Moranga</option>
                      <option value="Acelga">Acelga</option>
                      <option value="Acerola">Acerola</option>
                      <option value="Agrião">Agrião</option>
                      <option value="Alface">Alface</option>
                      <option value="Alfavaca">Alfavaca</option>
                      <option value="Algodão">Algodão</option>
                      <option value="Alho">Alho</option>
                      <option value="Almeirão">Almeirão</option>
                      <option value="Amendoim">Amendoim</option>
                      <option value="Anador">Anador</option>
                      <option value="Araçá">Araçá</option>
                      <option value="Arroz">Arroz</option>
                      <option value="Babosa">Babosa</option>
                      <option value="Banana">Banana</option>
                      <option value="Batata">Batata</option>
                      <option value="Batata Doce">Batata Doce</option>
                      <option value="Batata-inglesa">Batata-inglesa</option>
                      <option value="Berinjela">Berinjela</option>
                      <option value="Beterraba">Beterraba</option>
                      <option value="Boldo">Boldo</option>
                      <option value="Brócolis">Brócolis</option>
                      <option value="Cacau">Cacau</option>
                      <option value="Café">Café</option>
                      <option value="Cajá">Cajá</option>
                      <option value="Cajarana">Cajarana</option>
                      <option value="Camomila">Camomila</option>
                      <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                      <option value="Capim Santos">Capim Santos</option>
                      <option value="Caqui">Caqui</option>
                      <option value="Carambola">Carambola</option>
                      <option value="Cebola">Cebola</option>
                      <option value="Cebolinha">Cebolinha</option>
                      <option value="Coco">Coco</option>
                      <option value="Coco-da-baía">Coco-da-baía</option>
                      <option value="Coentro">Coentro</option>
                      <option value="Couve">Couve</option>
                      <option value="Couve-Flor">Couve-Flor</option>
                      <option value="Cravo-da-índia">Cravo-da-índia</option>
                      <option value="Cupuaçu">Cupuaçu</option>
                      <option value="Erva Cidreira">Erva Cidreira</option>
                      <option value="Feijão">Feijão</option>
                      <option value="Figo">Figo</option>
                      <option value="Fruta pão">Fruta pão</option>
                      <option value="Girassol">Girassol</option>
                      <option value="Goiaba">Goiaba</option>
                      <option value="Graviola">Graviola</option>
                      <option value="Hortelã">Hortelã</option>
                      <option value="Ingá">Ingá</option>
                      <option value="Inhame">Inhame</option>
                      <option value="Jabuticaba">Jabuticaba</option>
                      <option value="Jeca">Jeca</option>
                      <option value="Jambo">Jambo</option>
                      <option value="Jenipapo">Jenipapo</option>
                      <option value="Jiló">Jiló</option>
                      <option value="Laranja">Laranja</option>
                      <option value="Lima">Lima</option>
                      <option value="Limão">Limão</option>
                      <option value="Malva Branca">Laranja</option>
                      <option value="Mamão">Mamão</option>
                      <option value="Mandioca">Mandioca</option>
                      <option value="Manga">Manga</option>
                      <option value="Mangaba">Mangaba</option>
                      <option value="Manjericão">Manjericão</option>
                      <option value="Maracujá">Maracujá</option>
                      <option value="Mastruz">Mastruz</option>
                      <option value="Melancia">Melancia</option>
                      <option value="Melão">Melão</option>
                      <option value="Mentrasto">Mentrasto</option>
                      <option value="Mexerica">Mexerica</option>
                      <option value="Milho">Milho</option>
                      <option value="Noni">Noni</option>
                      <option value="Pepino">Pepino</option>
                      <option value="Pequi">Pequi</option>
                      <option value="Pimenta">Pimenta</option>
                      <option value="Pimentão">Pimentão</option>
                      <option value="Pimentão Verde">Pimentão Verde</option>
                      <option value="Pinha">Pinha</option>
                      <option value="Pitanga">Pitanga</option>
                      <option value="Quiabo">Quiabo</option>
                      <option value="Rabanete">Rabanete</option>
                      <option value="Repolho">Repolho</option>
                      <option value="Romã">Romã</option>
                      <option value="Rúcula">Rúcula</option>
                      <option value="Saião">Saião</option>
                      <option value="Salsa">Salsa</option>
                      <option value="Salsinha">Salsinha</option>
                      <option value="Sambacaitá">Sambacaitá</option>
                      <option value="Sapoti">Sapoti</option>
                      <option value="Seriguela">Seriguela</option>
                      <option value="Soja">Soja</option>
                      <option value="Sorgo">Sorgo</option>
                      <option value="Tamarindo">Tamarindo</option>
                      <option value="Tangerina">Tangerina</option>
                      <option value="Tomate">Tomate</option>
                      <option value="Urucum">Urucum</option>
                      <option value="Uva">Uva</option>
                      <option value="Vagem">Vagem</option>
                      <option value="Outros">Outros</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="4">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="how_produces"
                    >
                      Quanto Produz (em KG, Sacas, Caixas)
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="how_produces"
                      placeholder="Ex: 100 Kg"
                      onChange={handleChangeInputAgriculturalProduction}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="4" className="d-flex align-items-end">
                  <FormGroup className="w-100">
                    <label
                      className="form-control-label"
                      htmlFor="issues_invoice"
                    >
                      Emite Nota
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="select"
                      onChange={handleChangeInputAgriculturalProduction}
                      name="issues_invoice"
                      id="select"
                      value={inputAgriculturalProduction.issues_invoice}
                    >
                      <option value={undefined} hidden>
                        Escolha uma opção
                      </option>
                      <option value="Sim">Sim</option>
                      <option value="Não">Não</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="12" className="d-flex justify-content-center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={addAgriculturalProduction}
                  >
                    Adicionar Plantio
                  </Button>
                </Col>
                <Col lg="12" className="mt-3">
                  <Table>
                    <thead className="bg-white">
                      <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Nota</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {agriculturalProduction.map((item, i) => (
                        <tr key={i}>
                          <td>{item.production}</td>
                          <td>{item.how_produces}</td>
                          <td>{item.issues_invoice}</td>
                          <td>
                            <i
                              onClick={() => deleteAgriculturalProduction(i)}
                              style={{ cursor: "pointer" }}
                              className="fas fa-trash"
                            ></i>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col lg="12" className="mt-3">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="objective">
                      Qual objetivo da Entidade, seus fins?
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      name="objective"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col lg="12" className="mt-3">
                  <FormGroup>
                    <label className="form-control-label" htmlFor="services">
                      Que serviços e treinamentos a Entidade realiza para seus
                      associados?
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      name="services"
                      onChange={handleChangeInput}
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
                      O que a Entidade espera da CONAFER?
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="textarea"
                      name="wait_conafer"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <hr />
              <Row>
                <b className="ml-3">Observações</b>
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
                <p className="ml-4">
                  Atenção: Esse documento só tem validade se tiver anexado a ele
                  as Listagens de Associados e Diretoria.
                </p>
                <Col lg="12">
                  <FormGroup>
                    <label
                      className="form-control-label"
                      htmlFor="file_partners"
                    >
                      Upload de arquivo (envie compactado zip/rar)
                    </label>
                    <Input
                      className="form-control-alternative"
                      rows="4"
                      type="file"
                      name="file_partners"
                      onChange={handleChangeInput}
                      required
                    />
                  </FormGroup>
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
                      checked={input.agree}
                      onChange={handleChecked}
                    />
                    <label
                      className="form-control-label"
                      htmlFor="file_partners"
                    >
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

export default RegistroPJ;
