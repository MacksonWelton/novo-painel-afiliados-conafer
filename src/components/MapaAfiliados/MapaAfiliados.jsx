import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Card, CardBody, CardHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUsersAffiliation } from "redux/actions/UsuariosAfiliacao";
import { getMembers } from "redux/actions/Membros";
import googleMapsCoordinates from "../../utils/googleMapsCoordinates";

import fafer from "../../assets/img/icons/fafer.svg";
import mapMarkerGreen from "../../assets/img/icons/map-marker-green.svg";
import mapMarkerBlue from "../../assets/img/icons/map-marker-blue.svg";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -15.721387,
  lng: -48.0774459,
};

const MapaAfiliados = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersAffiliation());
    dispatch(getMembers());
  }, [dispatch]);

  const { usersPFAffiliation, usersPJAffiliation } = useSelector(
    (state) => state.UsersAffiliationReducer
  );

  const members = useSelector((state) => state.MembersReducer.members);

  const [users, setUsers] = useState({
    usersPFAffiliation: "",
    usersPJAffiliation: "",
  });

  const [map, setMap] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDwNWt6P3SzQwf4qlUenPgLpD0JPI6XCZc",
    libraries,
  });

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <p style={{ color: "white" }}>Erro</p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <p style={{ color: "white" }}>Carregando...</p>
      </div>
    );
  }

  const handleClickOnMarker = (e, info) => {
    setMap({
      ...map,
      lat: Number(e.latLng.lat().toFixed(7)),
      lng: Number(e.latLng.lng().toFixed(7)),
      info,
    });
  };

  if (users.usersPFAffiliation === "" && usersPFAffiliation[0]) {
    setUsers({
      ...users,
      usersPFAffiliation: usersPFAffiliation.map((affiliate) => {
        const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
        affiliate.coordinates = googleMapsCoordinates(address);
        return affiliate;
      }),
    });
  } else if (users.usersPJAffiliation === "" && usersPJAffiliation[0]) {
    setUsers({
      ...users,
      usersPJAffiliation: usersPJAffiliation.map((affiliate) => {
        const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
        affiliate.coordinates = googleMapsCoordinates(address);
        return affiliate;
      }),
    });
  }

  return (
    <Card className="bg-gradient-default shadow">
      <CardBody>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={4}
          onLoad={onMapLoad}
          onClick={() => setMap(null)}
        >
          {" "}
          {members &&
            members.map((member, i) => (
              <Marker
                key={i}
                position={{
                  lat: Number(member.lot.coordinates.lat),
                  lng: Number(member.lot.coordinates.lng),
                }}
                icon={{
                  url: mapMarkerBlue,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(26, 35),
                }}
                onClick={(e) => handleClickOnMarker(e, member)}
              />
            ))}
          {users.usersPFAffiliation &&
            users.usersPFAffiliation.map((user, i) => (
              <Marker
                key={i}
                position={{
                  lat: Number(user.coordinates[0]),
                  lng: Number(user.coordinates[1]),
                }}
                icon={{
                  url: mapMarkerGreen,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(26, 35),
                }}
                onClick={(e) => handleClickOnMarker(e, user)}
              />
            ))}
          {users.usersPJAffiliation &&
            users.usersPJAffiliation.map((user, i) => (
              <Marker
                key={i}
                position={{
                  lat: Number(user.coordinates[0]),
                  lng: Number(user.coordinates[1]),
                }}
                icon={{
                  url: fafer,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(26, 35),
                }}
                onClick={(e) => handleClickOnMarker(e, user)}
              />
            ))}
          {map && (
            <InfoWindow
              position={{ lat: map.lat, lng: map.lng }}
              onCloseClick={() => {
                setMap(null);
              }}
            >
              <div className="bg-gradient-default rounded shadow p-3 text-white">
                <h3 className="text-white">Informações de Membro</h3>
                <hr className="border-white my-2" />
                <p className="m-0">
                  <strong>Nome:</strong>{" "}
                  {map.info.name_initials
                    ? map.info.name_initials
                    : map.info.name}
                </p>
                <p className="m-0">
                  <strong>Telefone:</strong> {map.info.phone}
                </p>
                <p className="mb-3">
                  <strong>Email:</strong> {map.info.email}
                </p>
                {map.info.name ? (
                  <Card>
                    <CardHeader className="bg-gray">
                      <h3>Geomtria do Lote</h3>
                    </CardHeader>
                    <CardBody>
                      <img
                        className="w-50"
                        src={map.info.lot.lot_geometry.before}
                        alt=""
                      />
                      <img
                        className="w-50"
                        src={map.info.lot.lot_geometry.after}
                        alt=""
                      />
                    </CardBody>
                  </Card>
                ) : null}
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </CardBody>
    </Card>
  );
};

export default MapaAfiliados;
