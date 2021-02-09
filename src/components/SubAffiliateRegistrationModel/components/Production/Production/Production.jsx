import { DeleteForeverOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, FormGroup, Row, Table, Col } from "reactstrap";
import { getProductionName, getTypeProduction } from "redux/actions/Membros";
import { formatReal } from "utils/converterToMoney";

const Production = ({
  usersAffiliation,
  inputProductionList,
  setInputProductionList,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypeProduction());
    dispatch(getProductionName());
  }, [dispatch]);

  const typeProduction = useSelector(
    (state) => state.MembersReducer.typeProduction
  );

  const productionName = useSelector(
    (state) => state.MembersReducer.productionName
  );

  const [inputProduction, setInputProduction] = useState({
    affiliation: "",
    production: "",
    how_produces: 0,
    type_production: "",
    issues_invoice: 0,
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputProduction({ ...inputProduction, [name]: value });
  };

  const addVegetablesInTable = () => {
    if (
      inputProduction.production &&
      inputProduction.seedling_origin &&
      inputProduction.creole_seed &&
      inputProduction.irrigated_area &&
      inputProduction.generates_waste
    ) {
      setInputProductionList([...inputProductionList, inputProduction]);
    }
  };

  const removeVegetablesInTable = (index) => {
    setInputProductionList(
      inputProductionList.filter((item, i) => i !== index)
    );
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Produção</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="affiliation">
                Afiliação
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="affiliation"
                id="affiliation"
                value={inputProduction.affiliation}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {usersAffiliation.map((afilliate, i) => (
                  <option key={i} value={afilliate.affiliation}>
                    {afilliate.name}
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
                value={inputProduction.production}
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
              <label className="form-control-label" htmlFor="how_produces">
                Quanto produz
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="how_produces"
                id="how_produces"
                title="Quanto produz"
                value={inputProduction.how_produces}
                onChange={handleChangeInput}
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="type_production">
                Tipo de produção
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="type_production"
                id="type_production"
                title="Tipo de produção"
                placeholder="Ex: R$ 50,00"
                value={inputProduction.type_production}
                onChange={handleChangeInput}
                maxLength="16"
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {typeProduction.map((type, i) => (
                  <option key={i} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="issues_invoice">
                Emite nota?
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="issues_invoice"
                id="issues_invoice"
                title="Emite nota?"
                placeholder="Ex: R$ 50,00"
                value={inputProduction.issues_invoice}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>
                  Sim
                </option>
                <option value={false}>
                  Não
                </option>
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
                  <th>Quanto produz</th>
                  <th>Emite nota?</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {inputProductionList.map((item, i) => (
                  <tr key={i}>
                    <td className="border">{item.production}</td>
                    <td className="border">{item.how_produces}</td>
                    <td className="border">{item.issues_invoice}</td>
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

export default Production;
