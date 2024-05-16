import { useEffect, useState, useCallback } from "react";

const useFetchUserLocation = () => {
  const [userLocation, setUserLocation] = useState<string>("");

  // Fetch the user's location using the Geolocation API from the browser
  const getUserLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Store the user's location in the state and local storage
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
  }, []);

  // Fetch the user's location on component mount
  useEffect(() => {
    const storedUserLocation = localStorage.getItem("userLocation");
    if (storedUserLocation) {
      setUserLocation(storedUserLocation);
    } else {
      getUserLocation();
    }
  }, [getUserLocation]);

  return userLocation;
};

export default useFetchUserLocation;
