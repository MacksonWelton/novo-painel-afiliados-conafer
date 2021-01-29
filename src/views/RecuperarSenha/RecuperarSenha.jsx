import React, {useState} from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
  Row
} from "reactstrap";

const RecuperarSenha = () => {

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setInput({...input, [name]: value})
  }

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-3 mb--3">
              <p>Digite seu e-mail abaixo</p>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={submitForm}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={handleChangeInput}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Link to="/admin/index">
                  <Button className="my-4" color="primary" type="submit">
                    Recuperar
                  </Button>
                </Link>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <Link to="/auth/login"
            className="text-light"
            >
              <small>Fazer login</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
            <Link
              className="text-light"
              to="/auth/register"
            >
              <small>Criar uma nova conta</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default RecuperarSenha;