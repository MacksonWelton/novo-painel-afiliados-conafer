import GoogleMaps from "components/GoogleMaps/GoogleMaps";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Input, InputGroup } from "reactstrap";

const LocalizacaoDoLote = ({ inputPlotLocation, setInputPlotLocation }) => {
  const lat = useSelector((state) => state.GoogleMapsReducer.lat);
  const lng = useSelector((state) => state.GoogleMapsReducer.lng);

  const [file, setFile] = useState();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPlotLocation({ ...inputPlotLocation, [name]: value });
  };

  useEffect(() => {
    if (lat !== 0 && lng !== 0 && `${lat}, ${lng}` !== inputPlotLocation.coordinatesth) {
      setInputPlotLocation({
        ...inputPlotLocation,
        coordinatesth: `${lat}, ${lng}`,
      })
    }
  }, [lat, lng, setInputPlotLocation, inputPlotLocation]);

  const handleChangeInputFile = (event) => {
    setFile(event.target.value);
  };

  return (
    <div className="row">
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="operationalCore"
          placeholder="Núcleo Operacional"
          value={inputPlotLocation.operationalCore}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="select"
          className="form-control-alternative"
          onChange={handleChangeInput}
          value={inputPlotLocation.state}
          name="state"
          id="select"
        >
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </Input>
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="county"
          placeholder="Município"
          value={inputPlotLocation.county}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="settlement"
          placeholder="Assentamento"
          value={inputPlotLocation.settlement}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="lotNumber"
          placeholder="Número do Lote Incra"
          value={inputPlotLocation.lotNumber}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="accessRoad"
          placeholder="Via de acesso ao imóvel"
          value={inputPlotLocation.accessRoad}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-4 col-sm-12 col-lg-6">
        <Input
          type="text"
          name="coordinatesth"
          placeholder="Coordenadas (Lat, Lng)"
          value={inputPlotLocation.coordinatesth}
          onChange={handleChangeInput}
          required
        />
      </InputGroup>
      <InputGroup className="mb-3 col-xl-8 col-sm-12 col-lg-8">
        <label className="btn bg-light ml-1 mb-0">
          {file
            ? `Arquivo Selecionado: ${file}`
            : "Documento de geometria do lote"}
          <Input
            type="file"
            style={{ display: "none" }}
            name="batchGeometry"
            onChange={handleChangeInputFile}
          />
        </label>
      </InputGroup>
      <div className="mb-3 col-xl-12 col-sm-12 col-lg-12">
        <GoogleMaps
          coordinatesth={inputPlotLocation.coordinatesth.split(",")}
        />
      </div>
    </div>
  );
};

export default LocalizacaoDoLote;