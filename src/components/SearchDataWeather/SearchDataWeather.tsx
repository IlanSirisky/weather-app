import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import useWeatherData from "../../hooks/useWeatherData";

const SearchDataWeather: React.FC = () => {
  const { searchTerm } = useContext(SearchContext);
  const { isLoading, error, isError, data } = useWeatherData(searchTerm);

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

export default SearchDataWeather;