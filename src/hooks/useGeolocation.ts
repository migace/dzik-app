import { useState } from "react";

export const useGeolocation = () => {
  const [coordinates, setCoordinates] = useState({
    longitude: 0,
    latitude: 0,
    accuracy: 0,
  });

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (pos: any) => {
    const { latitude, longitude, accuracy } = pos.coords;

    setCoordinates({ longitude, latitude, accuracy });
  };

  const error = (err: any) =>
    console.warn(`ERROR(${err.code}): ${err.message}`);

  navigator.geolocation.getCurrentPosition(success, error, options);

  return coordinates;
};
