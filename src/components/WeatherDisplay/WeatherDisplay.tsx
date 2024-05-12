import React from 'react';
import { WeatherData } from "../../types/weather";

interface WeatherDisplayProps {
    currentWeather : WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ currentWeather }) => {
    return (
        <div>
            <h2>Weather Display</h2>
            <p>Location: {currentWeather.location.name}</p>
            <p>Temperature: {currentWeather.current.temp_c}°C</p>
            <p>Description: {currentWeather.current.condition.text}</p>
        </div>
    );
};

export default WeatherDisplay;