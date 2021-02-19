import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Col, FormGroup, Input, Row } from "reactstrap";
import { getAllAllotments } from "redux/actions/Allotments";

const Reisdent = ({ inputResident, setInputResident }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAllotments());
  }, [dispatch]);

  const allAllotments = useSelector((state) => state.AllotmentsReducer.allAllotments);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputResident({ ...inputResident, [name]: value });
  };

  return (
    <Row>
      <Col lg="12" className="border p-4 mb-3 shadow rounded">
        <Row>
          <Col lg="12">
            <h2 className="text-center mb-4">Reisdente</h2>
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
                value={inputResident.habitation}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                {allAllotments.map((habitation, i) => (
                  <option key={i} value={habitation.id}>
                    {habitation.property_name}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="resident_name">
                Nome do Morador{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="resident_name"
                id="resident_name"
                title="Nome do Morador"
                placeholder="Ex: José Lima"
                value={inputResident.resident_name}
                onChange={handleChangeInput}
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="kinship">
                Parentesco <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="kinship"
                id="kinship"
                title="Parentesco"
                placeholder="Ex: Irmão"
                value={inputResident.kinship}
                onChange={handleChangeInput}
                required
                maxLength="50"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="sex">
                Sexo: <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="sex"
                id="sex"
                title="Sexo"
                value={inputResident.sex}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
                <option value="Outro">Outro</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="birthdate">
                Data de nascimento{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="date"
                name="birthdate"
                id="birthdate"
                title="Data de nascimento"
                value={inputResident.birthdate}
                onChange={handleChangeInput}
                required
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="schooling">
                Escolaridade <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="schooling"
                id="schooling"
                title="Escolaridade"
                placeholder="Ex: Ensino médio"
                value={inputResident.schooling}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="main_source_income"
              >
                Principal fonte de renda{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="main_source_income"
                id="main_source_income"
                title="Principal fonte de renda"
                placeholder="Ex: Agricultura"
                value={inputResident.main_source_income}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="generates_income">
                Gera renda para a família
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="generates_income"
                id="generates_income"
                title="Gera renda para a família"
                placeholder="Ex: Agricultura"
                maxLength="255"
                minLength="1"
                value={inputResident.generates_income}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="batch_work_time">
                Tempo trabalho no lote (anos)
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="batch_work_time"
                id="batch_work_time"
                title="Tempo trabalho no lote (anos)"
                placeholder="Ex: Agricultura"
                value={inputResident.batch_work_time}
                onChange={handleChangeInput}
                required
                max="2147483647"
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="issues_invoice">
                Emite nota fiscal{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="issues_invoice"
                id="issues_invoice"
                title="Emite nota fiscal"
                placeholder="Ex: Agricultura"
                value={inputResident.issues_invoice}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="ex_beneficiary">
                Ex-beneficiário{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="ex_beneficiary"
                id="ex_beneficiary"
                title="Ex-beneficiário"
                placeholder="Ex: Agricultura"
                value={inputResident.ex_beneficiary}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="activity">
                Atividade <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="activity"
                id="activity"
                title="Atividade"
                placeholder="Ex: Grupo Religioso"
                value={inputResident.activity}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="demotivating_activity"
              >
                Atividade desmotivador{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="text"
                name="demotivating_activity"
                id="demotivating_activity"
                title="Atividade desmotivador"
                placeholder="Ex: Pouco produtiva"
                value={inputResident.demotivating_activity}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="retired">
                Aposentado <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="retired"
                id="retired"
                title="Aposentado"
                value={inputResident.retired}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="work_outside">
                Trabalho remunerado fora do lote{" "}
                <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="work_outside"
                id="work_outside"
                title="Trabalho remunerado fora do lote"
                value={inputResident.work_outside}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label
                className="form-control-label"
                htmlFor="initial_age_work_outside"
              >
                Trabalho fora do lote (idade inicial)
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="initial_age_work_outside"
                id="initial_age_work_outside"
                title="Trabalho fora do lote (idade inicial)"
                value={inputResident.initial_age_work_outside}
                onChange={handleChangeInput}
                required
                max="2147483647"
                min="0"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="deficiency">
                Deficiência <small className="text-red">(obrigatório)</small>
              </label>
              <Input
                className="form-control-alternative"
                type="select"
                name="deficiency"
                id="deficiency"
                title="Deficiência"
                value={inputResident.deficiency}
                onChange={handleChangeInput}
                required
              >
                <option value="" hidden>
                  Escolha uma opção
                </option>
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Input>
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="last_diceases">
                Doenças nos últimos dois anos
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="last_diceases"
                id="last_diceases"
                title="Doenças nos últimos dois anos"
                placeholder="Ex: Gastrite"
                value={inputResident.last_diceases}
                onChange={handleChangeInput}
                required
                maxLength="255"
                minLength="1"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="type_treatment">
                Tipo de tratamento
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="type_treatment"
                id="type_treatment"
                title="Tipo de tratamento"
                placeholder="Ex: Medicação"
                value={inputResident.type_treatment}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <label className="form-control-label" htmlFor="access_treatment">
                Forma de acesso ao tratamento
              </label>
              <Input
                className="form-control-alternative"
                type="number"
                name="access_treatment"
                id="access_treatment"
                title="Forma de acesso ao tratamento"
                placeholder="Ex: Medicação"
                value={inputResident.access_treatment}
                onChange={handleChangeInput}
                maxLength="255"
              />
            </FormGroup>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Reisdent;
