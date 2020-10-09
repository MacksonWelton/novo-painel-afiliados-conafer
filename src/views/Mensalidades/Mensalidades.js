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

import { newPayments } from "../../redux/actions/Mensalidades";

import MensalidadesData from "./MensalidadesData";
import { Td } from "./styles";
import ProgressCard from "components/ProgressCard/ProgressCard";

const Mensalidades = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newPayments(MensalidadesData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState({});


  const payments = useSelector((state) => state.PaymentsReducer.payments);

  const getBadge = (status) => {
    switch (status) {
      case "Pago":
        return "bg-green";
      case "Aberto":
        return "bg-blue";
      case "Atrasado":
        return "bg-yellow";
      case "Cancelado":
        return "bg-red";
      default:
        return "primary";
    }
  };

  const CardData = [
    {
      title: "Abertas",
      progress: payments.filter((contract) => contract.status === "Aberto")
        .length,
      max: payments.length,
      icon: "fas fa-headset",
      color: "blue",
    },
    {
      title: "Atrasadas",
      progress: payments.filter((contract) => contract.status === "Atrasado")
        .length,
      max: payments.length,
      icon: "far fa-clock",
      color: "yellow",
    },
    {
      title: "Canceladas",
      progress: payments.filter((contract) => contract.status === "Cancelado")
        .length,
      max: payments.length,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Pagos",
      progress: payments.filter((contract) => contract.status === "Pago")
      .length,
      max: payments.length,
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
                <h3 className="text-white mb-0">Lista de Mensalidades</h3>
              </CardHeader>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Número</th>
                    <th scope="col">Status</th>
                    <th scope="col">Emitido em</th>
                    <th scope="col">Vencimento</th>
                    <th scope="col">Data de Pagamento</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment, index) => (
                    <tr key={index}>
                      <Td
                        onClick={() => {
                          setOpen(!open);
                          setPayment(payment);
                        }}
                      >
                        {payment.id}
                      </Td>
                      <td>
                        <Badge color="" className="badge-dot">
                          <i className={getBadge(payment.status)} />
                          {payment.status}
                        </Badge>
                      </td>
                      <td>{payment.emissionDate}</td>
                      <td>{payment.winningData}</td>
                      <td>{payment.dateOfPayment}</td>
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
          {payment.number}
        </ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter className="d-flex justify-content-end">
          <Button color="primary">Pagar</Button>
          <Button color="success">Imprimir</Button>
          <Button color="secondary" onClick={() => setOpen(!open)}>
            Sair
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Mensalidades;
