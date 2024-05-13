import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import useFetchUserLocation from "../../hooks/useFetchUserLocation";

const UserLocationWeather: React.FC = () => {
  const userLocation = useFetchUserLocation();

  return (
    <div>
      <p>Your current location:</p>
      <WeatherDisplay location={userLocation} isUserLocation={true} />
    </div>
  );
};

export default UserLocationWeather;