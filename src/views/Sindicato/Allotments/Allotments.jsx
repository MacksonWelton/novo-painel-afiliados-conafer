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
  downloadMembers,
  getAllotments,
} from "../../../redux/actions/Membros";

import { InputStyled, Tr } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";
import RegistroSubAfiliados from "components/RegistroSubAfiliados/RegistroSubAfiliados";
import { CardHeaderStyled } from "views/Contratos/styles";
import BotoesDeAcao from "components/BotoesDeAcao/BotoesDeAcao";
import ModalMembro from "components/ModalMembro/ModalMembro";

const Allotments = () => {
  const dispatch = useDispatch();
  const allotments = useSelector((state) => state.MembersReducer.allotments);

  console.log(allotments)

  useEffect(() => {
    dispatch(getAllotments())
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [allotment, setAllotment] = useState({});
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
        allotments.map((member) => {
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

  console.log(allotments)

  return (
    <>
      <Header children={<ProgressCard CardData={CardData} />} />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Lotes</h3>
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
                        />
                      </th>
                    </tr>
                  )}
                  <tr>
                    <th scope="col">
                      <div className="d-flex justify-content-end ml-3 align-items-center">
                        <Input
                          className="position-relative"
                          type="checkbox"
                          onChange={handleSelectAllCheckbox}
                        />
                      </div>
                    </th>
                    <th scope="col">Propriedade</th>
                    <th scope="col">SNCR</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {allotments.map((allotment, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setAllotment(allotment);
                      }}
                      key={index}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          className="position-relative"
                          checked={
                            checkbox.filter((check) => check.id === allotment.id)
                              .length
                          }
                          value={allotment.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{allotment.property_name}</td>
                      <td>{allotment.sncr}</td>
                      <td>{allotment.allotment_city}</td>
                      <td>{allotment.allotment_state}</td>
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
      <Modal isOpen={openAddMember} size="lg" style={{ minWidth: "60%" }}>
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
      <ModalMembro open={open} setOpen={setOpen} allotment={allotment} />
    </>
  );
};

export default Allotments;