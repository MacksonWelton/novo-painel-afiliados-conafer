import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button } from "reactstrap";

import Header from "components/Headers/Header";

import { getPsicultureProductions } from "../../../../redux/actions/Membros";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Psiculture = () => {
  const dispatch = useDispatch();
  const psicultureProductions = useSelector(
    (state) => state.MembersReducer.psicultureProductions
  );

  useEffect(() => {
    dispatch(getPsicultureProductions());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddPsiculture, setOpenAddPsiculture] = useState({
    modal: false,
    psiculture: true,
  });
  const [psiculture, setPsicultureProduction] = useState({});

  const cardData = [
    {
      title: "Psicultura",
      progress: psicultureProductions.count,
      comparison: psicultureProductions.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-fish text-white",
      color: "bg-gray",
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
                <h3 className="text-white mb-0">Psicultura</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddPsiculture({
                        ...openAddPsiculture,
                        modal: !openAddPsiculture.modal,
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
                    <th secope="col">Lote</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {psicultureProductions.results.map((production, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setPsicultureProduction(production);
                      }}
                      key={index}
                    >
                      <td>{production.allotmentName}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={psiculture.count}
                  funcRequistion={getPsicultureProductions}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddPsiculture}
        setOpen={setOpenAddPsiculture}
      />
      <ModalMembro open={open} setOpen={setOpen} psiculture={psiculture} />
    </>
  );
};

export default Psiculture;
