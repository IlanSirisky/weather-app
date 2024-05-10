import React from "react";
import Icon from "./Icon/Icon";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 20px;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Icon
        src="https://cdn-icons-png.flaticon.com/512/2204/2204346.png"
        alt="Weather icon"
        height="40px"
      />
      <p style={{ marginLeft: "10px" }}>Weather App</p>
    </StyledHeader>
  );
};

export default Header;
