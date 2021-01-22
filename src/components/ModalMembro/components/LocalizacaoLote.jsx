import MapaAfiliados from "components/MapaAfiliados/MapaAfiliados";
import ZoomImage from "components/ZoomImage/ZoomImage";
import React from "react";
import { Row, Col } from "reactstrap";

const LocalizacaoLote = ({ allotment }) => {

  return (
    <>
      <h3 className="border rounded bg-default text-center text-white py-2 w-100">
        Informações do Lote
      </h3>
      <div>
        <Row>
          <Col lg="6" className="my-3">
            <div className="border border-default rounded p-2">
              <b>Bioma: </b>
              {allotment.biomaName}
            </div>
          </Col>
          <Col lg="6" className="my-3">
            <div className="border border-default rounded p-2">
              <b>Núcleo Operacional: </b>
              {allotment.operational_core}
            </div>
          </Col>
          <Col lg="6" className="my-3">
            <div className="border border-default rounded p-2">
              <b>Estado: </b>
              {allotment.allotment_state}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Município: </b>
              {allotment.allotment_city}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Assentamento: </b>
              {allotment.settlement}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Nº do Lote: </b>
              {allotment.incra_allotment_number}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Via de acesso ao imóvel: </b>
              {allotment.access_way}
            </div>
          </Col>
          <Col lg="12">
            <div className="mb-3 border border-default rounded p-2">
              <div className="mb-3">
                <b>Coordenadas geográficas: </b>
                {allotment.coordinates}
              </div>
              <MapaAfiliados members={[allotment]} />
            </div>
          </Col>
          <Col lg="12" className="mb-3">
            <div className="border border-default rounded p-2">
              <div className="mb-3">
                <b>Arquivo geometria lote: </b>
              </div>
              <ZoomImage image={allotment.lot_geometry}/>
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Sede: </b>
              {allotment.thirst}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Plantio próprio: </b>
              {allotment.own_planting}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Mata nativa: </b>
              {allotment.native_forest}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Pousio capoeira: </b>
              {allotment.fallow_capoeira}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Pastagem nativa: </b>
              {allotment.native_pasture}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Pastagem plantada: </b>
              {allotment.planted_pasture}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Area degradada: </b>
              {allotment.degraded_area}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Parceria lote: </b>
              {allotment.batch_partnership}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Parceria lote terceiros: </b>
              {allotment.third_party_partnership}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Total: </b>
              {allotment.total}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Possui horta: </b>
              {allotment.has_garden ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Cultiva plantas medicinais: </b>
              {allotment.grow_medicinal_plants ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Tipo de plantio: </b>
              {allotment.planting_type}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Manejo: </b>
              {allotment.management}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Área plantada: </b>
              {allotment.planted_area}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Quantidade de culturas: </b>
              {allotment.amount_crops}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Animais silvestres avistados no lote: </b>
              {allotment.wild_animals_sighted_lot}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Animais silvestres causam problemas: </b>
              {allotment.wild_animals_cause_problems}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Bois: </b>
              {allotment.oxen}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Equinos: </b>
              {allotment.equine}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Muares: </b>
              {allotment.mules}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Área da documentação: </b>
              {allotment.documentation_area}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Nome da propriedade: </b>
              {allotment.property_name}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Georreferenciada: </b>
              {allotment.georeferenced ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Concessão da propriedade posse: </b>
              {allotment.property_ownership}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Título domínio: </b>
              {allotment.domain_title ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>CCU: </b>
              {allotment.ccu ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>CCDRU: </b>
              {allotment.ccru ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Regularização: </b>
              {allotment.regularization ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>SNCR: </b>
              {allotment.sncr}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Certidão INCRA: </b>
              {allotment.incra_certificate}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Aderir PRA: </b>
              {allotment.join_pra ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Alternativas regularizar déficit: </b>
              {allotment.alternatives_regularize_deficit}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Como deseja compensar área com déficit: </b>
              {allotment.how_want_make_up_deficit_area}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Existe TAC com APP: </b>
              {allotment.has_tac_with_app ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Existe infrações cometidas: </b>
              {allotment.has_infractions_committed}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Imovel possui ARVN: </b>
              {allotment.property_has_arvn ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>O que pretende com área excedente: </b>
              {allotment.what_want_to_with_surplus_area}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Existe RPPN: </b>
              {allotment.has_rppn ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Possui CRF: </b>
              {allotment.has_crf ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Alteração tamanho após 22/07/2008: </b>
              {allotment.size_changes_after ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Quantidade atende a família: </b>
              {allotment.qa_meets_family ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Água: </b>
              {allotment.water}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Clima: </b>
              {allotment.climate}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Solo: </b>
              {allotment.ground}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Vegetação: </b>
              {allotment.vegetation}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Desenvolve atividade qa: </b>
              {allotment.develops_activity_qa ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Qual atividade qa: </b>
              {allotment.what_activity_qa}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Ações cotidianas interferem no ambiente: </b>
              {allotment.everyday_actions_interfere ? "Sim" : "Não"}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Participa espaços troca de experiência: </b>
              {allotment.exchange_experience}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Qual organização: </b>
              {allotment.which_organization}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Atividades de interesse: </b>
              {allotment.activities_interest}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>O que considera positivo no assentamento: </b>
              {allotment.positive_in_settlement}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>O que considera negativo no no assentamento: </b>
              {allotment.negative_in_settlement}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Principais restrições de propriedade: </b>
              {allotment.main_ownership_restrictions}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Expectativa futuras para propriedade: </b>
              {allotment.future_expectations_property}
            </div>
          </Col>
          <Col lg="6" className="mb-3">
            <div className="border border-default rounded p-2">
              <b>Interesse em turismo rural: </b>
              {allotment.rural_tourism ? "Sim" : "Não"}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default LocalizacaoLote;
