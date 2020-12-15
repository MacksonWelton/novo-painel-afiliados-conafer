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
  Input,
} from "reactstrap";

import Header from "components/Headers/Header";

import {
  getMembers,
  downloadMembers,
  deleteMembers,
} from "../../../redux/actions/Membros";

import { InputStyled, Tr } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import RegistroSubAfiliados from "components/RegistroSubAfiliados/RegistroSubAfiliados";
import { CardHeaderStyled } from "views/Contratos/styles";
import BotoesDeAcao from "components/BotoesDeAcao/BotoesDeAcao";
import ModalMembro from "components/ModalMembro/ModalMembro";

const Membros = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.MembersReducer.members);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [member, setMember] = useState({});
  const [checkbox, setCheckbox] = useState([]);

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
        members.map((member) => {
          return { id: member.id, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleDownloadsMembers = () => {
    dispatch(downloadMembers(checkbox));
  };

  const handleDeleteMembers = () => {
    dispatch(deleteMembers(checkbox));
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
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Membros</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() => setOpenAddMember(!openAddMember)}
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
                          handleDownloadsItems={handleDownloadsMembers}
                          handleDeleteItems={handleDeleteMembers}
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
                  {members.map((member, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setMember(member);
                      }}
                      key={index}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter((check) => check.id === member.id)
                              .length
                          }
                          value={member.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{member.name_initials}</td>
                      <td>{member.phone}</td>
                      <td>{member.email}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(member.is_active)} />
                          {getStatus(member.is_active)}
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
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Ativar
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
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
      <ModalMembro open={open} setOpen={setOpen} member={member}/>
    </>
  );
};

export default Membros;
