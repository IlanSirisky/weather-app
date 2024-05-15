import styled from "styled-components";
import { flexColumn, flexRow } from "../../styles";

export const WeatherDisplayContainer = styled(flexRow)`
  justify-content: center;
  align-items: center;
  border: 1px solid #007bff;
  width: 40vw;
  border-radius: 20px;
  background-color: aliceblue;
  flex-wrap: wrap;
`;

export const WeatherDisplayContent = styled(flexColumn)`
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 20vh;
`;

export const StyledTemp = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

export const StyledDescription = styled.p`
  font-size: 1rem;
  color: gray;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const StyledLocation = styled(flexRow)`
  justify-content: center;
  flex-wrap: wrap;
`;

export const ExtraDetailsWrapper = styled(flexRow)`
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

export const StyledParagraph = styled.p`
  font-size: 0.8rem;
  margin: 5px;
`;
