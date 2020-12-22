import GoogleMaps from "components/GoogleMaps/GoogleMaps";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Col, Input, Row } from "reactstrap";
import { getBiomes } from "redux/actions/Membros";

const LocalizacaoDoLote = ({ inputPlotLocation, setInputPlotLocation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBiomes());
  }, [dispatch]);

  const biomes = useSelector((state) => state.MembersReducer.biomes);
  const lat = useSelector((state) => state.GoogleMapsReducer.lat);
  const lng = useSelector((state) => state.GoogleMapsReducer.lng);

  const [file, setFile] = useState();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPlotLocation({ ...inputPlotLocation, [name]: value });
  };

  useEffect(() => {
    if (
      lat !== 0 &&
      lng !== 0 &&
      `${lat}, ${lng}` !== inputPlotLocation.coordinates
    ) {
      setInputPlotLocation({
        ...inputPlotLocation,
        coordinates: `${lat}, ${lng}`,
      });
    }
  }, [lat, lng, setInputPlotLocation, inputPlotLocation]);

  const handleChangeInputFile = (event) => {
    setFile(event.target.value);
  };

  return (
    <Row>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Local do lote</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="bioma">
            Bioma
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="bioma"
            id="bioma"
            value={inputPlotLocation.bioma}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            {biomes.map((biome, i) => (
              <option key={i} value={biome.id}>
                {biome.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="operational_core">
            Núcleo Operacional <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="operational_core"
            placeholder="Ex: Seaprof"
            value={inputPlotLocation.operational_core}
            onChange={handleChangeInput}
            maxLength="60"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="allotmenet_state">
            Estado <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInput}
            value={inputPlotLocation.allotmenet_state}
            name="allotmenet_state"
            id="select"
            maxLength="60"
            minLength="1"
            required
          >
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="allotment_city">
            Município <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="allotment_city"
            placeholder="Ex: Rio Branco"
            value={inputPlotLocation.allotment_city}
            onChange={handleChangeInput}
            maxLength="60"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement">
            Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlement"
            title="Assentamento"
            placeholder="Ex: AASS555444"
            value={inputPlotLocation.settlement}
            onChange={handleChangeInput}
            maxLength="60"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="incra_allotment_number"
          >
            Número do Lote Incra
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="incra_allotment_number"
            title="Número do Lote Incra"
            placeholder="Ex: 30"
            value={inputPlotLocation.incra_allotment_number}
            onChange={handleChangeInput}
            max="2147483647"
            min="0"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="access_way">
            Via de acesso ao imóvel{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="access_way"
            title="Via de acesso ao imóvel"
            placeholder="Ex: Estrada de terra"
            value={inputPlotLocation.access_way}
            onChange={handleChangeInput}
            maxLength="100"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="coordinates">
            Coordenadas (Lat, Lng){" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="coordinates"
            title="Coordenadas (Lat, Lng)"
            placeholder="Ex: -15.7801, -47.9292"
            value={inputPlotLocation.coordinates}
            onChange={handleChangeInput}
            maxLength="100"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="lot_geometry">
            Documento de geometria do lote
          </label>
          <label className="btn bg-light ml-1 mb-0 form-control-label">
            {file ? `Arquivo Selecionado` : "Escolha o arquivo"}
            <Input
              className="form-control-alternative"
              type="file"
              title="Documento de geometria do lote"
              style={{ display: "none" }}
              name="lot_geometry"
              id="lot_geometry"
              onChange={handleChangeInputFile}
            />
          </label>
          <p className="ml-2">
            <small>{file ? file : null}</small>
          </p>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <GoogleMaps
            coordinatesth={inputPlotLocation.coordinates.split(",")}
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Áreas</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="thirst">
            Sede <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="number"
            id="thirst"
            name="thirst"
            title="Sede"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.thirst}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="own_planting">
            Plantio próprio
          </label>
          <Input
            type="number"
            id="own_planting"
            name="own_planting"
            title="Plantio próprio"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.own_planting}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="native_forest">
            Mata nativa
          </label>
          <Input
            type="number"
            id="native_forest"
            name="native_forest"
            title="Mata nativa"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.native_forest}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="forest">
            Floresta
          </label>
          <Input
            type="number"
            id="forest"
            name="forest"
            title="Floresta"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.forest}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="fallow_capoeira">
            Pousio capoeira
          </label>
          <Input
            type="number"
            id="fallow_capoeira"
            name="fallow_capoeira"
            title="Pousio capoeira"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.fallow_capoeira}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="native_pasture">
            Pastagem nativa
          </label>
          <Input
            type="number"
            id="native_pasture"
            name="native_pasture"
            title="Pastagem nativa"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.native_pasture}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planted_pasture">
            Pastagem plantada
          </label>
          <Input
            type="number"
            id="planted_pasture"
            name="planted_pasture"
            title="Pastagem plantada"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.planted_pasture}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="degraded_area">
            Área degradada
          </label>
          <Input
            type="number"
            id="degraded_area"
            name="degraded_area"
            title="Área degradada"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.degraded_area}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="batch_partnership">
            Parceria lote
          </label>
          <Input
            type="number"
            id="batch_partnership"
            name="batch_partnership"
            title="Parceria lote"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.batch_partnership}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="third_party_partnership"
          >
            Parceria lote terceiros
          </label>
          <Input
            type="number"
            id="third_party_partnership"
            name="third_party_partnership"
            title="Parceria lote terceiros"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.third_party_partnership}
            onChange={handleChangeInput}
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="total">
            Total <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="number"
            id="total"
            name="total"
            title="Total"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.total}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Área da sede</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_garden">
            Possui horta
          </label>
          <Input
            type="select"
            id="has_garden"
            name="has_garden"
            value={inputPlotLocation.has_garden}
            onChange={handleChangeInput}
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Sim</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="grow_medicinal_plants">
            Cultiva <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="grow_medicinal_plants"
            name="grow_medicinal_plants"
            value={inputPlotLocation.grow_medicinal_plants}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Sim</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Plantio Próprio</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="production_system">
            Sistema de produção
          </label>
          <Input
            type="text"
            id="production_system"
            name="production_system"
            title="Sistema de produção"
            placeholder="Ex: Monocultivo"
            value={inputPlotLocation.production_system}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planting_type">
            Tipo de plantio
          </label>
          <Input
            type="text"
            id="planting_type"
            name="planting_type"
            title="Tipo de plantio"
            placeholder="Ex: Convencional"
            value={inputPlotLocation.planting_type}
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
            type="text"
            id="management"
            name="management"
            title="Manejo"
            placeholder="Ex: Sequencial"
            value={inputPlotLocation.management}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="planted_area">
            Área plantada (ha)
          </label>
          <Input
            type="text"
            id="planted_area"
            name="planted_area"
            title="Área plantada"
            placeholder="Ex: 3,00"
            value={inputPlotLocation.planted_area}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="amount_crops">
            Quantidade de culturas
          </label>
          <Input
            type="number"
            id="amount_crops"
            name="amount_crops"
            title="Quantidade de culturas"
            placeholder="Ex: 10.00"
            value={inputPlotLocation.amount_crops}
            onChange={handleChangeInput}
            max="2147483647"
            min="0"
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Animais silvestres</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="wild_animals_sighted_lot"
          >
            Animais silvestres causam problemas
          </label>
          <Input
            type="select"
            id="wild_animals_sighted_lot"
            name="wild_animals_sighted_lot"
            title="Animais silvestres causam problemas"
            value={inputPlotLocation.wild_animals_sighted_lot}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="wild_animals_cause_problems"
          >
            Animais silvestres avistados no lote{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="wild_animals_cause_problems"
            name="wild_animals_cause_problems"
            title="Animais silvestres avistados no lote"
            value={inputPlotLocation.wild_animals_cause_problems}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Animais de serviço</h3>
      </Col>
      <Col lg="4">
        <FormGroup>
          <label className="form-control-label" htmlFor="oxen">
            Bois
          </label>
          <Input
            type="number"
            id="oxen"
            name="oxen"
            title="Bois"
            placeholder="Ex: 10"
            value={inputPlotLocation.oxen}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup>
          <label className="form-control-label" htmlFor="equine">
            Equinos
          </label>
          <Input
            type="number"
            id="equine"
            name="equine"
            title="Equinos"
            placeholder="Ex: 6"
            value={inputPlotLocation.equine}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup>
          <label className="form-control-label" htmlFor="mules">
            Muares
          </label>
          <Input
            type="number"
            id="mules"
            name="mules"
            title="Muares"
            placeholder="Ex: 5"
            value={inputPlotLocation.mules}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Informações gerais</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="documentation_area">
            Área da documentação (ha){" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="text"
            id="documentation_area"
            name="documentation_area"
            title="Área da documentação"
            placeholder="Ex: 5"
            value={inputPlotLocation.documentation_area}
            onChange={handleChangeInput}
            maxLength="60"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="property_name">
            Nome da propriedade{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="text"
            id="property_name"
            name="property_name"
            title="Nome da propriedade"
            placeholder="Ex: Chacará São José"
            value={inputPlotLocation.property_name}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="georeferenced">
            Georreferenciada <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="georeferenced"
            name="georeferenced"
            title="Georreferenciada"
            value={inputPlotLocation.georeferenced}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="property_ownership">
            Propriedade / Posse / Concessão{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="text"
            id="property_ownership"
            name="property_ownership"
            title="Concessão da propriedade posse"
            placeholder="Ex: Concessão"
            value={inputPlotLocation.property_ownership}
            onChange={handleChangeInput}
            maxLength="60"
            minLength="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Animais de serviço</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="domain_title">
            Título domínio <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="domain_title"
            name="domain_title"
            title="Título domínio"
            value={inputPlotLocation.domain_title}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="ccu">
            CCU <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="ccu"
            name="ccu"
            title="CCU"
            value={inputPlotLocation.ccu}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="ccru">
            CCDRU <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="ccru"
            name="ccru"
            title="CCDRU"
            value={inputPlotLocation.ccru}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="regularization">
            Regularização
          </label>
          <Input
            type="select"
            id="regularization"
            name="regularization"
            title="Regularização"
            value={inputPlotLocation.regularization}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">
          Documentação - Propriedades e concessão
        </h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="sncr">
            SNCR
          </label>
          <Input
            type="text"
            id="sncr"
            name="sncr"
            title="SNCR"
            placeholder="Ex: 54527"
            value={inputPlotLocation.sncr}
            onChange={handleChangeInput}
            maxLength="60"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="incra_certificate">
            Certidão INCRA
          </label>
          <Input
            type="text"
            id="incra_certificate"
            name="incra_certificate"
            title="Certidão INCRA"
            placeholder="Ex: 4785"
            value={inputPlotLocation.incra_certificate}
            onChange={handleChangeInput}
            maxLength="60"
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Informações do Imovel</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="join_pra">
            Aderir PRA <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="join_pra"
            name="join_pra"
            title="Aderir PRA"
            value={inputPlotLocation.join_pra}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="alternatives_regularize_deficit"
          >
            Alternativas regularizar déficit
          </label>
          <Input
            type="text"
            id="alternatives_regularize_deficit"
            name="alternatives_regularize_deficit"
            title="Alternativas regularizar déficit"
            placeholder="Ex: Reflorestamento"
            value={inputPlotLocation.alternatives_regularize_deficit}
            onChange={handleChangeInput}
            maxLength="300"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="how_want_make_up_deficit_area"
          >
            Como deseja compensar área com déficit
          </label>
          <Input
            type="text"
            id="how_want_make_up_deficit_area"
            name="how_want_make_up_deficit_area"
            title="Como deseja compensar área déficit"
            placeholder="Ex: Plantando novas àrvores"
            value={inputPlotLocation.how_want_make_up_deficit_area}
            onChange={handleChangeInput}
            maxLength="300"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_tac_with_app">
            Existe TAC com APP <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="has_tac_with_app"
            name="has_tac_with_app"
            title="Existe TAC com APP"
            value={inputPlotLocation.has_tac_with_app}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="has_infractions_committed"
          >
            Existe infrações cometidas{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="has_infractions_committed"
            name="has_infractions_committed"
            title="Existe infrações cometidas"
            value={inputPlotLocation.has_infractions_committed}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="property_has_arvn">
            Imovel possui ARVN <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="property_has_arvn"
            name="property_has_arvn"
            title="Imovel possui ARVN"
            value={inputPlotLocation.property_has_arvn}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="what_want_to_with_surplus_area"
          >
            O que pretende com área excedente
          </label>
          <Input
            type="text"
            id="what_want_to_with_surplus_area"
            name="what_want_to_with_surplus_area"
            title="O que pretende com área excedente"
            placeholder="Ex: 5"
            value={inputPlotLocation.what_want_to_with_surplus_area}
            onChange={handleChangeInput}
            maxLength="60"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_rppn">
            Existe RPPN <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="has_rppn"
            name="has_rppn"
            title="Existe RPPN"
            value={inputPlotLocation.has_rppn}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="has_crf">
            Possui CRF <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="has_crf"
            name="has_crf"
            title="Possui CRF"
            value={inputPlotLocation.has_crf}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="rli_period">
            RLI submetida ao período
          </label>
          <Input
            type="date"
            id="rli_period"
            name="rli_period"
            title="RLI submetida ao período"
            value={inputPlotLocation.rli_period}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="size_changes_after">
            Alteração tamanho após 22/07/2008{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="size_changes_after"
            name="size_changes_after"
            title="Alteração tamanho após 22/07/2008"
            value={inputPlotLocation.size_changes_after}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Qualidade Ambiental</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="qa_meets_family">
            Quantidade atende família{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            type="select"
            id="qa_meets_family"
            name="qa_meets_family"
            title="Qa atende família"
            value={inputPlotLocation.qa_meets_family}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">
          Qualidade Ambiental - quanto afeta a produção
        </h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="water">
            Água <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="water"
            title="Água"
            placeholder="Ex: 6"
            value={inputPlotLocation.water}
            onChange={handleChangeInput}
            max="5"
            min="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="climate">
            Clima <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="climate"
            title="Clima"
            placeholder="Ex: 6"
            value={inputPlotLocation.climate}
            onChange={handleChangeInput}
            max="5"
            min="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="ground">
            Solo <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="ground"
            title="Clima"
            placeholder="Ex: 6"
            value={inputPlotLocation.ground}
            onChange={handleChangeInput}
            max="5"
            min="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="vegetation">
            Vegetação <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="vegetation"
            title="Vegetação"
            placeholder="Ex: 6"
            value={inputPlotLocation.vegetation}
            onChange={handleChangeInput}
            max="5"
            min="1"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="develops_activity_qa">
            Desenvolve atividade qa{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="develops_activity_qa"
            title="Desenvolve atividade qa"
            value={inputPlotLocation.develops_activity_qa}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="what_activity_qa">
            Qual atividade qa
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="what_activity_qa"
            title="Qual atividade qa"
            placeholder="Ex: 6"
            value={inputPlotLocation.what_activity_qa}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="everyday_actions_interfere"
          >
            Ações cotidianas interferem no ambiente{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="everyday_actions_interfere"
            title="Ações cotidianas interferem no ambiente"
            value={inputPlotLocation.everyday_actions_interfere}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="what_shape">
            Qual forma <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="what_shape"
            title="Qual forma"
            placeholder="Ex: 6"
            value={inputPlotLocation.what_shape}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="exchange_experience">
            Participa espaços troca de experiência
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="exchange_experience"
            title="Participa espaços troca de experiência"
            placeholder="Ex: 6"
            value={inputPlotLocation.exchange_experience}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="which_organization">
            Qual organização
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="which_organization"
            title="Qual organização"
            placeholder="Ex: 6"
            value={inputPlotLocation.which_organization}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="activities_interest">
            Atividades de interesse
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="activities_interest"
            title="Atividades de interesse"
            placeholder="Ex: 6"
            value={inputPlotLocation.activities_interest}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="12">
        <hr />
        <h3 className="text-center mb-3">Avaliação do assento regular</h3>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="positive_in_settlement"
          >
            O que considera positivo no assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="positive_in_settlement"
            title="O que considera positivo no assentamento"
            placeholder="Ex: 6"
            value={inputPlotLocation.positive_in_settlement}
            onChange={handleChangeInput}
            maxLength="300"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="negative_in_settlement"
          >
            O que considera negativo no no assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="negative_in_settlement"
            title="O que considera negativo no no assentamento"
            placeholder="Ex: 6"
            value={inputPlotLocation.negative_in_settlement}
            onChange={handleChangeInput}
            maxLength="300"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="main_ownership_restrictions"
          >
            Principais restrições de propriedade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="main_ownership_restrictions"
            title="Principais restrições de propriedade"
            placeholder="Ex: 6"
            value={inputPlotLocation.main_ownership_restrictions}
            onChange={handleChangeInput}
            maxLength="300"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="future_expectations_property"
          >
            Expectativa futuras para propriedade
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="future_expectations_property"
            title="Expectativa futuras para propriedade"
            placeholder="Ex: 6"
            value={inputPlotLocation.future_expectations_property}
            onChange={handleChangeInput}
            maxLength="255"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="rural_tourism">
            Interesse em turismo rural{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="rural_tourism"
            title="Interesse em turismo rural"
            placeholder="Ex: 6"
            value={inputPlotLocation.rural_tourism}
            onChange={handleChangeInput}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default LocalizacaoDoLote;
