import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button, Input } from "reactstrap";

import Header from "../../components/Headers/Header";
import { Tr } from "./styles";
import ProgressCard from "../../components/ProgressCard/ProgressCard";
import { CardHeaderStyled } from "./styles";
import { getCalledAnswers } from "redux/actions/Called";
import ModalMembro from "components/ModalMembro/ModalMembro";
import Paginations from "components/Paginations/Paginations";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import StatsCard from "components/StatsCard/StatsCard";

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
    call: true,
  });
  const [call, setCall] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Chamados",
      progress: calledAnswers.results.filter((call) => !call.call).length,
      comparison: calledAnswers.results.filter(
        (call) =>
          moment(call.created_at).format("MM/YYYY") ===
            moment().format("MM/YYYY") && !call.call
      ).length,
      comparisonDate: "Registrado este mês",
      icon: "fas fa-headset text-white",
      color: "bg-red",
    },
  ];

  const handleChangeLines = (event) => {
    setLines(Number(event.target.value));
  };

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />} />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Chamados</h3>
                <div className="d-flex align-items-center">
                  <Input
                    className="form-control-alternative"
                    type="select"
                    id="list"
                    title="Quantidade de linhas por página"
                    onChange={handleChangeLines}
                    value={lines}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </Input>
                </div>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddCall({
                        ...openAddCall,
                        modal: !openAddCall.modal,
                      })
                    }
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
                    <th scope="col">Protocolo</th>
                    <th scope="col">Resumo</th>
                    <th scope="col">Criado em</th>
                  </tr>
                </thead>
                <tbody>
                  {calledAnswers.results.map((call, index) => {
                    if (!call.call) {
                      return (
                        <Tr
                          key={index}
                          onClick={() => {
                            setOpen(!open);
                            setCall(call);
                          }}
                        >
                          <td>{call.protocol}</td>
                          <td>{call.text.substr(0, 20)}</td>
                          <td>
                            {moment(call.created_at).format("DD/MM/YYYY")} às{" "}
                            {moment(call.created_at).format("hh:mm")}
                          </td>
                        </Tr>
                      );
                    }

                    return null;
                  })}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={calledAnswers.count}
                  funcRequistion={getCalledAnswers}
                  lines={lines}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddCall}
        setOpen={setOpenAddCall}
      />
      <ModalMembro call={call} open={open} setOpen={setOpen} />
    </>
  );
};

export default Suporte;
