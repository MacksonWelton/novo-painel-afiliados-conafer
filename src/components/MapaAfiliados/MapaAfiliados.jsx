import React, {useEffect, useState} from "react";
import { Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";
import GoogleMapsAfiliados from "./GoogleMapsAfiliado";
import { getMembers } from "redux/actions/Membros";
import googleMapsCoordinates from "../../utils/googleMapsCoordinates";

const MapaAfiliados = () => {
  const dispatch = useDispatch();

  const {usersPFAffiliation, usersPJAffiliation} = useSelector(state => state.UsersAffiliationReducer);
  const members = useSelector((state) => state.MembersReducer.members);

  useEffect(() => {
    dispatch(getUsersAffiliation());
    dispatch(getMembers());
}, []);

  const [users, setUsers] = useState({
    usersPFAffiliation: "",
    usersPJAffiliation: ""
  });

  if (users.usersPFAffiliation === "" && usersPFAffiliation[0]) {

    setUsers({...users, usersPFAffiliation: usersPFAffiliation.map((affiliate) => {
      const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
      affiliate.coordinates = googleMapsCoordinates(address);
      return affiliate;
    })});

  } else if (users.usersPJAffiliation === "" && usersPJAffiliation[0]) {
    setUsers({...users, usersPJAffiliation: usersPJAffiliation.map((affiliate) => {
      const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
      affiliate.coordinates = googleMapsCoordinates(address);
      return affiliate;
    })});
  }

  return (
    <Card className="bg-gradient-default shadow">
      <CardBody>
        <GoogleMapsAfiliados users={users} members={members}/>
      </CardBody>
    </Card>
  );
};

export default MapaAfiliados;
