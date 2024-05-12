import { useQuery } from "@tanstack/react-query";
import { fetchWeather } from "../utils/http";

const useWeatherData = (location: string) => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["weather", { search: location }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm: location }),
    enabled: location !== "",
  });

  return { isLoading, error, isError, data };
};

export default useWeatherData;
