import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import useFetchUserLocation from "../../hooks/useFetchUserLocation";
import {StyledWeatherWrapper} from "./styles";

const WeatherWrapper: React.FC = () => {
  const userLocation = useFetchUserLocation();
  const { searchTerm } = useContext(SearchContext);

  return (
    <StyledWeatherWrapper $search={searchTerm}>
      <WeatherDisplay location={searchTerm} />
      <WeatherDisplay location={userLocation} isUserLocation={true} />
    </StyledWeatherWrapper>
  );
};

export default WeatherWrapper;
