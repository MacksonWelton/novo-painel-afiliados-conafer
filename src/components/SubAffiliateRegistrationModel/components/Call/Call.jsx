import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Col, FormGroup, Input, Row, Table } from "reactstrap";
import { getUserAffiliation } from "redux/actions/UsuariosAfiliacao";

const Call = ({
  inputCall,
  setInputCall,
  inputCallFiles,
  setInputCallFiles,
}) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState({
    archive: {
      fileName: "",
      value: "",
    },
  });

  useEffect(() => {
    dispatch(getUserAffiliation());
  }, [dispatch]);

  const userAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.userAffiliation
  );

  if (inputCall.questioned_by === "" && userAffiliation.id) {
    setInputCall({ ...inputCall, questioned_by: userAffiliation.id });
  }

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputCall({ ...inputCall, [name]: value });
  };

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];

    if (value) {
      const fileName = event.target.files[0].name;

      setFiles({
        ...files,
        [name]: {
          ...files[name],
          fileName: fileName,
          value: value,
        },
      });
    } else {
      setFiles({
        ...files,
        [name]: { ...files[name], fileName: "", value: "" },
      });
    }
  };

  const addFile = (event) => {
    const name = event.target.name;

    if (files[name].value && files[name].value.size < 10485760) {
      setInputCallFiles([...inputCallFiles, files[name]]);

      setFiles({
        ...files,
        [name]: { ...files[name], fileName: "", value: "" },
      });
    }
  };

  const removeFile = (index) => {
    setInputCallFiles(inputCallFiles.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Chamado</h2>
            <hr />
          </Col>
          <Col lg="12">
            <FormGroup>
              <label className="form-control-label" htmlFor="text">
                Escreva uma mensagem <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="textarea"
                name="text"
                id="text"
                title="Texto"
                placeholder="Ex: Estou tendo problemas ao cadastrar um novo usuário no sistema."
                value={inputCall.text}
                onChange={handleChangeInput}
                rows="8"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="4" className="text-center">
            <label className="form-control-label" htmlFor="archive">
              Anexar arquivos
            </label>
            <FormGroup>
              <label className="btn bg-light ml-1 mb-0">
                {files.archive.fileName
                  ? files.archive.fileName.substring(0, 30)
                  : "Escolher Arquivo"}
                <Input
                  className="d-none"
                  type="file"
                  name="archive"
                  id="archive"
                  title="Arquivo"
                  accept=".pdf,.doc,.docx,.xlsx,.csv,image/*"
                  onChange={handleChangeInputFile}
                />
              </label>
            </FormGroup>
          </Col>
          <Col
            lg="4"
            className="d-flex align-items-center justify-content-center pt-2"
          >
            <Button name="archive" color="primary" onClick={addFile}>
              Adicionar
            </Button>
          </Col>
          <Col lg="12" className="mt-3">
            <Table>
              <thead>
                <tr>
                  <th>Arquivo</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputCallFiles.map((file, i) => (
                  <tr key={i}>
                    <td>{file.fileName.substring(0, 35)}</td>
                    <td>
                      <Button onClick={() => removeFile(i)}>
                        <DeleteForeverOutlined />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Call;
