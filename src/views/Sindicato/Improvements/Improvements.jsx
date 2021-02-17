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

import { getImprovements } from "../../../redux/actions/Membros";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";

const Improvements = () => {
  const dispatch = useDispatch();
  const improvements = useSelector(
    (state) => state.MembersReducer.improvements
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
      comparison: 2,
      comparisonDate: "Desde do último mês",
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
      <SubAffiliateRegistrationModel open={openAddImprovment} setOpen={setOpenAddImprovment}/>
      <ModalMembro open={open} setOpen={setOpen} improvement={improvement} />
    </>
  );
};

export default Improvements;
