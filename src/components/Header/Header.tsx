import React from "react";
import { StyledHeader, StyledTitle } from "./styles";
import weatherIcon from "../../assets/weather-icon.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img
        src={weatherIcon}
        alt="Weather icon"
        height="40px"
      />
      <StyledTitle>Weather App</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
