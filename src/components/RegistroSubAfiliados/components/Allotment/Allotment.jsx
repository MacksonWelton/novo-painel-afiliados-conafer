import GoogleMaps from "components/GoogleMaps/GoogleMaps";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Col, Input, Row } from "reactstrap";
import { getBiomes } from "redux/actions/Membros";

const Allotment = ({
  inputAllotment,
  setInputAllotment,
  fileAllotment,
  setFileAllotment,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBiomes());
  }, [dispatch]);

  const biomes = useSelector((state) => state.MembersReducer.biomes);
  const lat = useSelector((state) => state.GoogleMapsReducer.lat);
  const lng = useSelector((state) => state.GoogleMapsReducer.lng);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputAllotment({ ...inputAllotment, [name]: value });
  };

  useEffect(() => {
    if (
      lat !== 0 &&
      lng !== 0 &&
      `${lat}, ${lng}` !== inputAllotment.coordinates
    ) {
      setInputAllotment({
        ...inputAllotment,
        coordinates: `${lat}, ${lng}`,
      });
    }
  }, [lat, lng, setInputAllotment, inputAllotment]);

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    let fileName = "";

    if (value) {
      fileName = event.target.files[0].name;
    }
    setFileAllotment({
      ...fileAllotment,
      [name]: { ...fileAllotment[name], fileName: fileName, value: value },
    });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Local do lote</h2>
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
                value={inputAllotment.bioma}
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
                Núcleo Operacional{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="operational_core"
                placeholder="Ex: Seaprof"
                value={inputAllotment.operational_core}
                onChange={handleChangeInput}
                maxLength="60"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="allotment_state">
                Estado <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                onChange={handleChangeInput}
                value={inputAllotment.allotment_state}
                name="allotment_state"
                id="allotment_state"
                maxLength="60"
                minLength="1"
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
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
                value={inputAllotment.allotment_city}
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
                value={inputAllotment.settlement}
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
                value={inputAllotment.incra_allotment_number}
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
                value={inputAllotment.access_way}
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
                value={inputAllotment.coordinates}
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
                {fileAllotment.lot_geometry.fileName
                  ? fileAllotment.lot_geometry.fileName
                  : "Escolha o arquivo"}
                <Input
                  className="form-control-alternative d-none"
                  type="file"
                  title="Documento de geometria do lote"
                  name="lot_geometry"
                  id="lot_geometry"
                  onChange={handleChangeInputFile}
                  accept="image/png, image/jpeg, .pdf"
                />
              </label>
            </FormGroup>
          </Col>
          <Col lg="12">
            <FormGroup>
              <GoogleMaps
                coordinatesth={inputAllotment.coordinates.split(",")}
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Áreas</h2>
            <hr />
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
                value={inputAllotment.thirst}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.own_planting}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.native_forest}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.forest}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.fallow_capoeira}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.native_pasture}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.planted_pasture}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.degraded_area}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.batch_partnership}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.third_party_partnership}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.total}
                onChange={handleChangeInput}
                min="0"
                required
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Área da sede</h2>
            <hr />
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
                value={inputAllotment.has_garden}
                onChange={handleChangeInput}
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
                htmlFor="grow_medicinal_plants"
              >
                Cultiva <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="grow_medicinal_plants"
                name="grow_medicinal_plants"
                value={inputAllotment.grow_medicinal_plants}
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
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Plantio Próprio</h2>
            <hr />
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
                value={inputAllotment.production_system}
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
                value={inputAllotment.planting_type}
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
                value={inputAllotment.management}
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
                type="number"
                id="planted_area"
                name="planted_area"
                title="Área plantada"
                placeholder="Ex: 3,00"
                value={inputAllotment.planted_area}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.amount_crops}
                onChange={handleChangeInput}
                max="2147483647"
                min="0"
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Animais silvestres</h2>
            <hr />
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
                value={inputAllotment.wild_animals_sighted_lot}
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
                value={inputAllotment.wild_animals_cause_problems}
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
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Animais de serviço</h2>
            <hr />
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
                value={inputAllotment.oxen}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.equine}
                onChange={handleChangeInput}
                min="0"
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
                value={inputAllotment.mules}
                onChange={handleChangeInput}
                min="0"
                required
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Informações gerais</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="documentation_area"
              >
                Área da documentação (ha){" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="number"
                id="documentation_area"
                name="documentation_area"
                title="Área da documentação"
                placeholder="Ex: 5"
                value={inputAllotment.documentation_area}
                onChange={handleChangeInput}
                min="0"
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
                placeholder="Ex: Chácara São José"
                value={inputAllotment.property_name}
                onChange={handleChangeInput}
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="georeferenced">
                Georreferenciada{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="georeferenced"
                name="georeferenced"
                title="Georreferenciada"
                value={inputAllotment.georeferenced}
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
                htmlFor="property_ownership"
              >
                Propriedade / Posse / Concessão{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="text"
                id="property_ownership"
                name="property_ownership"
                title="Concessão da propriedade posse"
                placeholder="Ex: Concessão"
                value={inputAllotment.property_ownership}
                onChange={handleChangeInput}
                maxLength="60"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Animais de serviço</h2>
            <hr />
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
                value={inputAllotment.domain_title}
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
                value={inputAllotment.ccu}
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
                value={inputAllotment.ccru}
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
                value={inputAllotment.regularization}
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
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">
              Documentação - Propriedades e concessão
            </h2>
            <hr />
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
                value={inputAllotment.sncr}
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
                value={inputAllotment.incra_certificate}
                onChange={handleChangeInput}
                maxLength="60"
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Informações do Imovel</h2>
            <hr />
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
                value={inputAllotment.join_pra}
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
                value={inputAllotment.alternatives_regularize_deficit}
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
                value={inputAllotment.how_want_make_up_deficit_area}
                onChange={handleChangeInput}
                maxLength="300"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="has_tac_with_app">
                Existe TAC com APP{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="has_tac_with_app"
                name="has_tac_with_app"
                title="Existe TAC com APP"
                value={inputAllotment.has_tac_with_app}
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
                value={inputAllotment.has_infractions_committed}
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
                Imovel possui ARVN{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="property_has_arvn"
                name="property_has_arvn"
                title="Imovel possui ARVN"
                value={inputAllotment.property_has_arvn}
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
                placeholder="Ex: Criar animais"
                value={inputAllotment.what_want_to_with_surplus_area}
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
                value={inputAllotment.has_rppn}
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
                value={inputAllotment.has_crf}
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
                value={inputAllotment.rli_period}
                onChange={handleChangeInput}
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="size_changes_after"
              >
                Alteração tamanho após 22/07/2008{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="size_changes_after"
                name="size_changes_after"
                title="Alteração tamanho após 22/07/2008"
                value={inputAllotment.size_changes_after}
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
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Qualidade Ambiental</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="qa_meets_family">
                Qualidade ambiental local atende a familia?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                type="select"
                id="qa_meets_family"
                name="qa_meets_family"
                title="Qualidade ambiental local atende a familia?"
                value={inputAllotment.qa_meets_family}
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
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">
              Qualidade Ambiental - Quanto afeta a produção
            </h2>
            <hr />
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
                placeholder="Ex: 5"
                value={inputAllotment.water}
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
                placeholder="Ex: 5"
                value={inputAllotment.climate}
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
                placeholder="Ex: 5"
                value={inputAllotment.ground}
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
                placeholder="Ex: 5"
                value={inputAllotment.vegetation}
                onChange={handleChangeInput}
                max="5"
                min="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="develops_activity_qa"
              >
                Desenvolve atividade para melhorar a qualidade ambiental local
                e/ou regional? <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="develops_activity_qa"
                title="Desenvolve atividade para melhorar a qualidade ambiental local e/ou regional?"
                value={inputAllotment.develops_activity_qa}
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
            <FormGroup>
              <label className="form-control-label" htmlFor="what_activity_qa">
                Especifique qual é a atividade{" "}
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="what_activity_qa"
                title="Especifique qual é a atividade"
                placeholder="Ex: Remoção de resíduos"
                value={inputAllotment.what_activity_qa}
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
                Ações cotidianas interferem no ambiente?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="everyday_actions_interfere"
                title="Ações cotidianas interferem no ambiente?"
                value={inputAllotment.everyday_actions_interfere}
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
            <FormGroup>
              <label className="form-control-label" htmlFor="what_shape">
                De que forma? <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="what_shape"
                title="De que forma?"
                placeholder="Ex: Contaminação do solo"
                value={inputAllotment.what_shape}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
          <Col lg="12">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="exchange_experience"
              >
                Participa de algum espaço para troca de experiência ou
                treinamento visando melhora da qualidade da sua produção?
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="exchange_experience"
                title="Participa espaços troca de experiência"
                placeholder="Ex: Sim"
                value={inputAllotment.exchange_experience}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="which_organization"
              >
                Qual organização
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="which_organization"
                title="Qual organização"
                placeholder="Ex: CONAFER"
                value={inputAllotment.which_organization}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
          <Col lg="12">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="activities_interest"
              >
                Atividades de interesse
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="activities_interest"
                title="Atividades de interesse"
                placeholder="Ex: Capacitação"
                value={inputAllotment.activities_interest}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">
              Avaliações do assentado regular
            </h2>
            <hr />
          </Col>
          <Col lg="12">
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
                placeholder="Ex: Tranquilidade"
                value={inputAllotment.positive_in_settlement}
                onChange={handleChangeInput}
                maxLength="300"
              />
            </FormGroup>
          </Col>
          <Col lg="12">
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
                placeholder="Ex: Falta de recursos do governo"
                value={inputAllotment.negative_in_settlement}
                onChange={handleChangeInput}
                maxLength="300"
              />
            </FormGroup>
          </Col>
          <Col lg="12">
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
                placeholder="Ex: Acesso ao Crédito, Assistência Técnica, Mão de obra, Maquinário, Problemas climáticos"
                value={inputAllotment.main_ownership_restrictions}
                onChange={handleChangeInput}
                maxLength="300"
              />
            </FormGroup>
          </Col>
          <Col lg="12">
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
                placeholder="Ex: Aumento da produção"
                value={inputAllotment.future_expectations_property}
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
                value={inputAllotment.rural_tourism}
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
      </Col>
    </Row>
  );
};

export default Allotment;
