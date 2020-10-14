import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";

const Producao = ({ inputProduction, setInputProduction }) => {
  const [inputImprovements, setInputImprovements] = useState({
    improvement: "",
    otherImprovement: "",
    typeImprovement: "",
    dimensionImprovement: "",
    improvementAge: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputProduction({ ...inputProduction, [name]: value });
  };

  const handleChangeInputImprovements = (event) => {
    const { name, value } = event.target;
    setInputImprovements({ ...inputImprovements, [name]: value });
  };

  const addImprovement = () => {
    setInputProduction({
      ...inputProduction,
      improvements: [...inputProduction.improvements, inputImprovements],
    });
  };

  const deleteImprovement = (index) => {
    setInputProduction({
      ...inputProduction,
      improvements: inputProduction.improvements.filter(
        (item, i) => i !== index
      ),
    });
  };

  return (
    <Row>
      <div className="col-12">
        <h3>Áreas (ha)</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="headquarters">
            Sede
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="thirst"
            title="Sede"
            placeholder="Sede"
            value={inputProduction.thirst}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="own_planting">
            Plantio Próprio
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="own_planting"
            title="Plantio Próprio"
            placeholder="Plantio Próprio"
            value={inputProduction.own_planting}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="native_forest">
            Mata Nativa
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="native_forest"
            title="Mata Nativa"
            placeholder="Mata Nativa"
            value={inputProduction.native_forest}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="forest">
            Floresta
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="forest"
            value={inputProduction.forest}
            placeholder="Floresta"
            onChange={handleChangeInput}
            title="Floresta"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="fallow_capoeira">
            Pousio/Capoeira
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="fallow_capoeira"
            title="Pousio/Capoeira"
            placeholder="Pousio/Capoeira"
            value={inputProduction.fallow_capoeira}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="native_pasture">
            Pastagem Nativa
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="native_pasture"
            title="Pastagem Nativa"
            placeholder="Pastagem Nativa"
            value={inputProduction.native_pasture}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planted_pasture">
            Pastagem Plantada
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="planted_pasture"
            title="Pastagem Plantada"
            placeholder="Pastagem Plantada"
            value={inputProduction.planted_pasture}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="degraded_area">
            Degradada
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="degraded_area"
            title="Degradada"
            placeholder="Degradada"
            value={inputProduction.degraded_area}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="batch_partnership">
            Parceria no Lote
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="batch_partnership"
            title="Parceria no Lote"
            placeholder="Parceria no Lote"
            value={inputProduction.batch_partnership}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="third_party_partnership"
          >
            Parceria em área de terceiro
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="third_party_partnership"
            title="Parceria em área de terceiro"
            placeholder="Parceria em área de terceiro"
            value={inputProduction.third_party_partnership}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="total">
            Total
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="total"
            title="Total"
            placeholder="Total"
            value={inputProduction.total}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Área da Sede</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_garden">
            Tem horta caseira?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.has_garden}
            title="Tem horta caseira?"
            name="has_garden"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="grow_medicinal_plants">
            Cultiva Plantas Medicinais?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.grow_medicinal_plants}
            title="Cultiva Plantas Medicinais?"
            name="grow_medicinal_plants"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Plantio Próprio</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_own_planting">
            Possuí Plantio Próprio?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.has_own_planting}
            title="Possuí Plantio Próprio?"
            name="has_own_planting"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="production_system"
            title="Sistemas da Produção"
            placeholder="Sistemas da Produção"
            value={inputProduction.production_system}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="planting_type"
            title="Tipo de Plantio"
            placeholder="Tipo de Plantio"
            value={inputProduction.planting_type}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="management"
            title="Manejo"
            placeholder="Manejo"
            value={inputProduction.management}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="planted_area"
            title="Área (ha)"
            placeholder="Área (ha)"
            value={inputProduction.planted_area}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="number"
            name="amount_crops"
            title="Quantidade de Culturas Nesta Área"
            placeholder="Quantidade de Culturas Nesta Área"
            value={inputProduction.amount_crops}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Cultura de Cana-de-açúcar</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="annualProduction"
            title="Produção Anual"
            placeholder="Produção Anual"
            value={inputProduction.annualProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="selfConsumption"
            title="Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)"
            placeholder="Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)"
            value={inputProduction.selfConsumption}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="annualProduction"
            title="Quantidade Comercializada Anual"
            placeholder="Quantidade Comercializada Anual"
            value={inputProduction.annualProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="kgPrice"
            title="Por Quanto Vende o Kg"
            placeholder="Por Quanto Vende o Kg"
            value={inputProduction.kgPrice}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="seedOriginSeedling"
            title="Semente/Muda Origem"
            placeholder="Semente/Muda Origem"
            value={inputProduction.seedOriginSeedling}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="name">
            Nome completo
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.creoleSeed}
            title="Semente Crioula"
            name="creoleSeed"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Semente Crioula
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.creoleSeed}
            title="Tem problemas com ataques de pragas e doenças?"
            name="creoleSeed"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Tem problemas com ataques de pragas e doenças?
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="irrigations">
            Área Irrigada
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="irrigations"
            title="Área Irrigada"
            placeholder="Área Irrigada"
            value={inputProduction.irrigations}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.wasteGeneration}
            title="A Produção Gera Resíduo?"
            name="wasteGeneration"
            id="select"
            required
          >
            <option value={undefined} hidden>
              A Produção Gera Resíduo?
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Produção Animal</h3>
        <hr />
      </div>
      <div className="col-12">
        <h4>Piscicultura</h4>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureType"
            title="Tipo"
            placeholder="Tipo"
            value={inputProduction.piscicultureType}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureHandling"
            title="Manejo"
            placeholder="Manejo"
            value={inputProduction.piscicultureHandling}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturePeeling"
            title="Sistema de Despesca"
            placeholder="Sistema de Despesca"
            value={inputProduction.pisciculturePeeling}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFoodComplementation"
            title="Complementação Alimentar"
            placeholder="Complementação Alimentar"
            value={inputProduction.piscicultureFoodComplementation}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFoodComplementationCost"
            title="Comp. Alim. - Custo Total Anual"
            placeholder="Comp. Alim. - Custo Total Anual"
            value={inputProduction.piscicultureFoodComplementationCost}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFinality"
            title="Finalidade"
            placeholder="Finalidade"
            value={inputProduction.piscicultureFinality}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.piscicultureFishPay}
            title="Existe Pesque-Pague"
            name="piscicultureFishPay"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Existe Pesque-Pague
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureReservoir"
            title="Tamanho do Reservatório (m²)"
            placeholder="Tamanho do Reservatório (m²)"
            value={inputProduction.piscicultureReservoir}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h4>Piscicultura - Destino Anual da Produção</h4>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureProduction"
            title="Produção de Carne (Kg/ano)"
            placeholder="Produção de Carne (Kg/ano)"
            value={inputProduction.piscicultureProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturePriceKg"
            title="Preço de Compra do Kg no Mercado Local - Total Autoconsumo"
            placeholder="Preço de Compra do Kg no Mercado Local - Total Autoconsumo"
            value={inputProduction.pisciculturePriceKg}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureCommercializedProduction"
            title="Produção Comercializada (Kg/ano)"
            placeholder="Produção Comercializada (Kg/ano)"
            value={inputProduction.piscicultureCommercializedProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureMarketedPrice"
            title="Preço Médio Por Kg Obitido na Comercialização"
            placeholder="Preço Médio Por Kg Obitido na Comercialização"
            value={inputProduction.piscicultureMarketedPrice}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturemarketingChannels"
            title="Principais Canais de Comercialização"
            placeholder="Principais Canais de Comercialização"
            value={inputProduction.pisciculturemarketingChannels}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Custo de Transporte da Produção</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="mainModeTransport"
            title="Principal Meio de Transporte da Produção do Lote"
            placeholder="Principal Meio de Transporte da Produção do Lote"
            value={inputProduction.mainModeTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="ownWaterwayTransport"
            title="Custo do Transporte Próprio Hidroviário"
            placeholder="Custo do Transporte Próprio Hidroviário"
            value={inputProduction.ownWaterwayTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="roadCharteredTransport"
            title="Custo do Transporte Fretado Rodoviário"
            placeholder="Custo do Transporte Fretado Rodoviário"
            value={inputProduction.roadCharteredTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterwayCharteredTransport"
            title="Custo do Transporte Fretado Hidroviário"
            placeholder="Custo do Transporte Fretado Hidroviário"
            value={inputProduction.waterwayCharteredTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Animais Silvestres</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterwayCharteredTransport"
            title="Animais Silvestres Já Foram Avistados no Lote ou Assentamento"
            placeholder="Animais Silvestres Já Foram Avistados no Lote ou Assentamento"
            value={inputProduction.waterwayCharteredTransport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.problemsWithWildAnimals}
            title="Animais Silvestres Causam Problemas?"
            name="problemsWithWildAnimals"
            id="select"
            required
          >
            <option value={undefined} hidden>
              Animais Silvestres Causam Problemas?
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <div className="col-12">
        <h3>Principais Benfeitorias (galpão, estufa, secador, silos, etc)</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="improvement"
            title="Benfeitoria"
            placeholder="Benfeitoria"
            value={inputImprovements.improvement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="otherImprovement"
            title="Outra Benfeitoria"
            placeholder="Outra Benfeitoria"
            value={inputImprovements.otherImprovement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="typeImprovement"
            title="Tipo"
            placeholder="Tipo"
            value={inputImprovements.typeImprovement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="dimensionImprovement"
            title="Dimensão (m² ou m)"
            placeholder="Dimensão (m² ou m)"
            value={inputImprovements.dimensionImprovement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="text"
            name="improvementAge"
            title="Faixa de Idade da Benfeitoria"
            placeholder="Faixa de Idade da Benfeitoria"
            value={inputImprovements.improvementAge}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <div>
        <Button onClick={addImprovement} color="primary">
          Adicionar
        </Button>
      </div>
      <div className="mt-3 col-xl-12 col-sm-12 col-lg-12">
        <Table>
          <thead>
            <tr>
              <th>Benfeitoria</th>
              <th>Tipo</th>
              <th>Dimensão (m² ou m)</th>
              <th>Faixa de Idade da Benfeitoria</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {inputProduction.improvements.map((item, index) => (
              <tr key={index}>
                <td>{item.improvements}</td>
                <td>{item.type_improvement}</td>
                <td>{item.dimension_improvement}</td>
                <td>{item.improvement_age}</td>
                <td>
                  <Button onClick={() => deleteImprovement(index)}>
                    <DeleteForeverOutlined>Delete</DeleteForeverOutlined>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <DataTable
          items={inputProduction.improvements}
          noItemsViewSlot="Sem items"
          fields={[
            { key: "improvement", label: "Benfeitoria" },
            { key: "typeImprovement", label: "Tipo" },
            { key: "dimensionImprovement", label: "Dimensão (m² ou m)" },
            { key: "improvementAge", label: "Faixa de Idade da Benfeitoria" },
            { key: "delete", label: "" },
          ]}
          hover
          striped
          bordered
          size="sm"
          itemsPerPage={10}
          pagination
          scopedSlots={{
            delete: (item, index) => (
              <Button onClick={() => deleteImprovement(index)}>
                <DeleteForeverOutlined>Delete</DeleteForeverOutlined>
              </Button>
            ),
          }}
        /> */}
      </div>
      <div className="col-12">
        <h3>Animais de Serviço (Apenas os Utilizados para Serviço/Trabalho)</h3>
        <hr />
      </div>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="number"
            name="bulls"
            title="Bois"
            placeholder="Bois"
            value={inputImprovements.bulls}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="number"
            name="equine"
            title="Equinos"
            placeholder="Equinos"
            value={inputImprovements.equine}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <Input
            className="form-control-alternative"
            type="number"
            name="muares"
            title="Muares"
            placeholder="Muares"
            value={inputImprovements.muares}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Producao;
