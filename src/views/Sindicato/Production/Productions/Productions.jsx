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
  Input,
} from "reactstrap";

import Header from "components/Headers/Header";

import {
  getProductions,
} from "../../../../redux/actions/Productions";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Productions = () => {
  const dispatch = useDispatch();
  const productions = useSelector(
    (state) => state.ProductionsReducer.productions
  );
  
  useEffect(() => {
    dispatch(getProductions());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddProduction, setOpenAddProduction] = useState({
    modal: false,
    production: true
  });
  const [
    production,
    setProduction,
  ] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Produção",
      progress: productions.count,
      comparison: productions.results.filter(item => (
        moment(item.created_at).format("MM/YYYY") === moment().format("MM/YYYY")
      )).length,
      comparisonDate: "Registrado este mês",
      icon: "fas fa-chart-pie text-white",
      color: "bg-primary",
    }
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
                <h3 className="text-white mb-0">
                  Produção
                </h3>
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
                    onClick={() => setOpenAddProduction({...openAddProduction, modal: !openAddProduction.modal})}
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
                    <th secope="col">Produção</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">NF</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {productions.results.map((production, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setProduction(production);
                      }}
                      key={index}
                    >
                      <td>{production.productionName}</td>
                      <td>{production.how_produces}</td>
                      <td>{production.typeName}</td>
                      <td>{production.issues_invoice ? "Sim" : "Não"}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
              <Paginations count={productions.count} funcRequistion={getProductions} lines={lines}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel open={openAddProduction} setOpen={setOpenAddProduction}/>
      <ModalMembro
        open={open}
        setOpen={setOpen}
        production={production}
      />
    </>
  );
};

export default Productions;
