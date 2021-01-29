import React from "react";
import { Link } from "react-router-dom";
import {
  Col,
  Modal,
  Row,
  Card,
  CardTitle,
  CardBody,
  CardFooter,
  CardHeader,
  ModalHeader,
} from "reactstrap";
import logo from "../../assets/img/brand/sistemalogo.png";

const ModalRegistroAfiliados = ({ open, setOpen }) => {
  return (
    <Modal size="md" isOpen={open.modal} toggle={() => setOpen({...open, modal: !open.modal})} centered>
      <ModalHeader
        toggle={() => {
          setOpen({...open, modal: !open.modal});
        }}
      ></ModalHeader>
      <Row>
        <Col lg="12">
          <Card className="bg-secondary shadow border-0">
            <CardHeader className="bg-transparent mt-4 p-3 d-flex flex-column align-items-center">
              <img src={logo} alt="" className="w-75" />
              <CardTitle className="mt-3 h2">É TEMPO DE CRESCER!</CardTitle>
              <p className="text-center">
                Conclua seu cadastro agora mesmo e tenha acesso a todas
                funcionalidades do CRA.
              </p>
            </CardHeader>
            <CardBody className="px-lg-5 py-lg-5 d-flex flex-column align-items-center">
              <Link
                to="/admin/registration-pj"
                onClick={() => setOpen({...open, modal: !open.modal})}
                className="mb-3 p-2 bg-primary w-100 text-white text-center rounded"
              >
                PESSOA JURÍDICA
              </Link>
              <Link
                to="/admin/registration-pf"
                onClick={() => setOpen({...open, modal: !open.modal})}
                className="mb-3 p-2 bg-primary w-100 text-white text-center rounded"
              >
                PESSOA FÍSICA
              </Link>
            </CardBody>
            <CardFooter className="text-center">
              Caso tenha alguma dúvida ou problema, consulte nosso FAQ ou entre
              em contato
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalRegistroAfiliados;
