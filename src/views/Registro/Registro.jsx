import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// reactstrap components
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
  Row,
} from "reactstrap";

import { signUp, setSignUp } from "../../redux/actions/Registro";

import FacebookIcon from "../../assets/img/icons/common/facebook.svg";
import GoogleIcon from "../../assets/img/icons/common/google.svg";

const Registro = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signUpSuccess = useSelector(state => state.RegistroReducer.signUp);

  useEffect(() => {
    if (signUpSuccess) {
      history.push("/");
      dispatch(setSignUp(0))
    }
  }, [signUpSuccess, history, dispatch]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(signUp(input));
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Entre com</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img alt="..." src={FacebookIcon} />
                </span>
                <span className="btn-inner--text">Facebook</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img alt="..." src={GoogleIcon} />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Ou crie uma conta com os dados requeridos</small>
            </div>
            <Form onSubmit={submitForm}>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fas fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nome"
                    type="text"
                    name="name"
                    onChange={handleChangeInput}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                    onChange={handleChangeInput}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Senha"
                    type="password"
                    autoComplete="new-password"
                    name="password1"
                    onChange={handleChangeInput}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Digite a senha novamente"
                    type="password"
                    autoComplete="new-password"
                    name="password2"
                    onChange={handleChangeInput}
                    required
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                  <Button className="mt-4" color="primary" type="submit">
                    Criar conta
                  </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <Link to="/auth/recover-password">
              <small>Esqueceu a senha?</small>
            </Link>
          </Col>
          <Col className="text-right" xs="6">
            <Link className="text-light" to="/auth/login">
              <small>Fazer login</small>
            </Link>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Registro;
