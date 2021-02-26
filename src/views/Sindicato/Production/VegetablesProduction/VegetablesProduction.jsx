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

import { getVegetablesProductions } from "../../../../redux/actions/Productions";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const VegetablesProduction = () => {
  const dispatch = useDispatch();
  const vegetablesProductions = useSelector(
    (state) => state.ProductionsReducer.vegetablesProductions
  );

  useEffect(() => {
    dispatch(getVegetablesProductions());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddVegetableProduction, setOpenAddVegetableProduction] = useState({
    modal: false,
    vegetable: true,
  });
  const [vegetablesProduction, setVegetablesProduction] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Vegetais",
      progress: vegetablesProductions.count,
      comparison: vegetablesProductions.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-tractor text-white",
      color: "bg-green",
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
                <h3 className="text-white mb-0">Produção de Vegetais</h3>
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
                      setOpenAddVegetableProduction({
                        ...openAddVegetableProduction,
                        modal: !openAddVegetableProduction.modal,
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
                    <th secope="col">Produção</th>
                    <th scope="col">Lote</th>
                    <th scope="col">Produção Anual</th>
                  </tr>
                </thead>
                <tbody>
                  {vegetablesProductions.results.map((production, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setVegetablesProduction(production);
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
                      <td>{production.productionName}</td>
                      <td>{production.allotmentName}</td>
                      <td>{production.annual_production}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={vegetablesProductions.count}
                  funcRequistion={getVegetablesProductions}
                  lines={lines}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddVegetableProduction}
        setOpen={setOpenAddVegetableProduction}
      />
      <ModalMembro
        open={open}
        setOpen={setOpen}
        vegetablesProduction={vegetablesProduction}
      />
    </>
  );
};

export default VegetablesProduction;
