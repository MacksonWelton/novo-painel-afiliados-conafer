import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, FormGroup, Row, Col } from "reactstrap";
import { getProductionName, getTypeProduction } from "../../../../../redux/actions/Productions";

const ProductionEditForm = ({
  usersAffiliation,
  inputProduction,
  setInputProduction,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypeProduction());
    dispatch(getProductionName());
  }, [dispatch]);

  const typeProduction = useSelector(
    (state) => state.ProductionsReducer.typeProduction
  );

  const productionName = useSelector(
    (state) => state.ProductionsReducer.productionName
  );

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputProduction({ ...inputProduction, [name]: value });
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
                  <option key={i} value={afilliate.id}>
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
        </Row>
      </Col>
    </Row>
  );
};

export default ProductionEditForm;