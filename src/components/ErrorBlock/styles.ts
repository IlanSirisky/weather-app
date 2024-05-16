import styled from "styled-components";
import { flexColumn } from "../../styles";

export const StyledErrorBlock = styled(flexColumn)`
  background-color: #f0d9e5;
  padding: 1rem;
  border-radius: 20px;
  margin: 10px;
  color: #890b35;
  gap: 1rem;
  text-align: left;
  width: 40vw;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 75vw;
  }

  p {
    font-size: 1rem;
    margin: 0;
    overflow: auto;
  }
`;

export const ErrorBlockTitle = styled.h2`
  color: inherit;
  font-size: 1.25rem;
  margin: 0;
`;
