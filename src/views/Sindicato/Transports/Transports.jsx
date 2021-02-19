import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button } from "reactstrap";

import Header from "components/Headers/Header";

import { getTransports } from "../../../redux/actions/Transports";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Transports = () => {
  const dispatch = useDispatch();
  const transports = useSelector((state) => state.TransportsReducer.transports);

  useEffect(() => {
    dispatch(getTransports());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddTransport, setOpenAddTransport] = useState({
    modal: false,
    transport: true,
  });
  const [transport, setTransport] = useState({});

  const cardData = [
    {
      title: "Transportes",
      progress: transports.count,
      comparison: transports.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-truck text-white",
      color: "bg-purple",
    },
  ];

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />} />
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Transportes</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddTransport({
                        ...openAddTransport,
                        modal: !openAddTransport.modal,
                      })
                    }
                    className="m-auto"
                    color="primary"
                  >
                    Adicionar
                  </Button>
                </div>
              </CardHeaderStyled>
              <Table
                className="align-items-center table-dark table-flush"
                responsive
              >
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Propriedade</th>
                    <th scope="col">Principal Meio de Transporte</th>
                  </tr>
                </thead>
                <tbody>
                  {transports.results.map((transport, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setTransport(transport);
                      }}
                      key={index}
                    >
                      <td>{transport.allotmentName}</td>
                      <td>{transport.means_transport}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={transports.count}
                  funcRequistion={getTransports}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddTransport}
        setOpen={setOpenAddTransport}
      />
      <ModalMembro open={open} setOpen={setOpen} transport={transport} />
    </>
  );
};

export default Transports;
