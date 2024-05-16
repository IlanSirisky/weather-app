import React from "react";
import {
  WeatherDisplayContainer,
  WeatherDisplayContent,
  StyledImage,
  StyledTemp,
  StyledDescription,
  ExtraDetailsWrapper,
  StyledParagraph,
  StyledLocation,
} from "./styles";
import ExtraDetails from "../ExtraDetails/ExtraDetails";
import humidityIcon from "../../assets/humidity.svg";
import windIcon from "../../assets/wind-icon.svg";
import { WeatherData } from "../../types/weather";

interface WeatherInfoPanelProps {
  data: WeatherData;
}

const WeatherInfoPanel: React.FC<WeatherInfoPanelProps> = ({ data }) => {
  const { current, location: locationData } = data;
  const { condition, temp_c, humidity, wind_kph } = current;
  const { name, country, localtime } = locationData;

  return (
    <WeatherDisplayContainer>
      <StyledImage src={condition.icon} alt={condition.text} />
      <WeatherDisplayContent>
        <StyledTemp>{temp_c}°C</StyledTemp>
        <StyledDescription>{condition.text}</StyledDescription>
        <StyledLocation>
          <StyledParagraph>{name},</StyledParagraph>
          <StyledParagraph>
            <strong>{country}</strong>
          </StyledParagraph>
        </StyledLocation>
        <StyledParagraph>{localtime}</StyledParagraph>
        <ExtraDetailsWrapper>
          <ExtraDetails
            image={humidityIcon}
            data={`${humidity}%`}
            description="Humidity"
          />
          <ExtraDetails
            image={windIcon}
            data={`${wind_kph} km/h`}
            description="Wind Speed"
          />
        </ExtraDetailsWrapper>
      </WeatherDisplayContent>
    </WeatherDisplayContainer>
  );
};

export default WeatherInfoPanel;
