import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar";
import AdminFooter from "components/Footers/AdminFooter";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes";

import Logo from "../assets/img/brand/sistemalogo.png";
import Alertas from "components/Alertas/Alertas";
import { connect } from "react-redux";
import { setAlert } from "redux/actions/Alerts";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.location.pathname,
    };
  }

  componentDidUpdate(e) {
    if (this.props.location.pathname !== this.state.path) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainContent.scrollTop = 0;
      this.props.setAlert();
      this.setState({ path: this.props.location.pathname });
    }
  }

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return prop.views.map((item, index) => {
          return (
            <Route
              path={item.layout + item.path}
              component={item.component}
              key={index}
            />
          );
        });
      } else if (prop.layout === "/admin" && !prop.collapse) {
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

  getBrandText = (path) => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      } else if (routes[i].collapse) {
        for (let x = 0; x < routes[i].views.length; x++) {
          if (
            this.props.location.pathname.indexOf(
              routes[i].views[x].layout + routes[i].views[x].path
              ) !== -1
              ) {
            return routes[i].views[x].name;
          }
        }
      }
    }
    return "Página não encontrada.";
  };

  render() {
    return (
      <>
        <Alertas alerts={this.props.alerts} />
        <Sidebar
          {...this.props}
          routes={routes}
          logo={{
            innerLink: "/admin/index",
            imgSrc: Logo,
            imgAlt: "...",
          }}
        />
        <div className="main-content" ref="mainContent">
          <AdminNavbar
            {...this.props}
            brandText={this.getBrandText(this.props.location.pathname)}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/admin/index" />
          </Switch>
          <Container fluid>
            <AdminFooter />
          </Container>
        </div>
      </>
    );
  }
}

const mapStateTopProps = (state) => ({
  alerts: state.AlertsReducer.alerts,
});

const mapDispatchToProps = (dispatch) => ({
  setAlert: () => dispatch(setAlert("", "", false)),
});

export default connect(mapStateTopProps, mapDispatchToProps)(Admin);
