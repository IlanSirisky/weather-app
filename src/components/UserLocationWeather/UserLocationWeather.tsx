import React from "react";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import useFetchUserLocation from "../../hooks/useFetchUserLocation";
import useWeatherData from "../../hooks/useWeatherData";

const UserLocationWeather: React.FC = () => {
  const userLocation = useFetchUserLocation();
  const { isLoading, error, isError, data } = useWeatherData(userLocation);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>An error occurred</p>
          <p>{error?.message || "Failed to fetch the weather"}</p>
        </>
      )}
      {data && <WeatherDisplay data={data} />}
    </div>
  );
};

export default UserLocationWeather;