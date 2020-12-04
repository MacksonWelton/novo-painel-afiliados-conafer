import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  pjAffiliateRegister,
  AgriculturalProduction,
  TypeAgriculturalProduction
} from "../../redux/actions/Registro";
import FormRegistroPJ from "components/FormRegistroPJ/FormRegistroPJ";

const RegistroPJ = () => {
  const dispatch = useDispatch();

  const { production, typeProduction } = useSelector(
    (state) => state.RegistroReducer
  );

  useEffect(() => {
    dispatch(AgriculturalProduction());
    dispatch(TypeAgriculturalProduction());
  }, [dispatch]);

  const [input, setInput] = useState({
    name_initials: "",
    cnpj: "",
    cep: "",
    address: "",
    city: "",
    state: "",
    contact_name: "",
    contact_phone: "",
    email: "",
    website: "",
    social_networks: "",
    foundation_date: "",
    active_partners: 0,
    inactive_partners: 0,
    traditional_communities: undefined,
    entity_group: "",
    objective: "",
    services: "",
    wait_conafer: "",
    agree_terms: false,
  });

  const [files, setFiles] = useState({
    file_partners: {
      fileName: "",
      value: "",
    },
    file_directory: {
      fileName: "",
      value: "",
    },
  });
  
  const [agriculturalProduction, setAgriculturalProduction] = useState([]);
  const [tableAgriculturalProduction, setTableAgriculturalProduction] = useState([]);

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
  })

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

    if (name === "production" || name === "type_production" || name === "issues_invoice") {
      setListAgriculturalProduction({
        ...listAgriculturalProduction,
        [name]: event.target[event.target.selectedIndex].text
      })
    } else {
      setListAgriculturalProduction({
        ...listAgriculturalProduction,
        [name]: value
      })
    }
  };

  const deleteAgriculturalProduction = (id) => {
    setAgriculturalProduction(
      agriculturalProduction.filter((item, i) => i !== id)
    );

    setTableAgriculturalProduction(
      tableAgriculturalProduction.filter((item, i) => i !== id)
    )
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };

  const handleChangeInputFile = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    const fileName = event.target.files[0].name;
    setFiles({
      ...files,
      [name]: { ...files[name], fileName: fileName, value: value },
    });
  };

  const addAgriculturalProduction = () => {

    addListAgriculturalProduction()

    setAgriculturalProduction([
      ...agriculturalProduction,
      {
        production: inputAgriculturalProduction.production,
        how_produces: inputAgriculturalProduction.how_produces,
        type_production: inputAgriculturalProduction.type_production,
        issues_invoice: inputAgriculturalProduction.issues_invoice,
      },
    ])
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

  const handleChecked = () => {
    setInput({ ...input, agree_terms: !input.agree_terms });
  };

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(pjAffiliateRegister(input, files, agriculturalProduction));
  };

  return (
    <>
    <FormRegistroPJ 
      production={production}
      typeProduction={typeProduction}
      input={input}
      handleChangeInputAgriculturalProduction={handleChangeInputAgriculturalProduction}
      inputAgriculturalProduction={inputAgriculturalProduction}
      tableAgriculturalProduction={tableAgriculturalProduction}
      deleteAgriculturalProduction={deleteAgriculturalProduction}
      handleChangeInput={handleChangeInput}
      handleChangeInputFile={handleChangeInputFile}
      addAgriculturalProduction={addAgriculturalProduction}
      handleChecked={handleChecked}
      submitForm={submitForm}
    />
    </>
  );
};

export default RegistroPJ;
