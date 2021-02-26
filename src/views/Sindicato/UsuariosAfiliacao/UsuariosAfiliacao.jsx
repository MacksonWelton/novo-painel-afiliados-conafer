import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardFooter,
  Table,
  Container,
  Row,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  Input,
} from "reactstrap";

import Header from "../../../components/Headers/Header";

import {
  getUsersAffiliation,
  getUserAffiliation,
  newUserAffiliation,
} from "../../../redux/actions/UsuariosAfiliacao";

import { Tr } from "./styles";
import ProgressCard from "../../../components/ProgressCard/ProgressCard";
import { CardHeaderStyled } from "../../../views/Contratos/styles";
import FormUsuarioAfiliacao from "../../../components/FormUsuarioAfiliacao/FormUsuarioAfiliacao";
import AnimacaoCarregamento from "../../../components/AnimacaoCarregamento/AnimacaoCarregamento";
import Paginations from "components/Paginations/Paginations";

const UsuariosAfiliacao = () => {
  const dispatch = useDispatch();
  const usersAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.usersAffiliation
  );

  const userAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.userAffiliation
  );

  useEffect(() => {
    dispatch(getUsersAffiliation());
    dispatch(getUserAffiliation());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [member, setMember] = useState({});
  const [input, setInput] = useState({
    affiliation: "",
    name: "",
    phone: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [lines, setLines] = useState(10);

  if (input.affiliation === "" && userAffiliation.affiliation) {
    setInput({ ...input, affiliation: userAffiliation.affiliation });
  }

  const [files, setFiles] = useState({
    profilepic: {
      fileName: "",
      value: "",
    },
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newUserAffiliation(input, files));
  };

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value) {
      const fileName = event.target.files[0].name;
      setFiles({
        ...files,
        [name]: { ...files[name], fileName: fileName, value: value },
      });
    } else {
      setFiles({
        ...files,
        [name]: { ...files[name], fileName: "", value: "" },
      });
    }
  };

  const getStatus = (is_active) => {
    if (is_active) {
      return "Ativado";
    } else {
      return "Desativado";
    }
  };

  const handleChangeLines = (event) => {
    setLines(Number(event.target.value));
  };

  const CardData = [
    {
      title: "Ativados",
      progress: usersAffiliation.results.filter(user => user.is_active === true).length,
      max: usersAffiliation.count,
      icon: "fas fa-user-check",
      color: "primary",
    },
    {
      title: "Desativados",
      progress: usersAffiliation.results.filter(user => user.is_active === false).length,
      max: usersAffiliation.count,
      icon: "fas fa-user-times",
      color: "gray",
    }
  ];

  return (
    <>
      <Header
        children={
          usersAffiliation ? (
            <ProgressCard CardData={CardData} />
          ) : (
            <AnimacaoCarregamento />
          )
        }
      />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">
                  Lista de Usuário de Afiliação
                </h3>
                <div className="d-flex align-items-center">
                  <Input
                    className="form-control-alternative"
                    type="select"
                    id="list"
                    title="Quantidade de linhas por página"
                    onChange={handleChangeLines}
                    value={lines}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </Input>
                </div>
                <div>
                  <Button
                    onClick={() => setOpenAddUser(!openAddUser)}
                    className="m-auto"
                    color="primary"
                  >
                    Adicionar
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {usersAffiliation.results.map((user, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setMember(user);
                      }}
                      key={index}
                    >
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{getStatus(user.is_active)}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations count={usersAffiliation.count} funcRequistion={getUsersAffiliation} lines={lines}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <Modal
        isOpen={openAddUser}
        toggle={() => {
          setOpenAddUser(!openAddUser);
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            setOpenAddUser(!openAddUser);
          }}
        >
          Adicionar Usuário ao Painel
        </ModalHeader>
        <Form onSubmit={submitForm}>
          <ModalBody>
            <FormUsuarioAfiliacao
              files={files}
              input={input}
              handleChangeInputFile={handleChangeInputFile}
              handleChangeInput={handleChangeInput}
            />
          </ModalBody>
          <ModalFooter className="d-flex justify-content-end">
            <Button
              color="primary"
              onClick={() => setOpenAddUser(!openAddUser)}
              type="submit"
            >
              Criar conta
            </Button>
            <Button
              color="secondary"
              onClick={() => setOpenAddUser(!openAddUser)}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <Modal
        isOpen={open}
        toggle={() => {
          setOpen(!open);
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            setOpen(!open);
          }}
        >
          Informações do Usuário
        </ModalHeader>
        <ModalBody>
          <div className="pl-lg-4">
            <Row>
              <Col lg="12" className="mb-3">
                <div className="border rounded p-2">
                  <b>Nome: </b> {member.name}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border rounded p-2">
                  <b>Telefone: </b> {member.phone}
                </div>
              </Col>
              <Col lg="12" className="mb-3">
                <div className="border rounded p-2">
                  <b>Email: </b> {member.email}
                </div>
              </Col>
            </Row>
          </div>
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UsuariosAfiliacao;
