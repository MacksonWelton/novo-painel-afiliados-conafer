import Geocode from "react-geocode";

const googleMapsCoordinates = (data) => {

  let newAddress;
  const coordinates = [];

  Geocode.setApiKey("AIzaSyBchWYtE1JHWWXsHOxoSgWsBg26z7j3amA");
  Geocode.setLanguage("pt-BR");

  const latLng = (lat, lng) => {
    Geocode.fromLatLng(lat, lng).then(
      (response) => {
        const address = response.results[0].formatted_address;
        newAddress = address;
      },
      (error) => {
        console.error("Não foi possível encontrar a lat e long do endereço.", error);
      }
    );
  };

  if (data !== newAddress && data !== "") {
    Geocode.fromAddress(data).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        coordinates.push(lat, lng);
        latLng(lat, lng);
      },
      (error) => {
        console.error("Não foi possível encontrar o endereço.", error);
      }
    );
  }


  return coordinates;
};

export default googleMapsCoordinates;