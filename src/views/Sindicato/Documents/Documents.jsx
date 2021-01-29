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

import Header from "components/Headers/Header";

import {
  getDocuments,
} from "../../../redux/actions/Membros";

import { Tr } from "./styles";
import RegistroSubAfiliados from "components/RegistroSubAfiliados/RegistroSubAfiliados";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";

const Documents = () => {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.MembersReducer.documents);

  useEffect(() => {
    dispatch(getDocuments())
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [document, setDocument] = useState({});
  const cardData = [
    {
      title: "Documentos",
      progress: documents.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-file-alt text-white",
      color: "bg-gray",
    },
  ];

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />}/>
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Documentos</h3>
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
                  {/* {checkbox.length > 0 && (
                    <tr>
                      <th></th>
                      <th>
                        <BotoesDeAcao
                          handleDownloadsItems={handleDownloadsMembers}
                        />
                      </th>
                    </tr>
                  )} */}
                  <tr>
                    {/* <th scope="col">
                      <div className="d-flex justify-content-end ml-3 align-items-center">
                        <Input
                          className="position-relative"
                          type="checkbox"
                          onChange={handleSelectAllCheckbox}
                        />
                      </div>
                    </th> */}
                    <th scope="col">Membro</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((document, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setDocument(document);
                      }}
                      key={index}
                    >
                      {/* <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          className="position-relative"
                          checked={
                            checkbox.filter((check) => check.id === document.id)
                              .length
                          }
                          value={document.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td> */}
                      <td>{document.member}</td>
                      <td>{document.city}</td>
                      <td>{document.state}</td>
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
      <ModalMembro open={open} setOpen={setOpen} document={document} />
    </>
  );
};

export default Documents;