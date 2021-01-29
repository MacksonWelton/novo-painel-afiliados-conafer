import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import ZoomImage from "components/ZoomImage/ZoomImage";
import React from "react";
import { Row, Col } from "reactstrap";
import {Title, Content} from "./Styles";

const Allotment = ({ allotment }) => {

  return (
    <>
    <Title>Informações do Lote</Title>
      <div>
        <Row>
          <Col lg="6" className="my-3">
            <Content>
              <b>Bioma: </b>
              {allotment.biomaName}
            </Content>
          </Col>
          <Col lg="6" className="my-3">
            <Content>
              <b>Núcleo Operacional: </b>
              {allotment.operational_core}
            </Content>
          </Col>
          <Col lg="6" className="my-3">
            <Content>
              <b>Estado: </b>
              {allotment.allotment_state}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Município: </b>
              {allotment.allotment_city}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Assentamento: </b>
              {allotment.settlement}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Nº do Lote: </b>
              {allotment.incra_allotment_number}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Via de acesso ao imóvel: </b>
              {allotment.access_way}
            </Content>
          </Col>
          <Col lg="12">
            <div className="mb-3 border rounded p-2">
              <div className="mb-3">
                <b>Coordenadas geográficas: </b>
                {allotment.coordinates}
              </div>
              <MapaAfiliados members={[allotment]} />
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <Content>
              <div className="mb-3">
                <b>Arquivo geometria lote: </b>
              </div>
              <ZoomImage image={allotment.lot_geometry}/>
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Sede: </b>
              {allotment.thirst}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Plantio próprio: </b>
              {allotment.own_planting}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Mata nativa: </b>
              {allotment.native_forest}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Pousio capoeira: </b>
              {allotment.fallow_capoeira}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Pastagem nativa: </b>
              {allotment.native_pasture}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Pastagem plantada: </b>
              {allotment.planted_pasture}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Area degradada: </b>
              {allotment.degraded_area}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Parceria lote: </b>
              {allotment.batch_partnership}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Parceria lote terceiros: </b>
              {allotment.third_party_partnership}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Total: </b>
              {allotment.total}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Possui horta: </b>
              {allotment.has_garden ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Cultiva plantas medicinais: </b>
              {allotment.grow_medicinal_plants ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Tipo de plantio: </b>
              {allotment.planting_type}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Manejo: </b>
              {allotment.management}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Área plantada: </b>
              {allotment.planted_area}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Quantidade de culturas: </b>
              {allotment.amount_crops}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Animais silvestres avistados no lote: </b>
              {allotment.wild_animals_sighted_lot}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Animais silvestres causam problemas: </b>
              {allotment.wild_animals_cause_problems}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Bois: </b>
              {allotment.oxen}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Equinos: </b>
              {allotment.equine}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Muares: </b>
              {allotment.mules}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Área da documentação: </b>
              {allotment.documentation_area}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Nome da propriedade: </b>
              {allotment.property_name}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Georreferenciada: </b>
              {allotment.georeferenced ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Concessão da propriedade posse: </b>
              {allotment.property_ownership}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Título domínio: </b>
              {allotment.domain_title ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>CCU: </b>
              {allotment.ccu ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>CCDRU: </b>
              {allotment.ccru ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Regularização: </b>
              {allotment.regularization ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>SNCR: </b>
              {allotment.sncr}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Certidão INCRA: </b>
              {allotment.incra_certificate}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Aderir PRA: </b>
              {allotment.join_pra ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Alternativas regularizar déficit: </b>
              {allotment.alternatives_regularize_deficit}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Como deseja compensar área com déficit: </b>
              {allotment.how_want_make_up_deficit_area}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Existe TAC com APP: </b>
              {allotment.has_tac_with_app ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Existe infrações cometidas: </b>
              {allotment.has_infractions_committed}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Imovel possui ARVN: </b>
              {allotment.property_has_arvn ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>O que pretende com área excedente: </b>
              {allotment.what_want_to_with_surplus_area}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Existe RPPN: </b>
              {allotment.has_rppn ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Possui CRF: </b>
              {allotment.has_crf ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Alteração tamanho após 22/07/2008: </b>
              {allotment.size_changes_after ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Quantidade atende a família: </b>
              {allotment.qa_meets_family ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Água: </b>
              {allotment.water}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Clima: </b>
              {allotment.climate}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Solo: </b>
              {allotment.ground}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Vegetação: </b>
              {allotment.vegetation}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Desenvolve atividade qa: </b>
              {allotment.develops_activity_qa ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Qual atividade qa: </b>
              {allotment.what_activity_qa}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Ações cotidianas interferem no ambiente: </b>
              {allotment.everyday_actions_interfere ? "Sim" : "Não"}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Participa espaços troca de experiência: </b>
              {allotment.exchange_experience}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Qual organização: </b>
              {allotment.which_organization}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Atividades de interesse: </b>
              {allotment.activities_interest}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>O que considera positivo no assentamento: </b>
              {allotment.positive_in_settlement}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>O que considera negativo no no assentamento: </b>
              {allotment.negative_in_settlement}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Principais restrições de propriedade: </b>
              {allotment.main_ownership_restrictions}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Expectativa futuras para propriedade: </b>
              {allotment.future_expectations_property}
            </Content>
          </Col>
          <Col lg="6" className="mb-3">
            <Content>
              <b>Interesse em turismo rural: </b>
              {allotment.rural_tourism ? "Sim" : "Não"}
            </Content>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Allotment;
