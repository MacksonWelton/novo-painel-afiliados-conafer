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

import { newComment, newContracts } from "../../redux/actions/Contratos";

import ContratosData from "./ContratosData";
import { Td } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";

const Contratos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newContracts(ContratosData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [contract, setContract] = useState({});
  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newComment(input));
  };

  const contracts = useSelector((state) => state.ContractsReducer.contracts);

  const getBadge = (status) => {
    switch (status) {
      case "Assinado":
        return "bg-success";
      case "Inactive":
        return "bg-secondary";
      case "Pendente":
        return "bg-yellow";
      case "Encerrado":
        return "bg-cancelados";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Pendentes",
      progress: contracts.filter(contract => contract.status === "Pendente").length,
      max: contracts.length,
      icon: "fas fa-stopwatch",
      color: "yellow",
    },
    {
      title: "Cancelados",
      progress: contracts.filter(contract => contract.status === "Cancelados").length,
      max: contracts.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Assinados",
      progress: contracts.filter(contract => contract.status === "Assinado").length,
      max: contracts.length,
      icon: "fas fa-check",
      color: "green",
    },
  ];

  return (
    <>
      <Header children={<ProgressCard CardData={CardData} />}/>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">Lista de Contratos</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Contrato</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Criado em</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {contracts.map((contract, index) => (
                    <tr key={index}>
                      <Td
                        onClick={() => {
                          setOpen(!open);
                          setContract(contract);
                        }}
                      >
                        {contract.name}
                      </Td>
                      <td>{contract.value}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(contract.status)} />
                          {contract.status}
                        </Badge>
                      </td>
                      <td>{contract.createdIn}</td>
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
          {contract.name}
        </ModalHeader>
        <ModalBody>
          <>
            <p className="mb-0">{contract.description}</p>
            <p className="h6 mb-3">Criado em: {contract.createdIn}</p>
          </>
          <>
            {contract.comments &&
              contract.comments.map((comment, index) => (
                <div
                  key={index}
                  className={
                    comment.mainComment !== null
                      ? "p-3 rounded bg-default text-white"
                      : "p-3 mb-3 rounded bg-light"
                  }
                >
                  <p>
                    <b>{comment.createdBy}</b>
                  </p>
                  <p>{comment.comment}</p>
                  <p
                    className={
                      comment.mainComment !== null ? "h6 text-white" : "h6"
                    }
                  >
                    Criado em: {comment.createdIn}
                  </p>
                </div>
              ))}
            <Form onSubmit={submitForm}>
              <Input
                className="mb-3 mt-5"
                placeholder="Digite uma nova resposta..."
                onChange={handleChangeInput}
                rows="4"
                type="textarea"
              />
              <div className="d-flex justify-content-end">
                <Button type="submit" color="primary">Comentar</Button>
              </div>
            </Form>
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

export default Contratos;
