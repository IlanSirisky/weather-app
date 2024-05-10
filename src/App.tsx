import { useEffect, useState } from "react";
import axios from "axios";
import { Weather } from "./types/weather";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);

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
      <Header />
      {weather ? (
        <>
          <h2>Location: {weather.location.name}</h2>
          <p>Temperature: {weather.current.temp_c}°C</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <p>SearchBar</p>
      <Button text="Search" onClick={() => console.log("clicked")} />
      <ul>
        <li>History item 1</li>
        <li>History item 2</li>
        <li>History item 3</li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
