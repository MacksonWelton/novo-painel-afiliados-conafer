import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Badge,
  Card,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Input,
  Form,
} from "reactstrap";

import Header from "components/Headers/Header";

import {
  getUsersAffiliation,
  getUserAffiliation,
  downloadUsersAffiliates,
  newUserAffiliation,
  updateAffiliatesActivation,
} from "../../../redux/actions/UsuariosAfiliacao";

import { InputStyled, Tr } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import { CardHeaderStyled } from "views/Contratos/styles";
import BotoesDeAcao from "components/BotoesDeAcao/BotoesDeAcao";
import FormUsuarioAfiliacao from "components/FormUsuarioAfiliacao/FormUsuarioAfiliacao";
import AnimacaoCarregamento from "components/AnimacaoCarregamento/AnimacaoCarregamento";

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
  const [checkbox, setCheckbox] = useState([]);
  const [input, setInput] = useState({
    affiliation: "",
    name: "",
    phone: "",
    email: "",
    password1: "",
    password2: "",
  });

  if (input.affiliation === "" && userAffiliation.affiliation !== "") {
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

  const handleChangeCheckbox = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckbox([...checkbox, { id: value, checked }]);
    } else {
      setCheckbox(checkbox.filter((check) => check.id !== value));
    }
  };

  const handleSelectAllCheckbox = (event) => {
    const checked = event.target.checked;

    if (checked) {
      setCheckbox(
        usersAffiliation.map((member) => {
          return { id: member.id, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleAffiliatesActivations = (user) => {
    let { id, name, email, is_active } = user;

    const userData = {id, name, email, is_active: !is_active };

    dispatch(updateAffiliatesActivation(userData));
  };

  const handleDownloadsAffiliates = () => {
    downloadUsersAffiliates(checkbox);
  };

  const handleDeleteusersAffiliation = () => {
    // dispatch(deleteusersAffiliation(checkbox));
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

  const getBadge = (is_active) => {
    if (is_active) {
      return "bg-primary";
    } else {
      return "bg-red";
    }
  };

  const getStatus = (is_active) => {
    if (is_active) {
      return "Ativado";
    } else {
      return "Desativado";
    }
  };

  console.log(usersAffiliation.filter(user => user.is_active === false).length)

  const CardData = [
    {
      title: "Ativados",
      progress: usersAffiliation.filter(user => user.is_active === true).length,
      max: usersAffiliation.length,
      icon: "fas fa-user-check",
      color: "primary",
    },
    {
      title: "Desativados",
      progress: usersAffiliation.filter(user => user.is_active === false).length,
      max: usersAffiliation.length,
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
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
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
                  {checkbox.length > 0 && (
                    <tr>
                      <th></th>
                      <th>
                        <BotoesDeAcao
                          handleDownloadsItems={handleDownloadsAffiliates}
                          handleDeleteItems={handleDeleteusersAffiliation}
                        />
                      </th>
                    </tr>
                  )}
                  <tr>
                    <th scope="col">
                      <div className="d-flex justify-content-end align-items-center">
                        <Input
                          type="checkbox"
                          onChange={handleSelectAllCheckbox}
                        />
                      </div>
                    </th>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {usersAffiliation.map((user, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setMember(user);
                      }}
                      key={index}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter((check) => check.id === user.id)
                              .length
                          }
                          value={user.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{user.name}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(user.is_active)} />
                          {getStatus(user.is_active)}
                        </Badge>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                            }}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={(e) => {
                                user.is_active
                                  ? e.preventDefault()
                                  : handleAffiliatesActivations(user);
                                e.stopPropagation();
                              }}
                            >
                              Ativar
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={(e) => {
                                user.is_active
                                  ? handleAffiliatesActivations(user)
                                  : e.preventDefault();
                                e.stopPropagation();
                              }}
                            >
                              Desativar
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
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
          <Button color="primary" onClick={() => setOpen(!open)}>
            Dowload PDF
          </Button>
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default UsuariosAfiliacao;
