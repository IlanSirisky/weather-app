import { useEffect, useState } from "react";

const useFetchUserLocation = () => {
  const [userLocation, setUserLocation] = useState<string>("");

  useEffect(() => {
    const storedUserLocation = localStorage.getItem("userLocation");
    if (!storedUserLocation) {
      const getUserLocation = () => {
        // console.log("Fetching user location");
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              // console.log("Location fetched");
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

      getUserLocation();
    } else {
      setUserLocation(storedUserLocation);
    }
  }, []);

  return userLocation;
};

export default useFetchUserLocation;
