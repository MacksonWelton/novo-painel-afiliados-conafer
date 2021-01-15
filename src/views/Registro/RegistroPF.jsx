import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  pfAffiliateRegister,
  AgriculturalProduction,
  TypeAgriculturalProduction,
} from "../../redux/actions/Registro";

import FormRegistroPF from "../../components/FormRegistroPF/FormRegistroPF";
import Header from "../../components/Headers/Header";
import { Container } from "reactstrap";

const RegistroPF = () => {
  const dispatch = useDispatch();

  const { production, typeProduction } = useSelector(
    (state) => state.RegistroReducer
  );

  useEffect(() => {
    dispatch(AgriculturalProduction());
    dispatch(TypeAgriculturalProduction());
  }, [dispatch]);

  const alerts = useSelector((state) => state.AlertsReducer.alerts);

  const [input, setInput] = useState({
    name: "",
    birthdate: "",
    marital_status: "",
    sex: "",
    nacionality: "",
    citizenship: "",
    rg: "",
    organ_issuing: "",
    emission_date: "",
    cpf: "",
    voter_title: "",
    electoral_zone: "",
    section: "",
    phone: "",
    email: "",
    profession: "",
    mother_name: "",
    partner_name: "",
    partner_cpf: "",
    entity_group: "",
    with_gorup: "",
    how_many: 0,
    rb_status: "",
    settlement_code: "",
    incra_ocupation: "",
    collect_code: "",
    ater_core: "",
    year_residence: 0,
    country: "",
    address: "",
    cep: "",
    city: "",
    state: "",
    always_been_rural: "",
    agree_terms: false,
  });

  const [agriculturalProduction, setAgriculturalProduction] = useState([]);
  const [
    tableAgriculturalProduction,
    setTableAgriculturalProduction,
  ] = useState([]);

  const [
    inputAgriculturalProduction,
    setInputAgriculturalProduction,
  ] = useState({
    production: "",
    how_produces: 0,
    type_production: "",
    issues_invoice: undefined,
  });

  const [listAgriculturalProduction, setListAgriculturalProduction] = useState({
    production: "",
    how_produces: 0,
    type_production: "",
    issues_invoice: undefined,
  });

  const handleChangeInput = (event) => {
    const { name, value, type } = event.target;

    if (value === "true" || value === "false") {
      setInput({ ...input, [name]: Boolean(value === "true") });
    } else if (type === "number") {
      setInput({ ...input, [name]: Number(value) });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleChecked = () => {
    setInput({ ...input, agree_terms: !input.agree_terms });
  };

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(pfAffiliateRegister(input, agriculturalProduction));
  };

  const handleChangeInputAgriculturalProduction = (event) => {
    const { name, value, type } = event.target;

    if (name === "production" || name === "type_production") {
      setInputAgriculturalProduction({
        ...inputAgriculturalProduction,
        [name]: value,
      });
    } else if (type === "number") {
      setInputAgriculturalProduction({
        ...inputAgriculturalProduction,
        [name]: Number(value),
      });
    } else {
      setInputAgriculturalProduction({
        ...inputAgriculturalProduction,
        [name]: Boolean(value === "true"),
      });
    }

    if (
      name === "production" ||
      name === "type_production" ||
      name === "issues_invoice"
    ) {
      setListAgriculturalProduction({
        ...listAgriculturalProduction,
        [name]: event.target[event.target.selectedIndex].text,
      });
    } else {
      setListAgriculturalProduction({
        ...listAgriculturalProduction,
        [name]: value,
      });
    }
  };

  const deleteAgriculturalProduction = (id) => {
    setAgriculturalProduction(
      agriculturalProduction.filter((item, i) => i !== id)
    );

    setTableAgriculturalProduction(
      tableAgriculturalProduction.filter((item, i) => i !== id)
    );
  };

  const addAgriculturalProduction = () => {
    addListAgriculturalProduction();

    setAgriculturalProduction([
      ...agriculturalProduction,
      {
        production: inputAgriculturalProduction.production,
        how_produces: inputAgriculturalProduction.how_produces,
        type_production: inputAgriculturalProduction.type_production,
        issues_invoice: inputAgriculturalProduction.issues_invoice,
      },
    ]);
  };

  const addListAgriculturalProduction = () => {
    setTableAgriculturalProduction([
      ...tableAgriculturalProduction,
      {
        production: listAgriculturalProduction.production,
        how_produces: listAgriculturalProduction.how_produces,
        type_production: listAgriculturalProduction.type_production,
        issues_invoice: listAgriculturalProduction.issues_invoice,
      },
    ]);
  };

  return (
    <>
      <Header/>
      <Container className="mt--7" fluid>
        <FormRegistroPF
          input={input}
          setInput={setInput}
          handleChangeInput={handleChangeInput}
          handleChecked={handleChecked}
          submitForm={submitForm}
          alerts={alerts}
          handleChangeInputAgriculturalProduction={
            handleChangeInputAgriculturalProduction
          }
          deleteAgriculturalProduction={deleteAgriculturalProduction}
          addAgriculturalProduction={addAgriculturalProduction}
          inputAgriculturalProduction={inputAgriculturalProduction}
          production={production}
          typeProduction={typeProduction}
          tableAgriculturalProduction={tableAgriculturalProduction}
        />
      </Container>
    </>
  );
};

export default RegistroPF;
