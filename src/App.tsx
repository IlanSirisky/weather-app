import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from './types/weather';
const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

function App() {
  const [weather , setWeather] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json",
          {
            params: {
              key: apiKey,
              q: "tel aviv",
            },
          }
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <h1>Weather App</h1>
      </header>
      {weather ? (
        <>
          <h2>Location: {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <p>SearchBar</p>
      <button>Search</button>
      <ul>
        <li>History item 1</li>
        <li>History item 2</li>
        <li>History item 3</li>
      </ul>
    </div>
  );
}

export default App;
