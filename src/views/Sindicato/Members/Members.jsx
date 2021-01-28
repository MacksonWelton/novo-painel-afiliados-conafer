import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardFooter,
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

import Header from "../../../components/Headers/Header";

import {
  getMembers,
} from "../../../redux/actions/Membros";

import { Tr } from "./styles";
import RegistroSubAfiliados from "../../../components/RegistroSubAfiliados/RegistroSubAfiliados";
import { CardHeaderStyled } from "./styles";
import ModalMembro from "../../../components/ModalMembro/ModalMembro";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.MembersReducer.members);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [member, setMember] = useState({});

  return (
    <>
      <Header/>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Membros</h3>
                {/* <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div> */}
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
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Estado</th>
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
                      <td>{member.name}</td>
                      <td>{member.phone}</td>
                      <td>{member.email}</td>
                      <td>{member.state}</td>
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
      <ModalMembro open={open} setOpen={setOpen} member={member}/>
    </>
  );
};

export default Members;
