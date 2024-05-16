import axios, { AxiosRequestConfig } from "axios";
import { WeatherData } from "../types/weather";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

// Fetch weather data from WeatherAPI.com
export const fetchWeather = async ({
  signal,
  searchTerm,
}: {
  signal: AbortSignal;
  searchTerm: string;
}) => {
  try {
    // Set the request parameters
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
