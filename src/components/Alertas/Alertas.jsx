import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AlertSyled } from "./Styles";
import { setVisibleAlert } from "redux/actions/Alertas";

const Alertas = ({ alerts }) => {
  const dispatch = useDispatch();

  const visible = useSelector((state) => state.AlertsReducer.alerts.show);

  const [data, setData] = useState(null);

  setTimeout(() => {
    dispatch(setVisibleAlert(false));
  }, 9000)

  useEffect(() => {
    const onDismiss = () => dispatch(setVisibleAlert(false));
    switch (alerts.status) {
      case 200:
        setData(
          <AlertSyled color="success" isOpen={visible} toggle={onDismiss}>
            {alerts.message}
          </AlertSyled>
        );
        break;
      case 201:
        setData(
          <AlertSyled color="success" isOpen={visible} toggle={onDismiss}>
            {alerts.message}
          </AlertSyled>
        );
        break;
      case 400:
        setData(
          <AlertSyled color="danger" isOpen={visible} toggle={onDismiss}>
            {alerts.message}
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
  }, [alerts.status, alerts.message, visible, dispatch]);

  return <>{data}</>;
};

export default Alertas;
