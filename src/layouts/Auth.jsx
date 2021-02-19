import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import AuthNavbar from "components/Navbars/AuthNavbar";
import AuthFooter from "components/Footers/AuthFooter";

import routes from "routes";

import { connect } from "react-redux";

import { setAlert } from "../redux/actions/Alerts";
import Alertas from "components/Alertas/Alertas";

class Auth extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      path: this.props.location.pathname
    }
  }

  componentDidMount() {
    document.body.classList.add("bg-default");
  }

  componentWillUnmount() {
    document.body.classList.remove("bg-default");
  }

  componentDidUpdate() {
    if (this.props.location.pathname !== this.state.path) {
      this.props.setAlert()
      this.setState({path: this.props.location.pathname})
    }
  }

  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {

    return (
      <>
        <div className="main-content">
          <AuthNavbar/>
          <div className="header bg-gradient-info py-7 py-lg-8">
            <Container>
              <div className="header-body text-center mb-5">
                <Row className="justify-content-center">
                  <Col>
                    <h1 className="text-white">Seja Bem-Vindo(a)!</h1>
                  </Col>
                </Row>
              </div>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-default"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </div>
          {/* Page content */}
          <Container className="mt--8 pb-5">
          <Alertas alerts={this.props.alerts}/>
            <Row className="justify-content-center">
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="*" to="/auth/login" />
              </Switch>
            </Row>
          </Container>
        </div>
        <AuthFooter />
      </>
    );
  }
}

const mapStateTopProps = (state) => ({
  alerts: state.AlertsReducer.alerts
})

const mapDispatchToProps = (dispatch) => ({
  setAlert: () => dispatch(setAlert("", "", false))
});

export default connect(mapStateTopProps, mapDispatchToProps)(Auth);
