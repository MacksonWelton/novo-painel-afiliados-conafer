import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = ({ userData }) => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Olá, {userData.name}.</h1>
              <p className="text-white mt-0 mb-5">
                Esta é a sua página de perfil. Você pode ver o progresso que
                você fez com seu trabalho e gerenciar seus projetos ou tarefas
                atribuídas.
              </p>
              <Button color="info" href="#edit-profile">
                Editar perfil
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
