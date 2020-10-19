import { Input } from "@material-ui/icons";
import React from "react";
import { Button, Col, FormGroup, Row } from "reactstrap";

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
          birth_certificate: [...inputPhotosAndGeometry.birth_certificate, ""],
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
          economic_activities_file: [
            ...inputPhotosAndGeometry.economic_activities_file,
            "",
          ],
        });
        break;
      case "Benfeitorias":
        setInputPhotosAndGeometry({
          ...inputPhotosAndGeometry,
          improvements_file: [...inputPhotosAndGeometry.improvements_file, ""],
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
    <Row>
      <div className="col-12">
        <h3>Documentos</h3>
        <hr />
      </div>
      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">Título de Domínio</label>
        </FormGroup>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.front_domain_title
              ? inputPhotosAndGeometry.front_domain_title.name
              : "Selecione a Frente do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              style={{ display: "none" }}
              name="front_domain_title"
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.front_domain_title && (
              <Button
                className="p-0 ml-2"
                name="front_domain_title"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.back_domain_title
              ? inputPhotosAndGeometry.back_domain_title.name
              : "Selecione Atrás do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              name="back_domain_title"
              style={{ display: "none" }}
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.back_domain_title && (
              <Button
                className="p-0 ml-2"
                name="back_domain_title"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">Cartão de Assentamento</label>
        </FormGroup>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.front_nesting_card
              ? inputPhotosAndGeometry.front_nesting_card.name
              : "Selecione a Frente do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              style={{ display: "none" }}
              name="front_nesting_card"
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.front_nesting_card && (
              <Button
                className="p-0 ml-2"
                name="front_nesting_card"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.back_nesting_card
              ? inputPhotosAndGeometry.back_nesting_card.name
              : "Selecione Atrás do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              name="back_nesting_card"
              style={{ display: "none" }}
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.back_nesting_card && (
              <Button
                className="p-0 ml-2"
                name="back_nesting_card"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="georeferencing">
            Georreferenciamento
          </label>
        </FormGroup>

        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.georeferencing
              ? inputPhotosAndGeometry.georeferencing.name
              : "Selecione o Documento"}
            <Input
              className="form-control-alternative"
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
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label" htmlFor="georeferencing">
            RG do Beneficiário(a)
          </label>
        </FormGroup>

        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.front_beneficiary_rg
              ? inputPhotosAndGeometry.front_beneficiary_rg.name
              : "Selecione a Frente do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              style={{ display: "none" }}
              name="front_beneficiary_rg"
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.front_beneficiary_rg && (
              <Button
                className="p-0 ml-2"
                name="front_beneficiary_rg"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.back_beneficiary_rg
              ? inputPhotosAndGeometry.back_beneficiary_rg.name
              : "Selecione Atrás do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              name="back_beneficiary_rg"
              style={{ display: "none" }}
              onChange={handleChangeInputFile}
            />
          </label>
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">RG do(a) Companheiro(a)</label>
        </FormGroup>
        <FormGroup>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.front_companion_rg
              ? inputPhotosAndGeometry.front_companion_rg.name
              : "Selecione a Frente do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              style={{ display: "none" }}
              name="front_companion_rg"
              onChange={handleChangeInputFile}
            />
            {inputPhotosAndGeometry.rg2 && (
              <Button
                className="p-0 ml-2"
                name="front_companion_rg"
                onClick={(event) => deleteFile(event)}
              >
                X
              </Button>
            )}
          </label>
          <label className="btn bg-light ml-1 mb-0">
            {inputPhotosAndGeometry.back_companion_rg
              ? inputPhotosAndGeometry.back_companion_rg.name
              : "Selecione Atrás do Documento"}
            <Input
              className="form-control-alternative"
              type="file"
              name="back_companion_rg"
              style={{ display: "none" }}
              onChange={handleChangeInputFile}
            />
          </label>
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">Certidão de Nascimento</label>
        </FormGroup>
        <FormGroup>
          {inputPhotosAndGeometry.birth_certificate.map((input, index) => {
            return (
              <label key={index} className="btn bg-light ml-1 mb-0">
                {inputPhotosAndGeometry.birth_certificate[index]
                  ? inputPhotosAndGeometry.birth_certificate[index]["name"]
                  : "Certidão de Nascimento"}
                <Input
                  className="form-control-alternative"
                  type="file"
                  style={{ display: "none" }}
                  name="birth_certificate"
                  onChange={(event) => handleChangeInputFiles(event, index)}
                />
                {(inputPhotosAndGeometry.birth_certificate[index] ||
                  index > 0) && (
                  <Button
                    className="p-0 ml-2"
                    name="birth_certificate"
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
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <FormGroup>
            <label className="form-control-label">CPF</label>
          </FormGroup>
          {inputPhotosAndGeometry.cpf.map((input, index) => {
            return (
              <label key={index} className="btn bg-light ml-1 mb-0">
                {inputPhotosAndGeometry.cpf[index]
                  ? inputPhotosAndGeometry.cpf[index]["name"]
                  : "CPF"}
                <Input
                  className="form-control-alternative"
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
        </FormGroup>
      </Col>

      <div className="col-12">
        <h3>Fotos</h3>
        <hr />
      </div>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">Atividades Econômicas</label>
        </FormGroup>
        <FormGroup>
          {inputPhotosAndGeometry.economic_activities_file.map((input, index) => {
            return (
              <label key={index} className="btn bg-light ml-1 mb-0">
                {inputPhotosAndGeometry.economic_activities_file[index]
                  ? inputPhotosAndGeometry.economic_activities_file[index]["name"]
                  : "Atividades Econômicas"}
                <Input
                  className="form-control-alternative"
                  type="file"
                  style={{ display: "none" }}
                  name="economic_activities_file"
                  onChange={(event) => handleChangeInputFiles(event, index)}
                />
                {(inputPhotosAndGeometry.economic_activities_file[index] ||
                  index > 0) && (
                  <Button
                    className="p-0 ml-2"
                    name="economic_activities_file"
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
        </FormGroup>
      </Col>

      <Col lg="12">
        <FormGroup>
          <label className="form-control-label">
            Benfeitorias
          </label>
        </FormGroup>
        <FormGroup>
          {inputPhotosAndGeometry.improvements_file.map((input, index) => {
            return (
              <label key={index} className="btn bg-light ml-1 mb-0">
                {inputPhotosAndGeometry.improvements_file[index]
                  ? inputPhotosAndGeometry.improvements_file[index]["name"]
                  : "Selecione o Documento"}
                <Input
                  className="form-control-alternative"
                  type="file"
                  style={{ display: "none" }}
                  name="improvements_file"
                  onChange={(event) => handleChangeInputFiles(event, index)}
                />
                {(inputPhotosAndGeometry.improvements_file[index] || index > 0) && (
                  <Button
                    className="p-0 ml-2"
                    name="improvements_file"
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
        </FormGroup>
      </Col>
    </Row>
  );
};

export default FotosGeometria;
