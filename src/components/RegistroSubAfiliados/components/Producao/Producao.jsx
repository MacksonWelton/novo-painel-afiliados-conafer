import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getTypeProduction } from "redux/actions/Membros";
import { getProductionName } from "redux/actions/Membros";

const Producao = ({
  inputAnimalProduction,
  setInputAnimalProduction,
  inputVegetables,
  setInputVegetables,
  inputPsiculture,
  setInputPsiculture,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductionName());
    dispatch(getTypeProduction());
  }, [dispatch]);

  const [tableVegetables, setTableVegetables] = useState([]);
  const [tablePsiculture, setTablePsiculture] = useState([]);

  const productionName = useSelector(
    (state) => state.MembersReducer.productionName
  );

  const allotment = useSelector((state) => state.MembersReducer.allotment);

  if (!inputAnimalProduction.allotment && allotment) {
    setInputAnimalProduction({
      ...inputAnimalProduction,
      allotment: allotment.id,
    });

    setInputVegetables({
      ...inputVegetables,
      allotment: allotment.id,
    });

    setInputPsiculture({
      ...inputPsiculture,
      allotment: allotment.id,
    });
  }

  const handleChangeInputVegetables = (event) => {
    const { name, value } = event.target;
    setInputVegetables({ ...inputVegetables, [name]: value });
  };

  const handleChangeInputPsiculture = (event) => {
    const { name, value } = event.target;
    setInputPsiculture({ ...inputPsiculture, [name]: value });
  };

  const addVegetablesInTable = () => {
    setTableVegetables([...tableVegetables, inputVegetables]);
  };

  const addPisicultureInTable = () => {
    setTablePsiculture([...tablePsiculture, inputPsiculture]);
  };

  const removeVegetablesInTable = (index) => {
    setTableVegetables(tableVegetables.filter((item, i) => i !== index));
  };

  const removePsicultureInTable = (index) => {
    setTablePsiculture(tablePsiculture.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <div className="col-12">
        <hr />
        <h2 className="text-center mb-4">Produção Vegetal</h2>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="production">
            Nome da Produção <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="production"
            title="Produção"
            id="production"
            value={inputVegetables.production}
            onChange={handleChangeInputVegetables}
            required
          >
            <option value="" hidden>
              Escolha uma opção
            </option>
            {productionName.map((production, i) => (
              <option key={i} value={production.id}>
                {production.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="annual_production">
            Produção anual
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="annual_production"
            id="annual_production"
            title="Produção anual"
            value={inputVegetables.annual_production}
            onChange={handleChangeInputVegetables}
            min="0"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="price_per_kg">
            Preço por Kg
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="price_per_kg"
            id="price_per_kg"
            title="Preço por Kg"
            placeholder="Ex: R$ 50,00"
            value={inputVegetables.price_per_kg}
            onChange={handleChangeInputVegetables}
            min="0"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="annual_marketed">
            Quantidade comercializada anual
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="annual_marketed"
            id="annual_marketed"
            title="Quantidade comercializada anual"
            value={inputVegetables.annual_marketed}
            onChange={handleChangeInputVegetables}
            min="0"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="how_much_sell">
            Quanto vende (kg)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="how_much_sell"
            id="how_much_sell"
            title="Quanto vende (kg)"
            placeholder="Ex: R$ 70,00"
            value={inputVegetables.how_much_sell}
            onChange={handleChangeInputVegetables}
            min="0"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="seedling_origin">
            Semente muda origem{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="seedling_origin"
            id="seedling_origin"
            title="Semente muda origem"
            placeholder="Ex: Macapá - AP"
            value={inputVegetables.seedling_origin}
            onChange={handleChangeInputVegetables}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="creole_seed">
            Semente crioula <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="creole_seed"
            id="creole_seed"
            title="Sementes crioulas são aquelas tradicionais, 
            ou seja, que foram mantidas e selecionadas por várias 
            décadas através dos agricultores tradicionais do mundo 
            todo e que não possuem restrição para a sua multiplicação."
            value={inputVegetables.creole_seed}
            onChange={handleChangeInputVegetables}
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
          <label className="form-control-label" htmlFor="pest_problems">
            Problemas com pragas
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="pest_problems"
            id="pest_problems"
            value={inputVegetables.pest_problems}
            onChange={handleChangeInputVegetables}
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
          <label className="form-control-label" htmlFor="irrigated_area">
            Área irrigada <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="irrigated_area"
            id="irrigated_area"
            title="Área irrigada"
            value={inputVegetables.irrigated_area}
            onChange={handleChangeInputVegetables}
            min="0"
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="generates_waste">
            Produção gera resíduo?{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="generates_waste"
            id="generates_waste"
            title="Produção gera resíduo?"
            value={inputVegetables.generates_waste}
            onChange={handleChangeInputVegetables}
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
      <Col lg="12" className="mb-3 d-flex justify-content-center">
        <Button color="primary" onClick={addVegetablesInTable}>
          Adicionar
        </Button>
      </Col>
      <Col lg="12">
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Produção Anual</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableVegetables.map((item, i) => (
              <tr key={i}>
                <td className="border">{item.production}</td>
                <td className="border">{item.annual_production} Kg</td>
                <td className="border">
                  <Button onClick={() => removeVegetablesInTable(i)}>
                    <DeleteForeverOutlined />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <div className="col-12">
        <hr />
        <h2 className="text-center mb-4">Piscicultura</h2>
      </div>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="type_psiculture">
            Tipo <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="type_psiculture"
            id="type_psiculture"
            placeholder="Ex: Tanque Escavado"
            value={inputPsiculture.type_psiculture}
            onChange={handleChangeInputPsiculture}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="management">
            Manejo <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="management"
            id="management"
            placeholder="Extensivo"
            value={inputPsiculture.management}
            onChange={handleChangeInputPsiculture}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="harvesting_systems">
            Sistema de despesca{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="harvesting_systems"
            id="harvesting_systems"
            placeholder="Ex: Redes"
            value={inputPsiculture.harvesting_systems}
            onChange={handleChangeInputPsiculture}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="food_supplementation">
            Complementação alimentar{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="food_supplementation"
            id="food_supplementation"
            placeholder="Ex: Ração"
            value={inputPsiculture.food_supplementation}
            onChange={handleChangeInputPsiculture}
            required
            min="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label
            className="form-control-label"
            htmlFor="annual_food_supplementation"
          >
            Complementação alimentar anual (quanto gasta em R$){" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="annual_food_supplementation"
            id="annual_food_supplementation"
            placeholder="Ex: R$ 1.500,00"
            value={inputPsiculture.annual_food_supplementation}
            onChange={handleChangeInputPsiculture}
            required
            min="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="goal">
            Finalidade{" "}
            <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="goal"
            id="goal"
            placeholder="Ex: Venda"
            value={inputPsiculture.goal}
            onChange={handleChangeInputPsiculture}
            required
            maxLength="255"
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="fish_pay">
            Tem pesque pague? <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="fish_pay"
            id="fish_pay"
            value={inputPsiculture.fish_pay}
            onChange={handleChangeInputPsiculture}
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
          <label className="form-control-label" htmlFor="reservoir_size">
          Tamanho do reservatório (m²) <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="reservoir_size"
            id="reservoir_size"
            value={inputPsiculture.reservoir_size}
            onChange={handleChangeInputPsiculture}
            required
            max="2147483647"
            min="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="purchase_price">
          Preço compra (kg) no mercado local{" "}
          <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="purchase_price"
            id="purchase_price"
            placeholder="Ex: R$ 35,00"
            value={inputPsiculture.purchase_price}
            onChange={handleChangeInputPsiculture}
            required
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="meat_production">
          Produção carne (kg/ano){" "}
          <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="meat_production"
            id="meat_production"
            value={inputPsiculture.meat_production}
            onChange={handleChangeInputPsiculture}
            required
            max="2147483647"
            min="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="commercialized_production">
          Produção comercializada (Kg/ano){" "}
          <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="commercialized_production"
            id="commercialized_production"
            value={inputPsiculture.commercialized_production}
            onChange={handleChangeInputPsiculture}
            required
            max="2147483647"
            min="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="average_price">
          Preço médio (kg) na comercialização{" "}
          <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="average_price"
            id="average_price"
            placeholder="Ex: R$ 40,00"
            value={inputPsiculture.average_price}
            onChange={handleChangeInputPsiculture}
            required
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="mai_marketing_channels">
          Principais canais de comercialização <small className="text-red">(obrigatório)</small>
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="mai_marketing_channels"
            id="mai_marketing_channels"
            placeholder="Ex: Feira Livre"
            value={inputPsiculture.mai_marketing_channels}
            onChange={handleChangeInputPsiculture}
            required
            minLength="1"
          />
        </FormGroup>
      </Col>
      <Col lg="12" className="mb-3 d-flex justify-content-center">
        <Button color="primary" onClick={addPisicultureInTable}>
          Adicionar
        </Button>
      </Col>
      <Col>
      <Table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Produção</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {tablePsiculture.map((item, i) => (
              <tr key={i}>
                <td className="border">{item.type_psiculture}</td>
                <td className="border">{item.meat_production} Kg</td>
                <td className="border">
                  <Button onClick={() => removePsicultureInTable(i)}>
                    <DeleteForeverOutlined />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
      </Table>
      </Col>
    </Row>
  );
};

export default Producao;
