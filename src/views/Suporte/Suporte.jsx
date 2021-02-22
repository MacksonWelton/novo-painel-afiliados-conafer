import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardFooter,
  Table,
  Container,
  Row,
  Button,
} from "reactstrap";

import Header from "../../components/Headers/Header";
import { Tr } from "./styles";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import { CardHeaderStyled } from "./styles";
import { getCalledAnswers } from "redux/actions/Called";
import ModalMembro from "components/ModalMembro/ModalMembro";
import Paginations from "components/Paginations/Paginations";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";

const Suporte = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCalledAnswers());
  }, [dispatch]);

  const calledAnswers = useSelector(
    (state) => state.CalledReducer.calledAnswers
  );

  const [open, setOpen] = useState(false);
  const [openAddCall, setOpenAddCall] = useState({
    modal: false,
    call: true
  });
  const [call, setCall] = useState({});

  const CardData = [
    {
      title: "Abertos",
      progress: 30,
      max: 40,
      icon: "fas fa-headset",
      color: "yellow",
    },
    {
      title: "Respondidos",
      progress: 0,
      max: 50,
      icon: "fas fa-question",
      color: "blue",
    },
    {
      title: "Encerrados",
      progress: 35,
      max: 50,
      icon: "fas fa-times",
      color: "red",
    },
    {
      title: "Concluídos",
      progress: 35,
      max: 40,
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
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Chamados</h3>
                <div>
                  <Button
                    onClick={() => setOpenAddCall({...openAddCall, modal: !openAddCall.modal})}
                    className="m-auto"
                    color="primary"
                  >
                    Abrir Chamado
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Chamado</th>
                    <th scope="col">Com resposta</th>
                    <th scope="col">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {calledAnswers.results.map((call, index) => (
                    <Tr
                      key={index}
                      onClick={() => {
                        setOpen(!open);
                        setCall(call);
                      }}
                    >
                      <td>{call.text.substr(0, 10)}</td>
                      <td>{call.call ? "Sim" : "Não"}</td>
                      <td>{moment(call.created_at).format("DD/MM/YYYY")}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations                   count={calledAnswers.count}
                  funcRequistion={getCalledAnswers}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel open={openAddCall} setOpen={setOpenAddCall}/>
      <ModalMembro call={call} open={open} setOpen={setOpen} />
    </>
  );
};

export default Suporte;
