import axios, { AxiosRequestConfig } from "axios";
import { WeatherData } from "../types/weather";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

export const fetchWeather = async ({
  signal,
  searchTerm,
}: {
  signal: AbortSignal;
  searchTerm: string;
}) => {
  try {
    const params: AxiosRequestConfig = {
      params: {
        key: apiKey,
        q: searchTerm,
      },
      signal,
    };

    const response = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      params
    );
    const weather: WeatherData = response.data;
    return weather;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};
