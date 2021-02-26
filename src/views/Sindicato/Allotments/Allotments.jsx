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

import { getAllotments } from "../../../redux/actions/Allotments";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Allotments = () => {
  const dispatch = useDispatch();
  const allotments = useSelector((state) => state.AllotmentsReducer.allotments);

  useEffect(() => {
    dispatch(getAllotments());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState({
    modal: false,
    allotment: true,
  });
  const [allotment, setAllotment] = useState({});
  const [lines, setLines] = useState(10);

  const cardData = [
    {
      title: "Lotes",
      progress: allotments.count,
      comparison: allotments.results.filter(
        (item) =>
          moment(item.created_at).format("MM/YYYY") ===
          moment().format("MM/YYYY")
      ).length,
      comparisonDate: "Registrado este mês",
      icon: "fas fa-map-marked-alt text-white",
      color: "bg-yellow",
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
                <h3 className="text-white mb-0">Lista de Lotes</h3>
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
                      setOpenAddMember({
                        ...openAddMember,
                        modal: !openAddMember.modal,
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
                    <th scope="col">SNCR</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {allotments.results.map((allotment, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setAllotment(allotment);
                      }}
                      key={index}
                    >
                      <td>{allotment.property_name}</td>
                      <td>{allotment.sncr}</td>
                      <td>{allotment.allotment_city}</td>
                      <td>{allotment.allotment_state}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations
                  count={allotments.count}
                  funcRequistion={getAllotments}
                  lines={lines}
                />
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel
        open={openAddMember}
        setOpen={setOpenAddMember}
      />
      <ModalMembro open={open} setOpen={setOpen} allotment={allotment} />
    </>
  );
};

export default Allotments;
