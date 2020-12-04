import React from "react";
import PropTypes from "prop-types";
import { Button, Col, FormGroup, Input, Row, Table } from "reactstrap";

const FormProduction = ({
  handleChangeInputAgriculturalProduction,
  inputAgriculturalProduction,
  production,
  typeProduction,
  addAgriculturalProduction,
  tableAgriculturalProduction,
  deleteAgriculturalProduction,
}) => {
  return (
    <>
      <hr className="my-4" />
      <h2 className="mb-4">Produção Agrícola</h2>
      <p>
        Caso possua, informe abaixo qual produto e a quantidade mensal
        aproximadamente.
      </p>
    <Row>
      <Col lg="4" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="production">
            Produção Agrícola
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInputAgriculturalProduction}
            value={inputAgriculturalProduction.production}
            name="production"
            id="production"
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            {production.map((production) => (
              <option key={production.id} value={production.id}>
                {production.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup>
          <label className="form-control-label" htmlFor="how_produces">
            Quanto Produz (em KG, Sacas, Caixas)
          </label>
          <Input
            className="form-control-alternative"
            type="number"
            name="how_produces"
            id="how_produces"
            placeholder="Ex: 100"
            min="0"
            onChange={handleChangeInputAgriculturalProduction}
          />
        </FormGroup>
      </Col>
      <Col lg="4">
        <FormGroup>
          <label className="form-control-label" htmlFor="type_production">
            Tipo de Produção
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            name="type_production"
            id="type_production"
            onChange={handleChangeInputAgriculturalProduction}
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            {typeProduction.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </Input>
        </FormGroup>
      </Col>
      <Col lg="4" className="d-flex align-items-end">
        <FormGroup className="w-100">
          <label className="form-control-label" htmlFor="issues_invoice">
            Emite Nota
          </label>
          <Input
            className="form-control-alternative"
            type="select"
            onChange={handleChangeInputAgriculturalProduction}
            name="issues_invoice"
            id="issues_invoice"
            value={inputAgriculturalProduction.issues_invoice}
          >
            <option value={undefined} hidden>
              Escolha uma opção
            </option>
            <option value={true}>Sim</option>
            <option value={false}>Não</option>
          </Input>
        </FormGroup>
      </Col>
      <Col lg="12" className="d-flex justify-content-center">
        <Button
          variant="contained"
          color="primary"
          onClick={addAgriculturalProduction}
        >
          Adicionar Plantio
        </Button>
      </Col>
      <Col lg="12" className="mt-3">
        <Table className="bg-white">
          <thead className="bg-light">
            <tr>
              <th>Produto</th>
              <th>Qtd</th>
              <th>Tipo</th>
              <th>Nota</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableAgriculturalProduction.map((item, i) => (
              <tr key={i}>
                <td style={{ whiteSpace: "normal" }}>{item.production}</td>
                <td style={{ whiteSpace: "normal" }}>{item.how_produces}</td>
                <td
                  style={{
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  {item.type_production}
                </td>
                <td
                  style={{
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                  }}
                >
                  {item.issues_invoice}
                </td>
                <td>
                  <i
                    onClick={() => deleteAgriculturalProduction(i)}
                    style={{ cursor: "pointer" }}
                    className="fas fa-trash"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
    <hr />
    </>
  );
};

FormProduction.propTypes = {
  inputAgriculturalProduction: PropTypes.shape({
    production: PropTypes.string.isRequired,
    how_produces: PropTypes.number.isRequired,
    type_production: PropTypes.string.isRequired,
    issues_invoice: PropTypes.bool,
  }),
  handleChangeInputAgriculturalProduction: PropTypes.func.isRequired,
  production: PropTypes.array.isRequired,
  typeProduction: PropTypes.array.isRequired,
  addAgriculturalProduction: PropTypes.func.isRequired,
  deleteAgriculturalProduction: PropTypes.func.isRequired,
};

export default FormProduction;
