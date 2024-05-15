import React from "react";
import { CircularProgress } from "@mui/material";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { fetchWeather } from "../../utils/http";
import { useQuery } from "@tanstack/react-query";
import ExtraDetails from "../ExtraDetails/ExtraDetails";
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
import humidityIcon from "../../assets/humidity.svg";
import windIcon from "../../assets/wind-icon.svg";

interface WeatherDisplayProps {
  location: string;
  isUserLocation?: boolean;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({
  location,
  isUserLocation = false,
}) => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["weather", { search: location }],
    queryFn: ({ signal }) => fetchWeather({ signal, searchTerm: location }),
    enabled: location !== "",
  });

  let content;

  if (isUserLocation || isLoading) {
    content = <CircularProgress />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error?.message || "Failed to fetch weather"}
      />
    );
  }

  if (data) {
    const { current, location: locationData } = data;
    const { condition, temp_c, humidity, wind_kph } = current;
    const { name, country, localtime } = locationData;
    content = (
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
  }

  return <>{content}</>;
};

export default WeatherDisplay;
