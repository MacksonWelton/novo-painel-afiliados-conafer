import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button, Input } from "reactstrap";

import Header from "components/Headers/Header";

import { getTechnicalVisits } from "../../../redux/actions/TechnicalVisits";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const TechnicalVisit = () => {
  const dispatch = useDispatch();
  const technicalVisits = useSelector(
    (state) => state.TechnicalVisitsReducer.technicalVisits
  );

  useEffect(() => {
    dispatch(getTechnicalVisits());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddTechnicalVisit, setOpenAddTechnicalVisit] = useState({
    modal: false,
    technicalVisit: true,
  });
  const [technicalVisit, setTechnicalVisit] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Visitas Técnicas",
      progress: technicalVisits.count,
      comparison: technicalVisits.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-user-check text-white",
      color: "bg-pink",
    },
  ];

  const handleChangeLines = (event) => {
    setLines(Number(event.target.value));
  };

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />} />
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Visita Técnica</h3>
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
                      setOpenAddTechnicalVisit({
                        ...openAddTechnicalVisit,
                        modal: !openAddTechnicalVisit.modal,
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
                    <th scope="col">Informante</th>
                  </tr>
                </thead>
                <tbody>
                  {technicalVisits.results.map((technicalVisit, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setTechnicalVisit(technicalVisit);
                      }}
                      key={index}
                    >
                      <td>{technicalVisit.allotmentName}</td>
                      <td>{technicalVisit.informant_name}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={technicalVisits.count}
                  funcRequistion={getTechnicalVisits}
                  lines={lines}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddTechnicalVisit}
        setOpen={setOpenAddTechnicalVisit}
      />
      <ModalMembro
        open={open}
        setOpen={setOpen}
        technicalVisit={technicalVisit}
      />
    </>
  );
};

export default TechnicalVisit;
