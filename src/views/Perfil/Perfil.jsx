import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader";
import ProfileEditForm from "../../components/EditProfile/ProfileEditForm";

import { updateProfile } from "../../redux/actions/Perfil";
import Avatar from "../../assets/img/theme/avatar.png";
import ModalChangePassword from "../../components/EditProfile/ModalChangePassword";
import { Img } from "./Styles";

const Perfil = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const [fileName, setFileName] = useState({
    profilepic: "",
    show: true,
  });

  const [files, setFiles] = useState({
    profilepic: {
      fileName: "",
      value: "",
    },
  });

  const [open, setOpen] = useState(false);

  const profile = useSelector((state) => state.ProfileReducer.profile);

  if (Object.keys(profile).length && input.name === "") {
    setInput({
      ...input,
      id: profile.id,
      name: profile.name,
      email: profile.email,
      phone: profile.phone ? profile.phone : "",
    });

    if (profile.profilepic) {
      setFileName({
        ...fileName,
        profilepic: profile.profilepic,
      });
    } else {
      setFileName({
        ...fileName,
        profilepic: Avatar,
      });
    }
  }

  const submitForm = (event) => {
    event.preventDefault();
    if (files.profilepic.value) {
      dispatch(updateProfile(input, files));
    } else {
      dispatch(updateProfile(input, null));
    }
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChangeFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    let fileName = "";

    if (value) {
      fileName = event.target.files[0].name;
    }

    setFiles({
      ...files,
      [name]: { ...files[name], fileName: fileName, value: value },
    });

    setFileName(
      value
        ? { ...fileName, [name]: value, show: false }
        : { ...fileName, [name]: Avatar, show: true }
    );
  };

  return (
    <>
      <UserHeader
        userData={profile}
        input={input}
        fileName={fileName}
        handleChangeFile={handleChangeFile}
      />

      <Container className="mt--9" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <Img
                      alt="..."
                      src={
                        fileName.show
                          ? fileName.profilepic
                          : URL.createObjectURL(fileName.profilepic)
                      }
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap justify-content-center">
                    <Button
                      className="mr-2 w-50"
                      color="info"
                      onClick={() => setOpen(!open)}
                      size="sm"
                      title="Alterar Senha"
                    >
                      <i className="fas fa-key"></i>
                    </Button>
                    <small className="w-100 mr-2 mt-2">Senha</small>
                  </div>
                  <div className="d-flex flex-wrap justify-content-center">
                    <Button
                      className="mr-2 w-50 h-50"
                      color="default"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                      title="Mensagens"
                    >
                      <i className="fas fa-envelope-square"></i>
                    </Button>
                    <small className="w-100 mr-2 mt-2">Msgs</small>
                    </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4 mt-5">
                <div className="text-center">
                  <h3>{profile.name}</h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {profile.phone}, {profile.email}
                  </div>
                  <hr className="my-4" />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col id="edit-profile" className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Minha Conta</h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <ProfileEditForm
                  files={fileName}
                  submitForm={submitForm}
                  input={input}
                  handleChangeFile={handleChangeFile}
                  handleChangeInput={handleChangeInput}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <ModalChangePassword open={open} setOpen={setOpen} profile={profile} />
    </>
  );
};

export default Perfil;
