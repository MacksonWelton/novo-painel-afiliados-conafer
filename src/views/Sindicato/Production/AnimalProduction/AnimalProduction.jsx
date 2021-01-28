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
  getAnimalsProductions,
} from "../../../../redux/actions/Membros";

import { InputStyled, Tr } from "./styles";
import RegistroSubAfiliados from "components/RegistroSubAfiliados/RegistroSubAfiliados";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";

const AnimalProduction = () => {
  const dispatch = useDispatch();
  const animalsProductions = useSelector(
    (state) => state.MembersReducer.animalsProductions
  );
  
  useEffect(() => {
    dispatch(getAnimalsProductions());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [
    animalsProduction,
    setAnimalsProduction,
  ] = useState({});
  // const [checkbox, setCheckbox] = useState([]);

  // const handleChangeCheckbox = (event) => {
  //   const { value, checked } = event.target;
  //   if (checked) {
  //     setCheckbox([...checkbox, { id: value, checked }]);
  //   } else {
  //     setCheckbox(checkbox.filter((check) => check.id !== value));
  //   }
  // };

  // const handleSelectAllCheckbox = (event) => {
  //   const checked = event.target.checked;

  //   if (checked) {
  //     setCheckbox(
  //       animalsProductions.map((production) => {
  //         return { id: production.id, checked: true };
  //       })
  //     );
  //   } else {
  //     setCheckbox([]);
  //   }
  // };

  // const handleDownloadsMembers = () => {
  //   dispatch(downloadMembers(checkbox));
  // };

  return (
    <>
      <Header/>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">
                  Produção
                </h3>
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
                    <th scope="col">Propriedade</th>
                  </tr>
                </thead>
                <tbody>
                  {animalsProductions.map((production, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setAnimalsProduction(production);
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
                            checkbox.filter(
                              (check) => check.id === production.id
                            ).length
                          }
                          value={production.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td> */}
                      <td>{production.allotmentName}</td>
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
      <ModalMembro
        open={open}
        setOpen={setOpen}
        animalsProduction={animalsProduction}
      />
    </>
  );
};

export default AnimalProduction;