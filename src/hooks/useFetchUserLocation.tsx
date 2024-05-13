import { useState } from "react";

const useFetchUserLocation = () => {
  const [userLocation, setUserLocation] = useState<string>(
    localStorage.getItem("userLocation") || ""
  );

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `${position.coords.latitude},${position.coords.longitude}`;
          setUserLocation(coords);
          localStorage.setItem("userLocation", coords);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  if (!userLocation) {
    getUserLocation();
  }

  return userLocation;
};

export default useFetchUserLocation;
