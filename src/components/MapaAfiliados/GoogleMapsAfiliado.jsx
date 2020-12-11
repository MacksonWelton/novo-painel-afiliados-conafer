import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapMarkerRed from "../../assets/img/icons/map-marker-red.svg";
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

const GoogleMapsAfiliados = ({ users, members }) => {
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

  return (
    <>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={4}
        onLoad={onMapLoad}
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
                url: mapMarkerRed,
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
                url: mapMarkerBlue,
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
                <strong>Nome:</strong> {map.info.name_initials ? map.info.name_initials : map.info.name}
              </p>
              <p className="m-0">
                <strong>Telefone:</strong> {map.info.phone}
              </p>
              <p className="m-0">
                <strong>Email:</strong> {map.info.email}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );
};

export default GoogleMapsAfiliados;
