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

  const [inputPlantation, setInputPlantation] = useState({
    culture: "",
    annual_production: "",
    self_consumption: "",
    annual_marketed_quantity: "",
    kg_price: "",
    seed_origin_seedling: "",
    creole_seed: "",
    pest_problems: "",
    irrigations: "",
    waste_generation: "",
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

  const handleChangeInputPlantation = (event) => {
    const { name, value } = event.target;
    setInputPlantation({ ...inputPlantation, [name]: value });
  };

  const addPlantation = () => {
    setInputProduction({
      ...inputProduction,
      plantations: [...inputProduction.plantations, inputPlantation],
    });

    setInputPlantation({
      culture: "",
      annual_production: "",
      self_consumption: "",
      annual_marketed_quantity: "",
      kg_price: "",
      seed_origin_seedling: "",
      creole_seed: "",
      pest_problems: "",
      irrigations: "",
      waste_generation: "",
    });
  };

  return (
    <Row>
      <div className="col-12">
        <h3>Áreas (ha)</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="headquarters">
            Sede
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="thirst"
            title="Sede"
            placeholder="Ex: Ex: 1,00"
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
            type="number"
            name="own_planting"
            title="Plantio Próprio"
            placeholder="Ex: 1,00"
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
            type="number"
            name="native_forest"
            title="Mata Nativa"
            placeholder="Ex: 1,00"
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
            type="number"
            name="forest"
            value={inputProduction.forest}
            placeholder="Ex: 1,00"
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
            type="number"
            name="fallow_capoeira"
            title="Pousio/Capoeira"
            placeholder="Ex: 1,00"
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
            type="number"
            name="native_pasture"
            title="Pastagem Nativa"
            placeholder="Ex: 1,00"
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
            type="number"
            name="planted_pasture"
            title="Pastagem Plantada"
            placeholder="Ex: 1,00"
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
            type="number"
            name="degraded_area"
            title="Degradada"
            placeholder="Ex: 1,00"
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
            type="number"
            name="batch_partnership"
            title="Parceria no Lote"
            placeholder="Ex: 1,00"
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
            placeholder="Ex: 1,00"
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
            placeholder="Ex: 1,00"
            value={inputProduction.total}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <hr />
        <h3>Área da Sede</h3>
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
        <hr />
        <h3>Plantio Próprio</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_own_planting">
            Tem Plantio Próprio?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.has_own_planting}
            title="Tem Plantio Próprio?"
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
          <label className="form-control-label" htmlFor="production_system">
            Sistemas da Produção
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="production_system"
            title="Sistemas da Produção"
            placeholder="Ex: Monocultivo"
            value={inputProduction.production_system}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planting_type">
            Tipo de Plantio
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="planting_type"
            title="Tipo de Plantio"
            placeholder="Ex: Convencional"
            value={inputProduction.planting_type}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="management">
            Manejo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="management"
            title="Manejo"
            placeholder="Ex: Sequencial"
            value={inputProduction.management}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planted_area">
            Área (ha)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="planted_area"
            title="Área (ha)"
            placeholder="Ex: 1,00"
            value={inputProduction.planted_area}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="amount_crops">
            Quantidade de Culturas Nesta Área
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="amount_crops"
            title="Quantidade de Culturas Nesta Área"
            placeholder="Ex: 3"
            value={inputProduction.amount_crops}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <hr />
        <h3>Cultura</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="culture">
            Cultura
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="culture"
            title="Cultura"
            placeholder="Ex: Cana de Açúcar"
            value={inputPlantation.culture}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="annual_production">
            Produção Anual
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="annual_production"
            title="Produção Anual"
            placeholder="Ex: 10.000 Kg"
            value={inputPlantation.annual_production}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="self_consumption">
            Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="self_consumption"
            title="Preço Por Kg do Autoconsumo (Se Fosse Comprar no Mercado Local)"
            placeholder="Ex: 17,00"
            value={inputPlantation.self_consumption}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="annual_marketed_quantity"
          >
            Quantidade Comercializada Anual
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="annual_marketed_quantity"
            title="Quantidade Comercializada Anual"
            placeholder="Ex: 18.000 Kg"
            value={inputPlantation.annual_marketed_quantity}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="kg_price">
            Por Quanto Vende o Kg
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="kg_price"
            title="Por Quanto Vende o Kg"
            placeholder="Ex: 10,00"
            value={inputPlantation.kg_price}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="seed_origin_seedling">
            Semente/Muda Origem
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="seed_origin_seedling"
            title="Semente/Muda Origem"
            placeholder="Ex: Doada"
            value={inputPlantation.seed_origin_seedling}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="creole_seed">
            Semente Crioula
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInputPlantation}
            value={inputPlantation.creole_seed}
            title="Semente Crioula"
            name="creole_seed"
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
          <label className="form-control-label" htmlFor="pest_problems">
            Tem problemas com ataques de pragas e doenças?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInputPlantation}
            value={inputPlantation.pest_problems}
            title="Tem problemas com ataques de pragas e doenças?"
            name="pest_problems"
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
          <label className="form-control-label" htmlFor="irrigations">
            Área Irrigada
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="irrigations"
            title="Área Irrigada"
            placeholder="Ex: 100 ha"
            value={inputPlantation.irrigations}
            onChange={handleChangeInputPlantation}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            A Produção Gera Resíduo?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInputPlantation}
            value={inputPlantation.waste_generation}
            title="A Produção Gera Resíduo?"
            name="waste_generation"
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
      <Col lg="6" className="mb-3">
        <Button color="primary" onClick={addPlantation}>
          Adicionar
        </Button>
      </Col>
      <div className="d-flex justify-content-center">
        <Table>
          <thead>
            <tr>
              <th>Cultura</th>
              <th>Produção Anual</th>
              <th>Preço Por Kg do Autoconsumo</th>
              <th>Qtd. Comercializada Anual</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {inputProduction.plantations.map((platation, index) => (
              <tr key={index}>
                <td>{platation.culture}</td>
                <td>{platation.annual_production}</td>
                <td>{platation.self_consumption}</td>
                <td>{platation.annual_marketed}</td>
                <td>...</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="col-12">
        <hr />
        <h3>Produção Animal</h3>
      </div>
      <div className="col-12">
        <hr />
        <h4>Piscicultura</h4>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Tipo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureType"
            title="Tipo"
            placeholder="Ex: Tanque Escavado"
            value={inputProduction.piscicultureType}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Manejo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureHandling"
            title="Manejo"
            placeholder="Ex: Extensivo"
            value={inputProduction.piscicultureHandling}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Sistema de Despesca
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturePeeling"
            title="Sistema de Despesca"
            placeholder="Ex: Redes"
            value={inputProduction.pisciculturePeeling}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Complementação Alimentar
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFoodComplementation"
            title="Complementação Alimentar"
            placeholder="Ex: Ração"
            value={inputProduction.piscicultureFoodComplementation}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Comp. Alim. - Custo Total Anual"
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFoodComplementationCost"
            title="Comp. Alim. - Custo Total Anual"
            placeholder="Ex: 1.000,00"
            value={inputProduction.piscicultureFoodComplementationCost}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Finalidade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureFinality"
            title="Finalidade"
            placeholder="Ex: Autoconsumo"
            value={inputProduction.piscicultureFinality}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Existe Pesque-Pague
          </label>
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
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Tamanho do Reservatório (m²)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureReservoir"
            title="Tamanho do Reservatório (m²)"
            placeholder="Ex: 250"
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
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="waste_generation">
            Produção de Carne (Kg/ano)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureProduction"
            title="Produção de Carne (Kg/ano)"
            placeholder="Ex: 200,00"
            value={inputProduction.piscicultureProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Preço de Compra do Kg no Mercado Local - Total Autoconsumo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturePriceKg"
            title="Preço de Compra do Kg no Mercado Local - Total Autoconsumo"
            placeholder="Ex: 2.000,00"
            value={inputProduction.pisciculturePriceKg}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Produção Comercializada (Kg/ano)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="piscicultureCommercializedProduction"
            title="Produção Comercializada (Kg/ano)"
            placeholder="Ex: 200"
            value={inputProduction.piscicultureCommercializedProduction}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Preço Médio Por Kg Obitido na Comercialização
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="piscicultureMarketedPrice"
            title="Preço Médio Por Kg Obitido na Comercialização"
            placeholder="Ex: 5,00"
            value={inputProduction.piscicultureMarketedPrice}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Principais Canais de Comercialização
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="pisciculturemarketingChannels"
            title="Principais Canais de Comercialização"
            placeholder="Ex: Entrega a domicílio"
            value={inputProduction.pisciculturemarketingChannels}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <hr />
        <h3>Custo de Transporte da Produção</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="means_transport">
            Principal Meio de Transporte da Produção do Lote
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="means_transport"
            title="Principal Meio de Transporte da Produção do Lote"
            placeholder="Ex: Caminhão"
            value={inputProduction.means_transport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="waterway_transportation_cost"
          >
            Custo do Transporte Próprio Hidroviário
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="waterway_transportation_cost"
            title="Custo do Transporte Próprio Hidroviário"
            placeholder="Ex: 300,00"
            value={inputProduction.waterway_transportation_cost}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="road_chartered_transport_cost"
          >
            Custo do Transporte Fretado Rodoviário
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="road_chartered_transport_cost"
            title="Custo do Transporte Fretado Rodoviário"
            placeholder="Ex: 300,00"
            value={inputProduction.road_chartered_transport_cost}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="cost_chartered_waterway_transport"
          >
            Custo do Transporte Fretado Hidroviário
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="cost_chartered_waterway_transport"
            title="Custo do Transporte Fretado Hidroviário"
            placeholder="Ex: 300,00"
            value={inputProduction.cost_chartered_waterway_transport}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <div className="col-12">
        <hr />
        <h3>Animais Silvestres</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="wild_animals_sighted_lot"
          >
            Animais Silvestres Já Foram Avistados no Lote ou Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="wild_animals_sighted_lot"
            title="Animais Silvestres Já Foram Avistados no Lote ou Assentamento"
            placeholder="Ex: Lobo guará, Capivara, Arara azul"
            value={inputProduction.wild_animals_sighted_lot}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label
            className="form-control-label"
            htmlFor="wild_nimals_cause_problems"
          >
            Animais Silvestres Causam Problemas?
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputProduction.wild_nimals_cause_problems}
            title="Animais Silvestres Causam Problemas?"
            name="wild_nimals_cause_problems"
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
        <hr />
        <h3>Principais Benfeitorias (galpão, estufa, secador, silos, etc)</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="improvement">
            Benfeitoria
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="improvement"
            title="Benfeitoria"
            placeholder="Ex: Moradia"
            value={inputImprovements.improvement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="waste_generation">
            Outra Benfeitoria
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="otherImprovement"
            title="Outra Benfeitoria"
            placeholder="Ex: Moinho"
            value={inputImprovements.otherImprovement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="type_improvement">
            Tipo
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="type_improvement"
            title="Tipo"
            placeholder="Ex: Alvenaria"
            value={inputImprovements.type_improvement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="footage">
            Dimensão (m² ou m)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="footage"
            title="Dimensão (m² ou m)"
            placeholder="Ex: 200"
            value={inputImprovements.footage}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="age_improvement">
            Faixa de Idade da Benfeitoria
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="age_improvement"
            title="Faixa de Idade da Benfeitoria"
            placeholder="Ex: 4 a 6 anos"
            value={inputImprovements.age_improvement}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6" className="d-flex align-items-center">
        <Button className="mt-3 mb-3" onClick={addImprovement} color="primary">
          Adicionar
        </Button>
      </Col>
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
      </div>
      <div className="col-12">
        <hr />
        <h3>Animais de Serviço (Apenas os Utilizados para Serviço/Trabalho)</h3>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="oxen">
            Bois
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="oxen"
            title="Bois"
            placeholder="Ex: 5"
            value={inputImprovements.oxen}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="equine">
            Equinos
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="equine"
            title="Equinos"
            placeholder="Ex: 2"
            value={inputImprovements.equine}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="mules">
            Muares
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="mules"
            title="Muares"
            placeholder="Ex: 5"
            value={inputImprovements.mules}
            onChange={handleChangeInputImprovements}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default Producao;
