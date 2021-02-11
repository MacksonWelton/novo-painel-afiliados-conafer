import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getProductionName, getAllotments } from "redux/actions/Membros";
import { formatReal } from "utils/converterToMoney";

const AnimalProduction = ({
  inputAnimalProduction,
  setInputAnimalProduction,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllotments());
    dispatch(getProductionName());
  }, [dispatch]);

  const allotments = useSelector((state) => state.MembersReducer.allotments);
  const productionName = useSelector(
    (state) => state.MembersReducer.productionName
  );

  const [inputAnimal, setInputAnimal] = useState({
    allotment: "",
    production: "",
    mensal_production: 0,
    mensal_marketed: 0,
    food_supplementation: 0,
    food_supplementation_value: 0,
    production_type: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputAnimal({ ...inputAnimal, [name]: value });
  };

  const addAnimalInTable = () => {
    if (
      inputAnimal.production &&
      inputAnimal.seedling_origin &&
      inputAnimal.creole_seed &&
      inputAnimal.irrigated_area &&
      inputAnimal.generates_waste
    ) {
      setInputAnimalProduction([...inputAnimalProduction, inputAnimal]);
    }
  };

  const removeAnimalInTable = (index) => {
    setInputAnimalProduction(inputAnimalProduction.filter((item, i) => i !== index));
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
                value={inputAnimal.allotment}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allotments.map((allotment, i) => (
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
                Produção mensal{" "}<small className="text-red">(obrigatório)</small>
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
                Quantidade comercializada mensal{" "}<small className="text-red">(obrigatório)</small>
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
                maxLength="16"
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
                Recursos em complementação alimentar
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="food_supplementation_value"
                id="food_supplementation_value"
                title="Recursos em complementação alimentar"
                placeholder="Ex: 10"
                value={inputAnimal.food_supplementation_value}
                onChange={handleChangeInput}
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="production_type">
                Tipo de produção (corte ou derivado){" "}<small className="text-red">(obrigatório)</small>
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="production_type"
                id="production_type"
                title="Tipo de produção (corte ou derivado)"
                placeholder="Ex: Macapá - AP"
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
                  <th>Produção Anual</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputAnimalProduction.map((item, i) => (
                  <tr key={i}>
                    <td className="border">{item.production}</td>
                    <td className="border">{item.annual_production} Kg</td>
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