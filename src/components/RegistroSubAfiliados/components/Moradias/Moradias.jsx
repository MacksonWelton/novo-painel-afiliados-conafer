import React, { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Row } from "reactstrap";

import Moradia from "./components/Moradia/Moradia";

import { HomeOutlined } from "@material-ui/icons";

import styles from "./styles";
import { setHouses, deleteHouse, setResidents } from "../../../../redux/actions/Registro";

const Moradias = () => {
  const dispatch = useDispatch();

  const member = useSelector(
    (state) => state.MembersReducer.member
  );
  
  let resident;
  let house;

  const setResident = (res) => {
    resident = res;
  }

  const setHouse = (res) => {
    house = res;
  }


  const [formHouse, setFormHouse] = useState([
    <Moradia setResident={setResident} setHouse={setHouse} houseNumber={1} />,
  ]);
  
  const addHouse = () => {
    if (resident) {
      dispatch(setResidents(resident, house));
    }
    setFormHouse([
      ...formHouse,
      <>
        <hr />
        <Moradia setResident={setResident} setHouse={setHouse} houseNumber={formHouse.length + 1} />
      </>,
    ]);
    dispatch(setHouses([]));
  };

  const deleteFormHouse = () => {
    setFormHouse(formHouse.filter((house, i, arr) => i < arr.length - 1));

    dispatch(deleteHouse());
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
      {formHouse.map((form, i) => (
        <Fragment key={i}>{form}</Fragment>
      ))}
      <div style={styles.boxButtons}>
        <Button
          variant="contained"
          style={styles.buttonLeft}
          onClick={addHouse}
          color="primary"
        >
          <HomeOutlined style={styles.iconButton} />
          Adicionar
        </Button>
        <Button
          variant="contained"
          style={styles.buttonRight}
          onClick={deleteFormHouse}
          color="secondary"
          disabled={formHouse.length === 1}
        >
          <HomeOutlined style={styles.iconButton} />
          Remover
        </Button>
      </div>
      </Col>
    </Row>
  );
};

export default Moradias;
