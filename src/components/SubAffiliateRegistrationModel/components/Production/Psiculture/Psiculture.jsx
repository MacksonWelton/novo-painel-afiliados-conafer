import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getAllAllotments } from "redux/actions/Allotments";

const AnimalProduction = ({
  inputPsicultureProduction,
  setInputPsicultureProduction,
}) => {
  const dispatch = useDispatch();

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const [inputPsiculture, setInputPsiculture] = useState({
    allotment: "",
    type_psiculture: "",
    management: "",
    harvesting_systems: "",
    food_supplementation: "",
    annual_food_supplementation: "",
    goal: "",
    fish_pay: "",
    reservoir_size: 0,
    meat_production: 0,
    purchase_price: "",
    commercialized_production: 0,
    average_price: "",
    mai_marketing_channels: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPsiculture({ ...inputPsiculture, [name]: value });
  };

  const addPisicultureInTable = () => {
    if (
      inputPsiculture.type_psiculture &&
      inputPsiculture.management &&
      inputPsiculture.harvesting_systems &&
      inputPsiculture.food_supplementation &&
      inputPsiculture.annual_food_supplementation &&
      inputPsiculture.goal &&
      inputPsiculture.fish_pay &&
      inputPsiculture.reservoir_size &&
      inputPsiculture.meat_production &&
      inputPsiculture.purchase_price &&
      inputPsiculture.commercialized_production &&
      inputPsiculture.average_price &&
      inputPsiculture.mai_marketing_channels
    ) {
      setInputPsicultureProduction([...inputPsicultureProduction, inputPsiculture]);
    }
  };


  const removePsicultureInTable = (index) => {
    setInputPsicultureProduction(inputPsicultureProduction.filter((item, i) => i !== index));
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Piscicultura</h2>
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
                value={inputPsiculture.allotment}
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
                onChange={handleChangeInput}
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
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="harvesting_systems"
              >
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
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="food_supplementation"
              >
                Complementação alimentar{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="food_supplementation"
                id="food_supplementation"
                placeholder="Ex: Ração"
                value={inputPsiculture.food_supplementation}
                onChange={handleChangeInput}
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
                type="number"
                name="annual_food_supplementation"
                id="annual_food_supplementation"
                placeholder="Ex: R$ 1.500,00"
                value={inputPsiculture.annual_food_supplementation}
                onChange={handleChangeInput}
                required
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6" className="d-flex flex-column justify-content-end">
            <FormGroup>
              <label className="form-control-label" htmlFor="goal">
                Finalidade <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="goal"
                id="goal"
                placeholder="Ex: Venda"
                value={inputPsiculture.goal}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="fish_pay">
                Tem pesque pague?{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="fish_pay"
                id="fish_pay"
                value={inputPsiculture.fish_pay}
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
              <label className="form-control-label" htmlFor="reservoir_size">
                Tamanho do reservatório (m²){" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="reservoir_size"
                id="reservoir_size"
                value={inputPsiculture.reservoir_size}
                onChange={handleChangeInput}
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
                type="number"
                name="purchase_price"
                id="purchase_price"
                placeholder="Ex: R$ 35,00"
                value={inputPsiculture.purchase_price}
                onChange={handleChangeInput}
                required
                min="0"
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
                onChange={handleChangeInput}
                required
                max="2147483647"
                min="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="commercialized_production"
              >
                Produção comercializada (Kg/ano){" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="commercialized_production"
                id="commercialized_production"
                value={inputPsiculture.commercialized_production}
                onChange={handleChangeInput}
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
                type="number"
                name="average_price"
                id="average_price"
                placeholder="Ex: R$ 40,00"
                value={inputPsiculture.average_price}
                onChange={handleChangeInput}
                required
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="mai_marketing_channels"
              >
                Principais canais de comercialização{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="mai_marketing_channels"
                id="mai_marketing_channels"
                placeholder="Ex: Feira Livre"
                value={inputPsiculture.mai_marketing_channels}
                onChange={handleChangeInput}
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
                {inputPsicultureProduction.map((item, i) => (
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
      </Col>
    </Row>
  );
};

export default AnimalProduction;