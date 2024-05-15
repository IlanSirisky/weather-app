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

  let content = isUserLocation ? <CircularProgress /> : null;

  if (isLoading) {
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
    content = (
      <WeatherDisplayContainer>
        <StyledImage
          src={data.current.condition.icon}
          alt={data.current.condition.text}
        />
        <WeatherDisplayContent>
          <StyledTemp>{data.current.temp_c}°C</StyledTemp>
          <StyledDescription>{data.current.condition.text}</StyledDescription>
          <StyledLocation>
            <StyledParagraph>{data.location.name},</StyledParagraph>
            <StyledParagraph>
              <strong>{data.location.country}</strong>
            </StyledParagraph>
          </StyledLocation>
          <StyledParagraph>{data.location.localtime}</StyledParagraph>
          <ExtraDetailsWrapper>
            <ExtraDetails
              image={humidityIcon}
              data={data.current.humidity + "%"}
              description="Humidity"
            />
            <ExtraDetails
              image={windIcon}
              data={data.current.wind_kph + " km\\h"}
              description="Wind Speed"
            />
          </ExtraDetailsWrapper>
        </WeatherDisplayContent>
      </WeatherDisplayContainer>
    );
  }

  return <div>{content}</div>;
};

export default WeatherDisplay;
