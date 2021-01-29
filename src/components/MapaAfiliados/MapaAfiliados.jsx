import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Button } from "reactstrap";
import googleMapsCoordinates from "../../utils/googleMapsCoordinates";

import fafer from "../../assets/img/icons/fafer.svg";
import mapMarkerOrange from "../../assets/img/icons/map-marker-orange.svg";
import mapMarkerBlue from "../../assets/img/icons/map-marker-blue.svg";
import ModalInfo from "./ModalInfo";
import ModalMembro from "../ModalMembro/ModalMembro";
import { useDispatch, useSelector } from "react-redux";
import { getMemberById } from "redux/actions/Membros";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -15.721387,
  lng: -48.0774459,
};

const MapaAfiliados = ({
  allotments,
  usersPFAffiliation,
  usersPJAffiliation,
}) => {
  const dispatch = useDispatch();

  const [users, setUsers] = useState({
    usersPFAffiliation: "",
    usersPJAffiliation: "",
  });

  const member = useSelector((state) => state.MembersReducer.member);

  const [map, setMap] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyATOGn8kFwAhA95n5Bkgxqf3MW53LNLJXw",
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

  const handleClickOnMarker = (e, memberInfo, allotmentInfo) => {
    setMap({
      ...map,
      lat: Number(e.latLng.lat().toFixed(7)),
      lng: Number(e.latLng.lng().toFixed(7)),
      memberInfo,
      allotmentInfo
    });
  };

  const addAddressInUsersPFAffiliation = async () => {
    setUsers({
      ...users,
      usersPFAffiliation: await Promise.all(usersPFAffiliation.map(async (affiliate) => {
        const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
        affiliate.coordinates = await googleMapsCoordinates(address);
        return affiliate;
      })),
    });
  }

  const AddAddressInUsersPJAffiliation = async () => {
    setUsers({
      ...users,
      usersPJAffiliation: await Promise.all(usersPJAffiliation.map(async (affiliate) => {
        const address = `${affiliate.address} ${affiliate.city} ${affiliate.state}`;
        affiliate.coordinates = await googleMapsCoordinates(address);
        return affiliate;
      })),
    });
  }

  if (users.usersPFAffiliation === "" && usersPFAffiliation[0]) {
    addAddressInUsersPFAffiliation();
  } else if (users.usersPJAffiliation === "" && usersPJAffiliation[0]) {
    AddAddressInUsersPJAffiliation();
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={4}
      onLoad={onMapLoad}
      onClick={() => setMap(null)}
    >
      {allotments &&
        allotments.map((allotment, i) => {

          if (!member) {
            dispatch(getMemberById(allotment.member));
          }

          return (
            <Marker
              key={i}
              position={{
                lat: Number(allotment.coordinates.split(",")[0]),
                lng: Number(allotment.coordinates.split(",")[1]),
              }}
              icon={{
                url: mapMarkerBlue,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(26, 35),
              }}
              onClick={(e) => {
                handleClickOnMarker(e, member, allotment);
              }}
            />
          );
        })}
      {users.usersPFAffiliation &&
        users.usersPFAffiliation.map((user, i) => (
          <Marker
            key={i}
            position={{
              lat: Number(user.coordinates[0]),
              lng: Number(user.coordinates[1]),
            }}
            icon={{
              url: mapMarkerOrange,
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
          <div
            className="bg-gradient-default rounded shadow p-3 text-white"
            style={{ minWidth: "250px" }}
          >
            <h3 className="text-white">Informações</h3>
            <hr className="border-white my-2" />
            <p className="m-0">
              <strong>Nome:</strong> {map.memberInfo.name}
            </p>
            <p className="m-0">
              <strong>Telefone:</strong>{" "}
              {map.memberInfo.contact_phone ? map.memberInfo.contact_phone : map.memberInfo.phone}
            </p>
            <p className="mb-3">
              <strong>Email:</strong> {map.memberInfo.email}
            </p>
            {map.allotmentInfo && (
              <>
                <Button
                  className="my-2"
                  color="primary"
                  onClick={() => setOpenModal(!openModal)}
                >
                  Mais Informações
                </Button>
                <Button
                  className="my-2"
                  color="primary"
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  Perfil
                </Button>
                <ModalInfo
                  map={map}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
                <ModalMembro
                  open={openProfile}
                  setOpen={setOpenProfile}
                  member={map.memberInfo}
                />
              </>
            )}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

MapaAfiliados.protoTypes = {
  members: PropTypes.array,
  usersPFAffiliation: PropTypes.array,
  usersPJAffiliation: PropTypes.array,
};

MapaAfiliados.defaultProps = {
  usersPFAffiliation: [],
  usersPJAffiliation: [],
};

export default MapaAfiliados;
