import React, { useContext } from "react";
import { CircularProgress } from "@mui/material";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { fetchWeather } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import WeatherInfoPanel from "../WeatherInfoPanel/WeatherInfoPanel";
import { SearchContext } from "../SearchContext";

interface WeatherDisplayProps {
  location: string;
  isUserLocation?: boolean;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  location,
  isUserLocation = false,
}) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["weather", { search: location }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm: location }),
    enabled: location !== "",
  });
  const {searchTerm} = useContext(SearchContext);
  let content;

  if (isUserLocation || isLoading) {
    content = <CircularProgress />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Hmmm... 🤔"
        message={`We couldn't find any matches for "${searchTerm}"`}
        description="Double check your search for any typos - or try a different search term."
      />
    );
  }

  if (data) {
    content = <WeatherInfoPanel data={data} />;
  }

  return <>{content}</>;
};

export default WeatherDisplay;
