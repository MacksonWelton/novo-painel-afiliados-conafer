import React, { useState, useEffect } from "react";
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
import UserHeader from "components/Headers/UserHeader.js";
import ProfileEditForm from "../../components/EditProfile/ProfileEditForm";
import ModalPhotoChange from "../../components/EditProfile/ModalPhotoChange";

import PerfilData from "./PerfilData";
import { newProfile } from "redux/actions/Perfil";

const Perfil = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    photo: undefined,
    cover: undefined,
    name: "",
    birthDate: "",
    maritalStatus: "",
    sex: "",
    nacionality: "",
    cpf: "",
    rg: "",
    emittingOrgan: "",
    emissionDate: "",
    voterTitle: "",
    electoralZone: "",
    section: "",
    familyGroup: "",
    address: "",
    cep: "",
    city: "",
    state: undefined,
    phone: "",
    email: "",
    entityGroup: "",
    profession: "",
    agree: false,
  });

  const [fileName, setFileName] = useState({
    photo: "",
    cover: "",
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(newProfile(PerfilData));
  }, [dispatch]);

  const profile = useSelector((state) => state.ProfileReducer.profile);

  useEffect(() => {
    if (Object.keys(profile).length) {
      setInput(profile);
    }
  }, [setInput, profile]);

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(newProfile(input));
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChangeFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInput({ ...input, [name]: value });
    setFileName(
      value ? { ...fileName, [name]: value.name } : { ...fileName, [name]: "" }
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
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <img
                      alt="..."
                      style={{ maxHeight: "180px" }}
                      src={
                        fileName.photo
                          ? URL.createObjectURL(input.photo)
                          : input.photo
                      }
                    />
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={() => setOpen(!open)}
                    size="sm"
                  >
                    Alterar
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    {profile.name}
                    <span className="font-weight-light">
                      , {profile.birthDate}
                    </span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {profile.city}, {profile.state}
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
                  submitForm={submitForm}
                  input={input}
                  handleChangeInput={handleChangeInput}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <ModalPhotoChange
        fileName={fileName}
        handleChangeFile={handleChangeFile}
        input={input}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};

export default Perfil;
