import React from "react";
import { CircularProgress } from "@mui/material";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { fetchWeather } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";

interface WeatherDisplayProps {
  location: string;
  isUserLocation?: boolean;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ location, isUserLocation = false }) => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["weather", { search: location }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm: location }),
    enabled: location !== "",
  });

  let content = isUserLocation ? <CircularProgress /> : null;

  if (isLoading) {
    content = <CircularProgress />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error?.message || "Failed to fetch weather"}
      />
    );
  }

  if (data) {
    content = (
      <div>
        <h3>
          Current Weather in {data.location.name}, {data.location.country}
        </h3>
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Description: {data.current.condition.text}</p>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default WeatherDisplay;
