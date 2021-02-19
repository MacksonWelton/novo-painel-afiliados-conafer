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
} from "reactstrap";

import Header from "components/Headers/Header";

import { getDocuments } from "../../../redux/actions/Documents";

import { Tr } from "./styles";
import { CardHeaderStyled } from "views/Contratos/styles";
import ModalMembro from "components/ModalMembro/ModalMembro";
import StatsCard from "components/StatsCard/StatsCard";
import SubAffiliateRegistrationModel from "components/SubAffiliateRegistrationModel/SubAffiliateRegistrationModel";
import Paginations from "components/Paginations/Paginations";

const Documents = () => {
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.DocumentsReducer.documents);

  useEffect(() => {
    dispatch(getDocuments());
  }, [dispatch]);

  const [open, setOpen] = useState(false);
  const [openAddDocumentation, setOpenAddDocumentation] = useState({
    modal: false,
    documentation: true,
  });
  const [document, setDocument] = useState({});
  const cardData = [
    {
      title: "Documentos",
      progress: documents.count,
      comparison: documents.results.filter(item => (
        moment(item.created_at).format("MM/YYYY") === moment().format("MM/YYYY")
      )).length,
      comparisonDate: "Registrados neste mês",
      icon: "fas fa-file-alt text-white",
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
                <h3 className="text-white mb-0">Documentos</h3>
                <div>
                  <Button
                    onClick={() =>
                      setOpenAddDocumentation({
                        ...openAddDocumentation,
                        modal: !openAddDocumentation.modal,
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
                    <th scope="col">Membro</th>
                    <th scope="col">Cidade</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.results.map((document, index) => (
                    <Tr
                      onClick={() => {
                        setOpen(!open);
                        setDocument(document);
                      }}
                      key={index}
                    >
                      <td>{document.member}</td>
                      <td>{document.city}</td>
                      <td>{document.state}</td>
                    </Tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4 bg-transparent border-0">
                <Paginations count={documents.count} funcRequistion={getDocuments}/>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
      <SubAffiliateRegistrationModel open={openAddDocumentation} setOpen={setOpenAddDocumentation}/>
      <ModalMembro open={open} setOpen={setOpen} document={document} />
    </>
  );
};

export default Documents;
