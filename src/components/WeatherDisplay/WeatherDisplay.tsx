import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../../utils/http";
import { SearchContext } from "../SearchContext";

const WeatherDisplay: React.FC = () => {
  const { searchTerm } = useContext(SearchContext);
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["weather", { search: searchTerm }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm }),
    enabled: searchTerm !== "",
  });

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (isError) {
    content = (
      <>
        <p>An error occured</p>
        <p>{error.message || "Failed to fetch the weather"}</p>
      </>
    );
  }

  if (data) {
    content = (
      <>
        <h2>Weather Display</h2>
        <p>Location: {data.location.name}</p>
        <p>Temperature: {data.current.temp_c}°C</p>
        <p>Description: {data.current.condition.text}</p>
      </>
    );
  }

  return <div>{content}</div>;
};

export default WeatherDisplay;
