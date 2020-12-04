import React, { useEffect } from "react";

import { getGeocode, getLatLng } from "use-places-autocomplete";

import "@reach/combobox/styles.css";

const GoogleMapsCoordinates = ({ input, setCoordinatesth }) => {
  useEffect(() => {
    if (input.address) {
      getGeocode({ address: input.address })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          setCoordinatesth([lat, lng]);
        })
        .catch((error) => {
          console.log("😱 Error: ", error);
        });
    }
  }, [input.address, setCoordinatesth]);

  return <></>;
};

export default GoogleMapsCoordinates;