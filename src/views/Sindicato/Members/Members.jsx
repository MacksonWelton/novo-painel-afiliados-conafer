import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardFooter,
  Table,
  Container,
  Row,
  Button
} from "reactstrap";

import Header from "../../../components/Headers/Header";

import {
  getMembers,
} from "../../../redux/actions/Membros";

import { Tr } from "./styles";
import { CardHeaderStyled } from "./styles";
import ModalMembro from "../../../components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.MembersReducer.members);

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddMember, setOpenAddMember] = useState({
    modal: false,
    member: true,
  });
  const [member, setMember] = useState({});

  const cardData = [
    {
      title: "Membros",
      progress: members.count,
      comparison: 5,
      comparisonDate: "Desde do último mês",
      icon: "fas fa-user-friends",
      color: "bg-dark",
    }
  ];

  return (
    <>
      <Header children={<StatsCard CardData={cardData} />}/>
      <Container className="mt--9" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeaderStyled>
                <h3 className="text-white mb-0">Lista de Membros</h3>
                {/* <div className="d-flex align-items-center">
                  <InputStyled type="text" placeholder="Pesquisar..." />
                  <Button className="bg-transparent border-0">
                    <i className="fas fa-search text-white display-4"></i>
                  </Button>
                </div> */}
                <div>
                  <Button
                    onClick={() => setOpenAddMember({...openAddMember, modal: !openAddMember.modal})}
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
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {members.results.map((member, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setMember(member);
                      }}
                      key={index}
                    >
                      <td>{member.name}</td>
                      <td>{member.phone}</td>
                      <td>{member.email}</td>
                      <td>{member.state}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
              <Paginations count={members.count} funcRequistion={getMembers}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel setOpen={setOpenAddMember} open={openAddMember}/>
      <ModalMembro open={open} setOpen={setOpen} member={member}/>
    </>
  );
};

export default Members;
