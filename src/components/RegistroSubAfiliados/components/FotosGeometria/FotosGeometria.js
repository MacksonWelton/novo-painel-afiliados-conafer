import { Input } from "@material-ui/icons";
import React from "react";
import { Button, InputGroup } from "reactstrap";

const FotosGeometria = ({
  inputPhotosAndGeometry,
  setInputPhotosAndGeometry,
}) => {

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputPhotosAndGeometry({ ...inputPhotosAndGeometry, [name]: value });
  };

  const deleteFile = (event) => {
    const name = event.target.name;
    setInputPhotosAndGeometry({ ...inputPhotosAndGeometry, [name]: "" });
  };

  const handleChangeInputFiles = (event, index) => {
    const { name, files } = event.target;

    if (inputPhotosAndGeometry[name][index] === "") {
      console.log(index);
      setInputPhotosAndGeometry({
        ...inputPhotosAndGeometry,
        [name]: [
          ...inputPhotosAndGeometry[name].map((file, i) => {
            if (i === index) {
              file = files[0];
            }
            return file;
          }),
        ],
      });
    } else {
      setInputPhotosAndGeometry({
        ...inputPhotosAndGeometry,
        [name]: [...inputPhotosAndGeometry[name], files[0]],
      });
    }
  };

  const addInputFile = (title) => {
    switch (title) {
      case "Certidão de Nascimento":
        setInputPhotosAndGeometry({
          ...inputPhotosAndGeometry,
          birthCertificate: [...inputPhotosAndGeometry.birthCertificate, ""],
        });
        break;
      case "CPF":
        setInputPhotosAndGeometry({
          ...inputPhotosAndGeometry,
          cpf: [...inputPhotosAndGeometry.cpf, ""],
        });
        break;
      case "Atividades Econômicas":
        setInputPhotosAndGeometry({
          ...inputPhotosAndGeometry,
          economicActivities: [...inputPhotosAndGeometry.economicActivities, ""],
        });
        break;
      case "Benfeitorias":
        setInputPhotosAndGeometry({
          ...inputPhotosAndGeometry,
          improvement: [...inputPhotosAndGeometry.improvement, ""],
        });
        break;
      default:
        return;
    }
  };

  const deleteInputFile = (event, index) => {
    const name = event.target.name;

    setInputPhotosAndGeometry({
      ...inputPhotosAndGeometry,
      [name]: [
        ...inputPhotosAndGeometry[name].filter((input, i) => i !== index),
      ],
    });
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>Documentos</h3>
        <hr />
      </div>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleFront
            ? inputPhotosAndGeometry.domainTitleFront.name
            : "Título de Domínio (Frente)"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="domainTitleFront"
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.domainTitleFront && (
            <Button
              className="p-0 ml-2"
              name="domainTitleFront"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.domainTitleBack
            ? inputPhotosAndGeometry.domainTitleBack.name
            : "Título de Domínio (Verso)"}
          <Input
            type="file"
            name="domainTitleBack"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.domainTitleBack && (
            <Button
              className="p-0 ml-2"
              name="domainTitleBack"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
      </InputGroup>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.frontSettlement
            ? inputPhotosAndGeometry.frontSettlement.name
            : "Cartão de Assentamento (Frente)"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="frontSettlement"
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.frontSettlement && (
            <Button
              className="p-0 ml-2"
              name="frontSettlement"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.backSettlement
            ? inputPhotosAndGeometry.backSettlement.name
            : "Cartão de Assentamento (Verso)"}
          <Input
            type="file"
            name="backSettlement"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.backSettlement && (
            <Button
              className="p-0 ml-2"
              name="backSettlement"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.georeferencing
            ? inputPhotosAndGeometry.georeferencing.name
            : "Georreferenciamento"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="georeferencing"
            onChange={handleChangeInputFile}
          />
        </label>
        {inputPhotosAndGeometry.georeferencing && (
          <Button
            className="p-0 ml-2"
            name="georeferencing"
            onClick={(event) => deleteFile(event)}
          >
            X
          </Button>
        )}
      </InputGroup>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rgFront
            ? inputPhotosAndGeometry.rgFront.name
            : "RG do Beneficiário(a) (Frente)"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="rgFront"
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.rgFront && (
            <Button
              className="p-0 ml-2"
              name="rgFront"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rgBack
            ? inputPhotosAndGeometry.rgBack.name
            : "RG do Beneficiário(a) (Verso)"}
          <Input
            type="file"
            name="rgBack"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
        </label>
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rg2Front
            ? inputPhotosAndGeometry.rg2Front.name
            : "RG do(a) Companheiro(a) (Frente)"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="rg2Front"
            onChange={handleChangeInputFile}
          />
          {inputPhotosAndGeometry.rg2 && (
            <Button
              className="p-0 ml-2"
              name="rg2Front"
              onClick={(event) => deleteFile(event)}
            >
              X
            </Button>
          )}
        </label>
        <label className="btn bg-light ml-1 mb-0">
          {inputPhotosAndGeometry.rg2Back
            ? inputPhotosAndGeometry.rg2Back.name
            : "RG do(a) Companheiro(a) (Verso)"}
          <Input
            type="file"
            name="rg2Back"
            style={{ display: "none" }}
            onChange={handleChangeInputFile}
          />
        </label>
      </InputGroup>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        {inputPhotosAndGeometry.birthCertificate.map((input, index) => {
          return (
            <label key={index} className="btn bg-light ml-1 mb-0">
              {inputPhotosAndGeometry.birthCertificate[index]
                ? inputPhotosAndGeometry.birthCertificate[index]["name"]
                : "Certidão de Nascimento"}
              <Input
                type="file"
                style={{ display: "none" }}
                name="birthCertificate"
                onChange={(event) => handleChangeInputFiles(event, index)}
              />
              {(inputPhotosAndGeometry.birthCertificate[index] ||
                index > 0) && (
                <Button
                  className="p-0 ml-2"
                  name="birthCertificate"
                  onClick={(event) => deleteInputFile(event, index)}
                >
                  X
                </Button>
              )}
            </label>
          );
        })}
        <Button
          className="ml-1"
          color="primary"
          onClick={() => addInputFile("Certidão de Nascimento")}
        >
          Adicionar
        </Button>
      </InputGroup>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        {inputPhotosAndGeometry.cpf.map((input, index) => {
          return (
            <label key={index} className="btn bg-light ml-1 mb-0">
              {inputPhotosAndGeometry.cpf[index]
                ? inputPhotosAndGeometry.cpf[index]["name"]
                : "CPF"}
              <Input
                type="file"
                style={{ display: "none" }}
                name="cpf"
                onChange={(event) => handleChangeInputFiles(event, index)}
              />
              {(inputPhotosAndGeometry.cpf[index] || index > 0) && (
                <Button
                  className="p-0 ml-2"
                  name="cpf"
                  onClick={(event) => deleteInputFile(event, index)}
                >
                  X
                </Button>
              )}
            </label>
          );
        })}

        <Button
          className="ml-1"
          color="primary"
          onClick={() => addInputFile("CPF")}
        >
          Adicionar
        </Button>
      </InputGroup>

      <div className="col-12">
        <h3>Fotos</h3>
        <hr />
      </div>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        {inputPhotosAndGeometry.economicActivities.map((input, index) => {
          return (
            <label key={index} className="btn bg-light ml-1 mb-0">
              {inputPhotosAndGeometry.economicActivities[index]
                ? inputPhotosAndGeometry.economicActivities[index]["name"]
                : "Atividades Econômicas"}
              <Input
                type="file"
                style={{ display: "none" }}
                name="economicActivities"
                onChange={(event) => handleChangeInputFiles(event, index)}
              />
              {(inputPhotosAndGeometry.economicActivities[index] || index > 0) && (
                <Button
                  className="p-0 ml-2"
                  name="economicActivities"
                  onClick={(event) => deleteInputFile(event, index)}
                >
                  X
                </Button>
              )}
            </label>
          );
        })}

        <Button
          className="ml-1"
          color="primary"
          onClick={() => addInputFile("Atividades Econômicas")}
        >
          Adicionar
        </Button>
      </InputGroup>

      <InputGroup className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        {inputPhotosAndGeometry.improvement.map((input, index) => {
          return (
            <label key={index} className="btn bg-light ml-1 mb-0">
              {inputPhotosAndGeometry.improvement[index]
                ? inputPhotosAndGeometry.improvement[index]["name"]
                : "Benfeitorias"}
              <Input
                type="file"
                style={{ display: "none" }}
                name="improvement"
                onChange={(event) => handleChangeInputFiles(event, index)}
              />
              {(inputPhotosAndGeometry.improvement[index] || index > 0) && (
                <Button
                  className="p-0 ml-2"
                  name="improvement"
                  onClick={(event) => deleteInputFile(event, index)}
                >
                  X
                </Button>
              )}
            </label>
          );
        })}

        <Button
          className="ml-1"
          color="primary"
          onClick={() => addInputFile("Benfeitorias")}
        >
          Adicionar
        </Button>
      </InputGroup>
    </div>
  );
};

export default FotosGeometria;