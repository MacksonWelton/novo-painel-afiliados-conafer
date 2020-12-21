import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { Button } from "reactstrap";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    orientation: "vertical",
  },
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
}) {
  const classes = useStyles();

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        activeStep={activeStep}
        className="d-flex flex-wrap p-5"
        alternativeLabel
      >
        {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Resetar</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Voltar
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary">
                  Concluído
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
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
