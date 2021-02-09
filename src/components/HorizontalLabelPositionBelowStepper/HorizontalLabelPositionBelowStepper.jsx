import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { Button } from "reactstrap";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  stepper: {
    display: "flex",
    flexWrap: "wrap",
    color: "white",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function HorizontalLabelPositionBelowStepper({
  steps,
  activeStep,
  setActiveStep,
  getStepContent,
  handleSubmitData,
  handleSubmitForm
}) {
  const classes = useStyles();

  const submitMessage = useSelector((state) => state.MembersReducer.submitMessage);

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        orientation="horizontal"
        className="d-flex align-items-end flex-wrap mb-3 shadow"
      >
        {steps.map((label) => (
          <Step key={label} className="mt-3">
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              Formulário enviado <i className="fas fa-check-circle text-success"></i>
            </Typography>
            <Button onClick={handleReset}>Resetar</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            {submitMessage &&
              <div className="mb-3 bg-red rounded p-2">
                <small className="text-white text-capitalize">{submitMessage}</small>
              </div>
            }
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Voltar
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary" onClick={handleSubmitData}>
                  Concluído
                </Button>
              ) : (
                <Button variant="contained" onClick={handleSubmitForm} color="primary" type="submit">
                  Próximo
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

HorizontalLabelPositionBelowStepper.propTypes = {
  steps: PropTypes.array.isRequired,
  getStepContent: PropTypes.func.isRequired,
};

export default HorizontalLabelPositionBelowStepper;
