import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllAllotments } from "redux/actions/Allotments";

const Habitation = ({ inputHabitation, setInputHabitation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);


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
                {allAllotments.map((allotment, i) => (
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