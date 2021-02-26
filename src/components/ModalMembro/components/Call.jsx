import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
  Table,
} from "reactstrap";
import { getUserAffiliationById } from "redux/actions/UsuariosAfiliacao";
import { Content } from "./Styles";
import {
  getCallAttachmentByQuestion,
  getCallAnswersByQuestion,
} from "redux/actions/Called";
import { newCall } from "redux/actions/Called";
import { DeleteForeverOutlined } from "@material-ui/icons";

const Call = ({ call }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    text: "",
    questioned_by: "",
  });
  const [inputCallFiles, setInputCallFiles] = useState([]);
  const [files, setFiles] = useState({
    archive: {
      fileName: "",
      value: "",
    },
  });
  const [showAnswers, setShowAnswers] = useState({});
  const [showInput, setShowInput] = useState();

  useEffect(() => {
    dispatch(getUserAffiliationById(call.questioned_by));
    dispatch(getCallAnswersByQuestion(call.id));
    dispatch(getCallAttachmentByQuestion(call.id));
  }, [dispatch, call.questioned_by, call.id]);

  const userAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.userAffiliationById
  );

  const callAnswersByQuestion = useSelector(
    (state) => state.CalledReducer.callAnswersByQuestion
  );

  const attachmentByQuestion = useSelector(
    (state) => state.CalledReducer.attachmentByQuestion
  );

  if (input.questioned_by === "" && userAffiliation.id) {
    setInput({ ...input, questioned_by: userAffiliation.id });
  }

  const handleSubmitForm = (call) => {
    const newInput = { ...input, call: call };
    dispatch(newCall(newInput, inputCallFiles));
  };

  const handelChangeInput = (event) => {
    const { name, value } = event.target;

    setInput({ ...input, [name]: value });
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
    <>
      <div>
        <Row>
          <Col lg="12" className="mb-2">
            <Content className="bg-info text-default">
              <p className="d-flex justify-content-between">
                <small className="bg-green p-1 rounded">
                  <i className="fas fa-user"></i> {userAffiliation.name}
                </small>{" "}
                <small>
                  {moment(call.created_at).format("DD/MM/YYYY")} às{" "}
                  {moment(call.created_at).format("hh:mm")}
                </small>
              </p>
              {call.text}
              <Row className="p-3">
                {attachmentByQuestion.map((item, i) => (
                  <a
                    key={item.id}
                    href={item.archive}
                    className="m-3"
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button color="primary">Anexo - {i + 1}</Button>
                  </a>
                ))}
              </Row>
              {callAnswersByQuestion.map((answer) => {
                return (
                  <Content
                    key={answer.id}
                    className="mb-2 bg-default text-white"
                  >
                    <p className="d-flex justify-content-between">
                      <small className="bg-green p-1 rounded text-default">
                        <i className="fas fa-headset"></i>{" "}Equipe de Suporte
                      </small>{" "}
                      <small>
                        {moment(answer.created_at).format("DD/MM/YYYY")} às{" "}
                        {moment(answer.created_at).format("hh:mm")}
                      </small>
                    </p>
                    {answer.text}
                    <div className="d-flex flex-wrap p-3">
                      {answer.files.map((item, i) => (
                        <a
                          key={item.id}
                          href={item.archive}
                          className="m-3"
                          download
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button color="primary">Anexo - {i + 1}</Button>
                        </a>
                      ))}
                    </div>
                    {answer.questions.length > 0 ? (
                      <Button
                        className="my-2"
                        onClick={() => {
                          showAnswers[answer.id]
                            ? setShowAnswers({
                                ...showAnswers,
                                [answer.id]: null,
                              })
                            : setShowAnswers({
                                ...showAnswers,
                                [answer.id]: answer.id,
                              });
                        }}
                        size="sm"
                      >
                        Ver respostas
                      </Button>
                    ) : null}
                    {showAnswers[answer.id] === answer.id &&
                      answer.questions.map((question) => (
                        <div key={question.id}>
                          <Content className="mb-2 bg-white text-default">
                            <p className="d-flex justify-content-between">
                              <small className="bg-green p-1 rounded">
                                <i className="fas fa-user"></i>{" "}
                                {question.questioned_by}
                              </small>{" "}
                              <small>
                                {moment(question.created_at).format(
                                  "DD/MM/YYYY"
                                )}{" "}
                                às {moment(question.created_at).format("hh:mm")}
                              </small>
                            </p>
                            {question.text}
                            <div className="d-flex flex-wrap p-3">
                              {question.files.map((item, i) => (
                                <a
                                  key={item.id}
                                  href={item.archive}
                                  className="m-3"
                                  download
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <Button color="primary">
                                    Anexo - {i + 1}
                                  </Button>
                                </a>
                              ))}
                            </div>
                          </Content>
                          {question.answers.map((answer) => (
                            <Content
                              key={answer.id}
                              className="mb-2 bg-white text-default"
                            >
                              <p className="d-flex justify-content-between">
                                <small className="bg-green p-1 rounded">
                                  <i className="fas fa-headset"></i>{" "}
                                  Equipe de Suporte
                                </small>{" "}
                                <small>
                                  {moment(answer.created_at).format(
                                    "DD/MM/YYYY"
                                  )}{" "}
                                  às {moment(answer.created_at).format("hh:mm")}
                                </small>
                              </p>
                              {answer.text}
                              <div className="d-flex flex-wrap p-3">
                                {answer.files.map((item, i) => (
                                  <a
                                    key={item.id}
                                    href={item.archive}
                                    className="m-3"
                                    download
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <Button color="primary">
                                      Anexo - {i + 1}
                                    </Button>
                                  </a>
                                ))}
                              </div>
                            </Content>
                          ))}
                        </div>
                      ))}
                    <Button
                      className="my-2"
                      size="sm"
                      onClick={() => {
                        showInput ? setShowInput() : setShowInput(answer.id);
                      }}
                    >
                      Nova resposta
                    </Button>
                    {showInput === answer.id && (
                      <Content className="bg-default">
                        <Row>
                          <Col lg="12">
                            <FormGroup>
                              <label
                                className="form-control-label text-white"
                                htmlFor="text"
                              >
                                Escreva uma nova mensagem
                              </label>
                              <Input
                                className="form-control-alternative mb-3"
                                type="textarea"
                                rows="5"
                                name="text"
                                placeholder="Ex: Quero saber como realizar o cadastro de novos usuários."
                                onChange={handelChangeInput}
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6" className="text-center">
                            <FormGroup>
                              <label
                                className="form-control-label w-100 text-white"
                                htmlFor="archive"
                              >
                                Anexar arquivos
                              </label>
                              <label className="btn bg-white ml-1 mb-0 text-default">
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
                            lg="6"
                            className="d-flex align-items-center justify-content-center pt-2"
                          >
                            <Button
                              name="archive"
                              color="primary"
                              onClick={addFile}
                            >
                              Adicionar
                            </Button>
                          </Col>
                          {inputCallFiles.length > 0 && (
                            <Col lg="12" className="mt-3 text-white">
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
                          )}
                          <Col lg="12" className="text-center">
                            <Button
                              color="primary"
                              onClick={() => handleSubmitForm(answer.id)}
                            >
                              Enviar
                            </Button>
                          </Col>
                        </Row>
                      </Content>
                    )}
                  </Content>
                );
              })}
            </Content>
          </Col>
          <Col lg="12" className="mb-3"></Col>
        </Row>
      </div>
      <Row></Row>
    </>
  );
};

export default Call;
