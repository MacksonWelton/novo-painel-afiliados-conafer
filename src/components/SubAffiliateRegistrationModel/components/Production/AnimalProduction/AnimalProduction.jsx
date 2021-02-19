import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getProductionName } from "redux/actions/Productions";
import { getAllAllotments } from "redux/actions/Allotments";
import { formatReal } from "utils/converterToMoney";

const AnimalProduction = ({
  inputAnimalProduction,
  setInputAnimalProduction,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
    dispatch(getProductionName("Animal"));
  }, [dispatch]);

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);
  const productionName = useSelector(
    (state) => state.ProductionsReducer.productionName
  );

  const [inputAnimal, setInputAnimal] = useState({
    allotment: "",
    production: "",
    mensal_production: 0,
    mensal_marketed: 0,
    food_supplementation: "",
    food_supplementation_value: "",
    production_type: "",
  });

  const [inputAnimalTable, setInputAnimalTable] = useState({
    allotment: "",
    production: "",
    mensal_production: 0,
    mensal_marketed: 0,
    food_supplementation: "",
    food_supplementation_value: "",
    production_type: "",
  });

  const [inputAnimalsTable, setInputAnimalsTable] = useState([]);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputAnimal({ ...inputAnimal, [name]: value });

    if (name === "production") {
      setInputAnimalTable({...inputAnimalTable, [name]: event.target[event.target.selectedIndex].text});
    } else {
      setInputAnimalTable({...inputAnimalTable, [name]: value});
    }

  };

  const addAnimalInTable = () => {
    if (
      inputAnimal.production &&
      inputAnimal.mensal_production &&
      inputAnimal.mensal_marketed &&
      inputAnimal.food_supplementation &&
      inputAnimal.food_supplementation_value &&
      inputAnimal.production_type
    ) {
      setInputAnimalProduction([...inputAnimalProduction, inputAnimal]);
      setInputAnimalsTable([...inputAnimalsTable, inputAnimalTable]);
    }
  };

  const removeAnimalInTable = (index) => {
    setInputAnimalProduction(inputAnimalProduction.filter((item, i) => i !== index));
    setInputAnimalsTable(inputAnimalsTable.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Produção Animal</h2>
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
                value={inputAnimal.allotment}
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
                value={inputAnimal.production}
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
              <label className="form-control-label" htmlFor="mensal_production">
                Produção mensal (Kg){" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="mensal_production"
                id="mensal_production"
                title="Produção mensal"
                value={inputAnimal.mensal_production}
                onChange={handleChangeInput}
                required
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="mensal_marketed">
                Quantidade comercializada mensal (Kg){" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="mensal_marketed"
                id="mensal_marketed"
                title="Quantidade comercializada mensal"
                placeholder="Ex: R$ 50,00"
                value={inputAnimal.mensal_marketed}
                onChange={handleChangeInput}
                required
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="food_supplementation">
                Tipo de complementação alimentar{" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="food_supplementation"
                id="food_supplementation"
                title="Tipo de complementação alimentar"
                placeholder="Ração"
                value={inputAnimal.food_supplementation}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="food_supplementation_value">
                Recursos em complementação alimentar{" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="food_supplementation_value"
                id="food_supplementation_value"
                title="Recursos em complementação alimentar"
                placeholder="Ex: 100,00"
                value={inputAnimal.food_supplementation_value}
                onChange={(event) => {
                  event = {target: {
                    name: event.target.name,
                    value: formatReal(event.target.value)
                  }}
                  handleChangeInput(event)}}
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="production_type">
                Tipo de produção (corte ou derivado){" "}<small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="production_type"
                id="production_type"
                title="Tipo de produção (corte ou derivado)"
                placeholder="Ex: Filé"
                value={inputAnimal.production_type}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
                required
              />
            </FormGroup>
          </Col>
          <Col lg="12" className="mb-3 d-flex justify-content-center">
            <Button color="primary" onClick={addAnimalInTable}>
              Adicionar
            </Button>
          </Col>
          <Col lg="12">
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Produção Mensal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputAnimalsTable.map((item, i) => (
                  <tr key={i}>
                    <td className="border">{item.production}</td>
                    <td className="border">{item.mensal_production} Kg</td>
                    <td className="border">
                      <Button onClick={() => removeAnimalInTable(i)}>
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

export default AnimalProduction;