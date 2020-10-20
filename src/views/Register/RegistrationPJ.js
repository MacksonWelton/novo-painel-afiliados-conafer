import React, { useState } from "react";
import { mask } from "remask";

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
} from "reactstrap";

const RegistrationPj = () => {
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
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (event) => {};

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
                    <label
                      className="form-control-label"
                      htmlFor="name_initials"
                    >
                      Endereço
                    </label>
                    <Input
                      className="form-control-alternative"
                      type="text"
                      name="name_initials"
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

export default RegistrationPj;
