import React from "react";
import { Input, InputGroup } from "reactstrap";

function VisitaTecnica({ inputTechnicalVisit, setInputTechnicalVisit }) {

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputTechnicalVisit({ ...inputTechnicalVisit, [name]: value });
  };

  return (
    <div className="row">
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="informant"
          title="Nome do Informante"
          placeholder="Nome do Informante"
          value={inputTechnicalVisit.informant}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-6 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="participants"
          title="Quem participou das conversas durante a visita?"
          placeholder="Quem participou das conversas durante a visita?"
          value={inputTechnicalVisit.participants}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
    </div>
  );
}

export default VisitaTecnica;