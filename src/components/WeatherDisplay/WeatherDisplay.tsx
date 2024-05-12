import React from "react";
import useWeatherData from "../../hooks/useWeatherData";

interface WeatherDisplayProps {
  location: string;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ location }) => {
  const { isLoading, error, isError, data } = useWeatherData(location);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && (
        <>
          <p>An error occurred</p>
          <p>{error?.message || "Failed to fetch the weather"}</p>
        </>
      )}
      {data && (
        <div>
          <h3>
            Current Weather in {data.location.name}, {data.location.country}
          </h3>
          <p>Temperature: {data.current.temp_c}°C</p>
          <p>Description: {data.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
