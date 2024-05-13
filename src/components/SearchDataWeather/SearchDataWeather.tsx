import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

const SearchDataWeather: React.FC = () => {
  const { searchTerm } = useContext(SearchContext);

  return (
    <div>
      <WeatherDisplay location={searchTerm} />
    </div>
  );
};

export default SearchDataWeather;