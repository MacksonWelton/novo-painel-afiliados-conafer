import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, FormGroup, Input, Row } from "reactstrap";
import { getUserAffiliationById } from "redux/actions/UsuariosAfiliacao";
import { Title, Content } from "./Styles";
import { getCallAnswersByQuestion } from "redux/actions/Called";

const Call = ({ call }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({

  });

  useEffect(() => {
    dispatch(getUserAffiliationById(call.questioned_by));
    dispatch(getCallAnswersByQuestion(call.id));
  }, []);

  const userAffiliation = useSelector(
    (state) => state.UsersAffiliationReducer.userAffiliationById
  );

  const callAnswersByQuestion = useSelector(
    (state) => state.CalledReducer.callAnswersByQuestion
  );

  return (
    <>
      <Title>Pergunta</Title>
      <div>
        <Row>
          <Col lg="12" className="mb-3">
            <Content>
              <p className="d-flex justify-content-between">
                <small>
                  <b>Feito(a) por:</b> {userAffiliation.name}
                </small>{" "}
                <small>
                  {moment(call.created_at).format("DD/MM/YYYY")} às{" "}
                  {moment(call.created_at).format("hh:mm")}
                </small>
              </p>
              {call.text}
            </Content>
          </Col>
        </Row>
      </div>
      <Title>Respostas</Title>
      <div>
        <Row>
          {callAnswersByQuestion.map((answer, i) => (
            <Col lg="12" className="mb-3" key={i}>
              <Content>
                <p className="d-flex justify-content-between">
                  <small>
                    <b>Respondido por:</b> {answer.answered_by}
                  </small>{" "}
                  <small>
                    {moment(answer.created_at).format("DD/MM/YYYY")} às{" "}
                    {moment(answer.created_at).format("hh:mm")}
                  </small>
                </p>
                {answer.text}
              </Content>
            </Col>
          ))}
          <Col>
            <Content>
              <Form>
                <FormGroup>
                  <label
                    className="form-control-label"
                    htmlFor="allotment_city"
                  >
                    Enviar nova mensagem
                  </label>
                  <Input
                    className="form-control-alternative"
                    type="textarea"
                    rows="5"
                    name="allotment_city"
                    placeholder="Ex: Quero saber como realizar o cadastro de novos usuários."
                    required
                  />
                </FormGroup>
              </Form>
            </Content>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Call;
