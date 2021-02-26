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

import { getDiagnosisAgriculturalSystems } from "../../../redux/actions/DiagnosisAgriculturalSystems";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const DiagnosisAgriculturalSystems = () => {
  const dispatch = useDispatch();
  const diagnosisAgriculturalSystems = useSelector(
    (state) =>
      state.DiagnosisAgriculturalSystemsReducer.diagnosisAgriculturalSystems
  );

  useEffect(() => {
    dispatch(getDiagnosisAgriculturalSystems());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [
    openAddDiganosisAgriculturalSystems,
    setOpenAddDiganosisAgriculturalSystems,
  ] = useState({
    modal: false,
    diagnosisAgriculturalSystems: true,
  });
  const [
    diagnosisAgriculturalSystem,
    setDiagnosisAgriculturalSystem,
  ] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Diag. de S. Agrários",
      progress: diagnosisAgriculturalSystems.count,
      comparison: diagnosisAgriculturalSystems.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrado este mês",
      icon: "fas fa-leaf text-white",
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
                <h3 className="text-white mb-0">
                  Diagnóstico de Sistemas Agrários
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
                    onClick={() =>
                      setOpenAddDiganosisAgriculturalSystems({
                        ...openAddDiganosisAgriculturalSystems,
                        modal: !openAddDiganosisAgriculturalSystems.modal,
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
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {diagnosisAgriculturalSystems.results.map(
                    (diagnosis, index) => (
                      <Tr
                        onClick={() => {
                          setOpen(!open);
                          setDiagnosisAgriculturalSystem(diagnosis);
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
                              (check) => check.id === diagnosis.id
                            ).length
                          }
                          value={diagnosis.id}
                          type="checkbox"
                          onChange={handleChangeCheckbox}
                        />
                      </td> */}
                        <td>{diagnosis.allotmentName}</td>
                        <td>{diagnosis.allotment_city}</td>
                        <td>{diagnosis.allotment_state}</td>
                      </Tr>
                    )
                  )}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={diagnosisAgriculturalSystems}
                  funcRequistion={getDiagnosisAgriculturalSystems}
                  lines={lines}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddDiganosisAgriculturalSystems}
        setOpen={setOpenAddDiganosisAgriculturalSystems}
      />
      <ModalMembro
        open={open}
        setOpen={setOpen}
        diagnosisAgriculturalSystem={diagnosisAgriculturalSystem}
      />
    </>
  );
};

export default DiagnosisAgriculturalSystems;
