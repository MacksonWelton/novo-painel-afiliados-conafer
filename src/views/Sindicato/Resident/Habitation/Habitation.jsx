import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Button,
} from "reactstrap";

import Header from "components/Headers/Header";

import { getHabitations } from "../../../../redux/actions/Membros";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Habitation = () => {
  const dispatch = useDispatch();
  const habitations = useSelector((state) => state.MembersReducer.habitations);

  useEffect(() => {
    dispatch(getHabitations());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddHabitation, setOpenAddHabitation] = useState({
    modal: false,
    habitation: true,
  });
  const [habitation, setHabitation] = useState({});

  const cardData = [
    {
      title: "Moradias",
      progress: habitations.count,
      comparison: habitations.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-home text-white",
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
                <h3 className="text-white mb-0">Moradias</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddHabitation({
                        ...openAddHabitation,
                        modal: !openAddHabitation.modal,
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
                  </tr>
                </thead>
                <tbody>
                  {habitations.results.map((habitation, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setHabitation(habitation);
                      }}
                      key={index}
                    >
                      <td>{habitation.allotmentName}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
              <Paginations
                  count={habitations.count}
                  funcRequistion={getHabitations}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddHabitation}
        setOpen={setOpenAddHabitation}
      />
      <ModalMembro open={open} setOpen={setOpen} habitation={habitation} />
    </>
  );
};

export default Habitation;
