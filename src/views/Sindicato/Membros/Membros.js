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
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Header from "components/Headers/Header.js";

import { newMembers } from "../../../redux/actions/Membros";

import MembrosData from "./MembrosData";
import { Td } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import RegistroSubAfiliados from "components/RegistroSubAfiliados/RegistroSubAfiliados";

const Membros = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newMembers(MembrosData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [member, setMember] = useState({});

  const members = useSelector((state) => state.MembersReducer.members);

  const getBadge = (status) => {
    switch (status) {
      case "Ativo/a":
        return "bg-green";
      case "Inativo/a":
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
              <CardHeader className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                <h3 className="text-white mb-0">Membros do Sindicato</h3>
                <div>
                  <Button
                    onClick={() => setOpenAddMember(!openAddMember)}
                    className="m-auto"
                    color="primary"
                  >
                    ADICIONAR MEMBRO
                  </Button>
                </div>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Nascimento</th>
                    <th scope="col">Fonte de Renda</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Status</th>
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
                        {member.name}
                      </Td>
                      <td>{member.birthDate}</td>
                      <td>{member.sourceOfIncome}</td>
                      <td>{member.address}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(member.status)} />
                          {member.status}
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
        isOpen={openAddMember}
        toggle={() => {
          setOpenAddMember(!openAddMember);
        }}
        size="lg"
      >
        <ModalHeader
          toggle={() => {
            setOpenAddMember(!openAddMember);
          }}
        >
          Adicionar Membro
        </ModalHeader>
        <ModalBody>
          <RegistroSubAfiliados />
        </ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button
            color="secondary"
            onClick={() => setOpenAddMember(!openAddMember)}
          >
            Cancelar
          </Button>
        </ModalFooter>
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
        ></ModalHeader>
        <ModalBody>
          <></>
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
