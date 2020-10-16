import React, { useContext, useState } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import FormContext from "../../../../../../context";

const Moradores = ({ setInputResident, residentNumber }) => {
  const { setResident } = useContext(FormContext);

  const [inputResidents, setInputResidents] = useState({
    resident_name: "",
    kinship: "",
    sex: "",
    birthdate: "",
    schooling: "",
    main_source_income: "",
    generates_income: undefined,
    batch_work_time: "",
    issues_invoice: undefined,
    ex_beneficiary: undefined,
    activity: "",
    demotivating_activity: "",
    retired: undefined,
    work_outside: undefined,
    initial_age_work_outside: "",
    deficiency: "",
    last_diceases: "",
    type_treatment: "",
    access_treatment: "",
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setInputResidents({ ...inputResidents, [name]: value });

    setInputResident(inputResidents);

    setResident(inputResidents);
  };

  return (
    <>
      <h4>Morador - {residentNumber}</h4>
      <div className="row">
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="resident_name">
              Residente
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="resident_name"
              title="Residente"
              placeholder="Ex: João da Silva"
              value={inputResidents.resident_name}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="name">
              Parentesco
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="kinship"
              title="Parentesco"
              placeholder="Ex: Pai"
              value={inputResidents.kinship}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="sex">
              Sexo
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              name="sex"
              title="Sexo"
              placeholder="Sexo"
              value={inputResidents.sex}
              onChange={handleChangeInput}
              required
            >
              <option value={undefined} hidden>
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
              Data de nascimento
            </label>
            <Input
              className="form-control-alternative"
              type="date"
              name="birthdate"
              title="Data de Nascimento"
              value={inputResidents.birthdate}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="schooling">
              Escolaridade
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="schooling"
              title="Escolaridade"
              placeholder="Ex: Ensino Médio Completo"
              value={inputResidents.schooling}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="main_source_income">
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="main_source_income"
              title="Principal fonte de renda"
              placeholder="Ex: Agricultor"
              value={inputResidents.main_source_income}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="generates_income">
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.generates_income}
              title="Gera renda para a família"
              name="generates_income"
              id="generates_income"
            >
              <option value={undefined} hidden>
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
              Tempo de trabalho no lote
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              title="Tempo de trabalho no lote"
              name="batch_work_time"
              placeholder="Ex: Tempo parcial"
              value={inputResidents.batch_work_time}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="issues_invoice">
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.issues_invoice}
              name="issues_invoice"
              title="Emitir NF"
              id="issues_invoice"
            >
              <option value={undefined} hidden>
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
              Ex-Beneficiário
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.ex_beneficiary}
              title="Ex-Beneficiário"
              name="ex_beneficiary"
              id="select"
            >
              <option value={undefined} hidden>
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
              Atividade
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="activity"
              title="Atividade"
              placeholder="Ex: Grupo religioso"
              value={inputResidents.activity}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label
              className="form-control-label"
              htmlFor="demotivating_activity"
            >
              Atividade Desmotivador
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="demotivating_activity"
              title="Atividade Desmotivador"
              placeholder="Atividade Desmotivador"
              value={inputResidents.demotivating_activity}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="retired">
              Aposentado
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.retired}
              name="retired"
              id="retired"
            >
              <option value={undefined} hidden>
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
              htmlFor="paidWorkOffTheLandPlot"
            >
              Trabalho remunerado fora do lote
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.work_outside}
              title="Trabalho remunerado fora do lote"
              name="work_outside"
              id="work_outside"
            >
              <option value={undefined} hidden>
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
              Trabalho fora do lote idade incial
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="initial_age_work_outside"
              title="Trab. fora do lote idade incial"
              placeholder="Ex: 23 anos"
              value={inputResidents.initial_age_work_outside}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="handicapped">
              Deficiência
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.handicapped}
              title="Deficiência"
              name="handicapped"
              id="select"
              required
            >
              <option value={undefined} hidden>
                Escolha uma opção
              </option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </Input>
          </FormGroup>
        </Col>
        {inputResidents.handicapped === "true" ? (
          <>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="typesOfDisabilities"
                >
                  Deficiência
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="typesOfDisabilities"
                  title="Deficiências"
                  placeholder="Ex: Deficiencia Auditiva"
                  value={inputResidents.typesOfDisabilities}
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="mentalDisorder">
                  Transtorno Mental
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  title="Transtorno Mental"
                  value={inputResidents.mentalDisorder}
                  name="mentalDisorder"
                  id="select"
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="needsCare">
                  Precisa de Cuidadosno Mental
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  title="Precisa de Cuidados"
                  value={inputResidents.needsCare}
                  name="needsCare"
                  id="select"
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="haveCaregiver">
                  Tem cuidador
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputResidents.haveCaregiver}
                  name="haveCaregiver"
                  id="select"
                  title="Tem cuidador"
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="haveCaregiver">
                  Organização Cuidados
                </label>
                <Input
                  className="form-control-alternative"
                  type="select"
                  onChange={handleChangeInput}
                  value={inputResidents.organizationCare}
                  name="organizationCare"
                  id="select"
                  title="Organização Cuidados"
                >
                  <option value={undefined} hidden>
                    Escolha uma opção
                  </option>
                  <option value={true}>Sim</option>
                  <option value={false}>Não</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label className="form-control-label" htmlFor="whoCares">
                  Quem cuida
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="whoCares"
                  placeholder="Ex: "
                  title="Quem cuida"
                  value={inputResidents.whoCares}
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <label
                  className="form-control-label"
                  htmlFor="deficientActivity"
                >
                  Atividade
                </label>
                <Input
                  className="form-control-alternative"
                  type="text"
                  name="deficientActivity"
                  title="Atividade"
                  placeholder="Atividade"
                  value={inputResidents.deficientActivity}
                  onChange={handleChangeInput}
                  required
                />
              </FormGroup>
            </Col>
          </>
        ) : (
          false
        )}
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="last_diceases">
              Doenças que tem ou teve nos últimos 2 anos
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="last_diceases"
              title="Doenças que tem ou teve nos últimos 2 anos"
              placeholder="Ex: Urticária"
              value={inputResidents.last_diceases}
              onChange={handleChangeInput}
              required
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
              type="text"
              name="type_treatment"
              title="Tipo de tratamento"
              placeholder="Ex: Anti-histamínico"
              value={inputResidents.type_treatment}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="access_treatment">
              Forma de acesso para tratamento
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              title="Forma de acesso para tratamento"
              name="access_treatment"
              placeholder="Ex: Posto de Saúde"
              value={inputResidents.access_treatment}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
      </div>
    </>
  );
};

export default Moradores;
