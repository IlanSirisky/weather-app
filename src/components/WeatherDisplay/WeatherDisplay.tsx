import React from "react";
import { WeatherData } from "../../types/weather";

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div>
      <h3>
        Current Weather in {data.location.name}, {data.location.country}
      </h3>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Description: {data.current.condition.text}</p>
    </div>
  );
};

export default WeatherDisplay;
