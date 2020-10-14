import React from "react";
import { Input, FormGroup, Row, Col } from "reactstrap";
import { mask, unMask } from "remask";

const EnderecoCorrespondencia = ({ inputAddress, setInputAddress }) => {
  const handleChangeInput = (event) => {
    const { name, value, type } = event.target;

    if (type === "tel") {
      setInputAddress({
        ...inputAddress,
        [name]: mask(unMask(value), ["(99) 99999-9999"]),
      });
    } else {
      setInputAddress({ ...inputAddress, [name]: value });
    }
  };

  return (
    <Row>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="address">
            Endereço/Logradouropleto
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="address"
            title="Endereço/Logradouro"
            placeholder="Endereço/Logradouro"
            value={inputAddress.address}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="numero">
            Número
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="numero"
            title="Número"
            placeholder="Número"
            value={inputAddress.number}
            onChange={handleChangeInput}
            required
          />
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
            title="Município"
            placeholder="Município"
            value={inputAddress.county}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="neighborhood">
            Bairro
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="neighborhood"
            value={inputAddress.neighborhood}
            title="Bairro"
            placeholder="Bairro"
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="cep">
            CEP
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="cep"
            title="CEP"
            placeholder="CEP"
            value={inputAddress.cep}
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
            value={inputAddress.state}
            title="Estado"
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
          <label className="form-control-label" htmlFor="zone">
            Zona de Localização
          </label>
          <Input
            className="form-control-alternative"
            type="text"
            name="zone"
            title="Zona de Localização"
            placeholder="Zona de Localização"
            value={inputAddress.zone}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="email">
            Email
          </label>
          <Input
            className="form-control-alternative"
            type="email"
            name="email"
            title="Email"
            placeholder="Email"
            value={inputAddress.email}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="tel1">
            Telefone 1
          </label>
          <Input
            className="form-control-alternative"
            type="tel"
            name="tel1"
            title="Telefone 1"
            placeholder="Telefone 1"
            value={inputAddress.tel1}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
      <Col lg="6">
        <FormGroup>
          <label className="form-control-label" htmlFor="tel2">
            Telefone 2
          </label>
          <Input
            className="form-control-alternative"
            type="tel"
            name="tel2"
            title="Telefone 2"
            placeholder="Telefone 2"
            value={inputAddress.tel2}
            onChange={handleChangeInput}
            required
          />
        </FormGroup>
      </Col>
    </Row>
  );
};

export default EnderecoCorrespondencia;
