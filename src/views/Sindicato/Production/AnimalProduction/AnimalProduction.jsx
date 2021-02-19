import React, { useEffect, useState } from "react";

import moment from "moment";

import { useDispatch, useSelector } from "react-redux";

import { Card, CardFooter, Table, Container, Row, Button } from "reactstrap";

import Header from "components/Headers/Header";

import { getAnimalsProductions } from "../../../../redux/actions/Productions";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const AnimalProduction = () => {
  const dispatch = useDispatch();
  const animalsProductions = useSelector(
    (state) => state.ProductionsReducer.animalsProductions
  );

  useEffect(() => {
    dispatch(getAnimalsProductions());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddAnimalProduction, setOpenAddAnimalProduction] = useState({
    modal: false,
    animal: true,
  });
  const [animalsProduction, setAnimalsProduction] = useState({});

  const cardData = [
    {
      title: "Animais",
      progress: animalsProductions.count,
      comparison: animalsProductions.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-drumstick-bite text-white",
      color: "bg-red",
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
                <h3 className="text-white mb-0">Produção de Animais</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddAnimalProduction({
                        ...openAddAnimalProduction,
                        modal: !openAddAnimalProduction.modal,
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
                  {/* {checkbox.length > 0 && (
                    <tr>
                      <th></th>
                      <th>
                        <BotoesDeAcao
                          handleDownloadsItems={handleDownloadsMembers}
                        />
                      </th>
                    </tr>
                  )} */}
                  <tr>
                    {/* <th scope="col">
                      <div className="d-flex justify-content-end ml-3 align-items-center">
                        <Input
                          className="position-relative"
                          type="checkbox"
                          onChange={handleSelectAllCheckbox}
                        />
                      </div>
                    </th> */}
                    <th scope="col">Propriedade</th>
                  </tr>
                </thead>
                <tbody>
                  {animalsProductions.results.map((production, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setAnimalsProduction(production);
                      }}
                      key={index}
                    >
                      {/* <td
                        className="d-flex justify-content-end"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Input
                          className="position-relative"
                          checked={
                            checkbox.filter(
                              (check) => check.id === production.id
                            ).length
                          }
                          value={production.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td> */}
                      <td>{production.allotmentName}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={animalsProductions.count}
                  funcRequistion={getAnimalsProductions}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddAnimalProduction}
        setOpen={setOpenAddAnimalProduction}
      />
      <ModalMembro
        open={open}
        setOpen={setOpen}
        animalsProduction={animalsProduction}
      />
    </>
  );
};

export default AnimalProduction;
