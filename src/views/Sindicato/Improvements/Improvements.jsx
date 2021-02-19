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

import Header from "components/Headers/Header";

import { getImprovements } from "../../../redux/actions/Improvements";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Improvements = () => {
  const dispatch = useDispatch();
  const improvements = useSelector(
    (state) => state.ImprovementsReducer.improvements
  );

  useEffect(() => {
    dispatch(getImprovements());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddImprovment, setOpenAddImprovment] = useState({
    modal: false,
    improvement: true
  });
  const [improvement, setImprovement] = useState({});

  const cardData = [
    {
      title: "Benfeitorias",
      progress: improvements.count,
      comparison: improvements.results.filter(item => (
        moment(item.created_at).format("MM/YYYY") === moment().format("MM/YYYY")
      )).length,
      comparisonDate: "Registrado este mês",
      icon: "fas fa-hammer text-white",
      color: "bg-orange",
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
                <h3 className="text-white mb-0">Benfeitorias</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddImprovment({
                        ...openAddImprovment,
                        modal: !openAddImprovment.modal,
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
                    <th scope="col">Benfeitoria</th>
                  </tr>
                </thead>
                <tbody>
                  {improvements.results.map((improvement, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setImprovement(improvement);
                      }}
                      key={index}
                    >
                      <td>{improvement.allotmentName}</td>
                      <td>{improvement.improvement}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
              <Paginations count={improvements.count} funcRequistion={getImprovements}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel open={openAddImprovment} setOpen={setOpenAddImprovment}/>
      <ModalMembro open={open} setOpen={setOpen} improvement={improvement} />
    </>
  );
};

export default Improvements;
