import GoogleMaps from "components/GoogleMaps/GoogleMaps";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FormGroup, Col, Input, Row } from "reactstrap";

const LocalizacaoDoLote = ({ inputPlotLocation, setInputPlotLocation }) => {
  const lat = useSelector((state) => state.GoogleMapsReducer.lat);
  const lng = useSelector((state) => state.GoogleMapsReducer.lng);

  const [file, setFile] = useState();

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputPlotLocation({ ...inputPlotLocation, [name]: value });
  };

  useEffect(() => {
    if (
      lat !== 0 &&
      lng !== 0 &&
      `${lat}, ${lng}` !== inputPlotLocation.coordinatesth
    ) {
      setInputPlotLocation({
        ...inputPlotLocation,
        coordinatesth: `${lat}, ${lng}`,
      });
    }
  }, [lat, lng, setInputPlotLocation, inputPlotLocation]);

  const handleChangeInputFile = (event) => {
    setFile(event.target.value);
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="operationalCore">
            Núcleo Operacional
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="operationalCore"
            placeholder="Ex: Seaprof"
            value={inputPlotLocation.operationalCore}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="state">
            Estado
          </label>
          <Input
            className="form-control-alternative"
            type="select"
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
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="county">
            Município
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="county"
            placeholder="Ex: Rio Branco"
            value={inputPlotLocation.county}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement">
            Assentamento
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="settlement"
            title="Assentamento"
            placeholder="Ex: AASS555444"
            value={inputPlotLocation.settlement}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement">
            Número do Lote Incra
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="lotNumber"
            title="Número do Lote Incra"
            placeholder="Ex: 30"
            value={inputPlotLocation.lotNumber}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="settlement">
            Via de acesso ao imóvel
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="accessRoad"
            title="Via de acesso ao imóvel"
            placeholder="Ex: Estrada de terra"
            value={inputPlotLocation.accessRoad}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="coordinatesth">
            Coordenadas (Lat, Lng)
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="coordinatesth"
            title="Coordenadas (Lat, Lng)"
            placeholder="Ex: -15.7801, -47.9292"
            value={inputPlotLocation.coordinatesth}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="coordinatesth">
            Documento de geometria do lote
          </label>
          <label className="btn bg-light ml-1 mb-0 form-control-label">
            {file ? `Arquivo Selecionado: ${file}` : "Escolha o arquivo"}
            <Input
              className="form-control-alternative"
              type="file"
              style={{ display: "none" }}
              name="batchGeometry"
              onChange={handleChangeInputFile}
            />
          </label>
        </FormGroup>
      </Col>
      <Col lg="12">
        <FormGroup>
          <GoogleMaps
            coordinatesth={inputPlotLocation.coordinatesth.split(",")}
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default LocalizacaoDoLote;
