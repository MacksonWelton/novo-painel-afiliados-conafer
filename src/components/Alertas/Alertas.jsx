import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertSyled } from "./Styles";
import { setVisibleAlert } from "redux/actions/Alertas";
import { useHistory } from "react-router-dom";
import { setAuthentication } from "../../redux/actions/Login";
import { setAlert } from "redux/actions/Alertas";

const Alertas = ({ alerts }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const visible = useSelector((state) => state.AlertsReducer.alerts.show);

  const [data, setData] = useState(null);

  useEffect(() => {

    const onDismiss = () => {
      
      if (alerts.status === 401) {
        localStorage.clear();
        dispatch(setAuthentication(false));
        history.push("/");
      }
      
      dispatch(setVisibleAlert(false));
      dispatch(setAlert(null, null, false));
    };
  
    setTimeout(() => {
      onDismiss();
    }, 5500);

    switch (alerts.status) {
      case 200:
        setData(
          <AlertSyled color="success" isOpen={visible} toggle={onDismiss}>
            <h3 className="text-white">{alerts.message}</h3>
          </AlertSyled>
        );
        break;
      case 201:
        setData(
          <AlertSyled color="success" isOpen={visible} toggle={onDismiss}>
            <h3 className="text-white">{alerts.message}</h3>
          </AlertSyled>
        );
        break;
      case 400:
        setData(
          <AlertSyled color="danger" isOpen={visible} toggle={onDismiss}>
            <h3 className="text-white">{alerts.message}</h3>
          </AlertSyled>
        );
        break;
      case 401:
        setData(
          <AlertSyled color="danger" isOpen={visible} toggle={onDismiss}>
            {alerts.message}
          </AlertSyled>
        );
        break;
      default:
        setData(null);
    }
  }, [alerts.status, alerts.message, visible, dispatch, history]);

  return <>{data}</>;
};

export default Alertas;
