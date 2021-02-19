import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getProductionName } from "redux/actions/Productions";
import {getAllAllotments} from "redux/actions/Allotments";
import { formatReal } from "utils/converterToMoney";

const VegetablesProduction = ({
  inputVegetablesProduction,
  setInputVegetablesProduction,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
    dispatch(getProductionName("Vegetal"));
  }, [dispatch]);

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);
  const productionName = useSelector(
    (state) => state.ProductionsReducer.productionName
  );

  const [inputVegetables, setInputVegetables] = useState({
    allotment: "",
    production: "",
    annual_production: 0,
    price_per_kg: "",
    annual_marketed: 0,
    how_much_sell: 0,
    seedling_origin: "",
    creole_seed: "",
    pest_problems: "",
    irrigated_area: 0,
    generates_waste: "",
  });

  const [inputVegetableTable, setInputVegetableTable] = useState({
    allotment: "",
    production: "",
    mensal_production: 0,
    mensal_marketed: 0,
    food_supplementation: "",
    food_supplementation_value: "",
    production_type: "",
  });

  const [inputVegetablesTable, setInputVegetablesTable] = useState([]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputVegetables({ ...inputVegetables, [name]: value });

    if (name === "production") {
      setInputVegetableTable({...inputVegetableTable, [name]: event.target[event.target.selectedIndex].text});
    } else {
      setInputVegetableTable({...inputVegetableTable, [name]: value});
    }
  };
  

  const addVegetablesInTable = () => {
    if (
      inputVegetables.production &&
      inputVegetables.seedling_origin &&
      inputVegetables.creole_seed &&
      inputVegetables.irrigated_area &&
      inputVegetables.generates_waste
    ) {
      setInputVegetablesProduction([...inputVegetablesProduction, inputVegetables]);
      setInputVegetablesTable([...inputVegetablesTable, inputVegetableTable]);
    }
  };

  const removeVegetablesInTable = (index) => {
    setInputVegetablesProduction(inputVegetablesProduction.filter((item, i) => i !== index));
    setInputVegetablesTable(inputVegetablesTable.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Produção Vegetal</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="allotment">
                Lote
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="allotment"
                id="allotment"
                value={inputVegetables.allotment}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allAllotments.map((allotment, i) => (
                  <option key={i} value={allotment.id}>
                    {allotment.property_name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="production">
                Nome da Produção{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="production"
                title="Produção"
                id="production"
                value={inputVegetables.production}
                onChange={handleChangeInput}
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
                Produção anual{" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="annual_production"
                id="annual_production"
                title="Produção anual"
                value={inputVegetables.annual_production}
                onChange={handleChangeInput}
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
                placeholder="Ex: 50,00"
                value={inputVegetables.price_per_kg}
                onChange={(event) => {
                  event = {target: {
                    name: event.target.name,
                    value: formatReal(event.target.value)
                  }}
                  handleChangeInput(event)}}
                maxLength="16"
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
                onChange={handleChangeInput}
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
                type="text"
                name="how_much_sell"
                id="how_much_sell"
                title="Quanto vende (kg)"
                placeholder="Ex: 10,00"
                value={inputVegetables.how_much_sell}
                onChange={(event) => {
                  event = {target: {
                    name: event.target.name,
                    value: formatReal(event.target.value)
                  }}
                  handleChangeInput(event)}}
                maxLength="16"
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
                onChange={handleChangeInput}
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="creole_seed">
                Semente crioula{" "}
                <small className="text-red">(obrigatório)</small>
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
              <label className="form-control-label" htmlFor="pest_problems">
                Problemas com pragas
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="pest_problems"
                id="pest_problems"
                value={inputVegetables.pest_problems}
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
                onChange={handleChangeInput}
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
                {inputVegetablesTable.map((item, i) => (
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
        </Row>
      </Col>
    </Row>
  );
};

export default VegetablesProduction;