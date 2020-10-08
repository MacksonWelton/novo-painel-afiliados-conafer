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

import { newProposals, newComment } from "../../redux/actions/Propostas";

import PropostasData from "./PropostasData";
import { Td } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";

const Propostas = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newProposals(PropostasData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [proposal, setProposal] = useState({});
  const [input, setInput] = useState();

  const handleChangeInput = (event) => {
    setInput(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(newComment(input));
  };

  const proposals = useSelector((state) => state.ProposalsReducer.proposals);

  const getBadge = (status) => {
    switch (status) {
      case "Enviado":
        return "bg-blue";
      case "Expirado":
        return "bg-yellow";
      case "Declinado":
        return "bg-red";
      case "Aceito":
        return "bg-green";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Enviados",
      progress: proposals.filter(contract => contract.status === "Enviado").length,
      max: proposals.length,
      icon: "fas fa-paper-plane",
      color: "blue",
    },
    {
      title: "Expirados",
      progress: proposals.filter(contract => contract.status === "Expirado").length,
      max: proposals.length,
      icon: "fas fa-exclamation-triangle",
      color: "yellow",
    },
    {
      title: "Declinados",
      progress: proposals.filter(contract => contract.status === "Declinado").length,
      max: proposals.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Aceitos",
      progress: proposals.filter(contract => contract.status === "Aceito").length,
      max: proposals.length,
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
                <h3 className="text-white mb-0">Lista de Orçamentos</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Orçamento</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Status</th>
                    <th scope="col">Data</th>
                    <th scope="col">Data de Expiração</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {proposals.map((proposal, index) => (
                    <tr key={index}>
                      <Td
                        onClick={(event) => {
                          event.stopPropagation();
                          setOpen(!open);
                          setProposal(proposal);
                        }}
                      >
                        {proposal.name}
                      </Td>
                      <td>{proposal.value}</td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(proposal.status)} />
                          {proposal.status}
                        </Badge>
                      </td>
                      <td>{proposal.createdIn}</td>
                      <td>{proposal.expirationDate}</td>
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
          {proposal.name}
        </ModalHeader>
        <ModalBody>
          <>
            <p className="mb-0">{proposal.description}</p>
            <p className="h6 mb-3">Criado em: {proposal.createdIn}</p>
          </>
          <>
            {proposal.comments &&
              proposal.comments.map((comment, index) => (
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

export default Propostas;
