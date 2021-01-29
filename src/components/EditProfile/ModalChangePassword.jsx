import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { updatePassword } from "redux/actions/Perfil";

const ModalChangePassword = ({ open, setOpen, profile }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({ 
    last_pass: "",
    password1: "",
    password2: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(updatePassword(input, profile));
  };

  return (
    <Modal isOpen={open} toggle={() => setOpen(!open)} centered size="sm">
      <ModalHeader
        toggle={() => {
          setOpen(!open);
        }}
      >
        Alterar Senha
      </ModalHeader>
      <Form onSubmit={submitForm}>
        <ModalBody>
          <Row>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="last_pass">
                  Digite sua senha atual{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  type="password"
                  name="last_pass"
                  id="last_pass"
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="password1">
                  Digite sua nova senha{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  type="password"
                  name="password1"
                  id="password1"
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="12">
              <FormGroup>
                <label className="form-control-label" htmlFor="password2">
                  Digite sua nova senha novamente{" "}
                  <small className="text-red">(obrigatório)</small>
                </label>
                <Input
                  type="password"
                  name="password2"
                  id="password2"
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" color="primary">
            Alterar
          </Button>
          <Button onClick={() => setOpen(!open)} color="secondary">
            Cancelar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default ModalChangePassword;
