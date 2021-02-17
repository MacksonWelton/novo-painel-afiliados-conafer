import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllotments } from "redux/actions/Membros";

const Habitation = ({ inputHabitation, setInputHabitation }) => {

  useEffect(() => {
    getAllotments();
  }, []);

  const allotments = useSelector((state) => state.MembersReducer.allotments);


  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputHabitation({ ...inputHabitation, [name]: value });
  };


  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Moradia</h2>
            <hr />
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="allotment">
                Lote <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="allotment"
                id="allotment"
                title="Lote"
                value={inputHabitation.allotment}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allotments.results.map((allotment, i) => (
                  <option key={i} value={allotment.id}>
                    {allotment.property_name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Habitation;