import React from "react";
import Icon from "../Icon/Icon";
import { StyledHeader, StyledTitle } from "./styles";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Icon
        src="https://cdn-icons-png.flaticon.com/512/2204/2204346.png"
        alt="Weather icon"
        height="40px"
      />
      <StyledTitle>Weather App</StyledTitle>
    </StyledHeader>
  );
};

export default Header;
