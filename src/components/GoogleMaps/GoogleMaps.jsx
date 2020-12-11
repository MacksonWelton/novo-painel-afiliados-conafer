import React, { useState, useCallback, useRef } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { useDispatch } from "react-redux";

import placeIcon from "../../assets/img/icons/58889219bc2fc2ef3a1860aa.png";

import {
  setCurrentLatpointAction,
  setCurrentLonpointAction,
} from "../../redux/actions/GoogleMaps";

const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -15.721387,
  lng: -48.0774459,
};

const GoogleMaps = ({ coordinatesth, iconColor }) => {
  const dispatch = useDispatch();

  const [map, setMap] = useState({
    lat: center.lat,
    lng: center.lng,
  });

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

  const setCurrentLatPoint = (data) => {
    dispatch(setCurrentLatpointAction(data));
  };

  const setCurrentLonpoint = (data) => {
    dispatch(setCurrentLonpointAction(data));
  };

  const saveCurrentLatLong = (e) => {
    setCurrentLatPoint(e.latLng.lat().toFixed(7));
    setCurrentLonpoint(e.latLng.lng().toFixed(7));
    setMap({
      ...map,
      lat: e.latLng.lat().toFixed(7),
      lng: e.latLng.lng().toFixed(7),
    });
  };

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={5}
      onLoad={onMapLoad}
      onClick={(e) => saveCurrentLatLong(e)}
    >
      <Marker
        position={{
          lat: Number(coordinatesth[0]),
          lng: Number(coordinatesth[1]),
        }}
        icon={{
          url: placeIcon,
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(15, 15),
          scaledSize: new window.google.maps.Size(26, 35),
        }}
        draggable={true}
        onDragEnd={(e) => {
          saveCurrentLatLong(e);
        }}
      />
    </GoogleMap>
  );
};

export default GoogleMaps;
