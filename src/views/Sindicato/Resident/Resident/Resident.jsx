import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button } from "reactstrap";

import Header from "components/Headers/Header";

import { getResidents } from "../../../../redux/actions/Residents";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Resident = () => {
  const dispatch = useDispatch();
  const residents = useSelector((state) => state.ResidentsReducer.residents);

  useEffect(() => {
    dispatch(getResidents());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddResident, setOpenAddResident] = useState({
    modal: false,
    resident: true,
  });
  const [resident, setResident] = useState({});

  const cardData = [
    {
      title: "Moradores",
      progress: residents.count,
      comparison: residents.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fas fa-user text-white",
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
                <h3 className="text-white mb-0">Moradores</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddResident({
                        ...openAddResident,
                        modal: !openAddResident.modal,
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
                    <th scope="col">Morador</th>
                    <th scope="col">Emite Nota Fiscal</th>
                  </tr>
                </thead>
                <tbody>
                  {residents.results.map((resident, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setResident(resident);
                      }}
                      key={index}
                    >
                      <td>{resident.resident_name}</td>
                      <td>{resident.issues_invoice ? "Sim" : "Não"}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={residents.count}
                  funcRequistion={getResidents}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddResident}
        setOpen={setOpenAddResident}
      />
      <ModalMembro open={open} setOpen={setOpen} resident={resident} />
    </>
  );
};

export default Resident;
