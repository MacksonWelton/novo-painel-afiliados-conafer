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
  deletePayments,
  downloadPayments,
  newPayments,
} from "../../redux/actions/Mensalidades";

import MensalidadesData from "./MensalidadesData";
import ProgressCard from "components/ProgressCard/ProgressCard";
import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import { InputStyled } from "views/Contratos/styles";
import BotoesDeAcao from "components/BotoesDeAcao/BotoesDeAcao";

const Mensalidades = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.PaymentsReducer.payments);

  useEffect(() => {
    dispatch(newPayments(MensalidadesData));
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [payment, setPayment] = useState({});

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
        payments.map((payment) => {
          return { id: payment.id, checked: true };
        })
      );
    } else {
      setCheckbox([]);
    }
  };

  const handleDownloadsPayments = () => {
    dispatch(downloadPayments(checkbox));
  };

  const handleDeletePayments = () => {
    dispatch(deletePayments(checkbox));
  };

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
              <CardHeaderStyled className="bg-transparent border-0 d-flex justify-content-between align-items-center">
                <h3 className="text-white mb-0">Lista de Mensalidades</h3>
                <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div>
                <div>
                  <Button color="primary">Adicionar</Button>
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
                          handleDownloadsItems={handleDownloadsPayments}
                          handleDeleteItems={handleDeletePayments}
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
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setPayment(payment);
                      }}
                    >
                      <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          checked={
                            checkbox.filter((check) => check.id === payment.id)
                              .length
                          }
                          value={payment.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td>
                      <td>{payment.id}</td>
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
