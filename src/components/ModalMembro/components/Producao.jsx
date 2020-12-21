import React from "react";
import { UncontrolledCollapse, Row, Col } from "reactstrap";

const Producao = ({ member }) => {
  return (
    <>
      <h3
        id="production"
        className="heading-small border text-muted mb-4 btn w-100"
      >
        9 - Produção
      </h3>
      <div>
        <UncontrolledCollapse toggler="#production">
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">9.1 - Áreas (ha)</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Sede:</b>{" "}
                {member.production && member.production.area.thirst}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Plantio próprio:</b>{" "}
                {member.production && member.production.area.own_planting}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Mata nativa:</b>{" "}
                {member.production && member.production.area.native_forest}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Florestada:</b>{" "}
                {member.production && member.production.area.forest}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Pousio / Capoeira:</b>{" "}
                {member.production && member.production.area.fallow_capoeira}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Pastagem nativa:</b>{" "}
                {member.production && member.production.area.native_pasture}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Pastagem plantada:</b>{" "}
                {member.production && member.production.area.planted_pasture}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Degradada:</b>{" "}
                {member.production && member.production.area.degraded_area}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Parceria no lote:</b>{" "}
                {member.production && member.production.area.batch_partnership}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Parceria em área de terceiro:</b>{" "}
                {member.production &&
                  member.production.area.third_party_partnership}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Total:</b>{" "}
                {member.production && member.production.area.total}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">9.2 - Área da sede</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tem horta caseira?:</b>{" "}
                {member.production && member.production.thirst_area.has_garden
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Cultiva plantas medicinais?:</b>{" "}
                {member.production &&
                member.production.thirst_area.grow_medicinal_plants
                  ? "Sim"
                  : "Não"}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quais?:</b>{" "}
                {member.production &&
                  member.production.thirst_area.types_medicinal_plants}
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">9.3 - Plantio próprio</h3>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Sistema de produção:</b>{" "}
                {member.production &&
                  member.production.own_planting.production_system}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Tipo de plantio:</b>{" "}
                {member.production &&
                  member.production.own_planting.planting_type}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Manejo:</b>{" "}
                {member.production && member.production.own_planting.management}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Área (ha):</b>{" "}
                {member.production &&
                  member.production.own_planting.planted_area}
              </div>
            </Col>
            <Col lg="6" className="mb-3">
              <div className="border border-default rounded p-2">
                <b>Quantidade de culturas nessa área:</b>{" "}
                {member.production &&
                  member.production.own_planting.amount_crops}
              </div>
            </Col>
            <Col lg="12">
              {member.production.own_planting.plantils.map((plantil, i) => (
                <Row
                  key={i}
                  className="border border-default rounded py-3 mb-2"
                >
                  <Col lg="12" className="mb-3">
                    <div className="bg-primary text-white border border-default rounded p-2">
                      <b>Nome da Produção:</b> {plantil.production_name}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Produção anual:</b> {plantil.annual_production}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>
                        Preço por kg do autoconsumo (se fosse comprar no mercado
                        local):
                      </b>{" "}
                      {plantil.price_per_kg}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Quantidade comercializada anual:</b>{" "}
                      {plantil.annual_marketed}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Por quanto vende o kg:</b> {plantil.how_much_sell}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Semente/muda Origem:</b> {plantil.seedling_origin}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Semente crioula:</b> {plantil.creole_seed}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Tem problemas com ataque de pragas e doenças?:</b>{" "}
                      {plantil.pest_problems}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Área irrigada:</b> {plantil.irrigated_area}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>A produção gera resíduo?:</b> {plantil.generates_waste}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Adubo/uréia:</b> {plantil.fertilizer_urea}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Adubo orgânico:</b> {plantil.organic_fertilizer}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Água:</b> {plantil.water}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>
                        Aluguel de máquinas para preparo do solo e colheita:
                      </b>{" "}
                      {plantil.machinery_rental}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Calcário:</b> {plantil.limestone}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Combustível/lubrificante:</b> {plantil.fuel_lubricant}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Energia elétrica:</b> {plantil.electricity}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Mudas:</b> {plantil.seedlings}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Produtos químicos (agrotóxicos):</b>{" "}
                      {plantil.chemicals}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Sementes:</b> {plantil.seeds}
                    </div>
                  </Col>
                </Row>
              ))}
            </Col>
            <Col
              lg="12"
              className="bg-default rounded d-flex justify-content-center mb-2"
            >
              <h3 className="text-white my-2">9.6 - Produção Animal</h3>
            </Col>
            <Col lg="12">
              {member.production.own_planting.animal_production.map((production, i) => (
                <Row
                  key={i}
                  className="border border-default rounded py-3 mb-2"
                >
                  <Col lg="12" className="mb-3">
                    <div className="bg-primary text-white border border-default rounded p-2">
                      <b>Nome da Produção:</b> {production.production_name}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Produção mensal:</b> {production.monthly_production}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>
                        Quantidade comercializada mensal:
                      </b>{" "}
                      {production.commercialized_production}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Recursos em complementação alimentar:</b>{" "}
                      {production.food_supplementation}
                    </div>
                  </Col>
                  <Col lg="6" className="mb-3">
                    <div className="border border-default rounded p-2">
                      <b>Tipo de produção (corte ou derivado):</b> {production.type_production}
                    </div>
                  </Col>
                </Row>
              ))}
            </Col>
          </Row>
        </UncontrolledCollapse>
      </div>
    </>
  );
};

export default Producao;
