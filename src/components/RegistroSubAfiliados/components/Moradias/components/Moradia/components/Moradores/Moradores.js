import React, { useContext, useState } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import FormContext from "../../../../../../context";

const Moradores = ({ setInputResident, residentNumber }) => {
  const { setResident } = useContext(FormContext);

  const [inputResidents, setInputResidents] = useState({
    resident: "",
    kinship: "",
    sex: "",
    bornDate: "",
    education: "",
    mainSourceOfIncome: "",
    generatesIncomeForFamily: undefined,
    workingTimeonTheLandPlot: "",
    issueTheInvoice: undefined,
    exBeneficiary: undefined,
    activity: "",
    demotivatingActivity: "",
    retired: undefined,
    paidWorkOffTheLandPlot: undefined,
    initialAgeOffTheLandPlot: "",
    handicapped: undefined,
    typesOfDisabilities: "",
    mentalDisorder: undefined,
    needsCare: undefined,
    haveCaregiver: undefined,
    organizationCare: undefined,
    whoCares: "",
    deficientActivity: "",
    previousDiseases: "",
    typeOfTreatment: "",
    formOfAccessToTreatment: "",
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
            <label className="form-control-label" htmlFor="name">
              Residente
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="resident"
              title="Residente"
              placeholder="Ex: João da Silva"
              value={inputResidents.resident}
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
              type="text"
              name="sex"
              title="Sexo"
              placeholder="Sexo"
              value={inputResidents.sex}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="bornDate">
              Data de nascimento
            </label>
            <Input
              className="form-control-alternative"
              type="date"
              name="bornDate"
              title="Data de Nascimento"
              value={inputResidents.bornDate}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="education">
              Escolaridade
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="education"
              title="Escolaridade"
              placeholder="Escolaridade"
              value={inputResidents.education}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="mainSourceOfIncome">
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="mainSourceOfIncome"
              title="Principal fonte de renda"
              placeholder="Principal fonte de renda"
              value={inputResidents.mainSourceOfIncome}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label
              className="form-control-label"
              htmlFor="generatesIncomeForFamily"
            >
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.generatesIncomeForFamily}
              title="Gera renda para a família"
              name="generatesIncomeForFamily"
              id="generatesIncomeForFamily"
            >
              <option value={undefined} hidden>
                Gera renda para a família
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
              htmlFor="workingTimeonTheLandPlot"
            >
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              title="Tempo de trabalho no lote"
              name="workingTimeonTheLandPlot"
              placeholder="Tempo de trabalho no lote"
              value={inputResidents.workingTimeonTheLandPlot}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="issueTheInvoice">
              Principal fonte de renda
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.issueTheInvoice}
              name="issueTheInvoice"
              title="Emitir NF"
              id="issueTheInvoice"
            >
              <option value={undefined} hidden>
                Emitir NF
              </option>
              <option value={true}>Sim</option>
              <option value={false}>Não</option>
            </Input>
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="exBeneficiary">
              Ex-Beneficiário
            </label>
            <Input
              className="form-control-alternative"
              type="select"
              onChange={handleChangeInput}
              value={inputResidents.exBeneficiary}
              title="Ex-Beneficiário"
              name="exBeneficiary"
              id="select"
            >
              <option value={undefined} hidden>
                Ex-Beneficiário
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
              placeholder="Atividade"
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
              htmlFor="demotivatingActivity"
            >
              Atividade Desmotivador
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="demotivatingActivity"
              title="Atividade Desmotivador"
              placeholder="Atividade Desmotivador"
              value={inputResidents.demotivatingActivity}
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
                Aposentado
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
              value={inputResidents.paidWorkOffTheLandPlot}
              title="Trabalho remunerado fora do lote"
              name="paidWorkOffTheLandPlot"
              id="paidWorkOffTheLandPlot"
            >
              <option value={undefined} hidden>
                Trabalho remunerado fora do lote
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
              htmlFor="initialAgeOffTheLandPlot"
            >
              Trabalho fora do lote idade incial
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="initialAgeOffTheLandPlot"
              title="Trab. fora do lote idade incial"
              placeholder="Trab. fora do lote idade incial"
              value={inputResidents.initialAgeOffTheLandPlot}
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
                Deficiência
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
                  placeholder="Deficiências"
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
                    Transtorno Mental
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
                    Precisa de Cuidados
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
                    Tem cuidador
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
                    Organização Cuidados
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
                  placeholder="Quem cuida"
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
            <label className="form-control-label" htmlFor="previousDiseases">
              Doenças que tem ou teve nos últimos 2 anos
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="previousDiseases"
              title="Doenças que tem ou teve nos últimos 2 anos"
              placeholder="Doenças que tem/teve nos últ. 2 anos"
              value={inputResidents.previousDiseases}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label className="form-control-label" htmlFor="typeOfTreatment">
              Tipo de tratamento
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              name="typeOfTreatment"
              title="Tipo de tratamento"
              placeholder="Tipo de tratamento"
              value={inputResidents.typeOfTreatment}
              onChange={handleChangeInput}
              required
            />
          </FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <label
              className="form-control-label"
              htmlFor="formOfAccessToTreatment"
            >
              Forma de acesso para tratamento
            </label>
            <Input
              className="form-control-alternative"
              type="text"
              title="Forma de acesso para tratamento"
              name="formOfAccessToTreatment"
              placeholder="Forma de acesso para tratamento"
              value={inputResidents.formOfAccessToTreatment}
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
