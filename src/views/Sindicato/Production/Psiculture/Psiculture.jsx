import React, { useEffect, useState } from "react";

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

import { getPsicultureProductions } from "../../../../redux/actions/Membros";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";

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
    psiculture: true
  });
  const [psiculture, setPsicultureProduction] = useState({});

  const cardData = [
    {
      title: "Psicultura",
      progress: psicultureProductions.length,
      comparison: 2,
      comparisonDate: "Desde do último mês",
      icon: "far fa-chart-bar text-white",
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
                  {psicultureProductions.map((production, index) => (
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
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel open={openAddPsiculture} setOpen={setOpenAddPsiculture} />
      <ModalMembro open={open} setOpen={setOpen} psiculture={psiculture} />
    </>
  );
};

export default Psiculture;
