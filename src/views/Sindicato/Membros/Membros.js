import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Badge,
  Card,
  CardHeader,
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
  Input,
  Form,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Header from "components/Headers/Header.js";

import { newMembers } from "../../../redux/actions/Membros";

import MembrosData from "./MembrosData";
import { Td } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";

const Membros = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newMembers(MembrosData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openSupport, setOpenSupport] = useState(false);
  const [member, setMember] = useState({});
  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
  };

  const members = useSelector((state) => state.MembersReducer.members);

  const getBadge = (status) => {
    switch (status) {
      case "Concluído":
        return "bg-green";
      case "Aberto":
        return "bg-yellow";
      case "Fechado":
        return "bg-red";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Abertos",
      progress: 30,
      max: 40,
      icon: "fas fa-headset",
      color: "yellow",
    },
    {
      title: "Respondidos",
      progress: 0,
      max: 50,
      icon: "fas fa-question",
      color: "blue",
    },
    {
      title: "Encerrados",
      progress: 35,
      max: 50,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Concluídos",
      progress: 35,
      max: 40,
      icon: "fas fa-check",
      color: "green",
    },
  ];

  return (
    <>
      <Header children={<ProgressCard CardData={CardData} />} />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0 d-flex align-items-center">
                <h3 className="text-white mb-0">Lista de Chamados</h3>
                <Button
                  onClick={() => setOpenSupport(!openSupport)}
                  className="m-auto"
                  color="primary"
                >
                  ABRIR CHAMADO
                </Button>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Chamado</th>
                    <th scope="col">Status</th>
                    <th scope="col">Criado em</th>
                    <th scope="col">última Resposta</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, index) => (
                    <tr key={index}>
                      <Td
                        onClick={() => {
                          setOpen(!open);
                          setMember(member);
                        }}
                      >
                        {member.id}
                      </Td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(member.status)} />
                          {member.status}
                        </Badge>
                      </td>
                      <td>{member.createdIn}</td>
                      <td>{member.lastAnswer}</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Another action
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Something else here
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
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
        isOpen={openSupport}
        toggle={() => {
          setOpenSupport(!openSupport);
        }}
        size="lg"
      >
        <ModalHeader>
          <h2>Adicionar Membro</h2>
        </ModalHeader>
        <Form>
          <ModalBody>
            <Input
              className="mb-3"
              name="ticket"
              placeholder="Digite uma nova dúvida, problema e etc..."
              onChange={handleChangeInput}
              rows="6"
              type="textarea"
            />
            <Input
              className="mb-3"
              type="select"
              name="secretary"
              onChange={handleChangeInput}
            >
              <option value={undefined} hidden>
                Selecione a secretaria para responder
              </option>
              <option>Jurídica</option>
              <option>SECOM</option>
              <option>SETI</option>
            </Input>
            <Input className="mb-3" type="file" name="file" />
          </ModalBody>
          <ModalFooter className="d-flex justify-content-end">
            <Button color="primary" type="button">
              Abrir
            </Button>
            <Button
              color="secondary"
              onClick={() => setOpenSupport(!openSupport)}
            >
              Sair
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
        </ModalHeader>
        <ModalBody>
          <>
          </>
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

export default Membros;